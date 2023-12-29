import Timeline from "@/components/time-line";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { timelineContent } from "@/data/content";

import { Download, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
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
          <h2 className="font-secondary text-xl tracking-wider">
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
        <div className="p-2 font-secondary">
          <h2 className=" text-xl tracking-wider">
            Experiences
          </h2>
          <Separator className="bg-indigo-950 dark:bg-primary h-[1.5px] my-3 " />
          <p className="py-4 text-slate-500 leading-2">Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, deserunt! amet, consectetur adipisicing elit. Fugiat exercitationem quia officia aliquam illo nesciunt ex dignissimos harum delectus tempora.</p>
          <p className="text-slate-500 leading-2">Lorem  ipsum dolor sit amet consectetur, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, veniam. adipisicing elit. Similique maxime tempora tempore mollitia, inventore corporis excepturi dicta molestias, labore, sunt dignissimos nisi vel quis necessitatibus?</p>
        </div>
      </Card>
      <Card>
        <div className="p-2 font-secondary">
          <h2 className=" text-xl tracking-wider">
            Current Projects
          </h2>
          <Separator className="bg-indigo-950 dark:bg-primary h-[1.5px] my-3 " />
          <h3 className="text-lg font-secondary text-slate-500 py-2">Coding Teacher @ CCKH <Link className="text-primary" href="/">Champion Coder</Link></h3>
          <ul className="grid grid-cols-1 gap-2 list-square px-6 font-secondary">
            <li className="text-slate-500  text-sm">Teach Web Development (FullStack)</li>
            <Separator className="bg-indigo-950" />
            <li className="text-slate-500 text-sm">Teach Internet of things & Robotics</li>
            <Separator className="bg-indigo-950" />
            <li className="text-slate-500 text-sm">Build Fullstack projects</li>
            <Separator className="bg-indigo-950" />
            <li className="text-slate-500">Designing Curriculumns</li>

            {/* <li className="text-slate-500">Prisma</li> */}
          </ul>
        </div>
      </Card>
      <Card>
        <div className="p-2 font-secondary">
          <h2 className=" text-xl tracking-wider">
            Socials
          </h2>
          <Separator className="bg-indigo-950 dark:bg-primary h-[1.5px] my-3 " />
          <div className="flex space-x-4 items-center">
            <div className="w-10 h-10 rounded-full bg-black dark:bg-indigo-950 p-1 flex items-center justify-center hover:bg-primary/60">
              <Facebook className="text-white" />
            </div>
            <div className="w-10 h-10 rounded-full bg-black p-1 flex items-center justify-center hover:bg-primary/60">
              <Youtube className="text-white" />
            </div>
            <div className="w-10 h-10 rounded-full bg-black p-1 flex items-center justify-center hover:bg-primary/60">
              <Twitter className="text-white" />
            </div>
            <div className="w-10 h-10 rounded-full bg-black p-1 flex items-center justify-center hover:bg-primary/60">
              <Linkedin className="text-white" />
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className="p-2 font-secondary">
          <h2 className=" text-xl tracking-wider">
            Contact Information
          </h2>
          <Separator className="bg-indigo-950 dark:bg-primary h-[1.5px] my-3 " />

          <ul className="grid grid-cols-1 gap-2 list-square px-6 font-secondary">
            <li className="text-slate-500  text-sm">Email:<Link className="text-primary" href="">vannakvy2020@gmail.com</Link> </li>
            <Separator className="bg-indigo-950 w-10" />
            <li className="text-slate-500 text-sm">Tel: <Link className="text-primary" href="">081336131</Link></li>
            <Separator className="bg-indigo-950 w-20" />
            <li className="text-slate-500 text-sm">Facebook : <Link className="text-primary" href="">vannakvy</Link></li>
            <Separator className="bg-indigo-950 w-28" />
            <li className="text-slate-500">Youtube: <Link className="text-primary" href="">Coding Cambodia</Link></li>

            {/* <li className="text-slate-500">Prisma</li> */}
          </ul>
        </div>
      </Card>
    </div>
    <Timeline timeline={timelineContent}/>
  </div>;
};

export default AboutPage;
