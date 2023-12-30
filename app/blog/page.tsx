import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getBlogEntries } from "@/lib/contentful/blogs";
import { cn } from "@/lib/utils";

import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const BlogPage = async () => {
  const blogEntries = await getBlogEntries();
  // console.log(blogEntries, "home running");
  // const da = dateFormat(blogEntries.items[0].sys.createdAt);
  // console.log(blogEntries.items[0].sys.createdAt, "home running");
  // console.log(blogEntries.items[0].fields.content, "home running");


  return <div className="min-h-[400px] max-w-4xl mx-auto py-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-4xl font-bold font-secondary">Blog</h2>
        <div className="flex py-3 font-secondary">
          <Link className={cn(buttonVariants({ variant: "link", size: "sm" }))} href="/blog/all">All</Link>
          <Link className={cn(buttonVariants({ variant: "link", size: "sm" }))} href="/blog/all">#Popular</Link>
        </div>
      </div>

      <div className="flex text-slate-500 items-center gap-3">
        <p>0 Posts</p> / <p>0 Likes</p>
      </div>
    </div>
    <div className="py-2 flex items-center">
      <Input placeholder="Search Title or Category" className="py-1 font-primary" />
      <div className="">
        <Search className="-ml-8" />
      </div>
    </div>
    {blogEntries.items.map((blog) => <div key={blog.sys.id} className="flex items-center justify-between py-4">
      <div className="">
        <p className="text-sm font-secondary text-gray-500">#CODE</p>
        <Link href={`/blog/${blog?.fields?.slug}`} className="text-3xl font-bold font-secondary hover:italic transition-all duration-400 block pb-2">{blog?.fields?.title as String}</Link>
        <div className="flex text-gray-400 font-primary text-xs gap-x-10">
          <p>{blog.sys.createdAt}</p>
          <p>. 2 Likes</p>
          <p>~ 4mn Read</p>
        </div>
        <p className="text-md font-secondary">{blog?.fields?.title as String}</p>
        {/* <Separator className="mt-2"/> */}
      </div>

    </div>)}


    {blogEntries.items.length < 1 && <p className="font-secondary text-xl">No Post Found</p>}


  </div>;
};

export default BlogPage;
