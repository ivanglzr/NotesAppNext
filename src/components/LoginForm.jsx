"use client";

import "../css/Form.css";

import { login } from "@/services/user";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = Object.fromEntries(new FormData(e.target));

    try {
      const res = await login(email, password);

      if (res.status === "success") {
        return router.push(`/user/${res.user._id}`);
      }

      if (res.status === "error") {
        return alert("Login failed");
      }
    } catch (err) {
      return alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
