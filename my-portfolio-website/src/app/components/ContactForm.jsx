"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Image from "next/image";
const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9udy9ou", "template_p18z68s", form.current, {
        publicKey: "-rK2dGng-ABYedwAi",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect!</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I'm currently looking for opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Russel-T">
            <Image
              src="/icons/icons8-github.svg"
              alt="GitHub"
              width={80}
              height={80}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/russeltj/">
            <Image
              src="/icons/icons8-linkedin.svg"
              alt="Linkedin"
              width={80}
              height={80}
            />
          </Link>
        </div>
      </div>

      <div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-6">
            <label class="block mb-2 text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              class="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Your name here!"
            />
          </div>

          <div className="mb-6">
            <label class="block mb-2 text-sm font-medium text-white">
              Email
            </label>
            <input
              class="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Your email here!"
              type="email"
              name="from_email"
            />
          </div>

          <div className="mb-6">
            <label class="block mb-2 text-sm font-medium text-white">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Let's talk about..."
              class="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
            />
          </div>

          <div className="mb-6">
            <button
              type="submit"
              value="Send"
              class="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              {" "}
              Send message{" "}
            </button>
          </div>
        </form>
      </div>
    </section>

    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
  );
};
export default ContactForm;
// Reference: https://youtu.be/bMq2riFCF90
