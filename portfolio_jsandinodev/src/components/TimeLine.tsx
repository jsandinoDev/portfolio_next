import { TimeLineItem } from "./TimeLineItem";

export const TimeLine = () => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      <TimeLineItem
        fromDate="Jul 2024"
        toDate=""
        title="Open Source Full Stack Developer"
        description="A comprehensive dashboard for managing e-commerce operations."
        link="#"
        current={true}
      />

      <TimeLineItem
        fromDate="Feb 2023"
        toDate=""
        title="Advanced Software Developer"
        description="A comprehensive dashboard for managing e-commerce operations."
        link="#"
        current={true}

      />

      <TimeLineItem
        fromDate="Aug 2021"
        toDate="Feb 2023"
        title="Software Engineer"
        description="A comprehensive dashboard for managing e-commerce operations."
        link="#"
        current={false}

      />
    </ol>
  );
};
