import Note from "@/components/Note";
import useUser from "@/hooks/useUser";

export default async function Page({ params }) {
  const { getNote } = await useUser(params.id);

  const {
    note: { title, content, color },
  } = await getNote(params.noteId);

  return <Note title={title} content={content} color={color} />;
}
