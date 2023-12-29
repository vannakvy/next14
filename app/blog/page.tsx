import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const BlogPage = () => {
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
      <Input placeholder="Search Title or Category" className="py-1 font-primary"/>
      <div className="">
      <Search className="-ml-8"/>
      </div>
    </div>

    <p className="font-secondary">No Post Found</p>

  </div>;
};

export default BlogPage;
