import React, { useEffect, useState } from "react";
import searching from "../../images/2.Searching.png";
import Nav from "@/reusable_components/Nav";
import Image from "next/image";
import { getPosts } from "@/getposts";
import { Post } from "@/reusable_components/Post";

export default async function Blog() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div className="relative overflow-y-auto overflow-x-hidden bg-white">
      <Nav />
      <div className="mt-18 sm:ml-24">
        <Image className="w-60 sm:w-72" src={searching} alt="" />
        <div className="ml-4 font-poppins text-7xl font-bold sm:text-8xl">
          blog.
        </div>
        <div className="sm:mt-10 mt-9 ml-4 w-80 text-base font-medium sm:mt-10 sm:w-1/2 sm:text-lg">
          Welcome to my blog where I write about things I find cool. I hope you
          do too :)
        </div>

        <div className="mb-16 ml-3.5 mt-16 w-full">
          <Post posts={posts} />
        </div>
      </div>
    </div>
  );
}
