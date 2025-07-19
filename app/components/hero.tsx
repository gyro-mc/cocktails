"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
export default function Hero() {
  const videoRef = useRef(null);
  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars, words",
    });
    const paragraphSplit = new SplitText(".par", {
      type: "lines",
    });
    gsap.from(paragraphSplit.lines, {
      yPercent: 150,
      duration: 2,
      ease: "expo.out",
      stagger: 0.08,
      opacity: 0,
    });
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    })
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: "top 50%",
        end: "120% top",
        scrub: true,
        pin:".vidDiv"
      },
    });

    // Safely animate video currentTime after metadata is loaded
    const videoEl = videoRef.current as HTMLVideoElement | null;
    const onLoaded = () => {
      if (videoEl && videoEl.duration) {
        tl.to(videoEl, { currentTime: videoEl.duration });
      }
    };
    videoEl?.addEventListener("loadedmetadata", onLoaded);

    // Clean up event listener and ScrollTriggers on unmount
    return () => {
      videoEl?.removeEventListener("loadedmetadata", onLoaded);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
    //     tl.to(videoEl, { currentTime: videoEl.duration });
    //   }
    // };
    // videoEl?.addEventListener("loadedmetadata", onLoaded);

    // return () => {
    //   // cleanup listener & ScrollTriggers on unmount
    //   videoEl?.removeEventListener("loadedmetadata", onLoaded);
    //   ScrollTrigger.getAll().forEach((st) => st.kill());
    // };
  });
  return (
    <>
      <section className=" noisy relative z-20 ">
        <div className="  flex flex-row justify-center lg:relative items-center">
          <h1 className=" font-modernNegra text-[150px] lg:text-[300px] noisy-gradient title ">
            MOJITO
          </h1>
          <Image
            className="absolute left-0 bottom-0 hidden lg:block"
            src="/images/hero-left-leaf.png"
            alt="left leaf"
            width={200}
            height={200}
          />
          <Image
            className="absolute top-[50vh] right-0 lg:top-0"
            src="/images/hero-right-leaf.png"
            alt="left leaf"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-between  items-center container mx-auto h-[40vh]">
          <div className="flex-col gap-4 hidden lg:flex ">
            <p className="font-medium">Cool. Crisp. Classic.</p>
            <h1 className="font-modernNegra text-4xl  lg:max-w-60 text-yellow par">
              Sip the Spirit of Summer
            </h1>
          </div>
          <div className="flex flex-col gap-6 font-medium  items-center lg:items-center sm:w-full lg:w-auto">
            <p className="par lg:max-w-70 w-full  text-center text-xl lg:text-start font-medium lg:text-md lg:font-normal">
              Every cocktail on our menu is a blend of premium ingredients,
              creative flair, and timeless recipes — designed to delight your
              senses.{" "}
            </p>
            <p className="">View cocktails</p>
          </div>
        </div>
      </section>
      <div className="flex flex-row justify-center items-end w-full md:h-[80%] h-1/2 absolute bottom-0 left-0 md:object-contain object-bottom object-cover">
        <video
          className="  z-[1] w-[1300px] h-[700px] "
          ref={videoRef}
          autoPlay
          muted
          playsInline
          id="video"
        >
          <source src="/videos/input.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}
