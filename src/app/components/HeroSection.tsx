"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Profile from "../../../public/images/profile.png";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
// import GeneralComponent from "./GeneralComponent";

const HeroSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("home");
    }
  }, [inView, setActiveSection]);

  return (
    <section ref={ref} id="home" className="lg:pt-5 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl  sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello I&#39;m <br></br>
            </span>
            <TypeAnimation
              sequence={[
                "Nikesh Dhakal",
                1400,
                "MERN Stack Developer",
                1400,
                "React Developer",
                1400,
              ]}
              wrapper="span"
              speed={{ type: "keyStrokeDelayInMs", value: 400 }}
              deletionSpeed={{ type: "keyStrokeDelayInMs", value: 100 }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl sm:mr-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            eos architecto cumque asperiores reiciendis quia assumenda
            temporibus praesentium nam ab!
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white font-semibold ">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3 font-semibold">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-gradient-to-tr from-[#F36A3E] to-[#FFB30B] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            {/* <svg
            className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] "
            id="sw-js-blob-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop
                  id="stop1"
                  stopColor="rgba(248, 117, 55, 1)"
                  offset="0%"
                ></stop>
                <stop
                  id="stop2"
                  stopColor="rgba(251, 168, 31, 1)"
                  offset="100%"
                ></stop>
              </linearGradient>
            </defs>
            <mask id="mask1" mask-type="alpha">
              <path
                fill="url(#sw-gradient)"
                d="M19.5,-24.3C26.2,-17.5,33.4,-12.3,36.5,-5C39.6,2.4,38.5,12,34.2,20.1C30,28.2,22.5,34.8,14.4,36.4C6.3,37.9,-2.5,34.5,-10,30.5C-17.5,26.4,-23.7,21.8,-28.8,15.4C-33.9,9,-37.9,0.8,-36.9,-6.8C-35.9,-14.4,-29.9,-21.5,-22.9,-28.2C-16,-35,-8,-41.4,-0.8,-40.4C6.3,-39.5,12.7,-31.1,19.5,-24.3Z"
                width="100%"
                strokeWidth={0}
                height="100%"
                transform="translate(55 42)"
                style={{ transition: "all 0.3s ease 0s" }}
              ></path>
            </mask>
            <g mask="url(#mask1)">
              <path
                fill="url(#sw-gradient)"
                d="M19.5,-24.3C26.2,-17.5,33.4,-12.3,36.5,-5C39.6,2.4,38.5,12,34.2,20.1C30,28.2,22.5,34.8,14.4,36.4C6.3,37.9,-2.5,34.5,-10,30.5C-17.5,26.4,-23.7,21.8,-28.8,15.4C-33.9,9,-37.9,0.8,-36.9,-6.8C-35.9,-14.4,-29.9,-21.5,-22.9,-28.2C-16,-35,-8,-41.4,-0.8,-40.4C6.3,-39.5,12.7,-31.1,19.5,-24.3Z"
                width="100%"
                strokeWidth={0}
                height="100%"
                transform="translate(55 42)"
                style={{ transition: "all 0.3s ease 0s" }}
              ></path>

              <image
                className="w-[80px] transform  top-1/2 left-1/2"
                href="/images/profile.png" // The most important lesson I learned:
                x="15"
                y="4"
              />
            </g>
          </svg> */}
            <Image
              src={Profile}
              alt="Profile"
              width={450}
              height={450}
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 [&>div]:row-start-1 [&>div]:col-start-1">
        {/* <div className="z-10 justify-center items-center">
          <GeneralComponent />
        </div> */}
        <div>
          <svg
            id="wave"
            style={{
              transform: "rotate(0deg)",
              transition: "0.3s",
            }}
            viewBox="0 0 1440 260"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor="rgba(243, 106, 62, 1)" offset="0%"></stop>
                <stop stopColor="rgba(255, 179, 11, 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              style={{ transform: "translate(0, 0px)", opacity: "1" }}
              fill="url(#sw-gradient-0)"
              d="M0,52L48,82.3C96,113,192,173,288,173.3C384,173,480,113,576,82.3C672,52,768,52,864,82.3C960,113,1056,173,1152,190.7C1248,208,1344,182,1440,147.3C1536,113,1632,69,1728,60.7C1824,52,1920,78,2016,73.7C2112,69,2208,35,2304,39C2400,43,2496,87,2592,91C2688,95,2784,61,2880,78C2976,95,3072,165,3168,177.7C3264,191,3360,147,3456,125.7C3552,104,3648,104,3744,91C3840,78,3936,52,4032,39C4128,26,4224,26,4320,56.3C4416,87,4512,147,4608,147.3C4704,147,4800,87,4896,86.7C4992,87,5088,147,5184,160.3C5280,173,5376,139,5472,125.7C5568,113,5664,121,5760,130C5856,139,5952,147,6048,130C6144,113,6240,69,6336,47.7C6432,26,6528,26,6624,30.3C6720,35,6816,43,6864,47.7L6912,52L6912,260L6864,260C6816,260,6720,260,6624,260C6528,260,6432,260,6336,260C6240,260,6144,260,6048,260C5952,260,5856,260,5760,260C5664,260,5568,260,5472,260C5376,260,5280,260,5184,260C5088,260,4992,260,4896,260C4800,260,4704,260,4608,260C4512,260,4416,260,4320,260C4224,260,4128,260,4032,260C3936,260,3840,260,3744,260C3648,260,3552,260,3456,260C3360,260,3264,260,3168,260C3072,260,2976,260,2880,260C2784,260,2688,260,2592,260C2496,260,2400,260,2304,260C2208,260,2112,260,2016,260C1920,260,1824,260,1728,260C1632,260,1536,260,1440,260C1344,260,1248,260,1152,260C1056,260,960,260,864,260C768,260,672,260,576,260C480,260,384,260,288,260C192,260,96,260,48,260L0,260Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
