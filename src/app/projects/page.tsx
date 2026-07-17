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
  next: { title: "Next.js", bg: "black", fg: "white", icon: <RiNextjsFill /> },
  chakra: { title: "Chakra UI", bg: "black", fg: "white", icon: <SiChakraui /> },
  node: { title: "Node.js", bg: "black", fg: "white", icon: <RiNodejsFill /> },
  python: { title: "Python", bg: "black", fg: "white", icon: <SiPython /> },
  prisma: { title: "prisma", bg: "black", fg: "white", icon: <SiPrisma /> },
  postgres: { title: "PostgreSQL", bg: "black", fg: "white", icon: <SiPostgresql /> },
  mongo: { title: "MongoDB", bg: "black", fg: "white", icon: <SiMongodb /> },
  express: { title: "Express", bg: "black", fg: "white", icon: <SiExpress /> },
  reactQuery: { title: "React Query", bg: "black", fg: "white", icon: <SiReactquery /> },
  shadcn: { title: "ShanCN UI", bg: "black", fg: "white", icon: <SiShadcnui /> },
  aceternity: { title: "Aceternity", bg: "black", fg: "white", icon: <AceTernityLogo /> },
  tailwind: { title: "Tailwind", bg: "black", fg: "white", icon: <SiTailwindcss /> },
  docker: { title: "Docker", bg: "black", fg: "white", icon: <SiDocker /> },
  yjs: { title: "Y.js", bg: "black", fg: "white", icon: (<span><strong>Y</strong>js</span>) },
  firebase: { title: "Firebase", bg: "black", fg: "white", icon: <SiFirebase /> },
  sockerio: { title: "Socket.io", bg: "black", fg: "white", icon: <SiSocketdotio /> },
  js: { title: "JavaScript", bg: "black", fg: "white", icon: <SiJavascript /> },
  ts: { title: "TypeScript", bg: "black", fg: "white", icon: <SiTypescript /> },
  vue: { title: "Vue.js", bg: "black", fg: "white", icon: <SiVuedotjs /> },
  react: { title: "React.js", bg: "black", fg: "white", icon: <RiReactjsFill /> },
  sanity: { title: "Sanity", bg: "black", fg: "white", icon: <SiSanity /> },
  spline: { title: "Spline", bg: "black", fg: "white", icon: <SiThreedotjs /> },
  gsap: { title: "GSAP", bg: "black", fg: "white", icon: "" },
  framerMotion: { title: "Framer Motion", bg: "black", fg: "white", icon: <TbBrandFramerMotion /> },
  supabase: { title: "Supabase", bg: "black", fg: "white", icon: <SiSupabase /> },
  vite: { title: "Vite", bg: "black", fg: "white", icon: <SiVite /> },
  openai: { title: "OpenAI", bg: "black", fg: "white", icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI" /> },
  netlify: { title: "Netlify", bg: "black", fg: "white", icon: <SiNetlify /> },
  html: { title: "HTML5", bg: "black", fg: "white", icon: <SiHtml5 /> },
  css: { title: "CSS3", bg: "black", fg: "white", icon: <SiCss3 /> },
  bootstrap: { title: "Bootstrap", bg: "black", fg: "white", icon: <SiBootstrap /> },
  maven: { title: "Maven", bg: "black", fg: "white", icon: <SiApachemaven /> },
  java: { title: "Java", bg: "black", fg: "white", icon: <img src="assets/icons/icons8-java.svg" alt="Java" /> },
  cplusplus: { title: "C++", bg: "black", fg: "white", icon: <SiCplusplus /> },
  arduino: { title: "Arduino", bg: "black", fg: "white", icon: <SiArduino /> },
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
    live: "https://www.softwaresbazar.com/",
    github: "https://github.com/mayankdubey23",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A comprehensive digital marketplace platform designed for seamless software discovery and purchasing. It features a clean, conversion-optimized interface tailored for a high-volume B2B and B2C client base.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },
  {
    id: "ihodigital",
    category: "Web development",
    title: "IHO Digital",
    src: "/assets/projects-screenshots/ihodigital/IHO Digital.png",
    screenshots: ["/assets/projects-screenshots/ihodigital/IHO Digital.png"],
    live: "https://github.com/mayankdubey23",
    github: "https://github.com/mayankdubey23",
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            The official corporate platform for IHO Digital, a premier digital marketing and development agency. The architecture handles complex operational workflows and serves as a high-performance touchpoint for professional service proposals and marketing integrations.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },
  {
    id: "pachewargarhfort",
    category: "Web design",
    title: "Pachewargarh Fort",
    src: "/assets/projects-screenshots/pachewargarhfort/Pachewargarh Fort.png",
    screenshots: ["/assets/projects-screenshots/pachewargarhfort/Pachewargarh Fort.png"],
    live: "https://github.com/mayankdubey23",
    github: "https://github.com/mayankdubey23",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A hospitality and heritage showcase website blending luxury design with seamless user experience. It highlights the historical elegance of the fort while providing intuitive booking and exploration features for guests.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },
  {
    id: "vohicreations",
    category: "Web application",
    title: "Vohi Creations",
    src: "/assets/projects-screenshots/vohicreations/vohicreations.png",
    screenshots: ["/assets/projects-screenshots/vohicreations/vohicreations.png"],
    live: "https://vohicreations.vercel.app/",
    github: "https://github.com/mayankdubey23",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.framerMotion, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A dynamic and highly interactive web application focused on creative portfolio presentation. Built with advanced animations and a smooth, immersive user interface that captures the essence of modern digital artistry.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },
  {
    id: "greenbeautynursery",
    category: "Web design",
    title: "Green Beauty Nursery",
    src: "/assets/projects-screenshots/greenbeautynursery/Green Beauty Nursery.png",
    screenshots: ["/assets/projects-screenshots/greenbeautynursery/Green Beauty Nursery.png"],
    live: "https://github.com/mayankdubey23",
    github: "https://github.com/mayankdubey23",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.js],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A vibrant, nature-inspired e-commerce storefront for a botanical nursery. The design focuses on organic aesthetics, categorized product catalogs, and a streamlined shopping experience for plant enthusiasts.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },
  {
    id: "jewellerystore",
    category: "Web design",
    title: "Jewellery Store",
    src: "/assets/projects-screenshots/jewellerystore/Jwelery Store.png",
    screenshots: ["/assets/projects-screenshots/jewellerystore/Jwelery Store.png"],
    live: "https://github.com/mayankdubey23",
    github: "https://github.com/mayankdubey23",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.framerMotion],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A high-end, luxury-themed e-commerce platform built specifically for fine jewelry. Utilizing a sophisticated blue and white color palette, the site delivers a premium browsing experience with high-fidelity product showcases.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },
  {
    id: "musicplayer",
    category: "Web design",
    title: "Music Player",
    src: "/assets/projects-screenshots/musicplayer/Music Player.png",
    screenshots: ["/assets/projects-screenshots/musicplayer/Music Player.png"],
    live: "https://github.com/mayankdubey23",
    github: "https://github.com/mayankdubey23",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.css, PROJECT_SKILLS.html],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A sleek, modern web-based music player interface. It emphasizes fluid controls, real-time track tracking, and an intuitive layout designed to mimic native desktop audio applications.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },
  {
    id: "weatherapp",
    category: "Web application",
    title: "Weather App",
    src: "/assets/projects-screenshots/weatherapp/Weather App.png",
    screenshots: ["/assets/projects-screenshots/weatherapp/Weather App.png"],
    live: "https://github.com/mayankdubey23",
    github: "https://github.com/mayankdubey23",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A fast, data-driven weather forecasting application. It connects to external APIs to deliver real-time meteorological data, dynamic background states based on weather conditions, and precise location-based tracking.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },
  {
    id: "signinsignup",
    category: "Web design",
    title: "Signin & Signup Page",
    src: "/assets/projects-screenshots/signinsignup/Signin & Signup Page.png",
    screenshots: ["/assets/projects-screenshots/signinsignup/Signin & Signup Page.png"],
    live: "https://github.com/mayankdubey23",
    github: "https://github.com/mayankdubey23",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A fully responsive, secure authentication flow interface. Engineered with validation states, micro-interactions, and a clean layout to ensure a frictionless onboarding experience for users.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },
  {
    id: "muscleheadquarter",
    category: "Web development",
    title: "Muscle Headquarter",
    src: "/assets/projects-screenshots/muscleheadquarter/Muscle Headquarter.png",
    screenshots: ["/assets/projects-screenshots/muscleheadquarter/Muscle Headquarter.png"],
    live: "https://github.com/mayankdubey23",
    github: "https://github.com/mayankdubey23",
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.mongo, PROJECT_SKILLS.express],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A high-energy, performance-focused web platform for a fitness center. Designed to handle membership inquiries, class scheduling, and showcase facilities with a bold, dark-mode aesthetic.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={this.screenshots} />
        </div>
      );
    },
  },
];

export default projects;