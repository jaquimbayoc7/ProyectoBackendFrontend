"use client";

import React, { useEffect, useRef, useState } from "react";

interface Props{
    isLast?: boolean
}

export default function Achievement({isLast}:Props) {
  const achievementProperties = useRef<HTMLDivElement>(null);
  const [spanHeight, setSpanHeight] = useState(0);

  useEffect(() => {
    if (achievementProperties.current) {
      const currentHeight = achievementProperties.current.clientHeight;
      setSpanHeight(currentHeight);
    }
  }, []);

  return (
    <article className="flex gap-5 mt-5" ref={achievementProperties}>
      <div className=" flex items-center justify-center h-1 w-1 bg-yellow-200 p-2 rounded-full relative ml-5">
        <span
          style={{
            height: `${spanHeight+10}px`,
            bottom: `-${spanHeight+10}px`,
          }}
          className={`${isLast && 'hidden'} border-r  border-neutral-700 w-[1px]  absolute  -bottom-10`}
        ></span>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-white font-semibold">Titulo de educacion</h2>

        <span className="text-yellow-200">
          2019 - 2023
        </span>
        
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias itaque mollitia alias ex laborum provident eum magnam corporis animi dolor repellendus voluptatem amet enim vitae ea quis minus cupiditate, maxime placeat officiis quod corrupti. Praesentium quod culpa deleniti hic, quia saepe! Eveniet quis sunt aut, fugiat cupiditate deleniti commodi nam.</p>
      </div>
    </article>
  );
}