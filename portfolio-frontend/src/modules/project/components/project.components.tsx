import Image from "next/image";
import React from "react";

export default function Project() {
  return (
    <article className="rounded-xl flex flex-col gap-3 group">
      <div className="relative">
        <Image
            width={500}
            height={500}
          src="https://res.cloudinary.com/dlgusambk/image/upload/v1692840056/tienda/pnoxcizjh89v9vbuftvj.jpg"
          alt=""
          className="w-full object-cover"
        />
        <div className="w-full h-full opacity-0 group-hover:opacity-70 bg-neutral-900 absolute top-0 left-0 flex justify-center items-center"></div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-white font-semibold">Titulo</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          sunt aspernatur maxime, facere autem, numquam mollitia quasi,
          reprehenderit rem modi dignissimos eius iure accusantium nulla
          suscipit nemo. Modi, voluptate fuga.
        </p>
      </div>
    </article>
  );
}
