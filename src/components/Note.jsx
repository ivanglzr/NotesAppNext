export default function Note({ title, content, color }) {
  return (
    <div className="note" style={{ backgroundColor: color }}>
      <header>
        <h3>{title}</h3>
      </header>
      <article>
        <p>{content}</p>
      </article>
      <footer>
        <span>
          <b>{color}</b>
        </span>
      </footer>
    </div>
  );
}
