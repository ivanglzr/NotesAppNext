"use client";

import "@/css/Form.css";

import { postUserNotes } from "@/services/notes";

import { useRouter } from "next/navigation";

export default function NoteForm({ id }) {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const note = Object.fromEntries(new FormData(e.target));

    if (note.title.length < 3 || note.content.length < 3) {
      return alert("Note not valid");
    }

    try {
      const res = await postUserNotes(id, [{ ...note }]);

      if (res.status === "success") {
        return router.push(`/user/${id}`);
      }

      if (res.status === "error") {
        return alert("Note not added");
      }
    } catch (err) {
      return alert("Note not added");
    }
  };

  return (
    <form style={{ width: "500px", height: "600px" }} onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" autoComplete="off" />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea name="content" id="content" autoComplete="off"></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="color">Color</label>
        <input type="color" name="color" id="color" autoComplete="off" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
