import React from "react";
import Card from "@/reusable_components/Card";
import lazy from "../images/9.Laziness.png";
import search from "../images/2.Searching.png";
import news from "../images/1.Newspaper.png";
import Link from "next/link";

function FrontPage() {
  return (
    <div className="relative mt-24  flex flex-col justify-center items-center overflow-hidden bg-white sm:items-center pr-16">
      <div className="mr-16">
        <div className="font-poppins text-5xl font-bold sm:text-8xl">
          Hello, I&apos;m Odi!
        </div>
        <div className="font-poppins w-80 text-5xl font-bold text-blue-600 text-opacity-50 sm:w-[100%] sm:text-8xl">
          Welcome to my space.
        </div>
      </div>
      <div className="sm:mt-18 mb-12 mt-12 flex gap-24 sm:ml-24 sm:grid sm:grid-flow-col sm:grid-rows-1 sm:gap-20">
        <Link href="/about">
          <Card title={"about me"} img={lazy} />
        </Link>
        <Link href="/reviews">
          <Card title={"reviews"} img={news} />
        </Link>
        <Link href="/blog">
          <Card title={"interests"} img={search} />
        </Link>
      </div>
    </div>
  );
}

export default FrontPage;
