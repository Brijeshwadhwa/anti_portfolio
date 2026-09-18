import { NextResponse } from "next/server";
import { fetchLeetCodeStats } from "@/lib/stats/leetcode";
import { fetchGitHubStats } from "@/lib/stats/github";
import { fetchTryHackMeStats } from "@/lib/stats/tryhackme";
import { getHistoricalSnapshotsAsync } from "@/lib/stats/snapshot";
import { AggregatedStats } from "@/lib/stats/types";

export const revalidate = 3600; // Cache response for 1 hour

export async function GET() {
  try {
    const [leetcode, github, tryhackme, snapshots] = await Promise.all([
      fetchLeetCodeStats(),
      fetchGitHubStats(),
      fetchTryHackMeStats(),
      getHistoricalSnapshotsAsync(),
    ]);

    const data: AggregatedStats = {
      leetcode,
      github,
      tryhackme,
      snapshots,
      fetchedAt: new Date().toISOString(),
    };

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error in /api/stats endpoint:", error);
    return NextResponse.json(
      { error: "Failed to load live statistics" },
      { status: 500 }
    );
  }
}
