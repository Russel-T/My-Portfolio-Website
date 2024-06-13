import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello, I'm Russel
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
            I'm a full-stack developer
          </p>
          <div>
            <button className="px-6 py-3 bg-[#00df9a] rounded mr-4 hover:bg-[#00cf9a] ">
              Hire Me
            </button>
            <button className="px-6 py-3 bg-transparent rounded mr-4 text-[#00df9a] border border-[#00df9a] hover:bg-[#00df9a] hover:text-black">
              My Resume
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/memoji.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;