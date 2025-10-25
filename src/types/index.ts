export interface Contact {
  email: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  score: string;
}

export interface Project {
  title: string;
  technologies: string;
  description: string;
}

export interface ResumeData {
  name: string;
  title: string;
  contact: Contact;
  summary: string;
  skills: SkillCategory[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
}
