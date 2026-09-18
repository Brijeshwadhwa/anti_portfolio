import { GitHubStats } from "./types";

const DEFAULT_USERNAME = process.env.GITHUB_USERNAME || "Brijeshwadhwa";

const FALLBACK_STATS: GitHubStats = {
  username: DEFAULT_USERNAME,
  totalRepos: 32,
  followers: 12,
  stars: 15,
  primaryLanguages: ["Python", "JavaScript / TypeScript", "HTML/CSS", "Java", "C", "Bash"],
  recentCommitsCount: 48,
  lastUpdated: new Date().toISOString(),
  isLive: false,
};

export async function fetchGitHubStats(username = DEFAULT_USERNAME): Promise<GitHubStats> {
  const now = new Date().toISOString();
  const headers: Record<string, string> = {
    "User-Agent": "Portfolio-Stats-Fetcher",
    Accept: "application/vnd.github.v3+json",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers,
      next: { revalidate: 3600 },
    });

    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
      headers,
      next: { revalidate: 3600 },
    });

    if (userRes.ok && reposRes.ok) {
      const userData = await userRes.json();
      const reposData = await reposRes.json();

      let totalStars = 0;
      const langCounts: Record<string, number> = {};

      if (Array.isArray(reposData)) {
        reposData.forEach((repo: any) => {
          totalStars += repo.stargazers_count || 0;
          if (repo.language) {
            langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
          }
        });
      }

      const topLangs = Object.entries(langCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6)
        .map(([lang]) => lang);

      return {
        username,
        totalRepos: userData.public_repos || FALLBACK_STATS.totalRepos,
        followers: userData.followers || FALLBACK_STATS.followers,
        stars: totalStars || FALLBACK_STATS.stars,
        primaryLanguages: topLangs.length > 0 ? topLangs : FALLBACK_STATS.primaryLanguages,
        recentCommitsCount: FALLBACK_STATS.recentCommitsCount,
        lastUpdated: now,
        isLive: true,
      };
    }
  } catch (err) {
    console.warn("GitHub API error, using fallback stats:", err);
  }

  return {
    ...FALLBACK_STATS,
    lastUpdated: now,
    error: "GitHub API fallback engaged.",
  };
}
