"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Heart from "./symbols/Heart";
import Albums from "./symbols/Albums";
import Gallary from "./symbols/Gallary";
import { useState } from "react";
import { Menu } from "lucide-react";

function Side_NavBar() {
  const [menu, setMenu] = useState(false);
  const handleNav = () => {
    setMenu(!menu);
  };
  return (
    <div
      className={
        menu
          ? "flex space-y-4 py-4 sm:w-1/6 mt-11 sm:mt-0 "
          : "flex space-y-4 py-4 w-[20px] sm:w-1/6 mt-1"
      }
    >
      <div className="hidden sm:flex flex-col px-3 py-2">
        <h2 className="mb-2 sm:px-2 md:px-4 sm:text-base md:text-xl font-bold tracking-tight">
          MANAGE
        </h2>
        {/* Gallery */}
        <Link href="/Gallery">
          <div className="space-y-1 pb-2">
            <Button
              variant="ghost"
              className="w-full justify-start text-xs font-semibold md:text-lg   hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white"
            >
              {/* Gallery symbol */}
              <Gallary />
              Gallery
            </Button>
          </div>
        </Link>
        {/* Albums */}
        <Link href="/">
          <div className="space-y-1 pb-2">
            <Button
              variant="ghost"
              className="w-full text-xs font-semibold md:text-lg  justify-start   hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white"
            >
              {/* albums symbol */}
              <Albums />
              Albums
            </Button>
          </div>
        </Link>
        {/* Favorities */}
        <Link href="/Favourites">
          <div className="space-y-1 pb-2">
            <Button
              variant="ghost"
              className="w-full justify-start text-xs font-semibold md:text-lg   hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="mr-2 h-6 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              Favorities
            </Button>
          </div>
        </Link>
      </div>
      <div onClick={handleNav} className="sm:hidden flex ">
        <Menu absoluteStrokeWidth className="" />
      </div>
      <div
        className={
          menu
            ? "fixed top-[50px] w-[100%] sm:hidden p-2 ease-in duration-500 right-0 "
            : "right-[-100%] hidden"
        }
      >
        <div className="grid grid-rows-1 gap-4 ">
          <div className="flex justify-between items-center">
            {/* Gallery */}
            <Link href="/Gallery" onClick={handleNav}>
              <div className="flex-col justify-center align-middle hover:font-bold">
                <div className="flex justify-center align-middle">
                  <Gallary />
                </div>
                <p>Gallery</p>
              </div>
            </Link>
            {/* Albums */}
            <Link href="/" onClick={handleNav}>
              <div className="flex-col justify-center align-middle hover:font-bold">
                <div className="flex justify-center align-middle">
                  <Albums />
                </div>
                <p>Albums</p>
              </div>
            </Link>
            {/* favourities */}
            <Link href="/Favourites" onClick={handleNav}>
              <div className="flex-col justify-center align-middle hover:font-bold">
                <div className="flex justify-center align-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="mr-2 h-6 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <p>Favourites</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Side_NavBar;
