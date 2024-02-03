import Note from "./Note";
import "../css/Notes.css";

export default function Notes({ notes }) {
  console.log(notes);
  return (
    <main id="notes">
      {notes.map(note => (
        <Note
          key={note.title}
          title={note.title}
          content={note.content}
          color={note.color}
        />
      ))}
    </main>
  );
}
