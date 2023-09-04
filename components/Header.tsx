"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BarIcon, ArrowUpRight, CrossIcon } from "./Icons";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between h-16 max-w-6xl px-8 mx-auto mt-10 ">
      <div className="text-2xl text-gray-600">
        <Link onClick={() => setOpen(false)} href="/">
          {"<Pabel />"}
        </Link>
      </div>

      <div>
        <ul className="items-center hidden space-x-6 text-gray-600 md:flex">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li className="">
            <Link
              className="flex items-center py-2 shadow-lg px-7 bg-slate-50 rounded-3xl "
              href="https://drive.google.com/file/d/1X3ryVIOw_UvzNRk-jNTRvDwkuQsoDDOU/view?usp=drive_link"
              target="_blank"
            >
              My CV <ArrowUpRight />
            </Link>
          </li>
        </ul>

        <button
          className="block md:hidden"
          onClick={() => setOpen(!open)}
          type="button"
        >
          {open ? (
            <CrossIcon className="text-gray-800 w-7 h-7" />
          ) : (
            <BarIcon className="w-8 h-8 text-gray-800" />
          )}
        </button>
        <div
          style={{
            display: open ? "block" : "none",
          }}
          className="block w-full md:hidden"
        >
          <ul className="absolute right-0 z-50 flex flex-col w-full px-8 mt-4 bg-gray-100 rounded-lg md:hidden top-10">
            <li onClick={() => setOpen(false)} className="border-b">
              <Link
                href="/about"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded "
                aria-current="page"
              >
                About
              </Link>
            </li>
            <li onClick={() => setOpen(false)} className="border-b">
              <Link
                href="/contact"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 "
              >
                Contact
              </Link>
            </li>
            <li onClick={() => setOpen(false)} className="border-b">
              <Link
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 "
                href="https://drive.google.com/file/d/1A6I4qF3WBwlKskaAT23G5volEAJ-9i4T/view?usp=share_link"
                target="_blank"
              >
                My CV <ArrowUpRight />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
