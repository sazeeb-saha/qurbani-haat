"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  console.log(user);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const pathName = usePathname() || "/";
  const isActive = (path) =>
    `px-2 py-1 transition ${
      pathName === path
        ? "text-green-500 font-bold border-b-2 border-green-500"
        : " text-black "
    }`;
  return (
    <div className=" sticky top-0 z-50 bg-base-100 shadow-sm">
      <div className="navbar container  mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={"/"} className={isActive("/")}>
                  Home
                </Link>
              </li>

              <li>
                <Link href={"/animals"} className={isActive("/animals")}>
                  All Animals
                </Link>
              </li>
              <li>
                <Link href={"/profile"} className={isActive("/profile")}>
                  My Profile
                </Link>
              </li>
            </ul>
          </div>
          <Link href={"/"} className="text-2xl font-bold">
            Qurbani<span className="text-green-600">HAT</span>
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            <li>
              <Link href={"/"} className={isActive("/")}>
                Home
              </Link>
            </li>

            <li>
              <Link href={"/animals"} className={isActive("/animals")}>
                All Animals
              </Link>
            </li>
            <li>
              <Link href={"/profile"} className={isActive("/profile")}>
                My Profile
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {!user && (
            <ul className="flex items-center gap-4">
              <li>
                <Link
                  href={"/registration"}
                  className=" btn px-4 py-2 rounded-full bg-white text-green-700 font-medium hover:bg-gray-100 transition"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  href={"/login"}
                  className="btn px-4 py-2 rounded-full bg-white text-green-700 font-medium hover:bg-gray-100 transition"
                >
                  LogIn
                </Link>
              </li>
            </ul>
          )}
          {user && (
            <div className="flex items-center gap-4">
              <Avatar size="sm">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleSignOut} size="sm" variant="danger">
                LogOut
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
