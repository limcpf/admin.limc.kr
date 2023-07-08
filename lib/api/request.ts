import { METHOD } from "@/lib/constants/InputType";
import { Response } from "next/dist/compiled/@edge-runtime/primitives";

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

export const cacheRequest = (url: string, method: METHOD, payload?: any) =>
  fetch(`${process.env.API_SERVER_URL || "/api"}${url}`, {
    method: method,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      "Content-type": "application/json",
    },
    next: { revalidate: 10 },
    body: payload ? JSON.stringify(payload) : null,
  });

export const response = async (h: Response) => {
  try {
    const jsonData = await h.json();
    if (h.ok) return jsonData;
    else throw new Error(jsonData["message"]);
  } catch (e) {
    throw new Error("알 수 없는 오류가 발생했습니다.");
  }
};
