import React from "react";

export const NavBar = () => {
  return (
    <header
      className="fixed top-0 z-10  
        flex justify-center items-center py-5 w-full mx-auto
        "
    >
      <nav className="flex flex-row gap-x-8 nav-header rounded-full px-3">
        <a
          href="#home"
          className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-orange-400 transition-colors"
        >
          Home
        </a>
        <a
          href="#experience"
          className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-orange-400 transition-colors"
        >
          Experience
        </a>
        <a
          href="#projects"
          className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-orange-400 transition-colors"
        >
          Projects
        </a>
        <a
          href="#about"
          className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-orange-400 transition-colors"
        >
          About
        </a>
      </nav>
    </header>
  );
};

