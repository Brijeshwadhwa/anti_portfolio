export interface LeetCodeStats {
  username: string;
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking?: number;
  streak?: number;
  badge?: string;
  lastUpdated: string;
  isLive: boolean;
  error?: string;
}

export interface GitHubStats {
  username: string;
  totalRepos: number;
  followers: number;
  stars: number;
  primaryLanguages: string[];
  recentCommitsCount: number;
  lastUpdated: string;
  isLive: boolean;
  error?: string;
}

export interface TryHackMeStats {
  username: string;
  thmRank: string;
  thmStreak: string;
  thmRooms: string;
  thmBadges: string;
  title: string;
  lastUpdated: string;
  isLive: boolean;
  error?: string;
}

export interface HistoricalSnapshot {
  date: string;
  timestamp: number;
  leetcodeSolved: number;
  githubRepos: number;
  thmRooms: number;
}

export interface AggregatedStats {
  leetcode: LeetCodeStats;
  github: GitHubStats;
  tryhackme: TryHackMeStats;
  snapshots: HistoricalSnapshot[];
  fetchedAt: string;
}
