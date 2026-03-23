"use client";

import Image from "next/image";
import { ProfileIcon } from "./icons/ProfileIcon";
import { useLanguage } from "@/context/LanguageContext";

export const About = () => {
  const { t } = useLanguage();
  const [p1, p2, p3] = t.about.paragraphs;

  return (
    <div className="py-10" id="about">
      <h1 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white border-b pb-4 border-gray-700">
        <ProfileIcon />
        {t.about.title}
      </h1>

      <article className="flex flex-col items-center justify-center gap-8 text-gray-300 md:flex-row">
        <div className="[&>p]:mb-4 [&>p>strong]:text-orange-400 [&>p>strong]:font-normal text-pretty order-2 md:order-1 text-xl">
          <p>
            {p1.text}
            <strong>{p1.highlight}</strong>
            {p1.rest}
          </p>

          <p>
            {p2.text}
            <strong>{p2.highlight}</strong>
            {p2.rest}
            {p2.highlight2 && <strong>{p2.highlight2}</strong>}
            {p2.rest2}
          </p>

          <p>
            {p3.text}
            <strong>{p3.highlight}</strong>
            {p3.rest}
          </p>
        </div>

        <Image
          width="5000"
          height="5000"
          src="/profile.jpg"
          alt={"About Picture"}
          className="order-1 object-cover w-64
          h-full p-1 md:order-2 rotate-3 lg:p-2
          lg:w-64 aspect-square rounded-2xl
          bg-yellow-500/5
          ring-1 ring-white/20"
          style={{ objectPosition: "50% 50%" }}
        />
      </article>
    </div>
  );
};
