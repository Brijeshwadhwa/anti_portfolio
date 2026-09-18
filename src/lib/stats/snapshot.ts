import { HistoricalSnapshot } from "./types";

const SEEDED_SNAPSHOTS: HistoricalSnapshot[] = [
  { date: "2026-07-15", timestamp: 1784073600000, leetcodeSolved: 252, githubRepos: 28, thmRooms: 82 },
  { date: "2026-07-20", timestamp: 1784505600000, leetcodeSolved: 260, githubRepos: 29, thmRooms: 86 },
  { date: "2026-07-25", timestamp: 1784937600000, leetcodeSolved: 268, githubRepos: 30, thmRooms: 90 },
  { date: "2026-07-30", timestamp: 1785369600000, leetcodeSolved: 275, githubRepos: 31, thmRooms: 93 },
  { date: "2026-08-04", timestamp: 1785801600000, leetcodeSolved: 284, githubRepos: 32, thmRooms: 96 },
  { date: "2026-08-08", timestamp: 1786147200000, leetcodeSolved: 286, githubRepos: 32, thmRooms: 96 },
  { date: "2026-08-11", timestamp: 1786406400000, leetcodeSolved: 379, githubRepos: 35, thmRooms: 96 },
];

let inMemorySnapshots: HistoricalSnapshot[] = [...SEEDED_SNAPSHOTS];

/**
 * Retrieves historical snapshots from persistent storage (Vercel KV / Upstash / Supabase)
 * if available via env vars, or falls back to serverless in-memory snapshots.
 */
export async function getHistoricalSnapshotsAsync(): Promise<HistoricalSnapshot[]> {
  const kvUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const kvToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

  if (kvUrl && kvToken) {
    try {
      const res = await fetch(`${kvUrl}/get/snapshots`, {
        headers: { Authorization: `Bearer ${kvToken}` },
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();
          let parsed = data.result;
          if (typeof data.result === "string" && data.result.trim().length > 0) {
            try {
              parsed = JSON.parse(data.result);
            } catch (parseErr) {
              console.warn("Error parsing KV snapshots:", parseErr);
              parsed = null;
            }
          }
          if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed.sort((a: HistoricalSnapshot, b: HistoricalSnapshot) => a.timestamp - b.timestamp);
          }
      }
    } catch (err) {
      console.warn("Persistent KV fetch failed, using fallback snapshots:", err);
    }
  }

  return getHistoricalSnapshots();
}

export function getHistoricalSnapshots(): HistoricalSnapshot[] {
  return [...inMemorySnapshots].sort((a, b) => a.timestamp - b.timestamp);
}

/**
 * Adds or updates a snapshot for a given date YYYY-MM-DD.
 * Prevents duplicate snapshots for the same date.
 * Persists to Vercel KV / Upstash if env vars configured.
 */
export async function addSnapshotAsync(snapshot: HistoricalSnapshot): Promise<HistoricalSnapshot[]> {
  const current = await getHistoricalSnapshotsAsync();
  const existingIdx = current.findIndex((s) => s.date === snapshot.date);

  if (existingIdx >= 0) {
    current[existingIdx] = snapshot;
  } else {
    current.push(snapshot);
  }

  current.sort((a, b) => a.timestamp - b.timestamp);
  inMemorySnapshots = current;

  const kvUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const kvToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

  if (kvUrl && kvToken) {
    try {
      await fetch(`${kvUrl}/set/snapshots`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${kvToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(JSON.stringify(current)),
      });
    } catch (err) {
      console.warn("Failed to persist snapshot to KV store:", err);
    }
  }

  return current;
}

export function addSnapshot(snapshot: HistoricalSnapshot): HistoricalSnapshot[] {
  const existingIdx = inMemorySnapshots.findIndex((s) => s.date === snapshot.date);
  if (existingIdx >= 0) {
    inMemorySnapshots[existingIdx] = snapshot;
  } else {
    inMemorySnapshots.push(snapshot);
  }
  inMemorySnapshots.sort((a, b) => a.timestamp - b.timestamp);
  return inMemorySnapshots;
}
