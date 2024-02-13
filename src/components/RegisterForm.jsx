"use client";

import "../css/Form.css";

import { useRouter } from "next/navigation";

import { postUser } from "@/services/user";

export default function RegisterForm() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = Object.fromEntries(new FormData(e.target));

    if (
      user.password.length < 4 ||
      user.email.length < 5 ||
      user.email.indexOf("@") === -1 ||
      user.email.indexOf(".") === -1 ||
      user.user.length < 4
    ) {
      return alert("Los datos no son validos");
    }

    try {
      const res = await postUser({ ...user, notes: [] });

      if (res.status === "success") {
        return router.push(`/user/${res.user._id}`);
      }

      if (res.status === "error") {
        return alert("Register failed");
      }
    } catch (err) {
      return alert("Register failed");
    }
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
