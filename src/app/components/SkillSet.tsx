"use client";
import { lazy } from "react";
import { useRef, useEffect, useState } from "react";
import { useInView, motion } from "framer-motion";
import { useInView as observerUseInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import useWindowSize from "../hooks/useWindowSize";

import Bootstrap from "../../../public/images/Skills/Bootstrap.png";
import C from "../../../public/images/Skills/C.png";
import CSharp from "../../../public/images/Skills/CSharp.png";
import CPlusPlus from "../../../public/images/Skills/CPlusPlus.png";
import CSS from "../../../public/images/Skills/CSS.png";
import EJS from "../../../public/images/Skills/EJS.png";
import Express from "../../../public/images/Skills/Express.png";
import Figma from "../../../public/images/Skills/Figma.png";
import Git from "../../../public/images/Skills/Git.png";
import Github from "../../../public/images/Skills/Github.png";
import Gitlab from "../../../public/images/Skills/Gitlab.png";
import Graphql from "../../../public/images/Skills/Graphql.png";
import HTML from "../../../public/images/Skills/HTML.png";
import Javascript from "../../../public/images/Skills/Javascript.png";
import Java from "../../../public/images/Skills/Java.png";
import Linux from "../../../public/images/Skills/Linux.png";
import Mongodb from "../../../public/images/Skills/Mongodb.png";
import Mongoose from "../../../public/images/Skills/Mongoose.png";
import Mysql from "../../../public/images/Skills/Mysql.png";
import Nextjs from "../../../public/images/Skills/Nextjs.png";
import Node from "../../../public/images/Skills/Node.png";
import Npm from "../../../public/images/Skills/Npm.png";
import Nodemon from "../../../public/images/Skills/Nodemon.png";
import Postgress from "../../../public/images/Skills/Postgress.png";
import Python from "../../../public/images/Skills/Python.png";
import ReactNative from "../../../public/images/Skills/ReactNative.png";
import React from "../../../public/images/Skills/React.png";
import Redux from "../../../public/images/Skills/Redux.png";
import REST from "../../../public/images/Skills/REST.png";
import Sequelize from "../../../public/images/Skills/Sequelize.png";
import ShadcnUI from "../../../public/images/Skills/ShadcnUI.png";
import Tailwind from "../../../public/images/Skills/Tailwind.png";
import Typescript from "../../../public/images/Skills/Typescript.png";
import VSCode from "../../../public/images/Skills/VSCode.png";

const SkillCard = lazy(() => import("./SkillCard"));
const skills = [
  {
    imageSrc: Bootstrap,
    skillName: "Bootstrap",
  },
  {
    imageSrc: C,
    skillName: "C",
  },
  {
    imageSrc: CSharp,
    skillName: "C#",
  },
  {
    imageSrc: CPlusPlus,
    skillName: "C++",
  },
  {
    imageSrc: CSS,
    skillName: "CSS",
  },
  {
    imageSrc: EJS,
    skillName: "EJS",
  },
  {
    imageSrc: Express,
    skillName: "Express",
  },
  {
    imageSrc: Figma,
    skillName: "Figma",
  },
  {
    imageSrc: Git,
    skillName: "Git",
  },
  {
    imageSrc: Github,
    skillName: "Github",
  },
  {
    imageSrc: Gitlab,
    skillName: "Gitlab",
  },
  {
    imageSrc: Graphql,
    skillName: "Graphql",
  },
  {
    imageSrc: HTML,
    skillName: "HTML",
  },
  {
    imageSrc: Javascript,
    skillName: "Javascript",
  },
  {
    imageSrc: Java,
    skillName: "Java",
  },
  {
    imageSrc: Linux,
    skillName: "Linux",
  },
  {
    imageSrc: Mongodb,
    skillName: "MongoDB",
  },
  {
    imageSrc: Mongoose,
    skillName: "Mongoose",
  },
  {
    imageSrc: Mysql,
    skillName: "MySQL",
  },
  {
    imageSrc: Nextjs,
    skillName: "Next",
  },
  {
    imageSrc: Node,
    skillName: "Node",
  },
  {
    imageSrc: Npm,
    skillName: "NPM",
  },
  {
    imageSrc: Nodemon,
    skillName: "Nodemon",
  },
  {
    imageSrc: Postgress,
    skillName: "Postgres",
  },
  {
    imageSrc: Python,
    skillName: "Python",
  },
  {
    imageSrc: ReactNative,
    skillName: "React Native",
  },
  {
    imageSrc: React,
    skillName: "React",
  },
  {
    imageSrc: Redux,
    skillName: "Redux",
  },
  {
    imageSrc: REST,
    skillName: "REST",
  },
  {
    imageSrc: Sequelize,
    skillName: "Sequelize",
  },
  {
    imageSrc: ShadcnUI,
    skillName: "ShadcnUI",
  },
  {
    imageSrc: Tailwind,
    skillName: "Tailwind",
  },
  {
    imageSrc: Typescript,
    skillName: "Typescript",
  },
  {
    imageSrc: VSCode,
    skillName: "VSCode",
  },
];

const SkillSet = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [threshold, setThreshold] = useState(0.3);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const { ref: observerRef, inView } = observerUseInView({
    threshold: threshold,
  });

  const { setActiveSection } = useActiveSectionContext();
  const [height, width] = useWindowSize();

  useEffect(() => {
    if (inView) {
      setActiveSection("skills");
    }
  }, [inView, setActiveSection]);

  // useEffect(() => {
  //   if (width < 768) {
  //     setThreshold(0.1);
  //   }
  // }, [width]);

  return (
    <section id="skills" ref={observerRef} className="pt-24">
      <h1 className="text-4xl font-bold mb-8 w-full text-center">Skills</h1>
      {/* <div
        ref={ref}
        className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  "
      > */}
      <div className="w-full flex flex-wrap justify-center" ref={ref}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="p-2"
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <SkillCard
              key={index}
              imageSrc={skill.imageSrc}
              skillName={skill.skillName}
            />
          </motion.div>
        ))}
      </div>
      {/* </div> */}
    </section>
  );
};

export default SkillSet;
