import { TryHackMeStats } from "./types";

const DEFAULT_USERNAME = process.env.TRYHACKME_USERNAME || "brijeshwadhwa26";

const FALLBACK_STATS: TryHackMeStats = {
  username: DEFAULT_USERNAME,
  thmRank: "Top 4% Global",
  thmStreak: "350-Day Streak",
  thmRooms: "110+ Labs Completed",
  thmBadges: "28+ Badges",
  title: "Top 4% Learners Globally",
  lastUpdated: new Date().toISOString(),
  isLive: false,
};

export async function fetchTryHackMeStats(username = DEFAULT_USERNAME): Promise<TryHackMeStats> {
  const now = new Date().toISOString();

  try {
    const res = await fetch(`https://tryhackme.com/api/v2/public-profile?username=${username}`, {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "Mozilla/5.0 Portfolio-Stats-Fetcher" },
    });

    if (res.ok) {
      const data = await res.json();
      if (data && data.status === "success" && data.data) {
        const info = data.data;
        return {
          username,
          thmRank: info.userRank ? `#${info.userRank.toLocaleString()} Global` : "Top 4% Global",
          thmStreak: info.streak ? `${info.streak}-Day Streak` : "350-Day Streak",
          thmRooms: info.completedRooms ? `${info.completedRooms} Rooms Solved` : "110+ Labs Completed",
          thmBadges: info.badgeCount ? `${info.badgeCount} Badges Earned` : "28+ Badges",
          title: info.title || "0x9 Mage",
          lastUpdated: now,
          isLive: true,
        };
      }
    }
  } catch (err) {
    console.warn("TryHackMe API request error, fallback engaged:", err);
  }

  return {
    ...FALLBACK_STATS,
    lastUpdated: now,
    error: "TryHackMe API fallback engaged.",
  };
}
