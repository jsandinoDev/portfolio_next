import Image from "next/image";
import { ProfileIcon } from "./icons/ProfileIcon";

export const About = () => {
  return (
    <div className="py-10" id="about">
      <h1 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white border-b pb-4 border-gray-300 dark:border-gray-700">
        <ProfileIcon />
        About me
      </h1>

      <article className="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row">
        <div className="[&>p]:mb-4 [&>p>strong]:text-yellow-600 dark:[&>p>strong]:text-orange-400 [&>p>strong]:font-normal text-pretty order-2 md:order-1 text-xl">
          <p>
            My name is Josué Sandino, but in the technology community many
            people know me as jsandinoDev. I&apos;m a{" "}
            <strong>
              full-stack developer with a weakness for TypeScript && C#
            </strong>
            . My computer science journey started at the age of 12, with
            unsuccessful attempts to download games, and since then, my passion
            for software development has only grown.
          </p>

          <p>
            I am currently focused on improving my full stack skills. I also
            spend time learning about the world of
            <strong>
              {" "}
              web3 technologies and AI development. Creating projects that can
              utilize these 3 areas.{" "}
            </strong>
          </p>

          <p>
            When I&apos;m not coding, you&apos;ll find me lifting weights,
            playing video games, or diving into the world of emerging
            technologies like web3. I also have an obsession with music, I play
            guitar, saxophone, piano and ukele. I love listening to classic &&
            minimal techno music while working.{" "}
            <strong> Open source is my playground </strong>, and I&apos;m always
            up for building cool, innovative things. ♭
          </p>

          <p></p>
        </div>

        <Image
          width="5000"
          height="5000"
          src="/profile.jpg"
          alt={"About Picture"}
          className="order-1 object-cover w-64 
          h-full p-1 md:order-2 rotate-3 lg:p-2 
          lg:w-64 aspect-square rounded-2xl
        bg-black/20 dark:bg-yellow-500/5 
          ring-1 ring-black/70 dark:ring-white/20 "
          style={{ objectPosition: "50% 50%" }}
        />
      </article>
    </div>
  );
};
