"use client";

import Image from "next/image";
import React from "react";
import { IconButton } from "./IconButton";
import { BinocularsIcon } from "./icons/BinocularsIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { OnlyDustIcon } from "./icons/OnlyDustIcon";
import { DevBadge } from "./DevBadge/DevBadge";

interface Props {
  img: string;
  title: string;
  description: string;
  stack: string[];
  previewLink: boolean;
  url: string;
  urlGithub: string;
  onlyDustGithub?: string;
}

const ProjectCard = ({
  img,
  title,
  description,
  stack,
  previewLink,
  url,
  urlGithub,
  onlyDustGithub,
}: Props) => {
  return (
    <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
      {/* image div */}
      <div className="w-full md:w-1/2">
        <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
          <Image
            alt={title}
            src={img}
            width={500}
            height={300}
            className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 md:max-w-lg">
        <h3 className="text-center text-xl sm:text-2xl md:text-2xl  text-gray-800 dark:text-orange-400">
          {title}
        </h3>
        <div className="flex flex-wrap mt-2 justify-center">
          <div>
            {stack && (
              <div className="flex">
                {stack.map((s) => (
                  <DevBadge key={s} size={"sm"}>
                    {s}
                  </DevBadge>
                ))}
              </div>
            )}
          </div>

          <div className="mt-2 text-xl text-gray-700 dark:text-gray-100 font-normal w-full text-center sm:text-left">
          {description}
          </div>
          <footer className="flex items-end justify-start mt-4 gap-x-4">
            {urlGithub && (
              <IconButton href={urlGithub}>
                <GithubIcon />
                Source code
              </IconButton>
            )}
            {previewLink && (
              <IconButton href={url}>
                <BinocularsIcon />
                Visit Website
              </IconButton>
            )}
            {onlyDustGithub && (
              <IconButton href={onlyDustGithub}>
                <OnlyDustIcon />
                OnlyDust
              </IconButton>
            )}
          </footer>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
