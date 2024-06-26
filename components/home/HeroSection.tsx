import { Parallax } from "react-scroll-parallax";
import { auth } from "@/lib/firebase";
import Button from "../ui/Button";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="my-32 h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center gap-20 px-4">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="flex flex-col gap-5 text-center text-4xl font-semibold leading-tight text-slate-900 dark:text-slate-50 sm:text-7xl xs:text-5xl">
            <span className="whitespace-nowrap">Upgrade Your</span>
            <span className="text-pacifico whitespace-nowrap font-light">
              Dear Diary
            </span>
          </h1>

          <p className="mt-4 max-w-lg text-center text-base font-medium text-slate-800 dark:text-slate-200 xs:text-xl">
            All your notes, synced on all your devices. <br />
            Free, easy and fast.
          </p>

          <div>
            <Link href="/login">
              <Button>{auth.currentUser ? "Write Down" : "Try Now"}</Button>
            </Link>
          </div>
        </div>

        <Parallax speed={10}>
          <img
            src="/screenshot.png"
            alt="Writedown Screenshot"
            className="dark:hidden"
          />
          <img
            src="/dark-screenshot.png"
            alt="Writedown Screenshot"
            className="hidden dark:block"
          />
        </Parallax>
      </div>
    </div>
  );
};

export default HeroSection;
