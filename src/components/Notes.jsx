"use client";

import "../css/Notes.css";

import { useRouter } from "next/navigation";
import { useState } from "react";

import Note from "./Note";

import { deleteUserNote } from "@/services/notes";

export default function Notes({ notes: userNotes, userId, props }) {
  const router = useRouter();

  console.log(router.asPath);

  const [notes, setNotes] = useState(userNotes);

  return (
    <main id="notes">
      {notes.map((note, i) => {
        const href = `/user/${userId}/note/${note._id}`;

        const editNote = async () => {
          router.push(
            `${href}/edit/?title=${note.title}&content=${
              note.content
            }&color=${note.color.slice(1)}`
          );
        };

        const deleteNote = async () => {
          const res = await deleteUserNote(userId, note._id);
          console.log(res);

          setNotes(state => {
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
            editNote={editNote}
          />
        );
      })}
    </main>
  );
}
