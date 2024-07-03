"use client";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactForm from "./components/ContactForm";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      {/* <div class="container mt-10 mx-auto px-12">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </BrowserRouter>
      </div> */}

      {/* <Navbar /> */}
      {/* <div class="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactForm />
      </div> */}

      <div class="container mt-10 mx-auto px-12">
        <HeroSection id="HeroSection" />
        <AboutSection id="AboutSection" />
        <ProjectsSection id="ProjectsSection" />
        <ContactForm id="ContactForm"/>
      </div>
    </main>
  );
}
