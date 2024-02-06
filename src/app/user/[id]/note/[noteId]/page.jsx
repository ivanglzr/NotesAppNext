import Note from "@/components/Note";

import { getUserNote } from "@/services/notes";

export default async function Page({ params }) {
  const {
    note: { title, content, color },
  } = await getUserNote(params.id, params.noteId);

  return (
    <Note title={title} content={content} color={color} isUniqueNote={true} />
  );
}
