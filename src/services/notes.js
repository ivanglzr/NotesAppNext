import dotenv from "dotenv";
dotenv.config();

import { ROUTES } from "./constants";

export async function getUser(id) {
  const res = await fetch(process.env.API_URL + ROUTES.GET_USER + id);
  const user = await res.json();
  return user;
}

export async function getUserNote(id, noteId) {
  const res = await fetch(
    process.env.API_URL + ROUTES.GET_USER + id + ROUTES.GET_NOTE + noteId
  );
  const user = await res.json();
  return user;
}
