"use client";

import React from "react";
import { KeysIcon } from "./icons/KeysIcon";
import { useLanguage } from "@/context/LanguageContext";
import { DevBadge } from "./DevBadge/DevBadge";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

const FiGithubIcon = FiGithub as React.ElementType;
const FiExternalLinkIcon = FiExternalLink as React.ElementType;

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <div className="py-10" id="projects">
      <h1 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white border-b pb-4 border-gray-700">
        <KeysIcon />
        {t.projects.title}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.projects.items.map((project, index) => (
          <div
            key={index}
            className="flex flex-col rounded-xl border border-gray-700 bg-white/5
              hover:border-orange-400/60 hover:bg-white/10 transition-all duration-200 overflow-hidden"
          >
            <div className="relative w-full h-36 overflow-hidden">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col gap-3 p-5 flex-1">
            <span className="text-white text-lg font-semibold leading-snug">
              {project.title}
            </span>

            <div className="flex flex-wrap gap-1">
              {project.stack.map((s) => (
                <DevBadge key={s} size="sm">
                  {s}
                </DevBadge>
              ))}
            </div>

            <p className="text-gray-400 text-sm leading-relaxed flex-1">
              {project.description}
            </p>

            <div className="flex items-center gap-3 mt-auto pt-1">
              {project.urlGithub && (
                <a
                  href={project.urlGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-400 text-sm hover:text-orange-400 transition-colors"
                >
                  <FiGithubIcon size={14} />
                  {t.projects.sourceCode}
                </a>
              )}
              {project.previewLink && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-400 text-sm hover:text-orange-400 transition-colors"
                >
                  <FiExternalLinkIcon size={14} />
                  {t.projects.visitWebsite}
                </a>
              )}
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
