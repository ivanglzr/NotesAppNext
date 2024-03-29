"use client";

import "@/css/Form.css";

import { postUserNotes, putUserNote } from "@/services/notes";

import { useRouter, useSearchParams } from "next/navigation";

export default function NoteForm({ id, isEdit, noteId = undefined }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const putNote = async e => {
    e.preventDefault();

    const note = Object.fromEntries(new FormData(e.target));

    if (note.title.length < 3 || note.content.length < 3) {
      return alert("Note not valid");
    }

    try {
      const res = await putUserNote(id, noteId, note);

      if (res.status === "success") {
        return router.push(`/user/${id}`);
      }

      if (res.status === "error") {
        return alert("Note not edited");
      }
    } catch (err) {
      return alert("Note not edited");
    }
  };

  const postNote = async e => {
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

  const handleSubmit = isEdit ? putNote : postNote;

  console.log(searchParams.get("color"));

  return (
    <form style={{ width: "500px", height: "600px" }} onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          autoComplete="off"
          defaultValue={searchParams.get("title")}
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          id="content"
          autoComplete="off"
          defaultValue={searchParams.get("content")}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="color">Color</label>
        <input
          type="color"
          name="color"
          id="color"
          autoComplete="off"
          defaultValue={`#${searchParams.get("color")}`}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
