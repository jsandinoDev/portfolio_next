import { TimeLineItem } from "./TimeLineItem";

export const TimeLine = () => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      <TimeLineItem
        fromDate="Nov 2024"
        toDate=""
        workplace="Chonete Builders"
        title="Senior Full Stack Developer & Founder"
        description="I co-founded Chonete Builder to provide software development services. 
        Currently we are working on web3 solutions with AI integrated."
        link="https://github.com/Chonete-Builders"
        current={true}
      />

      <TimeLineItem
        fromDate="Jul 2024"
        toDate=""
        workplace="Only Dust"
        title="Open Source Full Stack Developer"
        description="Contributed to open-source web3 blockchain projects, specializing in Cairo smart contracts for StarkNet,
         React front-end development, and TypeScript/Rust tooling. Collaborated with global developers and maintainers
          to implement best practices in blockchain technology, ensuring project success and fostering innovation 
          in the web3 ecosystem."
        link="https://app.onlydust.com/u/jsandinoDev"
        current={true}
      />

      <TimeLineItem
        fromDate="Feb 2023"
        toDate=""
        workplace="Growth Acceleration Partners"
        title="Advanced Software Developer"
        description="Led the migration of legacy systems to modern platforms by designing custom 
        tools and technology mappings, ensuring minimal disruption. Collaborated with cross-functional 
        teams to deliver client-focused solutions while mentoring junior engineers. Developed automated 
        migration tools to streamline and improve the migration process, enhancing efficiency and accuracy."
        link="https://www.growthaccelerationpartners.com/services/transformation"
        current={true}
      />

      <TimeLineItem
        fromDate="Aug 2021"
        toDate="Feb 2023"
        workplace="Growth Acceleration Partners"
        title="Software Engineer"
        description="Contributed to the modernization of several applications, improving performance and scalability.
                Adapted and executed over 900 Ranorex automated test cases to ensure software quality and stability.
                Created and maintained continuous integration (CI) environments, automating deployments, integrations, and
                testing using Azure DevOps tools."
        link="https://www.growthaccelerationpartners.com/services/transformation"
        current={false}
      />
    </ol>
  );
};
