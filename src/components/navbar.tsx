import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { useState } from "react";

export function Navbar() {
  return (
    <div className="container flex h-14 max-w-screen-2xl items-center">
      <div className="mr-4 hidden md:flex">
        <a
          className="mr-6 flex items-center justify-center  space-x-2"
          href="/"
        >
          <Image
            src={"/logo.png"}
            width={60}
            height={60}
            alt="butterfly"
            priority
          />
          <span className="hidden font-bold sm:inline-block">Butterfly</span>
        </a>
        <nav className="flex items-center gap-6 text-sm">
          <a
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href="/products"
          >
            Products
          </a>
        </nav>
      </div>
      <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
        <nav className="flex items-center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/butterflytextiles.tr"
          >
            <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0">
              <svg
                className="h-[1.2rem] w-[1.2rem] fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.75 2C4.4 2 2 4.4 2 7.75v8.5C2 19.6 4.4 22 7.75 22h8.5C19.6 22 22 19.6 22 16.25v-8.5C22 4.4 19.6 2 16.25 2h-8.5zm4.25 5c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm5.75-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 16c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4z"></path>
                <circle cx="12" cy="12" r="3.2"></circle>
                <path d="M16.25 6.75c-.7 0-1.25.6-1.25 1.25s.6 1.25 1.25 1.25 1.25-.6 1.25-1.25-.6-1.25-1.25-1.25z"></path>
              </svg>
              <span className="sr-only">Instagram</span>
            </div>
          </a>
          <ModeToggle />
        </nav>
      </div>
    </div>
  );
}
