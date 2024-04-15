import React from "react";
import Card from "@/reusable_components/Card";
import lazy from "../images/9.Laziness.png";
import search from "../images/2.Searching.png";
import news from "../images/1.Newspaper.png";
import Link from "next/link";
//remember: breakpoints effect that size and above. non-prefixed -> for mobile
function FrontPage() {
  return (
    <div className="sm:relative sm:mt-24 sm:flex sm:flex-col sm:justify-center sm:items-center sm:overflow-hidden bg-white sm:items-center sm:pr-16">
      <div className="text-center mt-10 sm:text-left">
        <div className="font-poppins text-5xl font-bold sm:text-8xl">
          Hello, I&apos;m Odi!
        </div>
        <div className="text-left ml-7 font-poppins w-80 text-5xl font-bold text-blue-600 text-opacity-50 sm:w-[100%] sm:text-8xl sm:ml-0">
          Welcome to my space.
        </div>
      </div>
      <div className="justify-center mb-12 mt-12 flex flex-col gap-24 gap-20 grid sm:mt-18 sm:ml-24 sm: flex sm:flex-row sm:gap-10 sm:hidden">

        <Link href="/about">
          <Card title={"about me"} img={lazy} />
        </Link>
        <Link href="/reviews">
          <Card title={"reviews"} img={news} />
        </Link>
        <Link href="/blog">
          <Card title={"blog"} img={search} />
        </Link>
      </div>
    </div>
  );
}

export default FrontPage;
