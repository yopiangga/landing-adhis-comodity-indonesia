import LayoutLanding from "layout/landing/index";

import Image from "next/image";
import djp from "public/certificate/djp.jpg";
import menkumham from "public/certificate/menkumham.jpg";
import mendagri from "public/certificate/mendagri.jpg";
import oss from "public/certificate/oss.jpg";
import { useState } from "react";
import { addMessage } from "services/message_services";
import vision from "public/bg/vision-mission.jpg";

export default function Faq() {
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [text, setText] = useState();
  const [loading, setLoading] = useState(false);

  const handleFirstname = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastname = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (firstname && lastname && email && text) {
      setLoading(true);
      result = await addMessage(firstname + " " + lastname, email, text);
      setLoading(false);
      setFirstName("");
      setLastName("");
      setEmail("");
      setText("");
    }
  };

  return (
    <LayoutLanding page="certificate" title="Certificate">
      <section className="text-white bg-gray-900 relative">
        <div className="w-full h-full overflow-hidden absolute">
          <Image src={vision} layout="fill" objectFit="cover" />
        </div>
        <div className="w-full h-full absolute bg-black bg-opacity-50"></div>
        <div className="max-w-screen-xl relative px-4 py-32 mx-auto lg:h-fit lg:items-center lg:flex">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-600"
              data-aos="fade-left"
            >
              Certificate
            </h1>

            <p
              className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl"
              data-aos="fade-right"
            >
              Clear legality by the company
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <div className="w-11/12 max-w-7xl py-16">
          <div className="container mx-auto px-6 p-6 bg-white dark:bg-gray-800">
            <div className="mb-16 text-center">
              <h2
                className="text-base text-green-600 font-semibold tracking-wide uppercase"
                data-aos="fade-up"
              >
                Certificate
              </h2>
              <p
                className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
                data-aos="fade-up"
              >
                We Are Registered On:
              </p>
            </div>
            <div className="flex flex-wrap my-12 dark:text-white">
              <div
                className="w-full border-b md:w-1/2 md:border-r lg:w-1/4 p-8"
                data-aos="fade-right"
              >
                <Image src={djp} layout="responsive" objectFit="cover" />
              </div>
              <div
                className="w-full border-b md:w-1/2 lg:w-1/4 lg:border-r p-8"
                data-aos="fade-up"
              >
                <Image src={oss} layout="responsive" objectFit="cover" />
              </div>
              <div
                className="w-full border-b md:w-1/2 lg:w-1/4 lg:border-r p-8"
                data-aos="fade-up"
              >
                <Image src={mendagri} layout="responsive" objectFit="cover" />
              </div>
              <div
                className="w-full border-b md:w-1/2 md:border-r lg:w-1/4 lg:border-r-0 p-8"
                data-aos="fade-left"
              >
                <Image src={menkumham} layout="responsive" objectFit="cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gray-100 flex justify-center">
        <div className="max-w-7xl w-11/12 py-16 mx-auto">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:py-12 lg:col-span-2">
              <p
                className="max-w-xl font-bold mx-auto mt-4 sm:leading-relaxed sm:text-xl"
                data-aos="fade-right"
              >
                Do You Need Help for “How to Order Our Products”? We Are Ready!
                Contact Us, Now!
              </p>

              <div className="mt-8">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://wa.me/6283804175139"
                  className="text-2xl font-bold text-green-600"
                  data-aos="fade-right"
                >
                  {" "}
                  +62 83804175139{" "}
                </a>

                <br />

                <a
                  href="https://www.instagram.com/abi_adhis/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 not-italic"
                  data-aos="fade-up"
                >
                  Instagram @abi_adhis
                </a>
                <br />
                <a
                  href="mailto:adhiscomindo@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  data-aos="fade-up"
                >
                  adhiscomindo@gmail.com
                </a>
              </div>
            </div>

            <div
              className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3"
              data-aos="fade-up"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" forHtml="firstname">
                      First Name
                    </label>
                    <input
                      className="w-full p-3 text-sm border-gray-200 outline-none focus:border-green-400 border-2 rounded-lg"
                      placeholder="First Name"
                      type="text"
                      id="firstname"
                      onChange={handleFirstname}
                    />
                  </div>

                  <div>
                    <label className="sr-only" forHtml="lastname">
                      Last Name
                    </label>
                    <input
                      className="w-full p-3 text-sm border-gray-200 outline-none focus:border-green-400 border-2 rounded-lg"
                      placeholder="Last Name"
                      type="text"
                      id="lastname"
                      onChange={handleLastname}
                    />
                  </div>
                </div>
                <div>
                  <label className="sr-only" forHtml="email">
                    Email
                  </label>
                  <input
                    className="w-full p-3 text-sm border-gray-200 outline-none focus:border-green-400 border-2 rounded-lg"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    onChange={handleEmail}
                  />
                </div>

                <div>
                  <label className="sr-only" forHtml="message">
                    Message
                  </label>
                  <textarea
                    className="w-full p-3 text-sm border-gray-200 outline-none focus:border-green-400 border-2 rounded-lg"
                    placeholder="Message"
                    rows="8"
                    id="text"
                    onChange={handleText}
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                  >
                    <span className="font-medium">
                      {" "}
                      {loading ? "Loading ..." : "Send Enquiry "}
                    </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayoutLanding>
  );
}
