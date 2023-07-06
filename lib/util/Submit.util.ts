import {FormEvent} from "react";
import {JsonObject} from "@/types/form";

export const getJsonObjectFromForm =  (evt:FormEvent<HTMLFormElement>) => {
  const payload: JsonObject = {};
  // @ts-ignore
  for(const t of evt.currentTarget) {
    if(t.id !== "createdAt" && t.id !== "updatedAt" && t.id) payload[t.id] = String(t.value);
  }
  return payload;
}