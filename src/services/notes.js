import dotenv from "dotenv";
dotenv.config();

import { ROUTES } from "./constants";

export async function getUser(id) {
  const res = await fetch(ROUTES.URL + ROUTES.GET_USER + id);
  const user = await res.json();
  return user;
}

export async function getUserNote(id, noteId) {
  const res = await fetch(
    ROUTES.URL + ROUTES.GET_USER + id + ROUTES.GET_NOTE + noteId
  );
  const user = await res.json();
  return user;
}

export async function login(email, password) {
  const petition = await fetch(
    ROUTES.URL + ROUTES.LOGIN + email + "/" + password
  );
  const res = await petition.json();
  return res;
}

export async function postUser(user) {
  const petition = await fetch(ROUTES.URL + ROUTES.POST_USER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user: user }),
  });
  const res = await petition.json();
  return res;
}
