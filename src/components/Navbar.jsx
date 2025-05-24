"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <nav
      className="flex justify-between
     items-center bg-slate-800 px-8 py-3 mb-4">
      <Link href={"/"} className="text-white font-bold">
        Home
      </Link>
      <div className="flex gap-5">
        {
          session?.user?.name ? <Link href={"/addTopic"} className="text-white font-bold">
            Add Topic
          </Link> : <div className="flex gap-5">
            <Link href={"/login"} className="text-white font-bold">
              Login
            </Link>
            <Link href={"/register"} className="text-white font-bold">
              Sign up
            </Link>
          </div>
        }
      </div>
    </nav>
  );
};

export default Navbar;
