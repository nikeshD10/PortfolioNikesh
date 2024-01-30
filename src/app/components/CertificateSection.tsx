"use client";
import React, { useEffect } from "react";
import Certificate from "./Certificate";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { certificateDatas } from "../../lib/data";

const CertificateSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("certifications");
    }
  }, [inView, setActiveSection]);
  return (
    <section
      ref={ref}
      id="certifications"
      className="scroll-mt-28 mb-28 flex flex-col justify-items-center md:max-w-[600px] mx-auto p-4"
    >
      <h1 className="text-4xl font-bold w-full text-center">Certifications</h1>

      <div className="mt-24">
        {certificateDatas.map((certificate, index) => (
          <React.Fragment key={index}>
            <Certificate {...certificate} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default CertificateSection;
