"use client";
import React, { useEffect } from "react";
import TabButton from "./TabButton";
import Image from "next/image";
import { useState, useTransition } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc py-2">
        <li>Polytechnic Institute of Braganca</li>
        <li>Udemy</li>
        <li>Edx CS50</li>
        <li>Academind</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc py-2">
        <li>
          React <span className="font-extrabold text-lg ">{`&`}</span> React
          Native
        </li>
        <li>
          Next.js <span className="font-extrabold text-lg ">{`&`}</span>{" "}
          ShadcnUI
        </li>
        <li>
          Node.js <span className="font-extrabold text-lg ">{`&`}</span> Express
        </li>
        <li>
          Sequelize <span className="font-extrabold text-lg ">{`&`}</span>{" "}
          Mongoose
        </li>
        <li>
          Javascript <span className="font-extrabold text-lg ">{`&`}</span>{" "}
          Typescript
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tabName: string) => {
    startTransition(() => {
      setTab(tabName);
    });
  };

  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("about");
    }
  }, [inView, setActiveSection]);

  return (
    <section ref={ref} id="about" className="text-white">
      <div className=" py-16 gap-12 flex items-center flex-wrap justify-center  md:grid md:grid-cols-2  xl:gap-24">
        <div className="mt-8 md:mt-0">
          {/* <svg
            // className="w-[600px] h-[600px]  lg:w-[800px] lg:h-[800px]"
            id="sw-js-blob-svg-2"
            viewBox="0 0 90 90"
          >
            <defs>
              <linearGradient id="sw-gradient-2" x1="0" x2="1" y1="1" y2="0">
                <stop
                  id="stop12"
                  stop-color="rgba(23, 36, 52, 1)"
                  offset="0%"
                ></stop>
                <stop
                  id="stop22"
                  stop-color="rgba(40.702, 62.007, 87.799, 1)"
                  offset="100%"
                ></stop>
              </linearGradient>
            </defs>
            <mask id="mask2" mask-type="alpha">
              <path
                fill="url(#sw-gradient-2)"
                d="M31.5,-19.7C36.4,-9.6,33.1,3.8,26.4,11.6C19.8,19.5,9.9,21.8,-1.7,22.8C-13.3,23.8,-26.6,23.4,-30.4,17.2C-34.2,11,-28.5,-1.1,-21.8,-12.2C-15.2,-23.3,-7.6,-33.4,2.8,-35.1C13.3,-36.7,26.5,-29.8,31.5,-19.7Z"
                width="100%"
                height="100%"
                transform="translate(50 38)"
                stroke-width="0"
                style={{ transition: "all 0.3s ease 0s" }}
                stroke="url(#sw-gradient=2)"
              ></path>
            </mask>
            <g mask="url(#mask2)">
              <path
                fill="url(#sw-gradient-2)"
                d="M31.5,-19.7C36.4,-9.6,33.1,3.8,26.4,11.6C19.8,19.5,9.9,21.8,-1.7,22.8C-13.3,23.8,-26.6,23.4,-30.4,17.2C-34.2,11,-28.5,-1.1,-21.8,-12.2C-15.2,-23.3,-7.6,-33.4,2.8,-35.1C13.3,-36.7,26.5,-29.8,31.5,-19.7Z"
                width="100%"
                height="100%"
                transform="translate(50 38)"
                stroke-width="0"
                style={{ transition: "all 0.3s ease 0s" }}
                stroke="url(#sw-gradient=2)"
              ></path>
              <image
                className="w-[120px] transform  top-1/2 left-1/2"
                href="/images/mern/MERN3.png" // The most important lesson I learned:
                x="-8"
                y="10"
                width={50}
                height={50}
              />
            </g>
          </svg> */}
          <Image
            src="/images/mern/MERN3.png"
            alt="Profile"
            width={450}
            height={450}
            className="object-cover"
          />
        </div>

        <div className="  mt-4 md:mt-0 text-left flex flex-col justify-center h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base lg:text-lg text-justify ">
            Fresh graduate with a Bachelor's in computer science from
            Polytechnic Institute of Braganca, Portugal and Highly skilled
            Frontend and Backend Web (MERN Stack) and Mobile Developer (React
            Native) with 2 years of experience in front-end development for web
            and mobile applications and 1+ year of continuous learning and
            growth in backend development using Node. Seeking a challenging role
            that allows me to leverage my expertise in React, Node, API
            development, and a wide range of technical skills to create
            exceptional digital products.
          </p>
          {/* Creating a wrapper container  */}
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Educations
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
