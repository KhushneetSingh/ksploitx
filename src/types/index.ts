export interface Project {
  id: string;
  slug: string;
  codename: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  coverImage?: string;
  featured: boolean;
  status: "DEPLOYED" | "WIP" | "ARCHIVED";
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface TimelineItem {
  id: string;
  type: "education" | "achievement" | "experience" | "research";
  title: string;
  subtitle: string;
  date: string;
  description: string;
  imageUrl?: string;
  link?: string;
}
