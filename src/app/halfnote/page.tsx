"use client";
import React from "react";
import Nav from "@/reusable_components/Nav";
import Image from "next/image";
import { motion } from "framer-motion";
import halfnote from "../../images/halfnote.png";
import next from "../../images/next.svg";
import postgres from "../../images/postgres.svg.png";
import redis from "../../images/redis.jpg";
import django from "../../images/django.png";
import activity from "../../images/activity.png";
import search from "../../images/search.png";
import album from "../../images/album.png";
import profile from "../../images/profile.png";
import { StaticImageData } from "next/image";

const screenshots: {
  img: StaticImageData;
  description: string;
  span: string;
  aspect: string;
  imgClassName: string;
}[] = [
  {
    img: profile,
    description: "A profile",
    span: "col-span-2 row-span-2",
    aspect: "aspect-square",
    imgClassName: "h-full w-full object-contain",
  },
  {
    img: activity,
    description: "Your activity",
    span: "",
    aspect: "aspect-square",
    imgClassName: "h-full w-full object-cover object-left-top",
  },
  {
    img: search,
    description: "Searching albums",
    span: "",
    aspect: "aspect-square",
    imgClassName: "h-full w-full object-cover object-left-top",
  },
  {
    img: album,
    description: "An album page",
    span: "col-span-2",
    aspect: "aspect-[2/1]",
    imgClassName: "h-full w-full object-cover object-left-top",
  },
];

const Projects = () => {
  return (
    <div className="relative mb-20 overflow-y-auto overflow-x-hidden bg-white">
      <Nav />

      {/* HERO */}
      <div className="mt-18 sm:ml-24">
        <Image
          className="mt-11 ml-4 w-60 sm:w-72"
          src={halfnote}
          alt="Halfnote"
        />
        <div className="another-heading4 mb-12 ml-6 mt-6 w-80 sm:mt-10 sm:w-1/2">
          Currently in development, Halfnote is a community driven album review
          platform. No AI recommendations, no algorithms, just letting the music
          be its own voice.
        </div>
      </div>
      <div className="mt-8 sm:ml-24">
        <div className="another-heading1 mb-5 ml-4 flex justify-center text-6xl sm:mb-0 sm:justify-normal">
          the why
        </div>
        <div className="another-heading4 ml-6 mt-6 w-80 sm:mt-10 sm:w-1/2">
          Music is a shared experience. Remember that moment when you showed
          your buddy an artist and watched their eyes light up? That&apos;s what
          music is really about. Not the pitchfork scores behind paywalls. Not
          the critic&apos;s 2,000-word thesis you&apos;ll never finish reading.
          Cinephiles have Letterboxd to bond over their film reviews and
          bookworms have Goodreads to share their favorite pieces of literature.
          But music fans are still doing this alone. We&apos;re still yelling
          into the void of Twitter and Tumblr.
        </div>
      </div>
      {/* <div className="mt-20 sm:ml-24">
        <div className="another-heading1 mb-5 ml-4 flex justify-center text-6xl sm:mb-0 sm:justify-normal">
          features
        </div>
        <div className="ml-2 mr-4 mt-10 grid grid-cols-1 gap-6 sm:ml-4 sm:mr-24 sm:grid-cols-2 lg:grid-cols-3">
          <div className="border-2 border-black bg-white p-6">
            <h3 className="another-heading3">feature title</h3>
            <p className="another-body mt-3">
              Short description of what the feature does.
            </p>
          </div>
          <div className="border-2 border-black bg-white p-6">
            <h3 className="another-heading3">feature title</h3>
            <p className="another-body mt-3">
              Short description of what the feature does.
            </p>
          </div>
          <div className="border-2 border-black bg-white p-6">
            <h3 className="another-heading3">feature title</h3>
            <p className="another-body mt-3">
              Short description of what the feature does.
            </p>
          </div>
        </div>
      </div> */}

      {/* TECH STACK */}
      <div className="mt-20 sm:ml-24">
        <div className="another-heading1 mb-5 ml-4 flex justify-center text-6xl sm:mb-0 sm:justify-normal">
          stack
        </div>
        <div className="ml-4 mt-10 flex flex-wrap items-center gap-6 pr-4 sm:pr-24">
          <Image
            src={next}
            alt="Next.js"
            className="h-12 w-auto object-contain"
          />
          <Image
            src={postgres}
            alt="PostgreSQL"
            className="h-12 w-auto object-contain"
          />
          <Image
            src={redis}
            alt="Redis"
            className="h-12 w-auto object-contain"
          />
          <Image
            src={django}
            alt="Django"
            className="h-12 w-auto object-contain"
          />
        </div>
      </div>

      {/* IN ACTION */}
      <div className="mt-20 sm:ml-24">
        <div className="another-heading1 mb-5 ml-4 flex justify-center text-6xl sm:mb-0 sm:justify-normal">
          in action
        </div>
        <div className="ml-2 mr-4 mt-10 grid grid-cols-4 gap-1 sm:ml-4 sm:mr-24">
          {screenshots.map((shot, i) => (
            <motion.div
              key={i}
              initial="rest"
              animate="rest"
              whileHover="hover"
              className={`${shot.span} ${shot.aspect} relative overflow-hidden border-2 border-black`}
            >
              <Image src={shot.img} alt="" className={shot.imgClassName} />
              <motion.div
                variants={{
                  rest: { opacity: 0 },
                  hover: { opacity: 1 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center bg-white p-4"
              >
                <p className="another-body text-center">{shot.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
