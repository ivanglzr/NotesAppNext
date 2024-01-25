import Header from "@/components/Header";
import Notes from "@/components/Notes";
import { getUser } from "@/services/notes";

export default async function Page({ params }) {
  const user = await getUser(params.id);

  return (
    <>
      <Header />
      <Notes notes={user.user.notes} />
    </>
  );
}
