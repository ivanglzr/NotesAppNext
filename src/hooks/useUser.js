import { getUser } from "@/services/user";

export default async function useUser(id) {
  const { user } = await getUser(id);

  return { user };
}
