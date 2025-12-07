export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
}

export interface Project {
  id: string;
  title: string;
  role?: string;
  description: string;
  technologies: string[];
  period: string;
}

export interface Skill {
  name: string;
  category: 'Language' | 'Tool' | 'Platform' | 'Core';
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}