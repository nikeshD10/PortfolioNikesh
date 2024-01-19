"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { TbPlayerPlay } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const projects = [
  // {
  //   url: "https://node-ecommerce-vokx.onrender.com/",
  //   title: "Ecommerce",
  //   description:
  //     "A simple ecommerce website built with NodeJS, ExpressJS, MongoDB, and EJS.",
  //   imageUrl: "/images/mern/MERN1.png",
  // },
  // {
  //   url: "https://nikeshd10.github.io/Personal-Portfolio/",
  //   title: "Personal Portfolio",
  //   description:
  //     "A personal portfolio website built with HTML, CSS and Vanilla JS.",
  //   imageUrl: "/images/mern/MERN2.png",
  // },
  // {
  //   url: "https://robotfriendsfrontend.onrender.com/",
  //   title: "Robot Friends",
  //   description:
  //     "A simple React and Redux app that fetches data from an API and displays it.",
  //   imageUrl: "/images/mern/MERN3.png",
  // },
  // {
  //   url: "https://geo-location-gallery-frontend.onrender.com/",
  //   title: "Geo Location Gallery",
  //   description:
  //     "A simple React app that fetches images from an API based on the user's location.",
  //   imageUrl: "/images/mern/MERN5.png",
  // },
  {
    url: "https://www.youtube.com/watch?v=m4oBcHi3qJQ",
    title: "React Native Vet Clinic App",
    description:
      "A React Native app that allows users to get real time update of a pet. And consult with the vet.",
    imageUrl: "/images/projects/ReactNative1.png",
    demo: "https://www.youtube.com/watch?v=m4oBcHi3qJQ",
  },
  {
    url: "https://www.youtube.com/watch?v=34UNscgesSA",
    title: "Pharmacy Management App",
    description:
      "A React Native app that allows pharmacies within a certain area to manage their schedule and allow even exchange their schedule with other pharmacies.",
    imageUrl: "/images/projects/ReactNative2.png",
    demo: "https://www.youtube.com/watch?v=34UNscgesSA",
  },
] as const;

const Projects = () => {
  return (
    <div className="pt-24">
      <h1 className="text-4xl font-bold mb-8 w-full text-center">Projects</h1>
      {/* <section className="pt-[200px] md:mt-24"> */}
      <div className="w-[95%] relative min-h-[500px] h-auto my-[180px] mx-auto md:max-w-[680px] md:h-[400px] lg:max-w-[800px] m-auto shadow-[0px_14px_80px_rgba(34,35,58,0.9)] p-[25px] rounded-[25px] transition-all duration-300 bg-[rgba(255,255,255,0.068)] border-solid border-[rgba(255,255,255,0.425)] ">
        <Swiper
          spaceBetween={50}
          // slidesPerView={1}
          direction={"vertical"}
          effect="fade"
          loop={true}
          keyboard={true}
          navigation={true}
          mousewheel={{ invert: false }}
          // mousewheel={true}
          pagination={{
            clickable: true,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Pagination]}
          style={{ overflow: "visible" }}
          className="w-full h-full"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              {/* <React.Fragment key={index}> */}
              <Project {...project} />
              {/* </React.Fragment> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* </section> */}
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

const Project = ({ url, title, description, imageUrl, demo }: ProjectProps) => {
  return (
    <div className="flex items-center flex-col md:flex-row opacity-0">
      <div className=" w-[95%] flex-shrink-0 h-[300px] overflow-hidden shadow-[4px_13px_30px_1px_rgba(57,158,218,0.2)] rounded-[20px] -translate-y-1/2 md:-translate-x-[80px] md:translate-y-[20px] md:w-[300px] md:m-0 ">
        <Link href={url}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            style={{
              borderRadius: "20px",
              objectFit: "cover",
            }}
            className="transition-all duration-300 block hover:scale-105 hover:shadow-[4px_13px_30px_1px_rgba(57,158,218,0.4)]"
          />
        </Link>
      </div>
      <div className="text-justify md:text-start -translate-y-1/2 md:translate-y-[20px]">
        <h1 className="font-bold text-2xl text-center m-2">{title}</h1>
        <p>{description}</p>
        <div className="flex justify-center items-center ">
          <Link
            href={demo}
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
