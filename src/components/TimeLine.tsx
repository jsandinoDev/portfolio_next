"use client";

import { TimeLineItem } from "./TimeLineItem";
import { useLanguage } from "@/context/LanguageContext";

export const TimeLine = () => {
  const { t } = useLanguage();

  return (
    <ol className="relative border-s border-gray-700">
      {t.experience.jobs.map((job, index) => (
        <TimeLineItem
          key={index}
          fromDate={job.fromDate}
          toDate={job.toDate}
          workplace={job.workplace}
          title={job.title}
          description={job.description}
          link={job.link}
          current={job.current}
          currentLabel={t.experience.current}
          learnMoreLabel={t.experience.learnMore}
        />
      ))}
    </ol>
  );
};
