import Link from "next/link";
import "../css/Header.css";
import { getUser } from "@/services/user";

export default async function Header({ id }) {
  const {
    user: { user },
  } = await getUser(id);

  return (
    <header id="header">
      <div className="user">
        <img
          src={`https://unavatar.io/${user}`}
          alt="Imagen de perfil del usuario"
        />
        <h2 className="username">{user}</h2>
      </div>
      <nav className="notes-nav">
        <h2>All Notes</h2>
        <Link href={`/user/${id}/create`}>
          <button className="btn add-btn">Add New Note</button>
        </Link>
      </nav>
    </header>
  );
}
