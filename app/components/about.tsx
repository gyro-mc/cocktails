"use client"
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { FaStar } from "react-icons/fa";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
export default function About() {
  useGSAP(() => {
    const splitLines = new SplitText(".line", { type: "lines" });
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec",
        start: "start 80%",
        end: "bottom 100%",
      },
    });
    
    t1.from(splitLines.lines, {
      opacity: 0,
      y: 50,
      stagger: 0.4,
      ease: "power1.inOut",
    });
    const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".sec",
          start: "start 50%",
        },
      })
      t2.from(".lemon",{opacity:0,ease:"power1.inOut",stagger:0.2})


  });
  return (
    <section className="noisy-no-bg sec lg:px-0 px-2 ">
      <div className="  flex flex-col container mx-auto  lg:h-screen">
        <div className="flex-2  grid lg:grid-cols-12  grid-cols-1">
          <div className=" col-span-8  flex flex-col gap-7 ">
            <Badge className="bg-white text-black p-1 px-3 text-sm rounded-full">
              Best Cocktails
            </Badge>
            <h1 className="font-modernNegra text-5xl font-medium lg:max-w-[39%] line">
              Where every detail matters—from muddle to garnish
            </h1>
          </div>
          <div className="col-span-4 max-w-[80%] flex flex-col gap-4">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.{" "}
            </p>
            <div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="text-lg">
                  <span className="text-yellow text-3xl font-semibold">
                    4.5
                  </span>
                  /5
                </p>
                <p className="mb-5 lg:mb-0">More than +12000 customers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-5 flex flex-col gap-5 ">
          <div className="grid lg:grid-cols-12 grid-cols-1 flex-1 h-[50%]  gap-5">
            <div className="relative  lg:col-span-3 bg-white rounded-3xl  lemon overflow-hidden h-[250px] lg:h-auto">
              <Image
                fill
                src="/images/abt1.png"
                alt="sdf"
                className="object-cover z-0"
              />
              <div className="absolute noisy-bg inset-0 z-10"></div>
            </div>
            <div className="relative lg:col-span-3 bg-white  rounded-3xl lemon  overflow-hidden h-[250px] lg:h-auto">
              <Image
                fill
                src="/images/abt4.png"
                alt="sdf"
                className="object-cover z-0"
              />
              <div className="absolute noisy-bg inset-0 z-10"></div>
            </div>
            <div className="relative lg:col-span-6 bg-white  rounded-3xl lemon  overflow-hidden h-[250px] lg:h-auto">
              <Image
                fill
                src="/images/abt2.png"
                alt="sdf"
                className="object-cover z-0 "
              />
              <div className="absolute noisy-bg inset-0 z-10"></div>
            </div>
          </div>
          <div className="  flex-1 grid h-[50%] lg:grid-cols-12 grid-cols-1 py-17 gap-4 lg:py-0 lg:p-0 lg:gap-5">
            <div className="relative lg:col-span-8 bg-white  rounded-3xl lemon  overflow-hidden  h-[250px] lg:h-auto">
              <Image
                fill
                src="/images/abt3.png"
                alt="sdf"
                className="object-cover z-0 "
              />
              <div className="absolute noisy-bg inset-0 z-10"></div>
            </div>
            <div className="relative lg:col-span-4 bg-white  rounded-3xl lemon  overflow-hidden h-[250px] lg:h-auto">
              <Image
                fill
                src="/images/abt5.png"
                alt="sdf"
                className="object-cover z-0 "
              />
              <div className="absolute noisy-bg inset-0 z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
