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
      .sendForm("service_9udy9ou", "template_qm1igot", form.current, {
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
        <form className="flex flex-col gap-4" ref={form} onSubmit={sendEmail}>
            <label htmlFor="" className="text-white">

            </label>
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
