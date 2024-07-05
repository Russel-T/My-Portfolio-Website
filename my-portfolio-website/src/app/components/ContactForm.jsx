"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Image from "next/image";
const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9udy9ou", "template_p18z68s", form.current, {
        publicKey: "-rK2dGng-ABYedwAi",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setFormData({ from_name: "", from_email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4"
    >
      <div>
        <h5 className="text-5xl font-bold text-white">Let's Connect!</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md text-lg">
          {" "}
          I'm actively seeking opportunities and welcome your messages. Whether
          you have inquiries or simply want to connect, I'll make every effort
          to respond promptly!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://www.linkedin.com/in/russeltj/">
            <Image
              src="/icons/icons8-linkedin.svg"
              alt="Linkedin"
              width={80}
              height={80}
            />
          </Link>

          <Link href="https://github.com/Russel-T">
            <Image
              src="/icons/icons8-github.svg"
              alt="GitHub"
              width={80}
              height={80}
            />
          </Link>
        </div>
      </div>

      <div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-6">
            <label className="block mb-2 text-xl font-medium text-white">
              Email
            </label>
            <input
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Your email here!"
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-xl font-medium text-white">
              Subject
            </label>
            <input
              type="text"
              name="from_name"
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Your name here!"
              value={formData.from_name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-xl font-medium text-white">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Let's talk about..."
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <button
              type="submit"
              value="Send"
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
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
