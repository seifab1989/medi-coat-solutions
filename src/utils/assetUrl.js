export function assetUrl(path) {
  const rawBase = import.meta.env.BASE_URL || "/";
  const base = rawBase.endsWith("/") ? rawBase : rawBase + "/";
  const clean = String(path || "").replace(/^\//, "");
  return base + clean;
}
