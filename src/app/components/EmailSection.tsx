"use client";
import GithubIcon from "../../../public/images/svgs/github-icon.svg";
import LinkedinIcon from "../../../public/images/svgs/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

const EmailSection = () => {
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [effect, setEffect] = useState(false);
  const [isButtonDisable, setIsButtonDisable] = useState(true);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const body = {
      from: senderEmail,
      subject: subject,
      message: message,
    };

    const res = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
        "Access-Control-Allow-Headers":
          "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
      },

      body: JSON.stringify(body),
    });

    const result = await res.json();
    if (result.success || res.status == 200) {
      setEmailSubmitted(true);
    } else if (res.status == 403) {
      alert("You cann't send email from this domain");
      setEmailSubmitted(false);
    } else {
      alert(result.error);
      setEmailSubmitted(false);
    }
    setSending(false);
  };

  const validateEmail = (email: string) => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return validRegex.test(email);
  };

  useEffect(() => {
    if (
      subject.length >= 12 &&
      subject.length <= 50 &&
      message.length >= 20 &&
      message.length <= 500 &&
      validateEmail(senderEmail)
    ) {
      setIsButtonDisable(false);
    } else {
      setIsButtonDisable(true);
    }
  }, [senderEmail, subject, message]);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("contact");
    }
  }, [inView, setActiveSection]);

  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4"
      id="contact"
      ref={ref}
    >
      <div>
        <h5 className="text-xl font-bold text-white my-2 ">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/nikeshD10" target="_blank">
            <Image src={GithubIcon} alt="Github" width={30} height={30} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nikesh-dhakal-7102491b7/"
            target="_blank"
          >
            <Image src={LinkedinIcon} alt="Linkedin" width={30} height={30} />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2 text-center">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your Email
              </label>
              <input
                type="email"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                id="email"
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="example@gmail.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="name"
                className="text-white block mb-2 text-sm font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Hey, Insterested in working with you!"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-white block mb-2 text-sm font-medium"
              >
                Message
              </label>
              <textarea
                placeholder="Your message here..."
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                id="message"
                rows={6}
                required
                cols={3}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              onClick={() => setEffect(true)}
              onAnimationEnd={() => setEffect(false)}
              disabled={isButtonDisable}
              // className={
              //   !isButtonDisable
              //     ? `${
              //         effect && "animate-onClick"
              //       } bg-purple-500 hover:bg-purple-600 text-white text-md font-bold py-2.5 rounded-lg w-full`
              //     : "bg-slate-400 text-white text-md font-bold py-2.5 rounded-lg w-full cursor-not-allowed"
              // }
              className={`${
                effect && "animate-onClick"
              } flex justify-center items-center bg-purple-500 hover:bg-purple-600 text-white text-md font-bold py-2.5 rounded-lg w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-500`}
            >
              {sending ? (
                <div className="h-5 w-5 rounded-full animate-spin border-b-2 border-white"></div>
              ) : (
                " Send Message"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
