import React from "react";
import Link from "next/link";
import { Post } from "@/getposts";
export function Post({ posts }: { posts: Post[] }) {
  return (
    <div className="flex w-full flex-col">
      {posts.map(({ slug, title, snippet }) => (
        <div key={slug} className="grid h-40 place-items-start align-middle">
          <Link href={`/blog/posts/${slug}`}>
            <h2 className="text-lg font-bold">{title}</h2>
            <p>{snippet}</p>
          </Link>
          <div className="w-[70%] border-b-2 border-black"></div>
        </div>
      ))}
    </div>
  );
}
