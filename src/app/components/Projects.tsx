"use client";

import Image from "next/image";
import React, { useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import { TbPlayerPlay } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
import useWindowSize from "../hooks/useWindowSize";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import NodeEcommerce from "../../../public/images/projects/NodeEcommerce.png";
import PortfolioPlain from "../../../public/images/projects/PortfolioPlain.png";
import RoboFriends from "../../../public/images/projects/RoboFriends.png";
import MERN from "../../../public/images/projects/MERN.png";
import VetClinic from "../../../public/images/projects/VetClinic.png";
import Pharmacy from "../../../public/images/projects/Pharmacy.png";
import FaceRecognition from "../../../public/images/projects/FaceRecognition.png";
import MealsToGo from "../../../public/images/projects/MealsToGo.jpg";

const projects = [
  {
    url: "https://node-ecommerce-vokx.onrender.com/",
    title: "Ecommerce",
    description:
      "A simple ecommerce website built with NodeJS, ExpressJS, MongoDB, and EJS.",
    imageUrl: NodeEcommerce,
    demo: "https://youtu.be/SD3H5LYWEgE",
  },
  {
    url: "https://nikeshd10.github.io/Personal-Portfolio/",
    title: "Personal Portfolio",
    description:
      "A personal portfolio website built with HTML, CSS and Vanilla JS.",
    imageUrl: PortfolioPlain,
    demo: "https://nikeshd10.github.io/Personal-Portfolio/",
  },
  {
    url: "https://robotfriendsfrontend.onrender.com/",
    title: "Robot Friends",
    description:
      "A simple React and Redux app that fetches data from an API and displays it.",
    imageUrl: RoboFriends,
    demo: "https://www.youtube.com/watch?v=m4oBcHi3qJQ",
  },
  {
    url: "https://geo-location-gallery-frontend.onrender.com/",
    title: "Geo Location Gallery",
    description:
      "A simple React app that fetches images from an API based on the user's location.",
    imageUrl: MERN,
    demo: "https://youtu.be/xdjjXUxOWCg",
  },
  {
    url: "https://github.com/nikeshD10/Vet-Clinic",
    title: "React Native Vet Clinic App",
    description:
      "A React Native app that allows users to get real time update of a pet. And consult with the vet.",
    imageUrl: VetClinic,
    demo: "https://www.youtube.com/watch?v=m4oBcHi3qJQ",
  },
  {
    url: "https://www.youtube.com/watch?v=34UNscgesSA",
    title: "Pharmacy Management App",
    description:
      "A React Native app that allows pharmacies to manage their schedule and allow even exchange their schedule with other pharmacies.",
    imageUrl: Pharmacy,
    demo: "https://www.youtube.com/watch?v=34UNscgesSA",
  },
  {
    url: "https://github.com/nikeshD10/Face-Recognition-Brain",
    title: "Face Recognition App",
    description:
      "A React app that uses the Clarifai API to detect faces in an image. Authentication handled and state management with redux.",
    imageUrl: FaceRecognition,
    demo: "https://github.com/nikeshD10/Face-Recognition-Brain",
  },
  {
    url: "https://github.com/nikeshD10/MealsToGo",
    title: "Food Ordering App",
    description:
      "A React Native app that allows users to filter food, choose user location and order food from a restaurant.",
    imageUrl: MealsToGo,
    demo: "https://github.com/nikeshD10/MealsToGo",
  },
] as const;

const Projects = () => {
  const [height, width] = useWindowSize();
  const [isScreenSmall, setIsScreenSmall] = React.useState(false);

  useLayoutEffect(() => {
    const newIsScreenSmall =
      width === 0 ? window.innerWidth < 768 : width < 768;
    setIsScreenSmall(newIsScreenSmall);
  }, [width]);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("projects");
    }
  }, [inView, setActiveSection]);

  return (
    <div className="mt-24 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold w-full text-center">Projects</h1>
      <section
        ref={ref}
        id="projects"
        className="w-full h-[600px] my-[180px] md:max-w-[680px] md:h-[400px] lg:max-w-[800px] "
      >
        <div className="w-full h-full relative md:flex md:items-center md:justify-center translate-y-1/4 md:-translate-y-0 shadow-[0px_14px_80px_rgba(34,35,58,0.9)] rounded-[25px] transition-all duration-300 bg-[rgba(255,255,255,0.068)] border-solid border-[rgba(255,255,255,0.425)]">
          <div className="w-full h-full relative -translate-y-1/4 md:-translate-y-0 md:-translate-x-20 ">
            <Swiper
              spaceBetween={60}
              slidesPerView={1}
              autoHeight={true}
              direction={isScreenSmall ? "horizontal" : "vertical"}
              keyboard={true}
              navigation={true}
              mousewheel={{
                invert: true,
                thresholdTime: 100,
                sensitivity: 10,
                thresholdDelta: 1,
                releaseOnEdges: true,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Mousewheel]}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "20px",
              }}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  {({ isActive }) => (
                    <Project isActive={isActive} {...project} />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

// type ProjectProps = {
//   url: string;
//   title: string;
//   description: string;
//   imageUrl: string;
// };
// since we are using const projects = [] as const; we can use typeof projects[number] to get the type of each element in the array
type ProjectProps = (typeof projects)[number];

const Project = ({
  url,
  title,
  description,
  imageUrl,
  demo,
  isActive,
}: ProjectProps & { isActive: boolean }) => {
  return (
    <div className="p-8 md:h-auto w-full h-full flex items-center justify-center gap-10 md:gap-0 flex-col md:flex-row">
      <div className="w-[95%] relative flex-shrink-0 h-[300px] shadow-[0px_0px_38px_0px_rgba(57,158,218,0.2)] rounded-[20px] md:w-[300px] md:mr-8 transition-all duration-300 block hover:scale-105 hover:shadow-[0px_0px_38px_0px_rgba(57,158,218,0.4)]">
        <Link href={url} target="_blank">
          <Image
            src={imageUrl}
            alt={title}
            fill
            style={{
              borderRadius: "20px",
              objectFit: "cover",
            }}
            // className="transition-all duration-300 block hover:scale-105 hover:shadow-[0px_0px_38px_0px_rgba(57,158,218,0.4)]"
          />
        </Link>
      </div>
      <div className="text-justify  md:px-8">
        <h1 className="font-bold text-2xl text-center my-2 font-mono bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {title}
        </h1>
        <p>{description}</p>
        <div className="flex justify-center items-center my-4 ">
          <Link
            href={demo}
            target="_blank"
            className="bg-[rgb(99,74,222)] transition-all duration-300 hover:scale-110 hover:shadow-[0px_0px_30px_10px_rgba(99,74,222,0.4)] m-4 inline-flex items-center py-[15px] px-[35px] rounded-[50px] text-white font-bold shadow-[0px_14px_80px_rgba(76,56,252,0.4)] justify-center text-center tracking-wide "
          >
            Demo
            <span className="pl-1">
              <TbPlayerPlay size={20} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
