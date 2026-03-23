export const en = {
  nav: {
    home: "Home",
    experience: "Experience",
    projects: "Projects",
    certifications: "Certifications",
    about: "About",
  },
  hero: {
    greeting: "Hey, I'm Josue Sandino",
    tagline: "+7 years of experience.",
    role: "Software developer, Open Source Contributor & Site Reliability Engineer.",
    location: "From Barva, Costa Rica 🇨🇷",
    github: "Github",
    linkedin: "LinkedIn",
    email: "Email",
    resume: "Download resume",
  },
  experience: {
    title: "Work Experience",
    current: "Current",
    learnMore: "Learn more",
    jobs: [
      {
        fromDate: "May 2025",
        toDate: "",
        workplace: "IBM",
        title: "Site Reliability Engineer",
        description:
          "SRE at IBM Cloud specializing in Storage infrastructure. Managing and optimizing Kubernetes clusters, NetApp storage systems, and Ceph distributed storage platforms. Designing and implementing automated deployments, infrastructure as code, and high-availability solutions. Focused on ensuring reliability, scalability, and performance of cloud storage systems while reducing operational overhead through automation and best practices.",
        link: "https://www.ibm.com/solutions/cloud",
        current: true,
      },
      {
        fromDate: "Jul 2024",
        toDate: "May 2025",
        workplace: "Only Dust",
        title: "Open Source Developer W3",
        description:
          "Contributed to open-source web3 blockchain projects, specializing in Cairo smart contracts for StarkNet, React front-end development, and TypeScript/Rust tooling. Collaborated with global developers and maintainers to implement best practices in blockchain technology, ensuring project success and fostering innovation in the web3 ecosystem.",
        link: "https://app.onlydust.com/u/jsandinoDev",
        current: false,
      },
      {
        fromDate: "Aug 2021",
        toDate: "May 2025",
        workplace: "Growth Acceleration Partners",
        title: "Advanced Software Developer",
        description:
          "Led the migration of legacy systems to modern platforms by designing custom tools and technology mappings, ensuring minimal disruption. Collaborated with cross-functional teams to deliver client-focused solutions while mentoring junior engineers. Developed automated migration tools to streamline and improve the migration process, enhancing efficiency and accuracy.",
        link: "https://www.growthaccelerationpartners.com/services/transformation",
        current: false,
      },
    ],
  },
  certifications: {
    title: "Certifications",
    viewCertificate: "View Certificate",
    items: [
      {
        name: "Certified Kubernetes Administrator",
        issuer: "CNCF / Linux Foundation",
        link: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/16fc2cfb-601a-4c3a-a8a4-bf3552468c6e-josu-sandino-b0cae109-d7a5-4c90-862b-41e87d92417b-certificate.pdf",
      },
      {
        name: "Machine Learning Specialization",
        issuer: "Coursera / DeepLearning.AI",
        link: "https://www.coursera.org/account/accomplishments/specialization/YKRPWLAB6KBS",
      },
      {
        name: "Microsoft Azure Fundamentals",
        issuer: "Microsoft",
        link: "https://learn.microsoft.com/en-us/users/josuesandino/credentials/60a548edbbf1e3ab",
      },
      {
        name: "NetApp Accredited Cloud Native Associate",
        issuer: "NetApp",
        link: "https://www.credly.com/badges/efdde5e6-e76d-42c3-a98b-6afe99d121c4/linked_in_profile",
      },
      {
        name: "Data Analysis with Pandas and Python",
        issuer: "Udemy",
        link: "https://www.udemy.com/certificate/UC-89f80527-6712-4f15-8bf2-f4c34210c9c7/",
      },
      {
        name: "Ethereum Developer Pack",
        issuer: "Universidad Cenfotec",
        link: "https://www.linkedin.com/in/jsandino/details/education/1732220330218/single-media-viewer/?profileId=ACoAADSO53YBycAmpxvbymIQmzn1v2BZZTo29zk",
      },
    ],
  },
  projects: {
    title: "Projects",
    sourceCode: "Source code",
    visitWebsite: "Visit Website",
    items: [
      {
        img: "/starkcade.jpg",
        title: "Starkcade",
        description:
          "An interactive and decentralized Arcade built on the Starknet. Currently working on a decentralized CoinFlip game on the Starknet blockchain. The game allows users to bet on the outcome of a coin flip, with the results being determined by a smart contract deployed on Starknet.",
        stack: ["React", "Nextjs", "TailwindCSS", "Rust"],
        previewLink: true,
        url: "https://github.com/Chonete-Builders/Starkcade",
        urlGithub: "https://github.com/Chonete-Builders/Starkcade",
      },
      {
        img: "/travelwise.jpg",
        title: "TravelWise",
        description:
          "TravelWise is an AI-powered assistant designed to make your travel experiences seamless and enjoyable. For the moment only focused on Costa Rica.",
        stack: ["TypeScript", "React", "Nextjs", "Python"],
        previewLink: true,
        url: "https://github.com/Chonete-Builders/TravelWise",
        urlGithub: "https://github.com/Chonete-Builders/TravelWise",
      },
      {
        img: "/valudfoods.jpg",
        title: "Valud Foods",
        description:
          "E-commerce web platform for Valud Food, a Costa Rican company, enabling seamless online ordering and customer engagement.",
        stack: ["Wordpress"],
        previewLink: true,
        url: "https://valudfoods.com/",
        urlGithub: "",
      },
    ],
  },
  about: {
    title: "About me",
    paragraphs: [
      {
        text: "My name is Josué Sandino, but in the technology community many people know me as jsandinoDev. I'm a ",
        highlight:
          "full-stack developer and Site Reliability Engineer with expertise in TypeScript, C#, and infrastructure",
        rest: ". My computer science journey started at the age of 12, with unsuccessful attempts to download games, and since then, my passion for software development and systems engineering has only grown.",
        highlight2: "",
        rest2: "",
      },
      {
        text: "I specialize in designing and managing ",
        highlight:
          "complex distributed systems, Kubernetes orchestration, and cloud infrastructure",
        rest: ". With deep Linux knowledge and hands-on experience with storage systems like NetApp and Ceph, I focus on building resilient, scalable solutions. I'm also expanding my expertise in ",
        highlight2:
          "web3 technologies and AI development, creating projects that bridge infrastructure and innovation",
        rest2: ".",
      },
      {
        text: "When I'm not architecting systems or writing code, you'll find me lifting weights, playing video games, or exploring emerging technologies. I have a deep passion for music— I play guitar, saxophone, piano, and ukulele. Classic and minimal techno fuel my focus sessions. ",
        highlight: "Open source is my playground",
        rest: ", and I'm always building innovative, impactful solutions. ♭",
        highlight2: "",
        rest2: "",
      },
    ],
  },
};

export type Dictionary = typeof en;
