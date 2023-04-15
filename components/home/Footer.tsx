import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mb-20 flex flex-col items-center  justify-between bg-slate-200 sm:flex-row sm:px-36">
      <div className="flex w-full items-center justify-between gap-20 px-4 sm:w-auto">
        <div className="py-5">
          <h1 className="text-xl font-semibold">writedown</h1>
        </div>
        <div className="text-sm">
          <ul className="flex flex-row gap-5">
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <a href="https://github.com/NayamAmarshe/writedown">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="pb-5 sm:pb-0">
        <p className="text-sm">
          © {new Date().getFullYear()} <b>writedown</b>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
