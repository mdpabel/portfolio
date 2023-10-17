import React from "react";
import Image, { StaticImageData } from "next/image";
import Title from "@/components/Title";
import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowUpRight } from "@/components/Icons";

const projects = [
  {
    number: "01",
    top: "10%",
    title: "WordPress Securities",
    subTitle: "Full stack application",
    imgUrl: "/wordpresssecurities.jpg",
    description: `WordPressSecurities.com presents the ultimate app for robust WordPress security. The app is dedicated to providing top-notch protection and is developed by a team collective of 20-25 highly skilled WordPress professionals with extensive experience in website security and malware removal.`,
    technologies: [
      "Typescript",
      "Next.js",
      "Mongodb",
      "Prisma",
      "Clerk Auth",
      "tailwindcss",
      "cloudinary",
      "quilljs",
    ],
    liveLink: "https://www.wordpresssecurities.com/",
    github: "https://github.com/mdpabel/WordPressSecurities",
  },
  {
    number: "02",
    top: "16%",
    title: "Real time vehicle tracking system",
    subTitle: "Full stack application",
    imgUrl: "/vehicleTracking.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    technologies: [
      "Javascript",
      "NodeJs",
      "ExpressJs",
      "React-native",
      "Redis",
      "IoT sensors",
      "socket.io",
      "firebase",
    ],
    liveLink: "https://github.com/mdpabel/Real-time-Vehicle-Tracking",
    github: "https://github.com/mdpabel/Real-time-Vehicle-Tracking",
  },
  {
    number: "03",
    top: "10%",
    title: "Snake game",
    subTitle: "Frontend application",
    imgUrl: "/snakge-game.jpg",
    description: `A doubly linked list was utilized to enable efficient manipulation of the snake's movements and growth, resulting in a seamless and engaging gaming experience.`,
    technologies: [
      "Javascript",
      "React",
      "Doubly Linked list",
      "use-sound",
      "tailwindcss",
    ],
    liveLink: "https://snake-game-pi-amber.vercel.app/",
    github: "https://github.com/mdpabel/snake-game",
  },
];

const Projects = () => {
  return (
    <div className="md:mt-[30px]">
      <Title className="md:sticky top-5">Personal Projects</Title>
      <div>
        {projects.map((work, index) => (
          <ProjectCard
            imgUrl={work.imgUrl}
            number={work.number}
            technologies={work.technologies}
            title={work.title}
            subTitle={work.subTitle}
            description={work.description}
            top={work.top}
            key={index}
            github={work.github}
            liveLink={work.liveLink}
          />
        ))}
      </div>
    </div>
  );
};

interface ProjectCardType {
  top: string;
  number: string;
  title: string;
  subTitle: string;
  description: string;
  imgUrl: string | StaticImageData;
  technologies: string[];
  liveLink: string;
  github: string;
}

const ProjectCard = ({
  top,
  number,
  title,
  subTitle,
  description,
  imgUrl,
  technologies,
  liveLink,
  github,
}: ProjectCardType) => {
  return (
    <div
      style={{
        top: top ? top : "10%",
        zIndex: parseInt(number) * 10,
      }}
      className="bg-white/50 px-8 backdrop-blur-3xl flex md:pl-20 py-8 md:sticky rounded-2xl gap-4 flex-col md:flex-row max-w-5xl mx-auto md:max-h-[80vh] my-10 justify-between shadow-sm border"
    >
      <div className="flex flex-col justify-between w-full space-y-4 md:w-1/2 ">
        <h2 className="text-2xl font-medium text-gray-600">{number}</h2>
        <div className="space-y-3 ">
          <h2 className="inline-block text-gray-600 font-medium text-2xl md:text-3xl tracking-[-1.25px] ">
            {title}
          </h2>
          <h3 className="font-medium text-gray-700">{subTitle}</h3>
        </div>
        <div className="space-y-4">
          <p className="text-base leading-normal text-paragraph">
            {description}
          </p>
          <div className="space-x-4">
            <Button asChild>
              <Link target="_blank" href={liveLink}>
                Live Link <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild>
              <Link target="_blank" href={github}>
                Github <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
        <ul className="flex flex-wrap pt-4 text-sm list-disc list-inside gap-x-4 text-paragraph">
          {technologies.map((label, index) => (
            <li key={index}>{label}</li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center w-full md:w-1/2">
        <Image width={400} height={400} src={imgUrl} alt={title} />
      </div>
    </div>
  );
};

export default Projects;
