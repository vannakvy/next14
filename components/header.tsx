import { cn } from "@/lib/utils";
import { Code, Facebook, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { Bayon,Hanuman,Kantumruy_Pro } from "next/font/google";
const inter = Kantumruy_Pro({ subsets:["khmer"],weight:"400"})

const Header = () => {
  return <div className={cn("py-6 flex items-center justify-between",inter.className)}>
    <span className="flex space-x-2 font-bold text-xl">
      <Code />
      USEA CODES
    </span>
    <nav className="flex items-center space-x-5">
      <Link className={cn(buttonVariants({size:"sm",variant:"link"}),"text-indigo-950 text-xl font-semibold")} href="/">ទំព័រដើម</Link>
      <Link className={cn(buttonVariants({size:"sm",variant:"link"}),"text-indigo-950 text-xl font-semibold")} href="/">មុខវិទ្យាទាំងអស់</Link>
      <Link className={cn(buttonVariants({size:"sm",variant:"link"}),"text-indigo-950 text-xl font-semibold")} href="/">អំពីពួកយើង</Link>
      <Link className={cn(buttonVariants({size:"sm",variant:"link"}),"text-indigo-950 text-xl font-semibold")} href="/">ទំនាក់ទំនង</Link>

    </nav>
    <div className="flex space-x-4">
      <Facebook />
      <Youtube />
    </div>
  </div>;
};

export default Header;
