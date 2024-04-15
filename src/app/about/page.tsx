"use client";
import React from "react";
import Nav from "@/reusable_components/Nav";
import { Suspense } from "react";
import blog from "../../images/blogpage.png";
import old from "../../images/oldport.png";
import cutscene from "../../images/cut.jpeg";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";
import chess from "../../images/chess.png";
import lazy from "../../images/9.Laziness.png";
import uwaterloo from "../../images/uwaterloo.png";
import Image from "next/image";
import drawdle from "../../images/drawdle.png";
import Loading from "./loading";

const About = () => {
  return (
    <div className="relative overflow-y-auto bg-white">
      <Nav />
      <div className="mt-18 sm:ml-24">
        <Image className="w-60 sm:w-72" src={lazy} alt="" />
        <div className="font-poppins ml-4 text-7xl font-bold sm:text-8xl">
          whomst!
        </div>
        <div className="mb-12 ml-6 w-80 text-base font-medium sm:mt-10 sm:w-1/2 sm:text-lg">
          Hey! My name is Oditha Amarasinghe. I&apos;m a third year student at
          the University of Waterloo studying Computer Science with a
          specialization in Business. I&apos;ve loved minimalist design for as
          long as I can remember and this blog was made with that vision in
          mind.
        </div>
        <div className="mb-5 ml-4 mt-6 grid grid-cols-3 sm:mt-3 sm:w-72">
          <a target="_blank" href="https://github.com/odis43">
            <Image
              className="h-10 w-10 hover:opacity-50"
              src={github}
              alt="GitHub"
            />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/oditha/">
            <Image
              className="h-10 w-10 hover:opacity-50"
              src={linkedin}
              alt="Linkedin"
            />
          </a>
          {/* <Link to={resume} target="_blank">
            <img
              className="h-10 w-10 hover:opacity-50"
              src={resumeicon}
              alt="Resume"
            />
          </Link> */}
        </div>
        {/* {window.innerWidth < 640 ? (
          <div className="border-b-2 border-black mb-5"></div>
        ) : null} */}

        <div
          className={`mb-5 mt-10 flex justify-center text-6xl font-extrabold sm:mb-0 sm:justify-normal`}
        >
          experiences
        </div>
      </div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ml-3 w-[90%] sm:ml-0 sm:mt-10 sm:w-[100%]">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">Jan 2024 - present</time>
            <div className="text-lg font-black">
              Interac - Technical Product Analyst
            </div>
            <div className="sm:w-96">Currently working here.</div>
          </div>
          <hr className="bg-black" />
        </li>
        <li>
          <hr className="bg-black" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">May 2023 - Jan 2024</time>
            <div className="text-lg font-black">
              UW Blueprint - Fullstack Eng
            </div>
            <div className="sm:w-96">
              Developed a robust platform to facilitate streamlined operations
              for Algoma’s Children’s Aid Society, achieving enhanced efficiency
              through the migration of legacy spreadsheets and the
              implementation of advanced data organization features.
            </div>
          </div>
          <hr className="bg-black" />
        </li>
        <li>
          <hr className="bg-black" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">Jan 2023 - Apr 2023</time>
            <div className="text-lg font-black">
              HealthCare Systems R&A - ML Eng
            </div>
            <div className="sm:w-96">
              Engineered an interactive platform that utilizes a machine
              learning model trained to classify user movements. Various models
              were researched and tested with data derived from a brain computer
              interface.
            </div>
          </div>
          <hr className="bg-black" />
        </li>
        <li>
          <hr className="bg-black" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">Apr 2022 - Aug 2022</time>
            <div className="text-lg font-black">Manulife - Data Eng</div>
            <div className="sm:w-96">
              Effectively harnessed the Devo Platform to filter and refine
              extensive data logs, resulting in a notable 10% reduction in
              redundant metric alerts. Milestone project was the construction of
              an automation tool for seamless data transfer between AWS S3 and
              Azure Blob storage, ensuring the safety of thousands of archived
              data logs.
            </div>
          </div>
          <hr className="bg-black" />
        </li>
        <li>
          <hr className="bg-black" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </li>
      </ul>
      <div className={`sm:ml-24 sm:mt-10`}>
        <div
          className={`mb-5 flex justify-center text-6xl font-extrabold sm:mb-0 sm:mt-10 sm:justify-normal`}
        >
          projects
        </div>
        <div className="carousel carousel-center rounded-box mb-10 ml-2 max-w-[95%] space-x-4 bg-black p-2 sm:ml-0 sm:mt-10 sm:p-4">
          <div className="carousel-item sm:w-100 m-0">
            <div className="card w-96 bg-white shadow-xl">
              <figure className="border-b-2 border-black">
                <Suspense fallback={<Loading />}><Image className="h-56 w-full" src={blog} alt="blog" /></Suspense>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Personal Blog</h2>
                <p>
                  A minimalist site made to share my interests and goals. Makes
                  use of firebase realtime db to enable live updates to
                  album/film reviews (go to the{" "}
                  <b>
                    <a href="reviews" target="_blank">
                      Reviews
                    </a>{" "}
                  </b>
                  page to check it out!) without the need to re-publish the site
                  into production.
                </p>
                <div className="mb-4 mt-4 grid grid-flow-col">
                  <div className="badge badge-ghost">React js.</div>
                  <div className="badge badge-ghost">Tailwind</div>
                  <div className="badge badge-ghost">Firebase</div>
                </div>
                <div className="card-actions justify-end">
                  <a target="_blank" href="https://github.com/odis43/blog">
                    <button className="btn hover:bg-black hover:text-white">
                      Check it out!
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card w-96 bg-white shadow-xl">
              <figure className="border-b-2 border-black">
                <Suspense fallback={<Loading />}><Image
                  className="h-56 w-full object-contain"
                  src={uwaterloo}
                  alt="blog"
                /></Suspense>
              </figure>
              <div className="card-body">
                <div className="columns-2">
                  <h2 className="card-title">UW NAV</h2>
                  <div className="badge badge mt-[5px] bg-black text-xs text-white">
                    in progress
                  </div>
                </div>
                <p>
                  An app that makes use of Dijkstra&apos;s shortest path
                  algorithm to find the best route between classes on
                  uWaterloo&apos;s campus
                </p>
                <div className="mb-4 mt-4 grid grid-flow-col">
                  <div className="badge badge-ghost">Next js.</div>
                  <div className="badge badge-ghost">Tailwind</div>
                </div>
                <div className="card-actions justify-end">
                  <a target="_blank" href="https://github.com/odis43/uwnav">
                    <button className="btn hover:bg-black hover:text-white">
                      Check it out!
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card w-96 bg-white shadow-xl">
              <figure className="border-b-2 border-black">
                <Suspense fallback={<Loading />}><Image
                  className="h-56 w-full object-contain"
                  src={blog}
                  alt="blog"
                /></Suspense>
              </figure>
              <div className="card-body">
                <h2 className="card-title">CLI Chess</h2>
                <p>
                  Fully functional 2 player chess right in your terminal.
                  Employs relevent OOP practices and makes use of the
                  Observer/Notifier design pattern.
                </p>
                <div className="mb-4 mt-4 grid grid-flow-col">
                  <div className="badge badge-ghost">C++</div>
                </div>
                <div className="card-actions justify-end">
                  <a target="_blank" href="https://github.com/odis43/CLI-chess">
                    <button className="btn hover:bg-black hover:text-white">
                      Check it out!
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card w-96 bg-white shadow-xl">
              <Suspense fallback={<Loading />}><Image
                className="h-56 w-full object-contain"
                src={old}
                alt="blog"
              /></Suspense>
              <div className="card-body">
                <h2 className="card-title">Old portfolio</h2>
                <p>
                  An old design for my portfolio that was inspired by the
                  Spotify artist page and made use of Spotify&apos;s public API.
                </p>
                <div className="mb-4 mt-4 grid grid-flow-col">
                  <div className="badge badge-ghost">React js</div>
                  <div className="badge badge-ghost">CSS</div>
                  <div className="badge badge-ghost">REST API</div>
                </div>
                <div className="card-actions justify-end">
                  <a target="_blank" href="https://odis43.github.io/Portfolio/">
                    <button className="btn hover:bg-black hover:text-white">
                      Check it out!
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card w-96 bg-white shadow-xl">
              <figure className="border-b-2 border-black">
                <Suspense fallback={<Loading />}><Image className="h-56 w-full" src={drawdle} alt="blog" /></Suspense>
              </figure>
              <div className="card-body">
                <div className="columns-2">
                  <h2 className="card-title">Drawdle</h2>
                </div>
                <p>
                  Think you can draw? Put it to the test as your computer
                  determines whether your drawing is what its supposed to be.
                  Built on React js. canvas and a Bootstrapping Language-Image
                  Pre-training API
                </p>
                <div className="mb-4 mt-4 grid grid-flow-col">
                  <div className="badge badge-ghost">React js</div>
                  <div className="badge badge-ghost">CSS</div>
                </div>
                <div className="card-actions justify-end">
                  <a href="https://github.com/odis43/Drawdle" target="_blank">
                    <div className="card-actions justify-end">
                      <button className="btn hover:bg-black hover:text-white">
                        Check it out!
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
