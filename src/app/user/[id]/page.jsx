import Notes from "@/components/Notes";
import useUser from "@/hooks/useUser.js";

export default async function Page({ params }) {
  const {
    user: { notes },
  } = await useUser(params.id);

  return (
    <>
      <Notes notes={notes} />
    </>
  );
}
