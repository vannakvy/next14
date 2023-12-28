import { cn } from "@/lib/utils";
import { Github, Home, ToggleRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./modals/theme-modal";

const BlogHeader = () => {
  return <div className="sticky top-0 z-30 dark:bg-black bg-white font-primary">
    <div className="flex items-center justify-between py-5  max-w-[1300px] mx-auto border-b ">
      <div>
        <h2 className="text-2xl font-semibold font-secondary italic">Vy Vannak</h2>
        <p className="text-sm text-slate-500">vannakvy2020@gmail.com <span className="text-primary text-xs">+855 081 33 61 31</span></p>
       
      </div>
      <div className="flex items-center space-x-10">
        <Link href="/" className="inline-flex gap-x-1 items-center"><Home size={15} /> Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/" className={cn("inline-flex gap-x-1 items-center", buttonVariants({ size: "sm" }))}><Github size={15} /> Github</Link>
        <ModeToggle />
      </div>
    </div>
  </div>;
};

export default BlogHeader;
