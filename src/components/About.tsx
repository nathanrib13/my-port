import React, { useState } from "react";
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiPostgresql,
  SiGit,
  SiPython,
  SiDjango,
  SiTailwindcss,
  SiPrisma,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

export const About = () => {
  const [showMore, setshowMore] = useState(false);

  const handleShowMore = () => {
    setshowMore(!showMore);
  };

  return (
    <div id="about" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <div>
        <h1 className="sm:text-4xl text-4xl font-bold  text-center text-[#119194]">
          ABOUT ME{" "}
        </h1>
        <p className="text-justify mt-16 text-xl text-black font-bold ">
          I am 26 years old and have accumulated over 20 years of academic
          experience. Between 2016 and 2022, I studied Physical Education at
          UFRRJ, but I realized that I wasn't happy in the chosen field. So, I
          decided to embark on a new path.
          <br />
          <br />
          I have always been passionate about technology and had an intrinsic
          curiosity to understand how things work. The field of technology
          offered me an opportunity to delve deeper into this aspect.
          <br />
          <br />
          In early 2022, I started studying on my own, beginning with the basics
          of HTML, CSS, and JavaScript. In June 2022, I discovered Kenzie
          Academy, a school that aims to train full-stack web developers and
          prepare them for the job market. After careful and thorough
          consideration of the school, I decided to enroll in July of the same
          year. After six intense months of study, I graduated as a Front-end
          developer.
        </p>

        {showMore ? (
          <p className="text-justify text-xl text-black font-bold transition-transforrm ease-in-out delay-150">
            <br />
            Following the completion of the first stage of the course, I began
            my studies in the back-end field and am about to graduate as a
            full-stack web developer after a year of intense dedication,
            numerous practical projects, and a constant pursuit of knowledge.
            During this period, I acquired various technical skills, including
            HTML, CSS, JavaScript, React, Styled Components, React Native,
            TypeScript, Node, Express, TypeORM, PostgreSQL, Python, Django,
            Prisma, Unit Testing, Jest, and other frameworks and libraries.
            <br />
            <br />
            Additionally, I have developed a wide range of personal skills, such
            as improving my communication abilities, organization, teamwork, and
            excellent concentration. I see myself as a focused, calm, and
            communicative person, with ease of adaptation and efficient
            problem-solving skills. My curiosity to understand how things work
            remains strong, and I always stay connected to new technologies and
            market trends.
          </p>
        ) : (
          ""
        )}
        <button
          className=" text-[#f17b21]  bold text-xl mb-20 mt-8 w-full text-right p-2 rounded-lg hover:scale-95 ease-in duration-200"
          onClick={handleShowMore}
        >
          {showMore ? "Hidden" : "Show more"}
        </button>

        <h2 className="text-3xl font-bold  text-left text-black">MY SKILLS</h2>
        <div className="grid sm:grid-cols-3 gap-16 py-16">
          <div className="flex items-center gap-4 ">
            <SiHtml5
              className="fill-current text-black hover:text-orange-500 hover:scale-110 ease-in duration-200"
              size={60}
            />
            <div className="w-[80%] h-[20%] rounded-[40px] bg-[#f17b21] b border-2  ">
              <div className=" animate-icons w-[85%] h-full rounded-[40px] bg-[#119194] ml-[0%] " />
            </div>
          </div>
          <div className="flex items-center gap-4 ">
            <SiCss3
              className="fill-current text-black hover:text-blue-500 hover:scale-110 ease-in duration-200"
              size={60}
            />
            <div className="w-[80%] h-[20%] rounded-[40px] bg-[#f17b21] b border-2 ">
              <div className="animate-icons  w-[85%] h-full rounded-[40px] bg-[#119194] ml-[0%]" />
            </div>
          </div>
          <div className="flex items-center gap-4 ">
            <SiJavascript
              className="fill-current text-black hover:text-yellow-500 hover:scale-110 ease-in duration-200"
              size={60}
            />
            <div className="w-[80%] h-[20%] rounded-[40px] bg-[#f17b21] b border-2 ">
              <div className=" animate-icons w-[90%] h-full rounded-[40px] bg-[#119194] ml-[0%] " />
            </div>
          </div>
          <div className="flex items-center gap-4 ">
            <SiReact
              className="fill-current text-black hover:text-blue-500 hover:scale-110 ease-in duration-200"
              size={60}
            />
            <div className="w-[80%] h-[20%] rounded-[40px] bg-[#f17b21] b border-2 ">
              <div className=" animate-icons w-[65%] h-full rounded-[40px] bg-[#119194] ml-[0%] " />
            </div>
          </div>

          <div className="flex items-center gap-4 ">
            <FaNodeJs
              className="fill-current text-black hover:text-green-700 hover:scale-110 ease-in duration-200"
              size={60}
            />
            <div className="w-[80%] h-[20%] rounded-[40px] bg-[#f17b21] b border-2 ">
              <div className=" animate-icons w-[75%] h-full rounded-[40px] bg-[#119194] ml-[0%] " />
            </div>
          </div>

          <div className="flex items-center gap-4 ">
            <SiTypescript
              className="fill-current text-black hover:text-blue-700 hover:scale-110 ease-in duration-200"
              size={60}
            />
            <div className="w-[80%] h-[20%] rounded-[40px] bg-[#f17b21] b border-2 ">
              <div className=" animate-icons w-[75%] h-full rounded-[40px] bg-[#119194] ml-[0%] " />
            </div>
          </div>

          <div className="flex items-center gap-4 ">
            <SiPostgresql
              className="fill-current text-black hover:text-[#3d5e76] hover:scale-110 ease-in duration-200"
              size={60}
            />
            <div className="w-[80%] h-[20%] rounded-[40px] bg-[#f17b21] b border-2 ">
              <div className=" animate-icons w-[60%] h-full rounded-[40px] bg-[#119194] ml-[0%] " />
            </div>
          </div>

          <div className="flex items-center gap-4 ">
            <SiGit
              className="fill-current text-black hover:text-[#f75f00cc] hover:scale-110 ease-in duration-200"
              size={60}
            />
            <div className="w-[80%] h-[20%] rounded-[40px] bg-[#f17b21] b border-2 ">
              <div className=" animate-icons w-[80%] h-full rounded-[40px] bg-[#119194] ml-[0%] " />
            </div>
          </div>
          <div className="flex items-center gap-4 ">
            <SiPython
              className="fill-current text-black hover:text-yellow-500 hover:scale-110 ease-in duration-200"
              size={60}
            />
            <div className="w-[80%] h-[20%] rounded-[40px] bg-[#f17b21] b border-2 ">
              <div className=" animate-icons w-[60%] h-full rounded-[40px] bg-[#119194] ml-[0%] " />
            </div>
          </div>
          <div className="flex items-center gap-4 ">
            <SiDjango
              className="fill-current text-black hover:text-green-800 hover:scale-110 ease-in duration-200"
              size={60}
            />
            <div className="w-[80%] h-[20%] rounded-[40px] bg-[#f17b21] b border-2 ">
              <div className="animate-icons w-[45%] h-full rounded-[40px] bg-[#119194] ml-[0%] " />
            </div>
          </div>
          <div className="flex items-center gap-4 ">
            <SiTailwindcss
              className="fill-current text-black hover:text-[#39d2b1] hover:scale-110 ease-in duration-200"
              size={60}
            />
            <div className="w-[80%] h-[20%] rounded-[40px] bg-[#f17b21] b border-2 ">
              <div className="animate-icons w-[72%] h-full rounded-[40px] bg-[#119194] ml-[0%] " />
            </div>
          </div>
          <div className="flex items-center gap-4 ">
            <SiPrisma
              className="fill-current text-black hover:text-white hover:scale-110 ease-in duration-200"
              size={60}
            />
            <div className="w-[80%] h-[20%] rounded-[40px] bg-[#f17b21] b border-2 ">
              <div className="animate-icons w-[45%] h-full rounded-[40px] bg-[#119194] ml-[0%] " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
