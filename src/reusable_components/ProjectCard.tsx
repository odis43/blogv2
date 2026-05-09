"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  img: StaticImageData;
  title: string;
  description: string;
  imgClassName?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <div className="flex-col">
      <motion.div
        initial="rest"
        animate="rest"
        whileHover="hover"
        className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-tl-lg rounded-tr-lg border-2 border-black overflow-hidden"
      >
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={props.img}
            alt={props.title}
            className={`object-contain ${props.imgClassName ?? "w-full h-full"}`}
          />
        </div>
        <motion.div
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 bg-white flex items-center justify-center p-6"
        >
          <p className="max-w-xs text-sm sm:text-base font-medium text-wrap text-left">
            {props.description}
          </p>
        </motion.div>
      </motion.div>
      <div className="w-80 h-12 sm:w-96 sm:h-9 bg-white rounded-bl-lg rounded-br-lg border-l-2 border-r-2 border-b-2 border-black flex items-center">
        <div className="ml-2 font-bold text-lg">{props.title}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
