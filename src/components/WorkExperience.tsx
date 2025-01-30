import React from "react";
import { TimeLine } from "./TimeLine";
import { PCIcon } from "./icons/PCIcon";

export const WorkExperience = () => {
  return (
    <div className="py-10" id="experience">
      <h1 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white border-b pb-4 border-gray-300 dark:border-gray-700">
        {" "}
        <PCIcon />
        Work Experience
      </h1>

      <TimeLine />
    </div>
  );
};
