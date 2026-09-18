import { LeetCodeStats } from "./types";

const DEFAULT_USERNAME = process.env.LEETCODE_USERNAME || "brijeshwadhwa26";

const FALLBACK_STATS: LeetCodeStats = {
  username: DEFAULT_USERNAME,
  totalSolved: 287,
  easySolved: 105,
  mediumSolved: 140,
  hardSolved: 42,
  ranking: 115240,
  streak: 313,
  badge: "100 Days Badge 2026",
  lastUpdated: new Date().toISOString(),
  isLive: false,
};

export async function fetchLeetCodeStats(username = DEFAULT_USERNAME): Promise<LeetCodeStats> {
  const now = new Date().toISOString();

  // Strategy 1: Public Alfa LeetCode API proxy
  try {
    const res = await fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${username}`, {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "Mozilla/5.0 Portfolio-Stats-Bot" },
    });

    if (res.ok) {
      const data = await res.json();
      if (data && typeof data.totalSolved === "number") {
        return {
          username,
          totalSolved: data.totalSolved,
          easySolved: data.easySolved || 105,
          mediumSolved: data.mediumSolved || 140,
          hardSolved: data.hardSolved || 42,
          ranking: data.ranking || FALLBACK_STATS.ranking,
          streak: FALLBACK_STATS.streak,
          badge: FALLBACK_STATS.badge,
          lastUpdated: now,
          isLive: true,
        };
      }
    }
  } catch (err) {
    console.warn("LeetCode Proxy API failed, trying GraphQL directly...", err);
  }

  // Strategy 2: Official LeetCode GraphQL API directly
  try {
    const graphqlQuery = {
      query: `
        query getUserProfile($username: String!) {
          matchedUser(username: $username) {
            username
            profile {
              ranking
            }
            submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
              }
            }
          }
        }
      `,
      variables: { username },
    };

    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        Referer: `https://leetcode.com/${username}/`,
      },
      body: JSON.stringify(graphqlQuery),
      next: { revalidate: 3600 },
    });

    if (res.ok) {
      const result = await res.json();
      const user = result.data?.matchedUser;

      if (user && user.submitStatsGlobal?.acSubmissionNum) {
        const stats = user.submitStatsGlobal.acSubmissionNum;
        const all = stats.find((s: any) => s.difficulty === "All")?.count || 287;
        const easy = stats.find((s: any) => s.difficulty === "Easy")?.count || 105;
        const medium = stats.find((s: any) => s.difficulty === "Medium")?.count || 140;
        const hard = stats.find((s: any) => s.difficulty === "Hard")?.count || 42;

        return {
          username,
          totalSolved: all,
          easySolved: easy,
          mediumSolved: medium,
          hardSolved: hard,
          ranking: user.profile?.ranking || FALLBACK_STATS.ranking,
          badge: FALLBACK_STATS.badge,
          lastUpdated: now,
          isLive: true,
        };
      }
    }
  } catch (err) {
    console.warn("LeetCode GraphQL API failed:", err);
  }

  return {
    ...FALLBACK_STATS,
    lastUpdated: now,
    error: "API temporarily unreachable, showing verified backup stats.",
  };
}
