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
// import Carousel from "carousel-react-rcdev";

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
    <LayoutLanding>
      <div className="relative">
        <AwesomeSlider>
          <div className="relative overflow-hidden h-full w-full flex justify-center items-center">
            <div className="w-full absolute">
              <Image src={bg1} layout="responsive" objectFit="contain" />
            </div>
            <div className="h-96 max-w-3xl relative text-center">
              <h2 className="text-2xl font-black mb-4 text-white">
                Welcome to Our Company!
              </h2>
              <h1 className="text-6xl font-bold mb-4 text-green-500">
                PT. ADHIS COMMODITY INDONESIA
              </h1>
              <p className="text-white text-lg mb-10">
                WE ARE THE LEADING COMPANY IN THE CULTIVATION AND MARKETING OF
                FRESH SPICES TO INTERNATIONAL MARKETS
              </p>
              <a
                href=""
                className="block px-5 py-3 mx-auto w-fit font-medium text-white bg-green-500 rounded-lg shadow-xl hover:bg-green-600"
              >
                LEARN MORE
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden h-full w-full flex justify-center items-center">
            <div className="w-full absolute">
              <Image src={bg2} layout="responsive" objectFit="contain" />
            </div>
            <div className="h-96 max-w-3xl relative text-center">
              <h2 className="text-2xl font-black mb-4 text-white">
                Welcome to Our Company!
              </h2>
              <h1 className="text-6xl font-bold mb-4 text-green-500">
                PT. ADHIS COMMODITY INDONESIA
              </h1>
              <p className="text-white text-lg mb-10">
                OUR FRESH SPICES MAKE FOOD AND DRINK AN EXPERIENCE TO REMEMBER
              </p>

              <a
                href=""
                className="block px-5 py-3 mx-auto w-fit font-medium text-white bg-green-500 rounded-lg shadow-xl hover:bg-green-600"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </AwesomeSlider>
      </div>
      <div className="flex justify-center relative bg-gray-900">
        <div className="w-full absolute h-full">
          <Image src={visionMission} layout="fill" objectFit="cover" />
        </div>
        <div className="max-w-7xl w-full py-16 grid gap-5 md:grid-cols-1 lg:grid-cols-2 relative text-white text-center">
          <div className="left flex flex-col items-center justify-center">
            <h2 className="font-bold text-3xl mb-5">OUR VISION</h2>
            <BiWorld size={72} className="mb-5" />
            <p className="text-lg">To be The Centre of Excellence for Spices</p>
          </div>
          <div className="right flex flex-col items-center justify-center">
            <h2 className="font-bold text-3xl mb-5">OUR MISSION</h2>
            <FaLeaf size={72} className="mb-5" />
            <p className="text-lg">
              We grow and sell quality, fresh spices products that simplify and
              enhance the consumer cooking experience
            </p>
            <p className="text-lg">
              We grow the highest-quality products in the spices market segment
              in worldwide
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center relative">
        <div className="max-w-7xl w-full py-16">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
              Gallery
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              OUR GALLERY
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
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
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              WHAT PEOPLE SAID?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              What people say about our company and services
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-4 mb-8 md:mb-0 flex-between items-center p-8">
            {testimonials.map((el, idx) => {
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4"
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
