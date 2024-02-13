"use client";

import "../css/Notes.css";

import { useState } from "react";

import Note from "./Note";

import { deleteUserNote } from "@/services/notes";

export default function Notes({ notes: userNotes, userId }) {
  const [notes, setNotes] = useState(userNotes);

  return (
    <main id="notes">
      {notes.map((note, i) => {
        const href = `/user/${userId}/note/${note._id}`;

        const deleteNote = async () => {
          const res = await deleteUserNote(userId, note._id);
          console.log(res);

          setNotes((state) => {
            const newState = state.filter((_, index) => index !== i);

            return newState;
          });
        };

        return (
          <Note
            key={note._id}
            note={note}
            href={href}
            deleteNote={deleteNote}
          />
        );
      })}
    </main>
  );
}
