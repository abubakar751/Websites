export interface Project {
  id: number;
  title: string;
  description: string;
  skills: string[];
  images: string[];
  achievements?: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  description?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}