export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function assetUrl(path: string): string {
  if (!path) return path;
  if (path.startsWith("http") || path.startsWith("data:")) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (BASE_PATH && clean.startsWith(`${BASE_PATH}/`)) return clean;
  return BASE_PATH ? `${BASE_PATH}${clean}` : clean;
}

export function assetSrcSet(srcset?: string): string | undefined {
  if (!srcset) return undefined;
  return srcset
    .split(",")
    .map((part) => {
      const trimmed = part.trim();
      if (!trimmed) return "";
      const [url, ...rest] = trimmed.split(/\s+/);
      return [assetUrl(url), ...rest].join(" ");
    })
    .filter(Boolean)
    .join(", ");
}
