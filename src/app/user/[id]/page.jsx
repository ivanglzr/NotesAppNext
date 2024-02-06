import Notes from "@/components/Notes";

import { getUserNotes } from "@/services/notes";

export default async function Page({ params }) {
  const res = await getUserNotes(params.id);

  console.log(res);

  return (
    <>
      <Notes notes={res.notes} userId={params.id} />
    </>
  );
}
