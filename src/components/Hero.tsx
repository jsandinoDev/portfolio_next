"use client";

import { IconButton } from "./IconButton";
import { GithubIcon } from "./icons/GithubIcon";
import { WorkExperience } from "./WorkExperience";
import { Certifications } from "./Certifications";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { MailIcon } from "./icons/MailIcon";
import { Projects } from "./Projects";
import Image from "next/image";
import { About } from "./About";
import { CVIcon } from "./icons/CVIcon";
import { useLanguage } from "@/context/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full md:max-w-[60vw] lg:max-w-[60vw] mx-auto" id="home">
      <div className="flex flex-col md:flex-row items-center md:items-center md:justify-center gap-8">
        <div>
          <span>
            <Image
              className="rounded-full w-12 h-12 mb-5"
              src="/timekeeper.png"
              alt="Logo"
              width="500"
              height="500"
            />
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
              {t.hero.greeting}
            </h1>
          </span>

          <h2 className="text-xl lg:text-2xl text-wrap max-w-[700px]">
            <span>{t.hero.tagline} </span>
            <span className="text-orange-400">{t.hero.role}</span>
            <span className="text-blue-100/90"> {t.hero.location} </span>
          </h2>

          <nav className="flex gap-4 mt-8 flex-wrap">
            <IconButton href="https://github.com/jsandinoDev">
              <GithubIcon />
              {t.hero.github}
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/jsandino/">
              <LinkedInIcon />
              {t.hero.linkedin}
            </IconButton>
            <IconButton href="mailto:josue.271168@gmail.com">
              <MailIcon />
              {t.hero.email}
            </IconButton>
            <IconButton href="/jsandino_resume_2025.pdf">
              <CVIcon />
              {t.hero.resume}
            </IconButton>
          </nav>
        </div>

        <div className="hidden md:block w-full md:w-1/2 ps-11">
          <Image
            className="rounded-2xl shadow-lg w-full object-cover"
            src="/hero.jpg"
            alt="Hero Image"
            width="5000"
            height="5000"
          />
        </div>
      </div>

      <WorkExperience />
      <Certifications />
      <Projects />
      <About />
    </div>
  );
};
