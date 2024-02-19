import "@/css/PrincipalPage.css";

import Link from "next/link";

export default function Page() {
  return (
    <div className="links-div">
      <Link href="/login" className="links">
        Login
      </Link>
      <Link href="/register" className="links">
        Register
      </Link>
    </div>
  );
}
