import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Alejandro Múnez — Mobile & Web Developer",
  author: "Alejandro Múnez Cuntez",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    // { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    // { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    // { text: "Github", href: "https://github.com/immois/astro-zen" },
    // { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    // { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Fawad Ahsen",
    specialty: "Senior Full Stack Developer - Elixir",
    summary:
      "I’m a seasoned Senior Full Stack Software Engineer with over five years of hands-on experience building scalable, reliable applications and designing resilient system architectures. Consequently I have a deep passion for the Elixir and Phoenix ecosystem—especially API development, real‑time systems, and cloud integration.",
    email: "fawad.ahsan22@gmail.com",
  },
  experience: [
    {
      company: "Appwrok Technologies - USA (Property Maintenance Software)",
      position: "Senior Full Stack Developer - Elixir",
      startDate: "Oct 2023",
      endDate: "Present",
      summary: [
        "Working on Elixir/Phoenix-based backend systems with a strong focus on performance, reliability, and user experience.",
        "I lead the development of new features, resolve production-critical bugs, and optimize slow database queries in high-traffic environments.",
        "My daily toolkit includes GenServers, REST APIs, Oban for background jobs, and PostgreSQL.",
      ],
    },
    {
      company: "Picsello - USA (Photography Platform)",
      position: "Senior Elixir Developer",
      startDate: "Jan 2021",
      endDate: "Sept 2023",
      summary: [
        "Developed feature-rich LiveView applications, including booking systems, business email automation with SendGrid, external calendar integration via Nylas, and bulk image uploads with multi-zip support using GCP.",
        "Maintained high code quality through comprehensive test coverage, static analysis tools like Credo and Dialyzer, and clean architecture practices in an Elixir/Phoenix environment.",
      ],
    },
    {
      company: "SafeBoda - Uganda (Ride-hailing App)",
      position: "Senior Backend Developer - Elixir",
      startDate: "April 2020",
      endDate: "Sept 2021",
      summary: [
        "Contributed to Safeboda’s migration from a legacy PHP codebase to scalable Elixir microservices, leading the development of services for the ride lifecycle, user authentication, and later extending into the fintech domain.",
        "Built interactive tools with Phoenix LiveView, GraphQL, REST APIs, and JavaScript Hooks to enhance civic engagement workflows."
        ]
    },
    {
      company: "ViewPro GIS - USA (Real Estate Platform)",
      position: "Senior Backend Developer - Elixir",
      startDate: "April 2020",
      endDate: "Sept 2021",
      summary: [
        "Developed dynamic mapping features using ESRI ArcGIS integrations and configured admin-driven spatial data visualization.",
        "Developed and maintained features in the admin dashboard, including onboarding flows for vendors and riders, operational stats, and business reporting. Tech stack included Elixir, GenServers, GraphQL, RabbitMQ, Kafka, and Phoenix."
      ]
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Alejandro Múnez, a passionate Mobile and Web Developer with a knack for crafting seamless digital experiences. With a strong background in both Android and iOS development, as well as front-end web technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff
