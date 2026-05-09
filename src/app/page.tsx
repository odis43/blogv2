import React from "react";
import Card from "@/reusable_components/Card";
import lazy from "../images/9.Laziness.png";
import search from "../images/2.Searching.png";
import Link from "next/link";
import halfnote from "../images/halfnote.png";

function FrontPage() {
  return (
    <div className="sm:relative sm:mt-24 sm:flex sm:flex-col sm:justify-center sm:items-center sm:overflow-hidden bg-white sm:pr-16">
      <div className="text-center mt-10 sm:text-left">
        <div className="font-poppins text-5xl font-bold sm:text-8xl">
          Hello, I&apos;m Odi!
        </div>
        <div className="text-left ml-6 font-poppins w-80 text-5xl font-bold text-blue-600 text-opacity-50 sm:w-[100%] sm:text-8xl sm:ml-0">
          Welcome to my space.
        </div>
      </div>
      <div className="ml-[10%] mb-12 mt-12 flex flex-col gap-24 sm:mt-18 sm:ml-24 sm: sm:flex-row sm:gap-10 ">
        <Link href="/about">
          <Card title={"about me"} img={lazy} />
        </Link>
        <Link href="/halfnote">
          <Card
            title={"Halfnote"}
            img={halfnote}
            imgClassName="w-60 h-60 object-contain"
          />
        </Link>
        <Link href="/blog">
          <Card title={"blog"} img={search} />
        </Link>
      </div>
    </div>
  );
}

export default FrontPage;
