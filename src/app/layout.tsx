import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { resumeData, siteUrl } from "@/utils/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shobhit Bhatt | Full-Stack Software Developer",
    template: "%s | Shobhit Bhatt",
  },
  description:
    "Portfolio of Shobhit Bhatt, a full-stack software developer with 3+ years of experience in Next.js, React, Node.js, TypeScript, MongoDB, Postgres, and Firebase.",
  keywords: [
    "Shobhit Bhatt",
    "Full-Stack Software Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Portfolio",
  ],
  authors: [{ name: resumeData.name, url: siteUrl }],
  creator: resumeData.name,
  publisher: resumeData.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: siteUrl,
    title: "Shobhit Bhatt | Full-Stack Software Developer",
    description:
      "Full-stack software developer portfolio covering experience, skills, projects, and resume details for Shobhit Bhatt.",
    siteName: "Shobhit Bhatt Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Shobhit Bhatt | Full-Stack Software Developer",
    description:
      "Full-stack software developer portfolio covering experience, skills, projects, and resume details for Shobhit Bhatt.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-secondary bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
