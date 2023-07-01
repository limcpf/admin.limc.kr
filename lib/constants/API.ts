export const API_URLS = {
  priSite: "/private/site",
} as const;

export type API_URL = typeof API_URLS[keyof typeof API_URLS];
