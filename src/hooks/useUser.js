import { getUser, getUserNote } from "@/services/notes";

export default async function useUser(id) {
  const user = await getUser(id);

  const getNote = async (noteId) => {
    const note = await getUserNote(id, noteId);
    return note;
  };
  return { user, getNote };
}
