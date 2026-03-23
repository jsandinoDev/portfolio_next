"use client";

import React from "react";
import { TimeLine } from "./TimeLine";
import { PCIcon } from "./icons/PCIcon";
import { useLanguage } from "@/context/LanguageContext";

export const WorkExperience = () => {
  const { t } = useLanguage();

  return (
    <div className="py-10" id="experience">
      <h1 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white border-b pb-4 border-gray-700">
        <PCIcon />
        {t.experience.title}
      </h1>

      <TimeLine />
    </div>
  );
};
