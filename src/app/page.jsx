import Header from "@/components/Header";
import Notes from "@/components/Notes";
import { getUser } from "@/services/notes";

export default async function Page() {
  const user = await getUser("65707a446cfff7b4e88686f1");
  console.log(user.notes);
  return (
    <>
      <p>hoa</p>
      {/* <Header />
      <Notes notes={user.notes} /> */}
    </>
  );
}
