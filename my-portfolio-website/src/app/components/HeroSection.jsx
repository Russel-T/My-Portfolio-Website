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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
              Hello I'm{" "}
            </span>

            <br></br>
            <TypeAnimation
              sequence={[
                "Russel Abraham Tjahjadi",
                1000,
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
            Computer science student at the University of Illinois at Chicago,
            with a passion for learning and solving problems through technology.
            Experienced in various programming languages and software
            engineering principles, eager to contribute to impactful projects
            and grow in a software engineering role.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit bg-blue-500 mr-4 hover:bg-blue-400 text-white rounded-full">
              Hire Me
            </button>
            <button className="px-6 py-3  w-full sm:w-fit bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white mt-3 rounded-full">
              My Resume
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/Mugshot.jpg"
              alt="hero image"
              // className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              className="absolute inset-0 w-full h-full object-cover rounded-full"
              layout="fill"
              // width={300}
              // height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
