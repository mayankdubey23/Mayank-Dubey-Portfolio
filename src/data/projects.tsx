import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
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
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
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
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
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
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI" />,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java" />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
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
  live: string;
};
const projects: Project[] = [
  {
    id: "softwaresbazar",
    category: "Web development",
    title: "SoftwaresBazar",
    src: "/assets/projects-screenshots/softwaresbazar/Softwaresbazar.png",
    screenshots: [
      "/assets/projects-screenshots/softwaresbazar/01.png",
      "/assets/projects-screenshots/softwaresbazar/02.png",
      "/assets/projects-screenshots/softwaresbazar/03.png",
      "/assets/projects-screenshots/softwaresbazar/04.png",
      "/assets/projects-screenshots/softwaresbazar/05.png",
      "/assets/projects-screenshots/softwaresbazar/Softwaresbazar.png",
    ],
    skills: { frontend: [], backend: [] },
    content: (
      <div>
        <p className="font-mono">
          A software marketplace landing page with clean product cards, pricing highlights, and a user-friendly storefront layout.
        </p>
        <div className="mt-6">
          <SlideShow
            images={[
              "/assets/projects-screenshots/softwaresbazar/01.png",
              "/assets/projects-screenshots/softwaresbazar/02.png",
              "/assets/projects-screenshots/softwaresbazar/03.png",
              "/assets/projects-screenshots/softwaresbazar/04.png",
              "/assets/projects-screenshots/softwaresbazar/05.png",
            ]}
          />
        </div>
      </div>
    ),
    live: "https://www.softwaresbazar.com/",
    github: "https://github.com/mayankdubey23",
  },
  {
    id: "iho-digital",
    category: "Web development",
    title: "IHO Digital",
    src: "/assets/projects-screenshots/ihodigital/IHO Digital.png",
    screenshots: ["/assets/projects-screenshots/ihodigital/IHO Digital.png"],
    skills: { frontend: [], backend: [] },
    content:
      "A digital agency website that showcases services, client work, and a modern contact section for businesses seeking online growth.",
    live: "https://github.com/mayankdubey23",
    github: "https://github.com/mayankdubey23",
  },
  {
    id: "pachewargarh-fort",
    category: "Web design",
    title: "Pachewargarh Fort",
    src: "/assets/projects-screenshots/pachewargarhfort/Pachewargarh Fort.png",
    screenshots: ["/assets/projects-screenshots/pachewargarhfort/Pachewargarh Fort.png"],
    skills: { frontend: [], backend: [] },
    content:
      "A heritage web page celebrating historic architecture with immersive visuals and a polished storytelling layout.",
    live: "https://github.com/mayankdubey23",
    github: "https://github.com/mayankdubey23",
  },
  {
    id: "vohi-creations",
    category: "Web application",
    title: "Vohi Creations",
    src: "/assets/projects-screenshots/vohicreations/vohicreations.png",
    screenshots: ["/assets/projects-screenshots/vohicreations/vohicreations.png"],
    skills: { frontend: [], backend: [] },
    content:
      "A creative studio landing page presenting designs, services, and portfolio work in a sleek, modern style.",
    live: "https://vohicreations.vercel.app/",
    github: "https://github.com/mayankdubey23",
  },
  {
    id: "green-beauty-nursery",
    category: "Web design",
    title: "Green Beauty Nursery",
    src: "/assets/projects-screenshots/greenbeautynursery/Green Beauty Nursery.png",
    screenshots: ["/assets/projects-screenshots/greenbeautynursery/Green Beauty Nursery.png"],
    skills: { frontend: [], backend: [] },
    content:
      "A botanical web design that highlights plant collections, care details, and a calm, nature-inspired browsing experience.",
    live: "https://github.com/mayankdubey23",
    github: "https://github.com/mayankdubey23",
  },
  {
    id: "jewellery-store",
    category: "Web design",
    title: "Jewellery Store",
    src: "/assets/projects-screenshots/jewellerystore/Jwelery Store.png",
    screenshots: ["/assets/projects-screenshots/jewellerystore/Jwelery Store.png"],
    skills: { frontend: [], backend: [] },
    content:
      "A luxury jewellery storefront concept featuring elegant product displays, category sections, and premium branding.",
    live: "https://github.com/mayankdubey23",
    github: "https://github.com/mayankdubey23",
  },
  {
    id: "music-player",
    category: "Web design",
    title: "Music Player",
    src: "/assets/projects-screenshots/musicplayer/Music Player.png",
    screenshots: ["/assets/projects-screenshots/musicplayer/Music Player.png"],
    skills: { frontend: [], backend: [] },
    content:
      "A sleek music player interface with intuitive playback controls, playlists, and bold audio-focused visual styling.",
    live: "https://github.com/mayankdubey23",
    github: "https://github.com/mayankdubey23",
  },
  {
    id: "weather-app",
    category: "Web application",
    title: "Weather App",
    src: "/assets/projects-screenshots/weatherapp/Weather App.png",
    screenshots: ["/assets/projects-screenshots/weatherapp/Weather App.png"],
    skills: { frontend: [], backend: [] },
    content:
      "A weather dashboard web app with city search, forecast cards, and a clean UI for quick daily weather insights.",
    live: "https://github.com/mayankdubey23",
    github: "https://github.com/mayankdubey23",
  },
  {
    id: "signin-signup-page",
    category: "Web design",
    title: "Signin & Signup Page",
    src: "/assets/projects-screenshots/signinsignup/Signin & Signup Page.png",
    screenshots: ["/assets/projects-screenshots/signinsignup/Signin & Signup Page.png"],
    skills: { frontend: [], backend: [] },
    content:
      "A polished authentication page design that presents sign-in and sign-up forms with a modern, user-first experience.",
    live: "https://github.com/mayankdubey23",
    github: "https://github.com/mayankdubey23",
  },
  {
    id: "muscle-headquarter",
    category: "Web development",
    title: "Muscle Headquarter",
    src: "/assets/projects-screenshots/muscleheadquarter/Muscle Headquarter.png",
    screenshots: ["/assets/projects-screenshots/muscleheadquarter/Muscle Headquarter.png"],
    skills: { frontend: [], backend: [] },
    content:
      "A fitness landing page concept that highlights workouts, trainers, and membership plans with bold visuals and strong branding.",
    live: "https://github.com/mayankdubey23",
    github: "https://github.com/mayankdubey23",
  },
];
export default projects;
