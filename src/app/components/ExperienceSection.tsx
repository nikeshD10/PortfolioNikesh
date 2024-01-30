"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { FaCalendarAlt } from "react-icons/fa";
import React from "react";

const experiences = [
  {
    company: "Portfuse",
    position: "Frontend Developer",
    duration: "09/2022 - 07/2023",
    description: (
      <ul className="list-disc py-2">
        <li>
          Developed high-performance web and mobile apps with JavaScript (ES6)
          and React.
        </li>
        <li>
          Collaborated closely with UI/UX designers for engaging user
          interfaces.
        </li>
        <li>
          Troubleshot real-time issues and optimized code using Linux, Git,
          Slack, and Postman.
        </li>
        <li>Worked with RESTful APIs, HTTPS, and GraphQL.</li>
        <li>
          Contributed to defining solutions and architecture for mobile
          applications.
        </li>
      </ul>
    ),
  },
  {
    company: "Upwork Remote",
    position: "Frontend Developer",
    duration: "2020 - Present",
    description: (
      <ul className="list-disc py-2">
        <li>
          Independently designed and built web and mobile applications for
          clients.
        </li>
        <li>Demonstrated expertise in JavaScript, CSS3, and HTML5</li>
        <li>
          Ensured optimal performance and adherence to UI/UX design principles.
        </li>
        <li>
          Implemented REST API and web application development for client
          projects
        </li>
      </ul>
    ),
  },
  {
    company: "Upwork Remote",
    position: "API Designer",
    duration: "2023 - Present",
    description: (
      <ul className="list-disc py-2">
        <li>Designed RESTful and GraphQL APIs, using Node.js and Express.js</li>
        <li>
          Employed [specific databases used, e.g., MongoDB, MySQL] for efficient
          data storage.
        </li>
        <li>
          Implemented authentication and authorization for secure API endpoints.
        </li>
        <li>
          Collaborated with front-end developers for seamless integration.
        </li>
        <li>
          Conducted performance optimization and real-time troubleshooting.
        </li>
      </ul>
    ),
  },
  {
    company: "IPB Braganca FP",
    position: "Student",
    duration: "2022 - 2023",
    description: (
      <ul className="list-disc py-2">
        <li>
          Completed a comprehensive bachelor's project in React Native and
          Firebase for mobile app development.
        </li>
        <li>
          Developed a feature-rich cross-platform mobile app using React Native
          and Firebase's real-time data storage.
        </li>
        <li>
          Utilized Expo and Expo tools for streamlined development and testing
          workflows.
        </li>
        <li>
          Implemented REST APIs to enhance backend functionality and data
          exchange.
        </li>
        <li>
          Gained valuable experience in mobile app development, Firebase
          integration, and REST API usage.
        </li>
      </ul>
    ),
  },
];

const ExperienceSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("experience");
    }
  }, [inView, setActiveSection]);
  return (
    <div className="mt-24">
      <h1 className="text-4xl font-bold w-full text-center">Experiences</h1>
      <section ref={ref} className="my-24 w-full h-full flex justify-center">
        <ul className="list-none">
          {experiences.map((experience, index) => {
            return (
              <React.Fragment key={index}>
                <Experience {...experience} index={index} />
              </React.Fragment>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default ExperienceSection;

type ExperienceProps = (typeof experiences)[number];

const Experience: React.FC<ExperienceProps & { index: number }> = ({
  company,
  position,
  duration,
  description,
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const [ref, inView] = useInView({
    // triggerOnce: false,
    // threshold: 1,
    triggerOnce: true,
  });

  return (
    <li ref={ref} className="grid md:grid-cols-2 grid-rows-1 grid-cols-1">
      <div className="flex flex-col items-center mx-8">
        <div className="md:border-2 md:h-1/2"></div>
        <span className="p-2 my-2 flex items-center">
          <FaCalendarAlt
            size={24}
            color="#e68319"
            className="mr-2 text-tertiary"
          />
          <h6 className="text-muted-foreground font-semibold ">{duration}</h6>
        </span>
        <div className="md:border-2 md:h-1/2"></div>
      </div>

      <div
        className={`${
          inView ? "animate-translateLeft" : ""
        } relative my-8 border-2 lg:w-[450px] w-[370px] shadow-[0px_0px_0px_0px_rgba(173,173,173,1)] border-[#95939d]  rounded-lg text-center p-4 bg-[#2c283b] overflow-hidden hover:cursor-pointer`}
        // className="animate-translateLeft relative my-8 border-2 w-[380px] shadow-[0px_0px_0px_0px_rgba(173,173,173,1)] border-white rounded-lg text-center p-4 bg-white bg-blend-overlay overflow-hidden hover:cursor-pointer"
        style={{
          perspective: "800px",
          transformStyle: "preserve-3d",
          animationDelay: `${props.index * 0.3}s`,
          boxShadow:
            "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 006), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full flex flex-col items-start">
          <div className="flex flex-col h-[100px] justify-between items-start">
            <h1 className="font-mono font-bold text-2xl text-[#ebebee]">
              {position}
            </h1>
            <p className=" text-[#ebebee] font-extrabold font-serif text-lg">
              {company}
            </p>
          </div>

          <div
            // className={`w-full flex flex-col items-start ${
            //   isHovered
            //     ? "transition-transform duration-800 ease-in-out transform rotate-0 h-auto delay-300"
            //     : "transition-transform duration-800 ease-in-out transform rotate-180 h-0 opacity-0 origin-top-center delay-300 "
            // }`}
            // className="w-full flex flex-col items-start"
            className={`w-full flex flex-col items-start ${
              isHovered ? "animate-zoomOut" : "opacity-0 h-0"
            } `}
          >
            <hr className="my-4 w-full border-[#ebebee]" />

            {/* <hr
              className={`my-4 w-full border-[#3e3c46] ${
                isHovered ? "animate-zoomOut" : "opacity-0 h-0"
              }`}
            /> */}
            {/* <p
              className={`text-[hsl(250,10%,40%)] ${
                isHovered ? "opacity-1 animate-zoomOut" : "opacity-0 h-0"
              }`}
            >
              {description}
            </p> */}
            <div className={`text-[#ebebee] text-justify px-4 py-2`}>
              {description}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
