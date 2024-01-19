// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { StaticImageData } from "next/image";

// type SkillCardProps = {
//   imageSrc: StaticImageData | string;
//   skillName: string;
// };

// const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

// const SkillCard = React.memo<SkillCardProps>(
//   ({ imageSrc, skillName }: SkillCardProps) => {
//     const [isHovered, setIsHovered] = React.useState(false);

//     return (
//       <motion.div
//         style={{
//           backdropFilter: "blur(10px)",
//           transformStyle: "preserve-3d",
//           transformPerspective: "600px",
//         }}
//         className="grid overflow-hidden m-8 justify-items-center bg-white w-[150px] h-[200px] min-w-[150px] min-h-[200px] rounded-xl relative [box-shadow:0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] "
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <div
//           className="mb-2 bg-[#b6a8fa] w-full h-full flex justify-center items-center"
//           style={{
//             clipPath: isHovered
//               ? "circle(280px at 80% -20%)"
//               : "circle(138px at 86% 20%)",
//           }}
//         >
//           <div className="absolute top-2">
//             <Image
//               src={imageSrc} // 'public' folder is exposed at root level, so you need not specify the public folder
//               alt={skillName}
//               width={100}
//               height={100}
//             />
//           </div>
//         </div>
//         {isHovered && (
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             exit={{ opacity: 0, transition: { duration: 1 } }}
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible,
//             }}
//             className="absolute bottom-0 "
//           >
//             <h1 className="text-2xl mb-2 font-black drop-shadow-md  text-white transition ease-in duration-300 ">
//               {skillName}
//             </h1>
//           </motion.div>
//         )}
//       </motion.div>
//     );
//   }
// );

// SkillCard.displayName = "SkillCard";
// export default SkillCard;

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

type SkillCardProps = {
  imageSrc: StaticImageData | string;
  skillName: string;
};

const SkillCard: React.FC<SkillCardProps> = React.memo(
  ({ imageSrc, skillName }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
      <>
        <div className=" overflow-hidden m-8 bg-slate-200 w-[150px] h-[200px] min-w-[150px] min-h-[200px] rounded-xl  blur-sm shadow-sm shadow-slate-200 absolute"></div>
        <motion.div
          className="z-10 overflow-hidden m-8 justify-items-center bg-white w-[150px] h-[200px] min-w-[150px] min-h-[200px] rounded-xl relative"
          style={{
            backdropFilter: "blur(10px)",
            transformStyle: "preserve-3d",
            transformPerspective: "600px",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div
            className={`bg-[#b6a8fa] w-full h-full flex justify-center items-center transition-clip-path duration-500 `}
            style={{
              clipPath: isHovered
                ? "circle(280px at 80% -20%)"
                : "circle(138px at 86% 20%)",
            }}
          >
            <div className="absolute top-2">
              <Image
                src={imageSrc}
                alt={skillName}
                width={100}
                height={100}
                className={
                  isHovered
                    ? `transform scale-[1.2] translate-x-0 translate-y-4`
                    : `transform scale-100`
                }
              />
            </div>
          </div>
          {isHovered && (
            <motion.div
              className="absolute bottom-0 text-container flex justify-center items-center w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl mb-2 font-black text-white">
                {skillName}
              </h1>
            </motion.div>
          )}
        </motion.div>
      </>
    );
  }
);
SkillCard.displayName = "SkillCard";
export default SkillCard;
