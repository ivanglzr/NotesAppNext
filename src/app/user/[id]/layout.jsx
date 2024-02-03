import Header from "@/components/Header";

import { getUser } from "@/services/user";

export default async function Layout({ children, params }) {
  const { user } = await getUser(params.id);

  console.log(user);

  return (
    <>
      <Header username={user.user} id={user._id} />
      {children}
    </>
  );
}
