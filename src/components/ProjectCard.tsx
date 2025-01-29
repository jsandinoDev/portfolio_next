"use client";

import Image from "next/image";
import React from "react";
import { IconButton } from "./IconButton";
import { BinocularsIcon } from "./icons/BinocularsIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { OnlyDustIcon } from "./icons/OnlyDustIcon";
import { IconMinimal } from "./IconMinimal";

interface Props {
  img: string;
  title: string;
  description: string;
  icons: string[];
  previewLink: boolean;
  url: string;
  urlGithub: string;
  onlyDustGithub?: string;
}

const ProjectCard = ({
  img,
  title,
  description,
  icons,
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
            width={500} // Set the intrinsic width of the image
            height={300} // Set the intrinsic height of the image
            className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 md:max-w-lg">
        <h3 className="text-center text-xl sm:text-2xl md:text-2xl  text-gray-800 dark:text-gray-100">
          {title}
        </h3>
        <div className="flex flex-wrap mt-2 justify-center">
          <ul className="flex flex-row mb-2 gap-x-2">
            {icons.map((iconName) => (
              <li>
                <span
                  className={`flex gap-x-2 rounded-full text-xs py-1 px-2 `}
                >
                   <IconMinimal name={iconName}/>
                </span>
              </li>
            ))}

          </ul>

          <div className="mt-2 text-gray-700 dark:text-gray-400">
            {description}
          </div>
          <footer className="flex items-end justify-start mt-4 gap-x-4">
            {urlGithub && (
              <IconButton href={urlGithub}>
                <GithubIcon />
                Github
              </IconButton>
            )}
            {previewLink && (
              <IconButton href={url}>
                <BinocularsIcon />
                Preview
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
