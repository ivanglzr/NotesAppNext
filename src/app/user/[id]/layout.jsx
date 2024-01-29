import Header from "@/components/Header";
import useUser from "@/hooks/useUser";

export default async function Layout({ children, params }) {
  const {
    user: { user },
  } = await useUser(params.id);

  return (
    <>
      <Header username={user} />
      {children}
    </>
  );
}
