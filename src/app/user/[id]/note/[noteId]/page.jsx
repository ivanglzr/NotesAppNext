import Header from "@/components/Header";
import Notes from "@/components/Notes";
import { getUser, getUserNote } from "@/services/notes";

export default async function Page({ params }) {
  const user = await getUserNote(params.id);

  console.log(user);

  return (
    <>
      <Header />
      {/* <Notes notes={user.user.notes} /> */}
    </>
  );
}
