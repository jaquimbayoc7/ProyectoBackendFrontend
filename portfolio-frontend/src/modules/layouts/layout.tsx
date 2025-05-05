
import React from "react";
import Aside from "../components/aside.componet";
import Link from "next/link";


interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <main className="bg-neutral-950 px-20 h-screen flex gap-5">
      <Aside />
      <section className="flex flex-col w-3/4 px-4 py-5 bg-neutral-900 my-20 rounded-lg relative">
        
        <header className="flex justify-between">
          <h1 className="text-white text-3xl font-bold mb-3"> Titulo </h1>
          <nav className="absolute top-0 right-0 p-3 bg-neutral-700 rounded-bl-xl border-b border-l border-neutral-600">
            <ul className="flex gap-5">
                <Link className="text-neutral-300 font-semibold capitalize" href={'/about'}>About</Link>
                <Link className="text-neutral-300 font-semibold capitalize" href={'/portfolio'}>Portfolio</Link>
                <Link className="text-neutral-300 font-semibold capitalize" href={'/resume'}>Resume</Link>
                <Link className="text-neutral-300 font-semibold capitalize" href={'/blog'}>Blog</Link>
                <Link className="text-neutral-300 font-semibold capitalize" href={'/contact'}>Contact</Link>
            </ul>
          </nav>

        </header>
        
        
        
        
        
        
        
        {children}
        
      </section>
    </main>
  );
}
