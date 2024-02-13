"use client";
import Link from "next/link";

import { EditIcon, TrashIcon } from "./Icons";

export default function Note({
  note,
  href = undefined,
  deleteNote = undefined,
  isUniqueNote = false,
}) {
  const { title, content, color } = note;

  return (
    <div className="note" style={{ backgroundColor: color }}>
      <header>
        {isUniqueNote ? (
          <h3>{title}</h3>
        ) : (
          <Link href={href}>
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
        {!isUniqueNote && (
          <div className="icons">
            <button>
              <EditIcon />
            </button>
            <button onClick={deleteNote}>
              <TrashIcon />
            </button>
          </div>
        )}
      </footer>
    </div>
  );
}
