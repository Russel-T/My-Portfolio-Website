"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Content } from "next/font/google";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Firebase</li>
        <li>Azure Active Directory</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc">
        <li>
          Web Developer @{" "}
          <a
            href="https://satech.uic.edu/"
            className="text-purple-500 hover:text-purple-400"
          >
            The University of Illinois at Chicago - Student Affairs Technology
          </a>
        </li>
        <li>
          Engineering Teaching Assistant @{" "}
          <a
            href="https://engineering.uic.edu/"
            className="text-purple-500 hover:text-purple-400"
          >
            The University of Illinois at Chicago - College of Engineering
          </a>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc">
        <li>
          University of Illinois at Chicago:
          <a
            href="https://www.michaelsutter.com/ediploma?fn=diplomastatuscheck&key=02000000760f8cdcc97d644a6e7266ebd6ffe2919bd2df448c276fc6641441254b7e61a7a22434f7770bacb5e4e79de1ffb596e1e141cbf3f5eff7c36c9cb6bdd1ece22f"
            className="text-purple-500 hover:text-purple-400"
          >
            {" "}
            Bachelor of Science in Computer Science
          </a>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <Image src="/images/Computer Image.jpg" width={900} height={900} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white text-base lg:text-lg">
            I am a graduate from the University of Illinois at Chicago, actively
            seeking opportunities in software engineering or any web-based
            roles. My technical expertise includes working with HTML, CSS,
            JavaScript, Python, C++, C#, and cloud computing platforms like
            Firebase and Azure Active Directory, version control like git
            (github) and Confluence to ensure team collaboration.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((data) => data.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
