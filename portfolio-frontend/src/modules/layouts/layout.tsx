"use client";

import React, { use, useEffect } from "react";
import Aside from "../components/aside.component";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayout } from "../hooks/useLayout";


interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const pathname = usePathname();
  //console.log(pathname)
  const { title, routes } = useLayout(pathname);

   

  return (
    <main className="bg-neutral-950 px-20 h-screen flex gap-5">
      <Aside />
      <div className="flex-1 py-20 overflow-auto no-scrollbar">
        <section className="flex flex-col px-10 py-14 bg-neutral-900 rounded-lg relative">
          <header className="flex justify-between">
            <h1 className="text-white text-3xl font-bold mb-3">{title}</h1>
            <nav className="absolute top-0 right-0 px-10 py-4 bg-neutral-800 rounded-bl-2xl border-b border-l border-neutral-600">
              <ul className="flex gap-10">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    className={`${
                      pathname === route.path
                        ? "text-yellow-300"
                        : "text-neutral-400"
                    } font-semibold capitalize`}
                    href={route.path}
                  >
                    {route.name}
                  </Link>
                ))}
              </ul>
            </nav>
          </header>

          {children}
        </section>
      </div>
    </main>
  );
}
