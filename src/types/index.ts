export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  journey: ExperienceProps[];
  projects: ProjectProps[];
  expertise: ExpertiseProps;
  workstyle: WorkStyleProps;
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
  tagline: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface ExpertiseProps {
  description: string;
  categories: SkillCategory[];
}

export interface SkillCategory {
  title: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  logo: string;
}

export interface WorkStyleProps {
  title: string;
  description: string;
  image: string;
  highlights: WorkHighlight[];
}

export interface WorkHighlight {
  icon: string;
  title: string;
  description: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
