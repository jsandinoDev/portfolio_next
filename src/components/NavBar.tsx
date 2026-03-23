"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export const NavBar = () => {
  const { t, lang, toggleLang } = useLanguage();

  return (
    <header
      className="fixed top-0 z-10
        flex justify-center items-center py-5 w-full mx-auto
        "
    >
      <nav className="flex flex-row items-center gap-x-6 nav-header rounded-full px-4 py-1">
        <a
          href="#home"
          className="text-white hover:text-orange-400 transition-colors"
        >
          {t.nav.home}
        </a>
        <a
          href="#experience"
          className="text-white hover:text-orange-400 transition-colors"
        >
          {t.nav.experience}
        </a>
        <a
          href="#certifications"
          className="text-white hover:text-orange-400 transition-colors"
        >
          {t.nav.certifications}
        </a>
        <a
          href="#projects"
          className="text-white hover:text-orange-400 transition-colors"
        >
          {t.nav.projects}
        </a>
        <a
          href="#about"
          className="text-white hover:text-orange-400 transition-colors"
        >
          {t.nav.about}
        </a>

        <span className="w-px h-4 bg-gray-600" />

        <button
          onClick={toggleLang}
          aria-label="Toggle language"
          className="text-sm font-medium text-white hover:text-orange-400 transition-colors"
        >
          {lang === "en" ? "ES" : "EN"}
        </button>
      </nav>
    </header>
  );
};
