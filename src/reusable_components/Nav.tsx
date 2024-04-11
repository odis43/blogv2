"use client";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [name, setName] = useState<string>("");
  useEffect(() => {
    if (window.innerWidth < 640) {
      setName("OA");
    } else {
      setName("Oditha Amarasinghe");
    }
  }, []);
  return (
    <nav className="border-b-2 border-black bg-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="text-xl font-bold">{name}</div>
        </Link>
        <ul className="flex space-x-4 font-bold text-black">
          <Link className="hover:text-gray-500 " href="/">
            home
          </Link>
          <Link href="/about" className="hover:text-gray-500">
            whomst!
          </Link>
          <Link href="/reviews" className="hover:text-gray-500">
            reviews
          </Link>
          <Link href="/blog" className="hover:text-gray-500">
            blog
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
