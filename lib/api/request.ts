import { METHOD } from "@/lib/constants/InputType";

export const request = (url: string, method: METHOD, payload?: any) =>
  fetch(`${process.env.API_SERVER_URL || "/api"}${url}`, {
    method: method,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      "Content-type": "application/json",
    },
    cache: "no-store",
    body: payload ? JSON.stringify(payload) : null,
  });
