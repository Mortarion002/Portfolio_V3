import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import type { ReactNode } from "react";

type Hackathon = {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links?: {
    title: string;
    href: string;
    icon: ReactNode;
  }[];
};

// Define the WorkExperience type explicitly so TypeScript knows the shape of the array items
// even when the array is empty.
type WorkExperience = {
  company: string;
  href: string;
  badges: string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string;
};

export const DATA = {
  name: "Aman Kumar",
  initials: "AK",
  url: "https://my-portfolio-iota-taupe-96.vercel.app/",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  description: "Full Stack & Cloud-Native Developer",
  summary: "Hi, I’m Aman Kumar. I'm an AI Engineer focused on designing intelligent, agentic workflows and advanced RAG systems that solve real-world problems. I love taking AI models out of the notebook and into production by crafting the complete experience—from intuitive user interfaces down to the resilient, containerized cloud infrastructure and high-performance microservices that power them behind the scenes.",
  avatarUrl: "/me.png", // Ensure you have this image in your public folder or update the path

  skills: [
    "LangGraph",
    "LangChain",
    "LangSmith",
    "Vercel AI SDK",
    "RAG Pipelines",
    "Agentic Workflows",
    "A2A Protocol",
    "Prompt Engineering",
    "TypeScript",
    "JavaScript",
    "Python",
    "Go",
    "React.js",
    "Next.js",
    "React Native",
    "Tailwind CSS",
    "Node.js",
    "FastAPI",
    "Express.js",
    "NestJS",
    "PostgreSQL",
    "Redis",
    "Vector Databases",
    "Prisma ORM",
    "Docker",
    "GitHub Actions",
    "Vercel",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],

  contact: {
    email: "resoamankumar@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Mortarion002",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aman-kumar-537a73296/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/CloudKnight002",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:resoamankumar@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  // Cast the empty array to the specific type to avoid 'never' errors in page.tsx
  work: [] as WorkExperience[],

  education: [
    {
      school: "Pranveer Singh Institute of Technology, Kanpur",
      href: "https://psit.ac.in",
      degree: "Bachelor of Technology (B.Tech), Computer Science",
      logoUrl: "/psit.png",
      start: "2023",
      end: "2027",
    },
  ],

  projects: [
    {
      title: "Production-rag",
      href: "https://github.com/Mortarion002/Production-rag",
      dates: "2024",
      active: true,
      description:
        "A self-correcting RAG system built with LangGraph, Langsmith and FastAPI that employs a \"retrieve-grade-generate\" workflow to ensure high-accuracy answers.",
      technologies: ["LangGraph", "LangSmith", "FastAPI", "Python", "RAG"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Mortarion002/Production-rag",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Gig-Marketplace",
      href: "https://github.com/Mortarion002/Gig-Marketplace",
      dates: "2024",
      active: true,
      description:
        "A full-stack distributed gig economy platform that connects customers with nearby providers in real-time using Redis geo-spatial routing, WebSockets, and an interactive OpenStreetMap.",
      technologies: ["Next.js", "React Native", "Node.js", "PostgreSQL", "Prisma", "Redis", "WebSockets"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Mortarion002/Gig-Marketplace",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Agentic-AI",
      href: "https://github.com/Mortarion002/Agentic-AI",
      dates: "2024",
      active: true,
      description:
        "Advanced AI workflow and smart agent orchestrations built via Vercel AI-SDK @v5.",
      technologies: ["Vercel AI SDK", "TypeScript", "Next.js", "LLMs"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Mortarion002/Agentic-AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Rag-Vercel",
      href: "https://github.com/Mortarion002/Rag-Vercel",
      dates: "2024",
      active: true,
      description:
        "RAG Chatbot that stores data in a vector database allowing users to interactively query and analyze custom documents.",
      technologies: ["RAG", "Vector Database", "Next.js", "Vercel"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Mortarion002/Rag-Vercel",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Subscription_A2A",
      href: "https://github.com/Mortarion002/Subscription_A2A",
      dates: "2024",
      active: true,
      description:
        "A proof of concept agentic workflow to automate subscription cancellation seamlessly using Agent-to-Agent (A2A) protocols.",
      technologies: ["Agentic AI", "A2A Protocol", "Python"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Mortarion002/Subscription_A2A",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "music-sync",
      href: "https://github.com/Mortarion002/music-sync",
      dates: "2024",
      active: true,
      description:
        "A Windows specific app that synchronizes the playback of music across all the Windows devices it is running on.",
      technologies: ["Windows", "Electron", "WebSockets"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Mortarion002/music-sync",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [] as Hackathon[],
} as const;