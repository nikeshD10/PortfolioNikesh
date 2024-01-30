import MERN from "../../public/images/certificate/MERN.jpg";
import NodeJs from "../../public/images/certificate/NodeJs.jpg";
import ReactNative from "../../public/images/certificate/ReactNative.jpg";
import ZeroToMastery from "../../public/images/certificate/ZeroToMastery.jpg";
export const certificateDatas = [
  {
    title: "MERN Stack Full Guide",
    tags: ["React", "MongoDB", "Mongoose", "CSS", "Node.js", "Express.js"],
    // imageUrl: "/images/certificate/MERN.jpg",
    imageUrl: MERN,
  },
  {
    title: "NodeJS - The Complete Guide",
    tags: [
      "React",
      "Javascript",
      "ORM",
      "ODM",
      "Sequelize",
      "Mongoose",
      "Node.js",
      "Express",
    ],
    // imageUrl: "/images/certificate/NodeJs.jpg",
    imageUrl: NodeJs,
  },
  {
    title: "React Native - The Practical Guide",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    // imageUrl: "/images/certificate/ReactNative.jpg",
    imageUrl: ReactNative,
  },
  {
    title: "The Complete Web Developer Course",
    tags: [
      "React",
      "JS",
      "SQL",
      "CSS",
      "REST",
      "Node.js",
      "Express.js",
      "Redux",
    ],
    // imageUrl: "/images/certificate/ZeroToMastery.jpg",
    imageUrl: ZeroToMastery,
  },
] as const;
