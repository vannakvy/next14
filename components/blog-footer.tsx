import React from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const BlogFooter = () => {
  return <div className=" bg-indigo-950">
    <div className="grid grid-cols-4 w-full py-10 gap-10 max-w-[1300px] mx-auto">
      <div className="logo col-span-1">X</div>
      <div className="flex flex-col col-span-1">
        <h2 className="text-md py-2">EXPLORE</h2>
        <Separator className="w-full mb-4" />
        <div className="flex flex-col items-start space-y-2">
          <Link className={cn(buttonVariants({ variant: "link",size:"sm" }))} href="/">Home</Link>
          <Link className={cn(buttonVariants({ variant: "link",size:"sm" }))} href="/">About</Link>
          <Link className={cn(buttonVariants({ variant: "link",size:"sm" }))} href="/">Blog</Link>
          <Link className={cn(buttonVariants({ variant: "link",size:"sm" }))} href="/">Timelines</Link>
          <Link className={cn(buttonVariants({ variant: "link",size:"sm" }))} href="/">Uses</Link>
        </div>
      </div>
      <div className="flex flex-col col-span-1">
        <h2 className="text-md py-2">CONNECT</h2>
        <Separator className="w-full mb-4" />
        <div className="flex flex-col items-start space-y-2">
          <Link className={cn(buttonVariants({ variant: "link",size:"sm" }))} href="/">Github</Link>
          <Link className={cn(buttonVariants({ variant: "link",size:"sm" }))} href="/">Linkedin</Link>
          <Link className={cn(buttonVariants({ variant: "link",size:"sm" }))} href="/">X</Link>
          <Link className={cn(buttonVariants({ variant: "link",size:"sm" }))} href="/">Resume</Link>
        </div>
      </div>
      <div className="flex flex-col col-span-1">
        <h2 className="text-md py-2">POWERED BY</h2>
        <Separator className="w-full mb-4" />
        <div className="flex flex-col items-start space-y-2">
          <Link className={cn(buttonVariants({ variant: "link",size:"sm" }))} href="/">Nextjs</Link>
          <Link className={cn(buttonVariants({ variant: "link",size:"sm" }))} href="/">Tailwind</Link>
          <Link className={cn(buttonVariants({ variant: "link",size:"sm" }))} href="/">Docker</Link>
          <Link className={cn(buttonVariants({ variant: "link",size:"sm" }))} href="/">Prisma</Link>
          <Link className={cn(buttonVariants({ variant: "link",size:"sm" }))} href="/">NextAuth</Link>
        </div>
      </div>
    </div>
  </div>;
};

export default BlogFooter;
