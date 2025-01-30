import React from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../utils/contants";
import { KeysIcon } from "./icons/KeysIcon";

export const Projects = () => {
  return (
    <div className="py-10" id="experience">
<h1 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white border-b pb-4 border-gray-300 dark:border-gray-700">        <KeysIcon />
        Projects
      </h1>

      <div
        className="flex flex-col gap-y-20 items-center justify-center py-10 space-y-10 max-w-5xl mx-auto"
        id="projects"
      >
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            img={project.img}
            title={project.title}
            description={project.description}
            stack={project.stack}
            previewLink={project.previewLink}
            url={project.url}
            urlGithub={project.urlGithub}
          />
        ))}
      </div>
    </div>
  );
};
