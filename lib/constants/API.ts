export const API_URLS = {
  priSite: "/private/site",
  pubTopic: "/public/topic",
  priTopic: "/private/topic",
  pubSeries: "/public/series",
  priSeries: "/private/series",
  priPost: "/private/post",
} as const;

export type API_URL = typeof API_URLS[keyof typeof API_URLS];
