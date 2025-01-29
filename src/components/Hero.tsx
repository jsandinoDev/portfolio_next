import { IconButton } from "./IconButton";
import { GithubIcon } from "./icons/GithubIcon";
import { WorkExperience } from "./WorkExperience";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { MailIcon } from "./icons/MailIcon";
import { Projects } from "./Projects";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col md:flex-row items-center md:items-center md:justify-center gap-8">
        <div className="flex-1">
          <span>
            <img
              className="rounded-full w-12 h-12 mb-5"
              src="https://pbs.twimg.com/profile_images/1808894397200879621/dymtRZEo_400x400.jpg"
              alt="Logo"
            />
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
              Hey, I'm Josue
              <a
                href="https://www.linkedin.com/in/josue-sandino-jaen-846381207/"
                target="_blank"
                rel="noopener"
                className="flex justify-center items-center"
              >
                {/* <p>Open to Workd</p> */}
              </a>
            </h1>
          </span>

          <h2 className="text-xl lg:text-2xl text-wrap max-w-[700px]">
            <span>+5 years of experience. </span>
            <span className="text-yellow-200/90">
              Full stack developer && Web3 open source contributor.
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

        <div className="hidden md:block w-full md:w-1/2">
          <Image
            className="rounded-2xl shadow-lg w-full object-cover"
            src="https://scontent.fsjo14-1.fna.fbcdn.net/v/t39.30808-6/458114126_8173997962679938_3972859050933968256_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=RFrZtptR3M8Q7kNvgH8P5MX&_nc_zt=23&_nc_ht=scontent.fsjo14-1.fna&_nc_gid=AgCV0fAURVidCsI7j7LjwO2&oh=00_AYDFlXRq2qBx9ciQsDDVp34OHImMewdKDePR0ZB8_FKiIg&oe=679F61B4"
            alt="New Image"
            width={200}
            height={200}
          />
        </div>
      </div>

      <WorkExperience />

      <Projects />
    </div>
  );
};
