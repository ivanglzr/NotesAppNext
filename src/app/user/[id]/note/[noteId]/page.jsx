import Note from "@/components/Note";

import { getUserNote } from "@/services/notes";

export default async function Page({ params }) {
  const { note } = await getUserNote(params.id, params.noteId);

  return <Note note={note} isUniqueNote={true} />;
}
