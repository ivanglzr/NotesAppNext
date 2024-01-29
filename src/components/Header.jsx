import "../css/Header.css";

export default function Header({ username }) {
  return (
    <header id="header">
      <div className="user">
        <img
          src={`https://unavatar.io/${username}`}
          alt="Imagen de perfil del usuario"
        />
        <h2 className="username">{username}</h2>
      </div>
      <nav className="notes-nav">
        <h2>All Notes</h2>
        <button className="btn add-btn">Add New Note</button>
      </nav>
    </header>
  );
}
