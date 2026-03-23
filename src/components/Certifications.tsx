"use client";

import { useLanguage } from "@/context/LanguageContext";
import { FiAward, FiExternalLink } from "react-icons/fi";

const FiAwardIcon = FiAward as React.ElementType;
const FiExternalLinkIcon = FiExternalLink as React.ElementType;

export const Certifications = () => {
  const { t } = useLanguage();

  return (
    <div className="py-10" id="certifications">
      <h1 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white border-b pb-4 border-gray-700">
        <FiAwardIcon size={28} />
        {t.certifications.title}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.certifications.items.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 p-5 rounded-xl border border-gray-700 bg-white/5
              hover:border-orange-400/60 hover:bg-white/10 transition-all duration-200"
          >
            <span className="text-white text-lg font-semibold leading-snug">
              {cert.name}
            </span>
            <span className="text-orange-400 text-base">{cert.issuer}</span>
            <span className="flex items-center gap-1 text-gray-400 text-sm mt-auto group-hover:text-orange-400 transition-colors">
              {t.certifications.viewCertificate}
              <FiExternalLinkIcon size={13} />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};
