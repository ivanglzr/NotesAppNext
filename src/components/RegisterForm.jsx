"use client";

import { postUser } from "@/services/user";
import "../css/Form.css";

export default function RegisterForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));

    const res = await postUser({ ...data, notes: [] });

    console.log(res);
  };

  return (
    <form style={{ width: "400px", height: "500px" }} onSubmit={handleSubmit}>
      <h1>Register</h1>
      <div className="form-group">
        <label>User</label>
        <input type="text" name="user" id="user" />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
