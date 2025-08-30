import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Fawad Ahsen — Elixir Specialist | Available for New Opportunities",
  author: "Fawad Ahsen",
  description:
    "Senior Elixir Engineer with 5+ years building scalable systems. Open to new opportunities and consulting projects.",
  lang: "en",
  siteLogo: "/fawad-profile-small.jpeg",
  navLinks: [
    { text: "About", href: "#about" },
    { text: "Journey", href: "#journey" },
    { text: "Expertise", href: "#expertise" },
    { text: "How I Work", href: "#workstyle" },
    { text: "Projects", href: "#projects" },
    { text: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/fawadahsen156/" },
    { text: "GitHub", href: "https://github.com/fawidev" },
    { text: "Email", href: "mailto:fawad.ahsan22@gmail.com" },
    { text: "WhatsApp", href: "https://wa.me/923344143936" },
  ],
  socialImage: "",
  canonicalURL: "https://ifawi.com",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Fawad Ahsen",
    specialty: "Senior Full Stack Software Engineer - Elixir",
    summary:
      "5+ years building fault-tolerant, concurrent systems with Elixir/Phoenix. I help companies scale their applications and embrace the 'Let it crash' philosophy. Currently available for new opportunities and consulting projects.",
    email: "fawad.ahsan22@gmail.com",
    tagline: "Turn their vision into reality"
  },
  journey: [
    {
      company: "Appwrok Technologies - USA (Property Maintenance Software)",
      position: "Senior Full Stack Developer - Elixir",
      startDate: "Oct 2023",
      endDate: "Present",
      summary: [
        "Leading Elixir/Phoenix development for property maintenance platform serving thousands of users",
        "Architected fault-tolerant systems using GenServers and OTP supervision trees",
        "Optimized database performance handling 100k+ queries/day with PostgreSQL",
        "Implemented real-time features using Phoenix LiveView and PubSub"
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
      startDate: "Sept 2021",
      endDate: "Nov 2021",
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
      name: "Appwork Technologies",
      summary: "Leading Elixir/Phoenix development for property maintenance platform serving thousands of users. Built fault-tolerant systems using GenServers and OTP supervision trees.",
      linkPreview: "https://appworkco.com/",
      image: "/Appwork-project.png", // We'll need to add this logo
    },
    {
      name: "Picsello",
      summary: "Developed feature-rich LiveView applications, including booking systems, business email automation with SendGrid, external calendar integration via Nylas, and bulk image uploads with multi-zip support using GCP.",
      linkPreview: "https://www.picsello.com/",
      image: "/Picsello-Project.png",
    },
    {
      name: "SafeBoda",
      summary: "Contributed to Safeboda's migration from a legacy PHP codebase to scalable Elixir microservices, leading the development of services for the ride lifecycle, user authentication, and extending into the fintech domain.",
      linkPreview: "https://www.safeboda.com/",
      image: "/SafeBoda-project.png",
    },
  ],
  expertise: {
    description: "My expertise centers around building resilient, concurrent systems with Elixir. Here's my technical toolkit:",
    categories: [
      {
        title: "Backend",
        items: [
          { name: "Elixir", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg" },
          { name: "Phoenix", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phoenix/phoenix-original.svg" },
          { name: "Phoenix LiveView", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phoenix/phoenix-original.svg" },
          { name: "OTP", logo: "https://www.vectorlogo.zone/logos/erlang/erlang-icon.svg" },
          { name: "GenServers", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/erlang/erlang-original.svg" },
          { name: "Supervisors", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/erlang/erlang-original-wordmark.svg" },
          { name: "Ecto", logo: "https://hexdocs.pm/ecto/assets/logo.png" },
          { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
          { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
        ]
      },
      {
        title: "Databases",
        items: [
          { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
          { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
          { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
          { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
          { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" }
        ]
      },
      {
        title: "Cloud & DevOps",
        items: [
          { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
          { name: "AWS Lambda", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
          { name: "GCP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
          { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
          { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
          { name: "RabbitMQ", logo: "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg" },
          { name: "Kafka", logo: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg" },
          { name: "Oban", logo: "https://raw.githubusercontent.com/sorentwo/oban/main/assets/oban-logo.svg" }
        ]
      },
      {
        title: "Frontend & APIs",
        items: [
          { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
          { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
          { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
          { name: "REST APIs", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
          { name: "Websockets", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phoenix/phoenix-original.svg" }
        ]
      }
    ]
  },
  workstyle: {
    title: "How I Work Remotely",
    description: "Working remotely for 5+ years has taught me that success isn't about where you work—it's about how you work. I've mastered the art of building meaningful relationships, delivering exceptional results, and creating seamless collaboration experiences across time zones. My approach combines technical excellence with genuine care for client satisfaction.",
    image: "/fawad-work.jpeg",
    highlights: [
      {
        icon: "🎯",
        title: "Client-First Mindset", 
        description: "Your success is my success. I go beyond coding to understand your business goals and deliver solutions that create real value."
      },
      {
        icon: "💬",
        title: "Crystal Clear Communication",
        description: "Daily updates, transparent progress tracking, and proactive communication. You'll always know where your project stands."
      },
      {
        icon: "⚡", 
        title: "Rapid Response Time",
        description: "Average response time under 2 hours during business hours. Urgent issues? I'm available for immediate consultation."
      },
      {
        icon: "🔄",
        title: "Agile Collaboration",
        description: "Weekly demos, iterative feedback loops, and flexible adaptations. Your input shapes every development cycle."
      },
      {
        icon: "🛡️",
        title: "Quality Assurance",
        description: "Comprehensive testing, code reviews, and documentation. Every deliverable meets enterprise-grade standards."
      },
      {
        icon: "🌍",
        title: "Global Perspective",
        description: "Experience working with teams across US, Europe, and Africa. I understand diverse working styles and cultural nuances."
      }
    ]
  },
  about: {
    description: `
      Hi, I'm Fawad Ahsen, a seasoned Senior Full Stack Software Engineer with over five years of hands-on experience building scalable, reliable applications and designing resilient system architectures. I have a deep passion for the Elixir and Phoenix ecosystem—especially API development, real‑time systems, and cloud integration.

      Throughout my career, I've contributed to diverse projects from ride-hailing platforms like SafeBoda to photography platforms like Picsello, and property maintenance software at Appwrok Technologies. I specialize in building feature-rich LiveView applications, implementing background job processing with Oban, and creating robust REST APIs and GraphQL services that handle high-traffic environments.
    `,
    image: "/fawad-profile.jpeg",
  },
};

// #5755ff
