import {METHOD} from "@/lib/constants/InputType";

export const request = (url:string, method: METHOD) => fetch(`${process.env.API_SERVER_URL}${url}`, {
  method: method,
  headers: {
    Authorization: `Bearer ${process.env.TOKEN}`,
  },
});