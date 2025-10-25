"use client";

import { useState } from "react";
import MenuIcon from "@/icons/menu";
import XIcon from "@/icons/cross";
import { resumeData } from "@/utils/constants";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: resumeData.contact.resumeUrl, label: "Resume" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  const renderNavLink = (
    link: (typeof navLinks)[0],
    isMobile: boolean = false
  ) => {
    const isExternal = link.href.startsWith("http");

    return (
      <a
        key={link.href}
        href={link.href}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : undefined}
        onClick={closeMenu}
        className={
          isExternal
            ? "border border-primary text-primary px-2 py-0.5 rounded-md hover:bg-primary hover:text-background"
            : `hover:text-primary font-medium ${isMobile ? "text-lg" : ""}`
        }
      >
        {link.label}
      </a>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xs">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-2xl font-bold hover:text-primary">
            SB
          </a>
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => renderNavLink(link))}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } backdrop-blur-sm absolute top-20 left-0 right-0`}
      >
        <div className="flex flex-col items-center space-y-4 py-8">
          {navLinks.map((link) => renderNavLink(link, true))}
        </div>
      </div>
    </header>
  );
}
