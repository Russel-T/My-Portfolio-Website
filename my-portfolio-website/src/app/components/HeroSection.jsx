"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl  lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-lime-500">
              Hello I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Russel Tjahjadi",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "a Software Engineer",
                1000,
                "a Web Developer",
                1000,
                "a Mobile App Developer",
                1000,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsa
            id, laborum quasi distinctio possimus ex expedita, accusamus
            suscipit aspernatur quo aliquid sequi. Nihil vero dicta at molestias
            ex beatae.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit bg-[#00df9a] mr-4 hover:bg-[#00cf9a] text-black">
              Hire Me
            </button>
            <button className="px-6 py-3  w-full sm:w-fit bg-transparent rounded text-[#00df9a] border border-[#00df9a] hover:bg-[#00df9a] hover:text-black mt-3">
              My Resume
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/memoji.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
