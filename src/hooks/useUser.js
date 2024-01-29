import { getUser } from "@/services/notes";

export default async function useUser(id) {
  const { user } = await getUser(id);

  return { user };
}
