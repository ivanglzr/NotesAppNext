"use client";

import "@/css/Form.css";

import { postUserNotes } from "@/services/notes";

export default function NoteForm({ id }) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const note = Object.fromEntries(new FormData(e.target));

    const res = await postUserNotes(id, [{ ...note }]);

    console.log(res);
  };

  return (
    <form style={{ width: "500px", height: "600px" }} onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea name="content" id="content"></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="color">Color</label>
        <input type="color" name="color" id="color" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
