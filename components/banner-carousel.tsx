"use client"
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function BannerCarousel() {
  return (
    <Carousel plugins={[
      Autoplay({
        delay: 2000,
      }),
    ]} className="w-full col-span-2">
      <CarouselContent className="">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 -ml-3">
            <div className="p-1 ">
              <Card className="bg-gradient-to-r from-[#22536f] to-[#1c276b]">
                <CardContent className="flex aspect-square items-center justify-center p-6 ">
                 <h3>hhh</h3>
                </CardContent>
              </Card>
            </div>
            {/* <Image width={350} height={250} src="/banner1.jpg" alt="banner" /> */}
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}
