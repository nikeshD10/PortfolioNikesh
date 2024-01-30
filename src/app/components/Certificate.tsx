"use client";

import { useRef } from "react";
import { certificateDatas } from "../../lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type CertificateProps = (typeof certificateDatas)[number];

export default function Certificate({
  title,
  tags,
  imageUrl,
}: CertificateProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 flex max-w-[48rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[30rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="px-7 py-4 flex flex-col">
          <h3 className="text-2xl font-semibold">{title}</h3>

          <ul className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Certificate I worked on"
          quality={95}
          className="sm:block absolute w-[28.25rem] object-cover -right-5 top-40   rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.06]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-3

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-3

        group-even:right-[initial] group-even:-left-5 "
        />
      </section>
    </motion.div>
  );
}
