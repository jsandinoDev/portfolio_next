import { Dictionary } from "./en";

export const es: Dictionary = {
  nav: {
    home: "Inicio",
    experience: "Experiencia",
    projects: "Proyectos",
    certifications: "Certificaciones",
    about: "Sobre mí",
  },
  hero: {
    greeting: "Hola, soy Josue Sandino",
    tagline: "+7 años de experiencia.",
    role: "Desarrollador de software, Colaborador Open Source & Ingeniero de Confiabilidad.",
    location: "De Barva, Costa Rica 🇨🇷",
    github: "Github",
    linkedin: "LinkedIn",
    email: "Correo",
    resume: "Descargar CV",
  },
  experience: {
    title: "Experiencia Laboral",
    current: "Actual",
    learnMore: "Saber más",
    jobs: [
      {
        fromDate: "May 2025",
        toDate: "",
        workplace: "IBM",
        title: "Ingeniero de Confiabilidad",
        description:
          "SRE en IBM Cloud especializado en infraestructura de almacenamiento. Gestionando y optimizando clusters de Kubernetes, sistemas de almacenamiento NetApp y plataformas de almacenamiento distribuido Ceph. Diseñando e implementando despliegues automatizados, infraestructura como código y soluciones de alta disponibilidad. Enfocado en garantizar la confiabilidad, escalabilidad y rendimiento de los sistemas de almacenamiento en la nube, reduciendo la carga operativa mediante automatización y mejores prácticas.",
        link: "https://www.ibm.com/solutions/cloud",
        current: true,
      },
      {
        fromDate: "Jul 2024",
        toDate: "May 2025",
        workplace: "Only Dust",
        title: "Desarrollador Open Source W3",
        description:
          "Contribuí a proyectos blockchain de código abierto web3, especializándome en contratos inteligentes Cairo para StarkNet, desarrollo frontend en React y herramientas TypeScript/Rust. Colaboré con desarrolladores y mantenedores globales para implementar mejores prácticas en tecnología blockchain, asegurando el éxito del proyecto y fomentando la innovación en el ecosistema web3.",
        link: "https://app.onlydust.com/u/jsandinoDev",
        current: false,
      },
      {
        fromDate: "Ago 2021",
        toDate: "May 2025",
        workplace: "Growth Acceleration Partners",
        title: "Desarrollador de Software Avanzado",
        description:
          "Lideré la migración de sistemas heredados a plataformas modernas diseñando herramientas personalizadas y mapeos tecnológicos, asegurando una mínima interrupción. Colaboré con equipos multifuncionales para entregar soluciones orientadas al cliente, mientras mentoreaba ingenieros junior. Desarrollé herramientas de migración automatizadas para agilizar y mejorar el proceso de migración, aumentando la eficiencia y precisión.",
        link: "https://www.growthaccelerationpartners.com/services/transformation",
        current: false,
      },
    ],
  },
  certifications: {
    title: "Certificaciones",
    viewCertificate: "Ver Certificado",
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
    ],
  },
  projects: {
    title: "Proyectos",
    sourceCode: "Código fuente",
    visitWebsite: "Visitar sitio",
    items: [
      {
        img: "/starkcade.jpg",
        title: "Starkcade",
        description:
          "Una Arcade interactiva y descentralizada construida en Starknet. Actualmente trabajando en un juego descentralizado de CoinFlip en la blockchain de Starknet. El juego permite a los usuarios apostar por el resultado de un lanzamiento de moneda, con los resultados siendo determinados por un contrato inteligente desplegado en Starknet.",
        stack: ["React", "Nextjs", "TailwindCSS", "Rust"],
        previewLink: true,
        url: "https://starkcade.vercel.app/",
        urlGithub: "https://github.com/Chonete-Builders/Starkcade",
      },
      {
        img: "/travelwise.jpg",
        title: "TravelWise",
        description:
          "TravelWise es un asistente impulsado por IA diseñado para hacer tus experiencias de viaje fluidas y placenteras. Por el momento, solo enfocado en Costa Rica.",
        stack: ["TypeScript", "React", "Nextjs", "Python"],
        previewLink: true,
        url: "https://travel-wise-one.vercel.app/",
        urlGithub: "https://github.com/Chonete-Builders/TravelWise",
      },
      {
        img: "/valudfoods.jpg",
        title: "Valud Foods",
        description:
          "Plataforma web de comercio electrónico para Valud Food, una empresa costarricense, que permite pedidos en línea y engagement con clientes de manera fluida.",
        stack: ["Wordpress"],
        previewLink: true,
        url: "https://valudfoods.com/",
        urlGithub: "",
      },
    ],
  },
  about: {
    title: "Sobre mí",
    paragraphs: [
      {
        text: "Mi nombre es Josué Sandino, pero en la comunidad tecnológica muchas personas me conocen como jsandinoDev. Soy un ",
        highlight:
          "desarrollador full-stack e Ingeniero de Confiabilidad con experiencia en TypeScript, C# e infraestructura",
        rest: ". Mi camino en informática comenzó a los 12 años, con intentos fallidos de descargar juegos, y desde entonces mi pasión por el desarrollo de software y la ingeniería de sistemas no ha hecho más que crecer.",
        highlight2: "",
        rest2: "",
      },
      {
        text: "Me especializo en diseñar y gestionar ",
        highlight:
          "sistemas distribuidos complejos, orquestación con Kubernetes e infraestructura en la nube",
        rest: ". Con amplio conocimiento en Linux y experiencia práctica con sistemas de almacenamiento como NetApp y Ceph, me enfoco en construir soluciones resilientes y escalables. También estoy ampliando mi experiencia en ",
        highlight2:
          "tecnologías web3 y desarrollo de IA, creando proyectos que conectan infraestructura e innovación",
        rest2: ".",
      },
      {
        text: "Cuando no estoy diseñando sistemas o escribiendo código, me encontrarás levantando pesas, jugando videojuegos o explorando tecnologías emergentes. Tengo una profunda pasión por la música — toco guitarra, saxofón, piano y ukelele. El techno clásico y minimalista alimenta mis sesiones de concentración. ",
        highlight: "El código abierto es mi patio de juegos",
        rest: ", y siempre estoy construyendo soluciones innovadoras e impactantes. ♭",
        highlight2: "",
        rest2: "",
      },
    ],
  },
};
