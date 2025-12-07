import { Experience, Project, Skill, Award } from './types';

export const PERSONAL_INFO = {
  name: "Collins Kiplagat",
  title: "Software Developer",
  location: "Nairobi, Kenya",
  email: "collinskiplagat8@gmail.com",
  phone: "+254 710 655 304",
  summary: "I am a dedicated Software Developer currently working full-time at Guru Solutions, focusing on building robust .NET applications. I am also actively rebuilding StoreYako.com, a cloud-based inventory management system, leveraging the performance of Rust for the backend and TypeScript for a responsive, modern frontend. I am passionate about creating efficient, scalable software and solving complex technical challenges."
};

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-guru",
    role: "Software Developer",
    company: "Guru Solutions",
    period: "2024 - Present",
    description: "Developing a Content Management System (CMS) using C#, Blazor, ASP.NET Razor Pages, MVC, and the .NET ecosystem. Designed and implemented feature enhancements to streamline content workflows, boosting system efficiency and usability. Collaborated with cross-functional teams to align technical execution with business goals.",
    technologies: ["C#", "Blazor", "ASP.NET Core"]
  },
  {
    id: "exp-storeyako",
    role: "Software Developer",
    company: "StoreYako",
    period: "2023 - Present",
    description: "Currently rebuilding the platform to enhance performance and scalability. Migrating the backend to Rust to leverage its safety and speed, while re-engineering the frontend using TypeScript to deliver a seamless user experience.",
    technologies: ["Rust", "TypeScript", "React"]
  },
  {
    id: "exp-mpesa",
    role: "Cyber Security Intern",
    company: "M-PESA Africa",
    period: "Mar 2022 - Sept 2022",
    description: "Participated in key projects that strengthened security across multiple countries. Collaborated with teams to implement advanced tools for improved protection (EDR) and resolved deployment issues to ensure compliance and seamless integration.",
    technologies: ["Security Analysis", "EDR (Mandiant)", "Network Security"]
  }
];

export const SKILLS: Skill[] = [
  { name: "Rust", category: "Language" },
  { name: "C#", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "SQL (Postgres)", category: "Language" },
  
  { name: "ASP.NET Core", category: "Platform" },
  { name: "Blazor", category: "Platform" },
  { name: "NextJs & ReactJs", category: "Platform" },
  { name: "Axum", category: "Platform" },

  { name: "Linux", category: "Core" },
];

export const AWARDS: Award[] = [
  {
    id: "award-1",
    title: "WhiteHat Hall of Fame",
    issuer: "Safaricom"
  },
  {
    id: "award-2",
    title: "WhiteHat Hall of Fame",
    issuer: "Telekom"
  }
];

export const EDUCATION = {
  degree: "Bachelor of Science in Computer Science",
  school: "Kabarak University",
  year: "2018 - 2022"
};