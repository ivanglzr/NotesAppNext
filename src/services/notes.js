import { ROUTES } from "./constants";

export async function getUserNote(id, noteId) {
  const res = await fetch(
    ROUTES.URL + ROUTES.GET_USER + id + ROUTES.GET_NOTE + noteId
  );
  const user = await res.json();
  return user;
}

export async function postUserNotes(id, notes) {
  const petition = await fetch(
    ROUTES.URL + ROUTES.GET_USER + id + ROUTES.POST_NOTE,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        notes: [...notes],
      }),
    }
  );
  const res = petition.json();
  return res;
}
