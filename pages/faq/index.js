import LayoutLanding from "layout/landing/index";

import Image from "next/image";
import vision from "public/bg/vision-mission.jpg";

const faqs = [
  {
    question: "Do you even have the packaging materials?",
    answer:
      "Of course. We can blend and package your products in accordance with your manufacturing method and standards.",
  },
  {
    question: "Is there a minimum purchase quantity for your products?",
    answer:
      "Yes, the minimum order is a 40-foot container, commonly referred to as an FCL (Full Container Load)",
  },
  {
    question: "Where could I get your products?",
    answer:
      "You may contact us by +62 83804175139 or email at adhiscomindo@gmail.com . It is available on this website.",
  },
  {
    question: "Can I acquire a sampling of your product?",
    answer:
      "Of course you can. We will give you a sample of our products if you request one. The only thing you have to pay for is shipping.",
  },
  {
    question: "How long does it take to manufacture a product?",
    answer: "It can take anything from 10 to 25 days.",
  },
  {
    question: "What about payment terms?",
    answer:
      "You can send a letter or a telegraphic transfer (T/T) or Letter of Credit (L/C)",
  },
  {
    question: "What shipping alternatives should we have?",
    answer: "Our deliveries might be FOB, CNF, or CIF.",
  },
  {
    question:
      "Do you have the ability to produce bespoke items based on my specifications?",
    answer: "You are free to talk with us about it.",
  },
];

export default function Faq() {
  return (
    <LayoutLanding page="faq" title="FAQ">
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
              FAQ
            </h1>

            <p
              className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl"
              data-aos="fade-right"
            >
              Frequently Asked Question
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <div className="w-11/12 max-w-7xl py-16">
          <div className="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl">
            {faqs.map((el, idx) => {
              return (
                <details key={idx} className="p-6 group" data-aos="fade-up">
                  <summary className="flex items-center justify-between cursor-pointer">
                    <h5 className="text-lg font-medium text-gray-900">
                      {el.question}
                    </h5>

                    <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p className="mt-4 leading-relaxed text-gray-700">
                    {el.answer}
                  </p>
                </details>
              );
            })}
          </div>
        </div>
      </div>
    </LayoutLanding>
  );
}
