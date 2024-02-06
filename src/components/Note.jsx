import Link from "next/link";

export default function Note({
  title,
  content,
  color,
  id,
  userId,
  isUniqueNote = false,
}) {
  return (
    <div className="note" style={{ backgroundColor: color }}>
      <header>
        {isUniqueNote ? (
          <h3>{title}</h3>
        ) : (
          <Link href={`/user/${userId}/note/${id}`}>
            <h3>{title}</h3>
          </Link>
        )}
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
