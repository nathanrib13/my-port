import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Transition } from "react-transition-group";

const imgs = [
  "https://i.imgur.com/X3OhbDg.png",
  "https://i.imgur.com/LzjtlMw.png",
  "https://i.imgur.com/RhSgw4w.png",
  "https://i.imgur.com/cHAcghI.png",
  "https://i.imgur.com/Wu6r1Hg.png",
  "https://i.imgur.com/vlujrCO.png",
  "https://i.imgur.com/rpn2W2c.png",
  "https://i.imgur.com/d1nN9xE.png",
];

export const Projects = () => {
  const [showMoreProjects, setshowMoreProjects] = useState(false);

  const handleShowMoreProjects = () => {
    setshowMoreProjects(!showMoreProjects);
  };

  return (
    <div
      id="projects"
      className="  max-w-[1040px] m-auto md:pl-20 pl-4 pr-4 py-16"
    >
      <h1 className="text-4xl font-bold text-center text-[#119194]">
        PROJECTS
      </h1>

      <div className="grid sm:grid-cols-2 gap-12 py-24">
        <ProjectCard
          img={imgs[0]}
          title="Find My Duo"
          link="https://projeto-findmyduo-six.vercel.app/"
          tech="React - TypeScript - Firebase"
        />
        <ProjectCard
          img={imgs[1]}
          title="Imobiliaria"
          link="https://github.com/Kenzie-Academy-Brasil-Developers/m4-sp6-kimoveis-final"
          tech="Node - TypeScript - TypeORM"
        />

        <ProjectCard
          img={imgs[3]}
          title="Movies"
          link="https://github.com/Kenzie-Academy-Brasil-Developers/m4-sp5-movies-typeorm-nathanrib"
          tech="Node - TypeScript - TypeORM"
        />

        <ProjectCard
          img={imgs[2]}
          title="Nu Kenzie"
          link="https://projeto-nukenzie-two.vercel.app/"
          tech="React - TypeScript"
        />

        {showMoreProjects ? (
          <Transition in={showMoreProjects} timeout={500} appear enter exit>
            <>
              <ProjectCard
                img={imgs[4]}
                title="Kenzie Hub"
                link="https://kenzie-hub-flax-kappa.vercel.app/"
                tech="React - TypeScript - TypeORM"
              />
              <ProjectCard
                img={imgs[5]}
                title="Kenzie Burguer"
                link="https://hambuergueria-kenzie-qrkjhbqy8-nathanrib13.vercel.app/"
                tech="React - TypeScript - TypeORM"
              />
              <ProjectCard
                img={imgs[6]}
                title="Ecommerce"
                link=""
                tech="Python - Django - PostgreSQL"
              />
              <ProjectCard
                img={imgs[7]}
                title="Band Kamp"
                link="https://dashboard.render.com/web/srv-ch7eqpg2qv26p1cnveng"
                tech="Python - Django - PostgreSQL"
              />
            </>
          </Transition>
        ) : (
          ""
        )}
      </div>
      <button
        className="bg-[#119194] text-white text-2xl mt-5 w-full p-4 rounded-lg hover:scale-105 ease-in duration-200"
        onClick={handleShowMoreProjects}
      >
        {showMoreProjects ? "Hidden" : "Show more"}
      </button>
    </div>
  );
};
