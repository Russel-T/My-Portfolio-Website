import React from "react";
import Image from "next/image";
const AboutSection = () => {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/Computer Image.jpg"
          alt="computerImage"
          width={500}
          height={500}
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a graduate from the University of Illinois at Chicago, actively
            seeking opportunities in software engineering or any web-based
            roles. My technical expertise includes working with HTML, CSS,
            JavaScript, Python, C++, C#, and cloud computing platforms like
            Firebase and Azure Active Directory. Additionally, I am proficient
            in using Git for version control. With a strong foundation in these
            technologies, I am a quick learner who is always eager to expand my
            knowledge and skill set. I thrive in collaborative environments and
            am passionate about working with others to create amazing
            applications. I am excited to bring my enthusiasm for teamwork and
            innovation to a dynamic team where we can build impactful solutions
            together.
          </p>
          <div className="flex flex-row mt-8">
            <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-green-500">
              Skills
            </span>
            <span>Education</span>
            <span>Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
