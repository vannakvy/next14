// import { sql } from '@vercel/postgres'
// import { AddForm } from '@/app/add-form'
// import { DeleteForm } from '@/app/delete-form'

import { BannerCarousel } from "@/components/banner-carousel";
import TypingAnimation from "@/components/typing-animation";
import { Button } from "@/components/ui/button";
import { getBlogEntries } from "@/lib/contentful/blogs";
import { cn } from "@/lib/utils";



// export const runtime = 'edge'
// export const preferredRegion = 'home'




export default async function Home() {

 

  return (
    <main className="pt-6">
      <div className="grid grid-cols-3 items-end max-w-[1300px] mx-auto mb-10">
        <div className={cn("col-span-1 pr-6")}>
          <TypingAnimation data=" fullstack developer and coding teaher" />

          <h2 className="text-7xl font-bold py-6 font-secondary">Vy Vannak</h2>
          <div className="flex items-center gap-x-4 py-6">
            <Button size="lg">BLOG</Button>
            <Button variant="outline" size="lg">ABOUT</Button>
          </div>
        </div>
        <BannerCarousel />


      </div>





    </main>
  )
}