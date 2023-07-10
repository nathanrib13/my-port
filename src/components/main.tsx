import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";

export const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-center "
        src="https://cdn.dribbble.com/users/3050354/screenshots/14646894/media/1f31948afd5401c44d4bae934f07641a.gif"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-black/10">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col mt-20 lg:items-start items-center">
          <h1 className="sm:text-6xl text-4xl font-bold text-[#119194]">
            I'm Nathan Ribeiro
          </h1>

          <h2 className="flex sm:text-4xl text-2xl pt-4 text-[#000000] pl-1">
            I am{" "}
            <TypeAnimation
              sequence={[
                "a programmer",
                1000,
                "a full stack developer",
                2000,
                "a tech lover",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px", color: "#f17b21" }}
            />
          </h2>
          <div className="flex gap-4 pt-10 max-w-[280px] w-full text-center">
            <a href="https://www.linkedin.com/in/nathanrib13/" target="_blank">
              <FaLinkedin className="cursor-pointer" size={28} />
            </a>
            <a href="https://github.com/nathanrib13" target="_blank">
              <FaGithub className="cursor-pointer" size={28} />
            </a>
            <div className="relative">
              <a
                href="https://drive.google.com/file/d/1uzeK1IKbC0jgR61zhTt3f2hSwLtzxpqa/view?usp=sharing"
                target="_blank"
                className="hover:text-white"
              >
                <GrDocumentText className="cursor-pointer" size={28} />
                <div className="absolute bottom-0 left-0 transform translate-x-1/2 -translate-y-full bg-gray-800 text-white text-center px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Meu currículo
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
