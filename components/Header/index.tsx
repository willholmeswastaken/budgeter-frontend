import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Header: React.FC = () => (
  <nav className="relative flex flex-wrap items-center justify-between px-2 pt-2 navbar-expand-lg bg-green">
    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <Image
          src="/budgeter-logo-bg.png"
          alt="Budgeter logo"
          height={75}
          width={100}
          className="object-contain md:object-scale-down"
        />
        <button
          className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
        >
          <span className="block relative w-6 h-px rounded-sm bg-white"></span>
          <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        </button>
      </div>
      <div className="lg:flex flex-grow" id="example-navbar-warning">
        <ul className="flex flex-col lg:flex-row list-none ml-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                Dashboard
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/register">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                My Profile
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/login">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                Login
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
