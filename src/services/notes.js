import dotenv from "dotenv";
dotenv.config();

import { ROUTES } from "./constants";

export async function getUser(id) {
  const res = await fetch(process.env.API_URL + ROUTES.GET_USER + id);
  const user = res.json();
  return user;
}
