import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

// Client-side socket connection with updated URL

// ProjectsLinks component for repo links
const ProjectsLinks = ({ repo }: { repo?: string }) => {
  console.log('repo:', repo); // Add this to debug

  if (!repo) {
    return <div>No GitHub link available</div>;
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener noreferrer"
        target="_blank"
        href={repo}
      >
        <Button variant={"default"} size={"sm"}>
          Github
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },

  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
};

const projects: Project[] = [
  {
    id: "books-recommendation",
    category: "Web App",
    title: "Books Recommendation",
    src: "/assets/projects-screenshots/bookrecommenadtion.png",
    screenshots: ["bookrecommendation.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js, PROJECT_SKILLS.chakra],
      backend: [],
    },
    github: "https://github.com/tubakhxn/CODSOFT",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A web application that recommends books based on user preferences.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "image-categorizing",
    category: "Web App",
    title: "Image Categorizing",
    src: "/assets/projects-screenshots/imagecaptioning.png",
    screenshots: ["imagecaptioning.png"],
    skills: {
      frontend: [PROJECT_SKILLS.js],
      backend: [],
    },
    github: "https://github.com/tubakhxn/CODSOFT",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            An application that categorizes images based on user input.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "mini-netflix",
    category: "Web App",
    title: "Mini Netflix",
    src: "/assets/projects-screenshots/mininetflix.png",
    screenshots: ["mininetflix.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js],
      backend: [],
    },
    github: "https://github.com/tubakhxn/mininetflix",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A mini version of Netflix that allows users to browse and watch movies.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "to-do-list",
    category: "Web App",
    title: "To Do List",
    src: "/assets/projects-screenshots/to-do.png",
    screenshots: ["to-do.png"],
    skills: {
      frontend: [PROJECT_SKILLS.js],
      backend: [],
    },
    github: "https://github.com/tubakhxn/to-do-list",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A simple to-do list application to manage tasks efficiently.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "video-audio-encoding",
    category: "Web App",
    title: "Video Audio Encoding",
    src: "/assets/projects-screenshots/vide.png",
    screenshots: ["vide.png"],
    skills: {
      frontend: [PROJECT_SKILLS.js],
      backend: [],
    },
    github: "https://github.com/tubakhxn/XP3Player",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A web application for encoding video and audio files.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "tic-tac-toe",
    category: "Web App",
    title: "Tic Tac Toe",
    src: "/assets/projects-screenshots/xo.png",
    screenshots: ["xo.png"],
    skills: {
      frontend: [PROJECT_SKILLS.js],
      backend: [],
    },
    github: "https://github.com/tubakhxn/CODSOFT/tree/main/tictactor",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A classic Tic Tac Toe game for two players.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
        </div>
      );
    },
  },
];

// Keep other projects same as they were (only edited the format of exporting)
// Same adjustments are applied to the other project entries

export default projects;
