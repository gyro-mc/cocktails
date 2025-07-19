"use client";
import Image from "next/image";
import { cocktailLists, mockTailLists, CocktailItem } from "@/constants/index";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
export default function CockTails() {
  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".animation",
        scrub: true,
        start: 'top 30%',
		end: 'bottom 80%',
      },
    });
    t1.from(".right-leaf",{y:100 ,x:100})
    t1.from (".left-leaf",{y:50,x:-50})
  });
  return (
    <section className="noisy relative animation overflow-x-hidden min-h-screen z-40">
      <div className="flex flex-col gap-20 lg:gap-0 items-center text-xl lg:flex-row container mx-auto lg:justify-between pt-40 py-5">
        <div className="flex flex-col gap-7 lg:w-[350px] w-full px-5">
          <h1 className="font-medium">Most popular cocktails</h1>
          <div className=" flex flex-col gap-8 w-full ">
            {cocktailLists.map((cock: CocktailItem) => (
              <div
                key={cock.name}
                className="flex flex-row gap-14 items-start  justify-between "
              >
                <div>
                  <h1 className="font-modernNegra text-2xl text-yellow">
                    {cock.name}
                  </h1>
                  <div className="flex flex-row">
                    <div className=" border-r-1 pr-2">{cock.country}</div>
                    <div className="pl-2">{cock.detail}</div>
                  </div>
                </div>
                <div className="text-xl">-{cock.price}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-7 lg:w-[350px] w-full px-5">
          <h1 className="font-medium">Most popular cocktails</h1>
          <div className=" flex flex-col gap-8 w-full ">
            {mockTailLists.map((cock: CocktailItem) => (
              <div
                key={cock.name}
                className="flex flex-row gap-14 items-start  justify-between "
              >
                <div>
                  <h1 className="font-modernNegra text-2xl text-yellow">
                    {cock.name}
                  </h1>
                  <div className="flex flex-row">
                    <div className=" border-r-1 pr-2">{cock.country}</div>
                    <div className="pl-2">{cock.detail}</div>
                  </div>
                </div>
                <div className="text-xl">-{cock.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Image
        src="/images/cocktail-left-leaf.png"
        height={250}
        width={250}
        alt="leaf"
        className="absolute left-0 bottom-0 left-leaf lg:block hidden"
      />
      <Image
        src="/images/cocktail-right-leaf.png"
        height={250}
        width={250}
        alt="leaf"
        className="lg:absolute lg:block hidden right-0  bottom-0 right-leaf"
      />
    </section>
  );
}
