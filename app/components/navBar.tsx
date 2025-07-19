"use client";

import { NavLink, navLinks } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function NavBar() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#nav",
        start: "bottom top",
        
      },
    });

    tl.fromTo(
      "#nav",
      { backgroundColor: "transparent", backdropFilter: "none" },
      {
        backgroundColor: '#00000050',
        backgroundFilter: 'blur(20px)',
        duration: 1,
        ease: 'power1.inOut'
      }
    );
  });

  return (
    <nav
      id="nav"
      className="py-6 fixed w-full z-50 "
    >
      <div className="flex flex-col sm:gap-5 lg:flex-row items-center justify-between container mx-auto ">
        <a href="#" className="flex flex-row gap-2 items-center">
          <Image src="/images/logo.png" alt="logo" height={40} width={40} />
          <p>Velvet Pour</p>
        </a>
        <ul className="flex flex-row gap-10">
          {navLinks.map((link: NavLink) => (
            <li key={link.id}>{link.title}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
