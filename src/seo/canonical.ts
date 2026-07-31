export const SITE_URL = "https://www.techvexor.com";

export function getCanonicalUrl(pathname: string) {
  const normalizedPath = pathname && pathname !== "/" ? pathname.replace(/\/$/, "") : "/";
  return normalizedPath === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalizedPath}`;
}

export function getRobotsContent(indexable: boolean) {
  return indexable
    ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    : "noindex, nofollow";
}
