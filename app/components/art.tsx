"use client";
import { featureLists, goodLists } from "@/constants/index";
import { FaCircleCheck } from "react-icons/fa6";
import Image from "next/image";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
export default function Art() {
  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        start: "top top",
        end: "bottom center",
        trigger: ".art",
        scrub: 1.5,
        pin: true,
      },
    });
    t1.to(".will-fade", { opacity: 0, stagger: 0.2, ease: "power1.inOut" })
	 .to('.masked-img', { scale: 0.9, maskPosition: 'center', maskSize: '300%', duration: 1, ease: 'power1.inOut '})

    t1.to(".maksed-content", { opacity: 1, duration: 1, ease: "power1.inOut" });
  });
  return (
    <section className="noisy-no-bg  relative art pt-[0] ">
      <div className="container mx-auto flex flex-col justify-center items-center   ">
        <h1 className=" font-modernNegra text-9xl lg:text-[370px] text-transparent bg-clip-text will-fade bg-zinc-400">
          The ART
        </h1>
        <div className="flex flex-row  w-full justify-between ">
          <ul className="lg:flex hidden flex-col  gap-3 ">
            {featureLists.map((feature, index) => (
              <li
                key={index}
                className="flex flex-row items-center gap-2 text-lg will-fade"
              >
                <FaCircleCheck />
                {feature}
              </li>
            ))}
          </ul>
          <Image
            className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 masked-img "
            src="/images/under-img.jpg"
            width={1100}
            height={1100}
            alt="sdf"
          />
          <ul className="  gap-3 lg:flex hidden flex-col ">
            {goodLists.map((feature, index) => (
              <li
                key={index}
                className="flex flex-row items-center gap-2 text-lg will-fade"
              >
                <FaCircleCheck />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <h1 className="font-modernNegra text-5xl absolute bottom-3  will-fade">
          Sip-Worthy Perfection
        </h1>
        <div className="absolute bottom-3 flex flex-col gap-2 justify-center items-center">
          <h3 className="font-modernNegra text-5xl maksed-content opacity-0 text-center">Made with Craft , Poured with Passion</h3>
          <p  className="maksed-content opacity-0">
            This isn’t just a drink. It’s a carefully crafted moment made just
            for you.
          </p>
        </div>
      </div>
    </section>
  );
}
