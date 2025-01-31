import { IconButton } from "./IconButton";
import { GithubIcon } from "./icons/GithubIcon";
import { WorkExperience } from "./WorkExperience";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { MailIcon } from "./icons/MailIcon";
import { Projects } from "./Projects";
import Image from "next/image";
import { About } from "./About";

export const Hero = () => {
  return (
    <div className=" w-full md:max-w-[60vw] lg:max-w-[60vw] mx-auto" id="home">
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
              Hey, I&apos;m Josue
            </h1>
          </span>

          <h2 className="text-xl lg:text-2xl text-wrap max-w-[700px]">
            <span>+5 years of experience. </span>
            <span className="text-orange-400">
              Full stack developer && Web3 Open Source Contributor.
            </span>
            <span className="text-blue-100/90">
              {" "}
              From Barva, Costa Rica 🇨🇷{" "}
            </span>
          </h2>

          <nav className="flex gap-4 mt-8 flex-wrap">
            <IconButton href="#">
              <GithubIcon />
              Github
            </IconButton>
            <IconButton href="#">
              <LinkedInIcon />
              LinkedIn
            </IconButton>
            <IconButton href="#">
              <MailIcon />
              Email
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

      <Projects />

      <About />
    </div>
  );
};
