"use client";
import React, { useEffect, useState } from "react";
import news from "../../images/1.Newspaper.png";
import Nav from "@/reusable_components/Nav";
import { db } from "../../utils/firebase";
import { onValue, ref } from "firebase/database";
import Image from "next/image";
interface artistObject {
  title: string;
  first: string;
  second: string;
  path: string;
  review: string;
  artist: string;
}

const Reviews = () => {
  const [albums, setAlbums] = useState<artistObject[]>([]);
  const [films, setFilms] = useState<artistObject[]>([]);

  useEffect(() => {
    const query = ref(db, "albums");
    onValue(query, (snapshot) => {
      const data = snapshot.val();
      console.log("data from firebase albums endpoint ", data);
      setAlbums(data);
    });
  }, []);

  useEffect(() => {
    const query = ref(db, "films");
    onValue(query, (snapshot) => {
      const data = snapshot.val();
      console.log("data from firebase films endpoint ", data);
      setFilms(data);
    });
  }, []);

  return (
    <div className="relative overflow-y-auto bg-white">
      <Nav />
      <div className="mt-18 sm:ml-24">
        <Image className="w-60 sm:w-72" src={news} alt="" />
        <div className="font-poppins ml-4 text-7xl font-bold sm:text-8xl">
          reviews.
        </div>
        <div className="ml-4 w-80 text-base font-medium sm:mt-10 sm:w-1/2 sm:text-lg">
          These are more so discussions (with varying quality) than reviews. Be
          sure to check this site from time to time as I`ll be periodically
          updating it with more of my favourite tunes and films.
        </div>
      </div>
      <div>
        <div className="mt-12 sm:mt-44">
          <div className="carousel mt-2 h-[35rem] w-full overflow-y-hidden border-solid sm:h-[43rem] sm:overflow-y-auto">
            <div
              className={`carousel-item w-full items-center border-t-4 border-black`}
              style={{ backgroundColor: "white" }}
            >
              <div className="mt-20 h-72 w-[40rem] sm:ml-24">
                <div
                  className={`flex justify-center text-8xl font-extrabold sm:justify-normal`}
                  style={{ color: "black" }}
                >
                  music
                </div>
                <div
                  className={`flex justify-center text-4xl font-extrabold text-black sm:justify-normal`}
                  style={{ color: "black" }}
                >
                  <a href="#slide0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-arrow-right"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {albums.map((album, index) => (
              <div
                id={`slide${index}`}
                className={`carousel-item w-full overflow-y-auto overflow-x-hidden sm:columns-2 sm:overflow-y-hidden`}
                key={album.title}
                style={{ backgroundColor: album.first }}
              >
                {window.innerWidth > 640 ? (
                  <Image
                    className="rounded-box h-44 w-44 object-cover sm:ml-[10rem] sm:mt-24 sm:h-[30rem] sm:w-[30rem]"
                    src={album.path}
                    alt={album.title}
                    width={100}
                    height={100}
                    unoptimized
                    priority
                  />
                ) : null}

                <div className="ml-4 mt-12 h-40 w-36 sm:ml-20 sm:mt-24 sm:h-72 sm:w-[40rem]">
                  <div className="flex">
                    <div className="flex-none">
                      <div
                        className={`text-4xl font-extrabold sm:w-[100%] sm:text-6xl`}
                        style={{ color: album.second }}
                      >
                        {album.title}
                      </div>

                      <div
                        className={`text-4xl font-extrabold sm:text-6xl text-[${album.second}]`}
                        style={{ color: album.second }}
                      >
                        {album.artist}
                      </div>
                    </div>

                    {window.innerWidth < 640 ? (
                      <Image
                        className="rounded-box ml-3 mt-0 h-24 w-24 flex-auto object-cover"
                        src={album.path}
                        alt={album.title}
                        width={100}
                        height={100}
                        quality={100}
                        unoptimized
                        priority
                      />
                    ) : null}
                  </div>

                  <div className="w-80 overflow-y-auto text-sm text-white sm:mt-4 sm:h-80 sm:w-auto sm:text-lg">
                    {album.review}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="carousel h-[35rem] w-full overflow-y-hidden sm:h-[43rem] sm:overflow-y-auto">
            <div
              className={`carousel-item w-full items-center border-t-4 border-black`}
              style={{ backgroundColor: "white" }}
            >
              <div className="mt-20 h-72 w-[40rem] sm:ml-24">
                <div
                  className={`flex justify-center text-8xl font-extrabold sm:justify-normal`}
                  style={{ color: "black" }}
                >
                  films
                </div>
                <div
                  className={`flex justify-center text-4xl font-extrabold text-black sm:justify-normal`}
                  style={{ color: "black" }}
                >
                  <a href="#film0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-arrow-right"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {films.map((film, index) => (
              <div
                id={`slide${index}`}
                className={`carousel-item w-full overflow-y-auto overflow-x-hidden sm:columns-2 sm:overflow-y-hidden`}
                key={film.title}
                style={{ backgroundColor: film.first }}
              >
                {window.innerWidth > 640 ? (
                  <Image
                    className="rounded-box h-44 w-44 object-cover sm:ml-[10rem] sm:mt-24 sm:h-[30rem] sm:w-[30rem]"
                    src={film.path}
                    alt={film.title}
                    width={100}
                    height={100}
                    quality={100}
                    unoptimized
                    priority
                  />
                ) : null}

                <div className="ml-4 mt-12 h-40 w-36 sm:ml-20 sm:mt-24 sm:h-72 sm:w-[40rem]">
                  <div className="flex">
                    <div className="flex-none">
                      <div
                        className={`text-4xl font-extrabold sm:w-[100%] sm:text-6xl`}
                        style={{ color: film.second }}
                      >
                        {film.title}
                      </div>

                      <div
                        className={`text-4xl font-extrabold sm:text-6xl text-[${film.second}]`}
                        style={{ color: film.second }}
                      >
                        {film.artist}
                      </div>
                    </div>
                    {window.innerWidth < 640 ? (
                      <Image
                        className="rounded-box mb-10 ml-20 mt-0 h-40 w-40 flex-auto object-contain"
                        src={film.path}
                        alt={film.title}
                        width={100}
                        height={100}
                        quality={100}
                        unoptimized
                        priority
                      />
                    ) : null}
                  </div>

                  <div className="w-80 overflow-y-auto text-sm text-white sm:mt-4 sm:h-80 sm:w-auto sm:text-lg">
                    {film.review}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
