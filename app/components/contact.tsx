"use client";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
export default function Contact() {
  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".end",
        start: "top 50%",
      },
    });
    t1.from(".par-anim", {
      opacity: 0,
      y: 10,
      stagger: 0.4,
    });
  });
  return (
    <section className="radial-gradient-2 noisy-no-bg flex flex-col items-center text-center end gap-10 text-2xl relative">
      <div className="flex flex-col pt-4">
        <h1 className="font-modernNegra text-7xl">Where to Find Us</h1>
        <p className="par-anim py-4">Visit our store</p>
        <p className="par-anim ">456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        <p className="par-anim pt-8 pb-4">Contact us</p>
        <p className="par-anim ">(555) 987-6543</p>
        <p className="par-anim  pb-10">hello@jsmcocktail.com</p>
        <p className="par-anim ">Open every day</p>
        <p className="par-anim ">
          Mon-Thu : 11:00am - 12am <br />
          Fri : 11:00am - 2am
          <br /> Sat : 9:00am - 2am <br />
          Sun : 9:00am - 1 am
        </p>
        <div className="flex pt-5 flex-col items-center gap-4">
          <p className="">Socials</p>
          <div className="flex flex-row gap-4">
            {" "}
            <FaInstagram />
            <RiTwitterXFill /> <FaFacebookSquare />
          </div>
        </div>
      </div>
      <Image
        src="/images/footer-drinks.png"
        width={300}
        height={300}
        alt="dd"
        className="absolute bottom-0 right-0"
      />
      <Image
        src="/images/footer-right-leaf.png"
        width={300}
        height={300}
        alt="dd"
        className="absolute   right-0 top-0 hidden lg:block "
      />
      <Image
        className=" absolute bottom-0 left-0 hidden lg:block"
        src="/images/footer-left-leaf.png"
        width={300}
        height={300}
        alt="dd"
      />
    </section>
  );
}
