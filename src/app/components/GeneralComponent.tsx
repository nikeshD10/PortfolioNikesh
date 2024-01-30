"use client";
import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const generals = [
  {
    metric: "Projects",
    value: 7,
    postfix: "+",
  },
  {
    metric: "Certifications",
    value: 5,
  },
  {
    prefix: "≈",
    metric: "Years",
    value: 2,
  },
];

const GeneralComponent = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {generals.map((general, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4  sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {general.prefix && (
                  <span className="text-[#ADB7BE] text-4xl font-bold">
                    {general.prefix}
                  </span>
                )}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={general.value}
                  className="text-white text-4xl font-bold"
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                  })}
                  fontStyle={{
                    fontSize: "2rem",
                    color: "rgba(251, 168, 31, 1)",
                  }}
                />
                <span className="text-[#ADB7BE] text-4xl font-bold">
                  {general.postfix}
                </span>
              </h2>

              <p className="text-[#ffffff] text-base">{general.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GeneralComponent;
