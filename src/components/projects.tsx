import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Transition } from "react-transition-group";

const imgs = [
  "src/assets/find-my-duo.png",
  "src/assets/imoveis-tyeporrm.png",
  "src/assets/nukennzie-project.png",
  "src/assets/movies-typeorm.png",
  "src/assets/kenzie-hub-projject.png",
  "src/assets/kennzie-burrguer-pprroject.png",
  "src/assets/der.png",
  "src/assets/band-kamp.png",
];

export const Projects = () => {
  const [showMoreProjects, setshowMoreProjects] = useState(false);

  const handleShowMoreProjects = () => {
    setshowMoreProjects(!showMoreProjects);
  };

  return (
    <div id="projects" className="  max-w-[1040px] m-auto md:pl-20 pl-4 py-16">
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
                link="https://github.com/nathanrib13/m5-bandkamp-generic-view-nathanrib"
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
