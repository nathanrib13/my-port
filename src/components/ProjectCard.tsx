import React from "react";

export const ProjectCard: any = ({ img, title, link, tech }: any) => {
  return (
    <div className="relative flex items-center border-2 border-yellow	justify-center max-h-[280px] w-full shadow-lg shadow-[#000000] rounded-xl group hover:bg-gradient-to-r  from-gray-200 to-[#119194] ">
      <img
        className="rounded-xl group-hover:opacity-10 w-full h-[100%] object-cover object-left "
        src={img}
        alt=""
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] ">
        <h2 className="text-3xl font-bold text-white tracking-wider text-center">
          {title}
        </h2>

        <p className="pb-4 text-black bold text-center">{tech}</p>
        <a href={link} target="_blank">
          <p className="text-center p-3 rounded-lg bg-[#f17b21] text-white font-bold cursor-pointer text-lg  hover:animate-pulse">
            More Info
          </p>
        </a>
      </div>
    </div>
  );
};
