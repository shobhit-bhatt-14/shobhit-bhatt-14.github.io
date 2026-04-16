import type { ResumeData } from "../types";

export const siteUrl = "https://shobhit-bhatt-14.github.io";

export const resumeData: ResumeData = {
  name: "Shobhit Bhatt",
  title: "Full-Stack Software Developer",
  contact: {
    email: "shobhit.bhatt.14@gmail.com",
    linkedin: "https://linkedin.com/in/shobhit-bhatt",
    github: "https://github.com/shobhit-bhatt-14",
    resumeUrl:
      "https://drive.google.com/file/d/1e5EXcgK1gJ5tv4baAfU_W8nLk67En3ex/view?usp=drive_link",
  },
  summary:
    "Software Developer with 3+ years of full-stack experience, including team leadership and founding-engineer work on client projects. Skilled at collaborating with cross-functional teams, owning delivery end to end, and adapting quickly to new technologies.",
  skills: [
    {
      title: "Languages",
      skills: [
        "JavaScript",
        "TypeScript",
        "SQL",
        "HTML/CSS",
        "Python"
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "Next.js",
        "React",
        "Node.js",
        "Express",
        "Prisma",
        "Expo",
        "Google Workspace Development",
      ],
    },
    {
      title: "Databases",
      skills: ["Postgres", "MongoDB", "Firebase"],
    },
    {
      title: "Developer Tools",
      skills: [
        "Git",
        "VS Code",
        "Postman",
        "Prisma",
        "Tailwind CSS",
        "Material-UI",
      ],
    },
  ],
  experience: [
    {
      role: "Founding Engineer",
      company: "raxo.ai",
      period: "Jan 2026 - Apr 2026",
      points: [
        "Architected an AI platform using Next.js for high-performance video and content generation.",
        "Implemented a MongoDB schema and Stripe-integrated credit system to manage user subscriptions and assets.",
        "Led the end-to-end development of the MVP, ensuring technical scalability for generative AI workflows.",
      ],
    },
    {
      role: "Team Lead",
      company: "JS Tigers",
      period: "Feb 2025 - Dec 2025",
      points: [
        "Led a team of developers, fostering collaboration and overseeing the successful completion of projects from development through deployment.",
        "Increased team productivity by 20% through streamlined processes and improved communication.",
        "Mentored junior team members, resulting in a 30% improvement in team performance metrics.",
        "Regularly communicated project updates and team progress to senior management, ensuring alignment with organizational goals.",
      ],
    },
    {
      role: "Software Developer Partner",
      company: "JS Tigers",
      period: "Aug 2022 - Jan 2025",
      points: [
        "Implemented a real-time notification feature in React Native for an expense tracker app, enhancing seamless communication and reducing downtime by 20%.",
        "Implemented real-time status updates and communication channels using WebSocket, reducing information lag by 20% and minimizing manual intervention.",
        "Designed a complex data visualization dashboard for a logistics client, enabling a 15% increase in operational efficiency.",
        "Integrated Stripe payment gateway for secure and seamless transaction processing, enhancing user experience by ensuring reliable and efficient payment transactions.",
        "Automated data processing tasks using Google App Script, reducing manual effort by 50%.",
        "Provided daily technical support and maintenance for a full-stack HR management system using React, Node.js and MySQL, ensuring 99% uptime.",
      ],
    },
  ],
  education: [
    {
      institution: "Uttarakhand Technical University (BTKIT)",
      degree: "Bachelor of Technology (Computer Science and Engineering)",
      period: "2018 - 2022",
      score: "77%",
    },
    {
      institution: "Central Board of Secondary Education",
      degree: "Intermediate (PCMCs)",
      period: "2018",
      score: "72.3%",
    },
  ],
  projects: [
    {
      title: "Natural Language Database Querying",
      technologies: "OpenAI, LangChain, Python",
      description:
        "Developed a solution enabling natural language database queries, increasing non-technical user accessibility by 50%.",
    },
    {
      title: "Automated Data Scraping Tool",
      technologies: "Node.js, Puppeteer, PostgreSQL",
      description:
        "Created a data scraping tool that automates data collection and storage, improving data retrieval speed by 70%.",
    },
  ],
};
