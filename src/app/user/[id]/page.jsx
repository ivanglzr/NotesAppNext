import Header from "@/components/Header";
import Notes from "@/components/Notes";
import useUser from "@/hooks/useUser.js";

export default async function Page({ params }) {
  const { user } = useUser(params.id);

  console.log(user);

  return (
    <>
      <Header />
      {/* <Notes notes={user.notes} /> */}
    </>
  );
}
