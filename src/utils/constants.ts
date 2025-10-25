import type { ResumeData } from "../types";

export const resumeData: ResumeData = {
  name: "Shobhit Bhatt",
  title: "Full-Stack Software Developer",
  contact: {
    email: "shobhit.bhatt.14@gmail.com",
    linkedin: "https://linkedin.com/in/shobhit-bhatt",
    github: "https://github.com/shobhit-bhatt-14",
    resumeUrl:
      "https://drive.google.com/file/d/16Mz56aw60P-o3X22IFnVFF2CCaw-5wA1/view?usp=sharing",
  },
  summary:
    "Software Developer with 3 years of experience specializing in full-stack development. Adept at collaborating with teams to deliver high-quality solutions and skilled in independently managing projects to ensure timely delivery. Passionate about learning new technologies and contributing to diverse projects.",
  skills: [
    {
      title: "Languages",
      skills: [
        "JavaScript",
        "TypeScript",
        "SQL",
        "HTML/CSS",
        "Python",
        "Java",
        "C/C++",
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "Next.js",
        "React.js",
        "Node.js",
        "Express",
        "React Native",
        "Prisma",
        "Tailwind CSS",
        "Material-UI",
      ],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Firebase"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "VS Code", "Postman", "Google Workspace Development"],
    },
  ],
  experience: [
    {
      role: "Team Lead",
      company: "JS Tigers",
      period: "Feb 2025 - Present",
      points: [
        "Led a team of developers, fostering collaboration and overseeing the successful completion of projects from development through deployment.",
        "Increased team productivity by 20% through streamlined processes and improved communication.",
        "Mentor junior team members, resulting in a 30% improvement in team performance metrics.",
        "Regularly communicated project updates and team progress to senior management, ensuring alignment with organizational goals.",
      ],
    },
    {
      role: "Software Developer Partner",
      company: "JS Tigers",
      period: "Aug 2022 - Jan 2025",
      points: [
        "Implemented Mobile Notification System in React Native for an expense tracker app, enhancing communication and reducing downtime by 20%.",
        "Implemented real-time status updates and communication channels using WebSocket, reducing information lag by 20%.",
        "Designed a complex data visualization dashboard for a logistics client, enabling a 15% increase in operational efficiency.",
        "Integrated Stripe payment gateway for secure and seamless transaction processing.",
        "Automated data processing tasks using Google App Script, reducing manual effort by 50%.",
        "Provided daily technical support for a full-stack HR management system using React, Node.js and MySQL, ensuring 99% uptime.",
      ],
    },
    {
      role: "Associate Software Developer Intern",
      company: "Akrity Computing",
      period: "Feb 2022 - May 2022",
      points: [
        "Contributed to UI development for the company website using React, improving user experience by 25%.",
        "Collaborated with senior developers to design and implement features using Ruby on Rails.",
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
