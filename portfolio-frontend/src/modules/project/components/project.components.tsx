import Image from "next/image";
import React from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function Project() {
  return (
    <article className="rounded-xl flex flex-col gap-3 group">
      <div className="relative overflow-hidden rounded-xl max-h-96">
        <Image
          width={500}
          height={500}
          src="https://res.cloudinary.com/dlgusambk/image/upload/v1692840056/tienda/pnoxcizjh89v9vbuftvj.jpg"
          alt=""
          className="w-full object-cover group-hover:scale-110 duration-300"
        />
        <div className="w-full h-full opacity-0 group-hover:opacity-90 bg-neutral-900 absolute top-0 left-0 flex justify-center items-center transition-all">
          <button className="rounded-lg p-4 opacity-0 group-hover:opacity-100 bg-neutral-700 transition-all scale-0 group-hover:scale-100 duration-300">
              <VisibilityIcon sx={{color: "#fef08a"}} />
          </button>
        </div>
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
