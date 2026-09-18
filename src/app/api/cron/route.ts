import { NextRequest, NextResponse } from "next/server";
import { fetchLeetCodeStats } from "@/lib/stats/leetcode";
import { fetchGitHubStats } from "@/lib/stats/github";
import { fetchTryHackMeStats } from "@/lib/stats/tryhackme";
import { addSnapshotAsync } from "@/lib/stats/snapshot";

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const cronHeader = req.headers.get("x-vercel-cron");
  const cronSecret = process.env.CRON_SECRET;

  // Enforce CRON_SECRET validation if configured, or require Vercel Cron header
  if (cronSecret) {
    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  } else if (!cronHeader && process.env.NODE_ENV === "production") {
    // In production without CRON_SECRET configured, require x-vercel-cron header
    return NextResponse.json({ error: "Unauthorized cron execution" }, { status: 401 });
  }

  try {
    const [leetcode, github, tryhackme] = await Promise.all([
      fetchLeetCodeStats(),
      fetchGitHubStats(),
      fetchTryHackMeStats(),
    ]);

    const todayStr = new Date().toISOString().split("T")[0];
    const snapshot = {
      date: todayStr,
      timestamp: Date.now(),
      leetcodeSolved: leetcode.totalSolved,
      githubRepos: github.totalRepos,
      thmRooms: parseInt(tryhackme.thmRooms) || 96,
    };

    const updated = await addSnapshotAsync(snapshot);

    return NextResponse.json({
      success: true,
      message: "Daily snapshot recorded successfully",
      snapshot,
      totalSnapshots: updated.length,
    });
  } catch (err) {
    console.error("Error running daily cron job:", err);
    return NextResponse.json({ error: "Cron snapshot failed" }, { status: 500 });
  }
}
