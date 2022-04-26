import LayoutLanding from "layout/landing/index";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import Image from "next/image";
import bg1 from "public/bg/background1.jpg";
import bg2 from "public/bg/background2.jpg";
import visionMission from "public/bg/vision-mission.jpg";
import { BiWorld } from "react-icons/bi";
import { FaLeaf } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";

import g1 from "public/gallery/1.jpg";
import g2 from "public/gallery/2.jpg";
import g3 from "public/gallery/3.jpg";
import g4 from "public/gallery/4.jpg";
import g5 from "public/gallery/5.jpg";
import g6 from "public/gallery/6.jpg";
import g7 from "public/gallery/7.jpg";
import g8 from "public/gallery/8.jpg";
import g9 from "public/gallery/9.jpg";
import g10 from "public/gallery/10.jpg";
import g11 from "public/gallery/11.jpg";
import g12 from "public/gallery/12.jpg";
import g13 from "public/gallery/13.jpg";
import g14 from "public/gallery/14.jpg";
import g15 from "public/gallery/15.jpg";
import g16 from "public/gallery/16.jpg";
import g17 from "public/gallery/17.jpg";
import g18 from "public/gallery/18.jpg";
import g19 from "public/gallery/19.jpg";
import g20 from "public/gallery/20.jpg";
import { NavbarLanding } from "components/navbar";

import global from "public/icon/global.png";
import daun from "public/icon/daun.png";

