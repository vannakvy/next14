"use client"
import { cn } from "@/lib/utils";
import { ChevronRight, ClapperboardIcon, Github, Home, Lock, Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import React from "react";

import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./modals/theme-modal";
import { UserButton, useAuth } from "@clerk/nextjs";

const BlogHeader = () => {
  const pathname = usePathname();
  const { isSignedIn, userId } = useAuth();
  return <div className="sticky top-0 z-30 bg-background font-primary">
    <div className="flex items-center justify-between py-5  max-w-[1300px] mx-auto border-b ">
      <div>
        <h2 className="text-2xl font-semibold font-secondary italic">Vy Vannak</h2>
        <p className="text-sm text-slate-500">vannakvy2020@gmail.com <span className="text-primary text-xs">+855 081 33 61 31</span></p>
      </div>
      <div className="flex items-center space-x-8 text-sm">
        <Link href="/" className={cn("inline-flex gap-x-1  items-center hover:text-gray-400", pathname == "/" ? "text-gray-400" : "")}>{pathname == "/" && <ChevronRight size={15} />} Home</Link>
        <Link href="/blog" className={cn("inline-flex gap-x-1  items-center hover:text-gray-400", pathname == "/blog" ? "text-gray-400" : "")}>{pathname == "/blog" && <ChevronRight size={15} />} Blog</Link>
        <Link href="/about" className={cn("inline-flex gap-x-1  items-center hover:text-gray-400", pathname == "/about" ? "text-gray-400" : "")}>{pathname == "/about" && <ChevronRight size={15} />} About</Link>
        <Link href="/learn" className={cn("inline-flex gap-x-1  items-center hover:text-gray-400", pathname == "/learn" ? "text-gray-400" : "")}>{pathname == "/learn" && <ChevronRight size={15} />} Learn</Link>
      </div>
      <div className="flex items-center space-x-4">
        {userId === "user_2aEpIO5uvbsrQB63L24CqqKk4bP" && <Link href="/blog/create" className={cn("inline-flex gap-x-1 items-center dark:text-white text-sm", buttonVariants({ size: "sm" }))}><Plus size={15} />Create Post</Link>}

        <Link href="/" className={cn("inline-flex gap-x-1 items-center dark:text-white text-sm", buttonVariants({ size: "sm" }))}><Github size={15} /></Link>

        {!isSignedIn && <Link href="/sign-in" className={cn("inline-flex gap-x-1 items-center dark:text-white text-sm", buttonVariants({ size: "sm", variant: 'outline' }))}><Lock size={15} /></Link>}
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  </div>;
};

export default BlogHeader;
