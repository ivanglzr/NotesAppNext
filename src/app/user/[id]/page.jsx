import Notes from "@/components/Notes";

import { getUserNotes } from "@/services/notes";

export default async function Page({ params }) {
  const { notes } = await getUserNotes(params.id);

  return (
    <>
      <Notes notes={notes} />
    </>
  );
}
