"use client";
import { lazy } from "react";
import { useRef, useEffect, useState } from "react";
import { useInView, motion } from "framer-motion";
import { useInView as observerUseInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import useWindowSize from "../hooks/useWindowSize";

const SkillCard = lazy(() => import("./SkillCard"));
const skills = [
  {
    imageSrc: "/images/Skills/Bootstrap.png",
    skillName: "Bootstrap",
  },
  {
    imageSrc: "/images/Skills/C.png",
    skillName: "C",
  },
  {
    imageSrc: "/images/Skills/CSharp.png",
    skillName: "C#",
  },
  {
    imageSrc: "/images/Skills/CPlusPlus.png",
    skillName: "C++",
  },
  {
    imageSrc: "/images/Skills/CSS.png",
    skillName: "CSS",
  },
  {
    imageSrc: "/images/Skills/EJS.png",
    skillName: "EJS",
  },
  {
    imageSrc: "/images/Skills/Express.png",
    skillName: "Express",
  },
  {
    imageSrc: "/images/Skills/Figma.png",
    skillName: "Figma",
  },
  {
    imageSrc: "/images/Skills/Git.png",
    skillName: "Git",
  },
  {
    imageSrc: "/images/Skills/Github.png",
    skillName: "Github",
  },
  {
    imageSrc: "/images/Skills/Gitlab.png",
    skillName: "Gitlab",
  },
  {
    imageSrc: "/images/Skills/Graphql.png",
    skillName: "Graphql",
  },
  {
    imageSrc: "/images/Skills/HTML.png",
    skillName: "HTML",
  },
  {
    imageSrc: "/images/Skills/Javascript.png",
    skillName: "Javascript",
  },
  {
    imageSrc: "/images/Skills/Java.png",
    skillName: "Java",
  },
  {
    imageSrc: "/images/Skills/Linux.png",
    skillName: "Linux",
  },
  {
    imageSrc: "/images/Skills/Mongodb.png",
    skillName: "MongoDB",
  },
  {
    imageSrc: "/images/Skills/Mongoose.png",
    skillName: "Mongoose",
  },
  {
    imageSrc: "/images/Skills/Mysql.png",
    skillName: "MySQL",
  },
  {
    imageSrc: "/images/Skills/Nextjs.png",
    skillName: "Next",
  },
  {
    imageSrc: "/images/Skills/Node.png",
    skillName: "Node",
  },
  {
    imageSrc: "/images/Skills/Npm.png",
    skillName: "NPM",
  },
  {
    imageSrc: "/images/Skills/Nodemon.png",
    skillName: "Nodemon",
  },
  {
    imageSrc: "/images/Skills/Postgress.png",
    skillName: "Postgres",
  },
  {
    imageSrc: "/images/Skills/Python.png",
    skillName: "Python",
  },
  {
    imageSrc: "/images/Skills/ReactNative.png",
    skillName: "React Native",
  },
  {
    imageSrc: "/images/Skills/React.png",
    skillName: "React",
  },
  {
    imageSrc: "/images/Skills/Redux.png",
    skillName: "Redux",
  },
  {
    imageSrc: "/images/Skills/REST.png",
    skillName: "REST",
  },
  {
    imageSrc: "/images/Skills/Sequelize.png",
    skillName: "Sequelize",
  },
  {
    imageSrc: "/images/Skills/ShadcnUI.png",
    skillName: "ShadcnUI",
  },
  {
    imageSrc: "/images/Skills/Tailwind.png",
    skillName: "Tailwind",
  },
  {
    imageSrc: "/images/Skills/Typescript.png",
    skillName: "Typescript",
  },
  {
    imageSrc: "/images/Skills/VSCode.png",
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
