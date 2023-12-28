import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { Download } from "lucide-react";
import React from "react";


// const gradientLight =
//   'linear-gradient(to bottom, #22536f 0%, #291e63 50%,#1c276b 100%)';
// const gradientDark =
//   'linear-gradient(to bottom,#1c276b 0%, #291e63 50%,#22536f 100%)';
const AboutPage = () => {
  return <div className="max-w-[1300px] mx-auto py-8">
    <h2 className="text-4xl font-bold font-secondary">About</h2>
    <div className="grid grid-cols-3 gap-3 py-4">
      <Card className="bg-gradient-to-b from-[#22536f] to-[#1c276b] dark:from-[#1c276b]  dark:to-[#22536f] py-3">
        <CardHeader>
          <Avatar className="w-20 h-20">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>Vannak</AvatarFallback>
          </Avatar>
          <CardTitle className="py-3 font-secondary text-white">Hey there, I am Vannak 👋</CardTitle>
          <CardDescription className="font-primary text-white">I am a developer/designer who is passionate about crafting outstanding digital experiences. This blog is a platform to document my career journey, learn in public, and share my knowledge with the web development community.</CardDescription>
        </CardHeader>
        <CardContent className="grid ">
          <Separator className="mb-4" />
          <Button className="inline-flex gap-2 py-3" size="lg">DOWNLOAD RESUME <Download /></Button>
        </CardContent>

      </Card>
      <Card>
        <div className="p-2">
          <h2 className="font-secondary text-xl font-semibold">
            Proficiencies
          </h2>
          <Separator className="bg-indigo-950 dark:bg-primary h-[1.5px] my-3" />
          <ul className="grid grid-cols-2 gap-2 list-square px-6 font-secondary">
            <li className="text-slate-500">Nextjs</li>
            <li className="text-slate-500">React js</li>
            <li className="text-slate-500">Nodejs</li>
            <li className="text-slate-500">JavaScript</li>
            <li className="text-slate-500">C++</li>
            <li className="text-slate-500">Python</li>
            <li className="text-slate-500">Rust</li>
            <li className="text-slate-500">HTML</li>
            <li className="text-slate-500">CSS</li>
            <li className="text-slate-500">Docker</li>
            <li className="text-slate-500">Git</li>
            <li className="text-slate-500">SQL Postgres / Prisma</li>
            <li className="text-slate-500">Mongodb / Mongoose</li>
            <li className="text-slate-500">GraphQL</li>
            <li className="text-slate-500">AWS</li>
            <li className="text-slate-500">Nginx</li>
            <li className="text-slate-500">Linux</li>
            {/* <li className="text-slate-500">Prisma</li> */}
          </ul>
        </div>
      </Card>
      <Card>
        3
      </Card>
      <Card>
        2
      </Card>
      <Card>
        3
      </Card>
    </div>
  </div>;
};

export default AboutPage;