export default function Home() {
  const gallery = [
    {
      image: g1,
      link: "",
    },
    {
      image: g2,
      link: "",
    },
    {
      image: g3,
      link: "",
    },
    {
      image: g4,
      link: "",
    },
    {
      image: g5,
      link: "",
    },
    {
      image: g6,
      link: "",
    },
    {
      image: g7,
      link: "",
    },
    {
      image: g8,
      link: "",
    },
  ];

  const testimonials = [
    {
      name: "Khavia Sanjiv",
      text: "Happy with the quality, packaging, and selection of spices. Customer service was fantastic to work with quick to respond and assist with great resolution.",
      icon: "",
      country: "India",
    },
    {
      name: "Bian Sittichai",
      text: "The Shipping was fast. The package arrived on time and was wrapped very securely.",
      icon: "",
      country: "Thailand",
    },
    {
      name: "Ammar Raiyyan",
      text: "The color, the scent, and the quality are the best. A much better grade of turmeric than found in most other companies.",
      icon: "",
      country: "Arabia",
    },
  ];

  return (
    <LayoutLanding page="home" title="Home">
      <div className="relative">
        <AwesomeSlider>
          <div className="relative overflow-hidden h-full w-full flex justify-center items-center">
            <div className="w-full absolute">
              <Image src={bg1} layout="responsive" objectFit="contain" />
            </div>
            <div className="w-full h-full absolute bg-black bg-opacity-50"></div>
            <div className=" max-w-3xl relative text-center">
              <h2
                className="text-2xl font-black mb-4 text-white"
                data-aos="fade-up"
              >
                Welcome to Our Company!
              </h2>
              <h1
                className="lg:text-6xl text-xl font-bold mb-4 text-green-500"
                data-aos="fade-right"
              >
                PT. ADHIS COMMODITY INDONESIA
              </h1>
              <p className="text-white text-lg mb-10" data-aos="fade-left">
                WE ARE THE LEADING COMPANY IN THE CULTIVATION AND MARKETING OF
                FRESH SPICES TO INTERNATIONAL MARKETS
              </p>
              <Link href={`/about`}>
                <a
                  className="block px-5 py-3 mx-auto w-fit font-medium text-white bg-green-500 rounded-lg shadow-xl hover:bg-green-600"
                  data-aos="fade-up"
                >
                  LEARN MORE
                </a>
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden h-full w-full flex justify-center items-center">
            <div className="w-full absolute">
              <Image src={bg2} layout="responsive" objectFit="contain" />
            </div>
            <div className="w-full h-full absolute bg-black bg-opacity-50"></div>
            <div className=" max-w-3xl relative text-center">
              <h2
                className="text-2xl font-black mb-4 text-white"
                data-aos="fade-up"
              >
                Welcome to Our Company!
              </h2>
              <h1
                className="lg:text-6xl text-xl font-bold mb-4 text-green-500"
                data-aos="fade-left"
              >
                PT. ADHIS COMMODITY INDONESIA
              </h1>
              <p className="text-white text-lg mb-10" data-aos="fade-right">
                OUR FRESH SPICES MAKE FOOD AND DRINK AN EXPERIENCE TO REMEMBER
              </p>
              <Link href={`/about`}>
                <a
                  className="block px-5 py-3 mx-auto w-fit font-medium text-white bg-green-500 rounded-lg shadow-xl hover:bg-green-600"
                  data-aos="fade-up"
                >
                  LEARN MORE
                </a>
              </Link>
            </div>
          </div>
        </AwesomeSlider>
      </div>

      <div className="flex justify-center relative">
        <div className=" w-full">
          <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
              <h1
                className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white"
                data-aos="fade-right"
              >
                What is our <br />
                <span className="underline decoration-green-500">
                  vision and mission?
                </span>
              </h1>

              <p
                className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300"
                data-aos="fade-up"
              >
                A dream booster to fulfill all your needs
              </p>

              <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-2">
                <div
                  className="p-8 space-y-3 border-2 border-green-400 dark:border-green-300 rounded-xl"
                  data-aos="fade-up"
                >
                  <span className="inline-block text-green-500 dark:text-green-400">
                    <div className="w-16">
                      <Image
                        src={global}
                        layout="responsive"
                        objectFit="cover"
                      />
                    </div>
                  </span>
                  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                    OUR VISION
                  </h1>

                  <p className="text-gray-500 dark:text-gray-300">
                    To be The Centre of Excellence for Spices
                  </p>
                </div>

                <div
                  className="p-8 space-y-3 border-2 border-green-400 dark:border-green-300 rounded-xl"
                  data-aos="fade-up"
                >
                  <span className="inline-block text-green-500 dark:text-green-400">
                    <div className="w-16">
                      <Image src={daun} layout="responsive" objectFit="cover" />
                    </div>
                  </span>
                  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                    OUR MISSION
                  </h1>

                  <p className="text-gray-500 dark:text-gray-300">
                    We grow and sell quality, fresh spices products that
                    simplify and enhance the consumer cooking experience. We
                    grow the highest-quality products in the spices market
                    segment in worldwide
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="flex justify-center relative">
        <div className="max-w-7xl w-full py-16">
          <div className="lg:text-center">
            <h2
              className="text-base text-green-600 font-semibold tracking-wide uppercase"
              data-aos="fade-down"
            >
              Gallery
            </h2>
            <p
              className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
              data-aos="fade-left"
            >
              OUR GALLERY
            </p>
            <p
              className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
              data-aos="fade-right"
            >
              Documentation images of our company
            </p>
          </div>
          <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-10">
            {gallery.map((el, idx) => {
              return (
                <div key={idx}>
                  <a
                    href="#"
                    className="block h-64 rounded-lg shadow-lg bg-white w-full relative overflow-hidden"
                    data-aos="fade-up"
                  >
                    <Image src={el.image} layout="fill" objectFit="cover" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-center relative">
        <div className="max-w-7xl w-full py-16">
          <div className="lg:text-center">
            <h2
              className="text-base text-green-600 font-semibold tracking-wide uppercase"
              data-aos="fade-down"
            >
              Testimonials
            </h2>
            <p
              className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
              data-aos="fade-left"
            >
              WHAT PEOPLE SAID?
            </p>
            <p
              className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
              data-aos="fade-right"
            >
              What people say about our company and services
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-4 mb-8 md:mb-0 flex-between items-center p-8">
            {testimonials.map((el, idx) => {
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4"
                  data-aos="fade-up"
                >
                  <p className="text-gray-600 dark:text-white">
                    <span className="font-bold text-green-500 text-lg">“</span>
                    {el.text}
                    <span className="font-bold text-green-500 text-lg">”</span>
                  </p>
                  <div className="flex items-center mt-4">
                    <div className="flex flex-col ml-0 justify-between">
                      <span className="font-semibold text-green-500 text-sm">
                        {el.name}
                      </span>
                      <span className="dark:text-gray-400 text-xs flex items-center">
                        {el.country}
                        <img src="/icons/rocket.svg" className="ml-2 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </LayoutLanding>
  );
}
