// import { Link} from 'react-scroll'
import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineProject,
} from "react-icons/ai";

import { RiFileCodeLine } from "react-icons/ri";

export const Header = () => {
  const [navBar, setNavBar] = useState(false);
  const handleNav = () => {
    setNavBar(!navBar);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] md:hidden fill-black"
      />
      {navBar ? (
        <div className="fixed w-full h-screen bg-black/90 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-md bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#about"
            className="w-[75%] flex justify-center items-center rounded-full shadow-md bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <RiFileCodeLine size={20} />
            <span className="pl-4">About</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-md bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-ms bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}

      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col ">
          <a
            href="#main"
            className="rounded-full shadow-sm bg-[#119194] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 "
          >
            <AiOutlineHome size={20} className="fill-[#fefefe]" />
          </a>
          <a
            href="#about"
            className="rounded-full shadow-sm bg-[#119194] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 "
          >
            <RiFileCodeLine size={20} className="fill-[#fefefe]" />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-sm bg-[#119194] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 "
          >
            <AiOutlineProject size={20} className="fill-[#fefefe]" />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-sm bg-[#119194] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 "
          >
            <AiOutlineMail size={20} className="fill-[#fefefe]" />
          </a>
        </div>
      </div>
    </div>
  );
};
