import LayoutLanding from "layout/landing/index";

import Image from "next/image";
import djp from "public/certificate/djp.jpg";
import menkumham from "public/certificate/menkumham.jpg";
import mendagri from "public/certificate/mendagri.jpg";
import oss from "public/certificate/oss.jpg";

export default function Faq() {
  return (
    <LayoutLanding>
      <section className="text-white bg-gray-900">
        <div className="max-w-screen-xl px-4 py-32 mx-auto lg:h-fit lg:items-center lg:flex">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-600">
              Certificate
            </h1>

            <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
              Clear legality by the company
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <div className="w-full max-w-7xl py-16">
          <div className="container mx-auto px-6 p-6 bg-white dark:bg-gray-800">
            <div className="mb-16 text-center">
              <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
                Certificate
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                We Are Registered On:
              </p>
            </div>
            <div className="flex flex-wrap my-12 dark:text-white">
              <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/4 p-8">
                <Image src={djp} layout="responsive" objectFit="cover" />
              </div>
              <div className="w-full border-b md:w-1/2 lg:w-1/4 lg:border-r p-8">
                <Image src={oss} layout="responsive" objectFit="cover" />
              </div>
              <div className="w-full border-b md:w-1/2 lg:w-1/4 lg:border-r p-8">
                <Image src={mendagri} layout="responsive" objectFit="cover" />
              </div>
              <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/4 lg:border-r-0 p-8">
                <Image src={menkumham} layout="responsive" objectFit="cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gray-100 flex justify-center">
        <div className="max-w-7xl w-full py-16 px-12 mx-auto">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:py-12 lg:col-span-2">
              <p className="max-w-xl font-bold mx-auto mt-4 sm:leading-relaxed sm:text-xl">
                Do You Need Help for “How to Order Our Products”? We Are Ready!
                Contact Us, Now!
              </p>

              <div className="mt-8">
                <a href="" className="text-2xl font-bold text-green-600">
                  {" "}
                  +62 83804175139{" "}
                </a>

                <address className="mt-2 not-italic">
                  Instagram @abi_adhis
                </address>
                <address>adhiscomindo@gmail.com</address>
              </div>
            </div>

            <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
              <form action="" className="space-y-4">
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
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                  >
                    <span className="font-medium"> Send Enquiry </span>

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
