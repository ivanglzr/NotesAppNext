"use client";

import Note from "./Note";
import "../css/Notes.css";
import { useState } from "react";

export default function Notes({ notes: userNotes, userId }) {
  const [notes, setNotes] = useState(userNotes);

  return (
    <main id="notes">
      {notes.map((note, i) => (
        <Note
          key={note.title}
          title={note.title}
          content={note.content}
          color={note.color}
          id={note._id}
          userId={userId}
          index={i}
          setNotes={setNotes}
        />
      ))}
    </main>
  );
}
