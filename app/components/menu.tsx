"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { allCocktails, AllCocktail, cocktailLists } from "@/constants/index";
import { useEffect, useState } from "react";
import gsap from "gsap";
export default function Menu() {
  const [cockTails, seCockTails] = useState<AllCocktail[]>(allCocktails);
  const [currentCockTail, setCurrentCockTail] = useState<AllCocktail>(
    allCocktails[0]
  );
  const handleClickTitle=(clock:AllCocktail)=>{
    setCurrentCockTail(clock)
  }
  useEffect(() => {
    gsap.fromTo(
      ".cocktail",
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.3,
        ease: "power1.inOut",
      }
    );
    gsap.from(".text", {
      opacity: 0,
      duration: 0.3,
    });
  }, [currentCockTail]);

  const handleClickNext = () => {
    const index = cockTails.findIndex((cock) => cock.id === currentCockTail.id);
    if (index === -1) return; // safety check

    const next =
      index === cockTails.length - 1 ? cockTails[0] : cockTails[index + 1];

    gsap.to(".cocktail", {
      opacity: 0,
      x: -50,
      duration: 0.3,
      ease: "power1.inOut",
      onComplete: () => {
        setCurrentCockTail(next);
      },
    });
  };

  const handClickBack = () => {
    const index = cockTails.findIndex((cock) => cock.id === currentCockTail.id);
    if (index === -1) return; // safety check

    const back =
      index === 0 ? cockTails[cockTails.length - 1] : cockTails[index - 1];
      gsap.to(".cocktail", {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power1.inOut",
        onComplete: () => {
            setCurrentCockTail(back);
        },
      });
   
  };
  return (
    <section className="w-[100vw] overflow-x-hidden lg:min-h-screen pt-[14vh] lg:px-0 px-4 lg:pt-[9vh] radial-gradient-2 relative h-[150vh]">
      <div className="flex flex-col items-center ">
        <div className="flex flex-row flex-wrap gap-20 text-4xl justify-center font-modernNegra mt-14">
          {cockTails.map((cock) => (
            <div
              key={cock.id}
              className={cn(
                "border-b-2 cursor-pointer",
                currentCockTail.id === cock.id ? "" : "opacity-[0.5]"
              )}
              onClick={()=>handleClickTitle(cock)}
            >
              {cock.name}
            </div>
          ))}
        </div>
        <div>
          <div className="w-[120px] absolute -translate-y-1/2 top-1/2 right-1/20 flex flex-col items-center">
            <h1 className="font-modernNegra text-3xl hidden lg:block">
              {currentCockTail.id === cockTails[cockTails.length - 1].id
                ? cockTails[0].name
                : cockTails[
                    cockTails.findIndex(
                      (cock) => cock.id === currentCockTail.id
                    ) + 1
                  ]?.name}
            </h1>
            <Image
              src="/images/left-arrow.png"
              width={50}
              height={50}
              alt="sdfa"
              className="cursor-pointer"
              onClick={() => handleClickNext()}
            />
          </div>
          <div className="w-[120px] absolute -translate-y-1/2 top-1/2 left-1/20 flex flex-col items-center ">
            <h1 className=" font-modernNegra text-3xl hidden lg:block">
              {currentCockTail.id === 1
                ? cockTails[cockTails.length - 1].name
                : cockTails[
                    cockTails.findIndex(
                      (cock) => cock.id === currentCockTail.id
                    ) - 1
                  ]?.name}
            </h1>
            <Image
              src="/images/right-arrow.png"
              width={50}
              height={50}
              alt="sdfa"
              className="cursor-pointer"
              onClick={() => handClickBack()}
            />
          </div>
        </div>
        <div className="flex flex-col -translate-x-1/2 left-1/2 lg:flex-row container mx-auto justify-between absolute bottom-10 text">
          <div className="max-w-[300px]">
            {" "}
            <p>Recipos for:</p>
            <h1 className="font-modernNegra text-5xl text-yellow">
              {currentCockTail.name}
            </h1>
          </div>
          <div className="max-w-[500px] gap-3">
            <h1 className="font-modernNegra text-5xl">
              {currentCockTail.title}
            </h1>
            <p>{currentCockTail.description}</p>
          </div>
        </div>
        <Image
          className="absolute top-1/2 -translate-y-1/2 cocktail"
          src={currentCockTail.image}
          width={500}
          height={500}
          alt="sdf"
        />
      </div>
    </section>
  );
}
