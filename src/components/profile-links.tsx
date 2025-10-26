import { resumeData } from "@/utils/constants";

import LinkedinIcon from "@/icons/linkedin";
import GithubIcon from "@/icons/github";
import MailIcon from "@/icons/mail";

const socialData = [
  {
    href: resumeData.contact.linkedin,
    label: "LinkedIn",
    icon: <LinkedinIcon />,
  },
  {
    href: resumeData.contact.github,
    label: "GitHub",
    icon: <GithubIcon />,
  },
  {
    href: `mailto:${resumeData.contact.email}`,
    label: "Email",
    icon: <MailIcon />,
  },
];

export default function ProfileLinks() {
  return (
    <div className="flex justify-center items-center space-x-6">
      {socialData.map(({ href, label, icon }) => (
        <a
          key={"hero-social-" + label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-primary transition-transform duration-300 hover:scale-110"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
