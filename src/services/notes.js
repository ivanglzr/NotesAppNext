import { ROUTES } from "./constants";

export async function getUserNotes(id) {
  const res = await fetch(
    ROUTES.URL + ROUTES.GET_USER + id + ROUTES.GET_NOTES,
    {
      cache: "no-store",
    }
  );
  const notes = await res.json();
  return notes;
}

export async function getUserNote(id, noteId) {
  const res = await fetch(
    ROUTES.URL + ROUTES.GET_USER + id + ROUTES.GET_NOTE + noteId,
    {
      cache: "no-store",
    }
  );

  const note = await res.json();
  return note;
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

export async function putNote(id, noteId, note) {
  const petition = await fetch(
    ROUTES.URL + ROUTES.PUT_USER + id + ROUTES.PUT_NOTE + noteId,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        note,
      }),
    }
  );
  const res = petition.json();
  return res;
}

export async function deleteUserNote(id, noteId) {
  const petition = await fetch(
    ROUTES.URL + ROUTES.GET_USER + id + ROUTES.DELETE_NOTE + noteId,
    {
      method: "DELETE",
    }
  );
  const res = await petition.json();
  return res;
}
