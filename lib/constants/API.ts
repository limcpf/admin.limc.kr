export const API_URLS = {
  priSite: "/private/site",
  pubTopic: "/public/topic",
  priTopic: "/private/topic",
} as const;

export type API_URL = typeof API_URLS[keyof typeof API_URLS];