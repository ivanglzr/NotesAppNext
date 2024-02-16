import NoteForm from "@/components/NoteForm";

export default function EditNotePage({ params }) {
  const { id, noteId } = params;

  return <NoteForm id={id} noteId={noteId} isEdit={true} />;
}
