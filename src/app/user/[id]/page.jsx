import Header from "@/components/Header";
import Notes from "@/components/Notes";

import { getUserNotes } from "@/services/notes";

export default async function Page({ params }) {
  const { notes } = await getUserNotes(params.id);

  return (
    <>
      <Header id={params.id} />
      <Notes notes={notes} userId={params.id} />
    </>
  );
}
