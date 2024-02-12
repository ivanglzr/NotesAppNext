"use client";
import Link from "next/link";

import { EditIcon, TrashIcon } from "./Icons";
import { deleteUserNote } from "@/services/notes";

export default function Note({
  title,
  content,
  color,
  id,
  userId,
  isUniqueNote = false,
  index,
  setNotes,
}) {
  const deleteNote = async () => {
    const res = await deleteUserNote(userId, id);
    console.log(res);

    setNotes((state) => {
      const newState = state.filter((e, i) => i !== index);

      return newState;
    });
  };

  return (
    <div className="note" style={{ backgroundColor: color }}>
      <header>
        {isUniqueNote ? (
          <h3>{title}</h3>
        ) : (
          <Link href={`/user/${userId}/note/${id}`}>
            <h3>{title}</h3>
          </Link>
        )}
      </header>
      <article>
        <p>{content}</p>
      </article>
      <footer>
        <span>
          <b>{color}</b>
        </span>
        <div className="icons">
          <button>
            <EditIcon />
          </button>
          <button onClick={deleteNote}>
            <TrashIcon />
          </button>
        </div>
      </footer>
    </div>
  );
}
