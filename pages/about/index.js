import LayoutLanding from "layout/landing/index";
import { FiCheck, FiWatch, FiAward } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";

import Image from "next/image";
import maps from "public/maps/image.png";
import ceklis from "public/icon/ceklis.png";
import daun from "public/icon/daun.png";
import global from "public/icon/global.png";
import grafik from "public/icon/grafik.png";
import jabat_tangan from "public/icon/jabat-tangan.png";
import jempol from "public/icon/jempol.png";
import medali from "public/icon/medali.png";
import stopwatch from "public/icon/stopwatch.png";

import coffee3 from "public/product/coffee3.jpg";
import galangal2 from "public/product/galangal2.jpg";
import coffee2 from "public/product/coffee2.jpg";
import chili2 from "public/product/chili2.jpg";

export default function About() {
  return (
    <LayoutLanding>
      <section className="text-white bg-gray-900">
        <div className="max-w-screen-xl px-4 py-32 mx-auto lg:h-fit lg:items-center lg:flex">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-indigo-500 to-purple-600">
              About Us
            </h1>

            <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
              what are our services that can help you ?
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                className="block w-full px-12 py-3 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring"
                href="/get-started"
              >
                Show Product
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center bg-white">
        <div className=" w-full max-w-7xl dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center">
          <div className="w-full  py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
              <span className="block">PT ADHIS COMMODITY INDONESIA</span>
            </h2>
            <p className="text-md mt-4 text-gray-400">
              PT Adhis Commodity Indonesia is an Indonesian company that
              manufactures premium spices. Our organization is based on a strong
              teamwork in order to bring the treasures of Indonesia is bountiful
              land to the international market. Our primary skill is what we
              must specialize in in order for our business to function and
              increase profitability. Both now and in the future. As a fresh
              food manufacturer, we must achieve at conducting our business with
              a focus on efficiency and sustainability at every level.
            </p>
          </div>
          <div className="flex items-center gap-8 p-8 lg:p-24">
            <div className="w-56">
              <Image src={coffee3} layout="responsive" objectFit="cover" />
            </div>
            <div>
              <div className="w-56">
                <Image src={chili2} layout="responsive" objectFit="cover" />
              </div>
              <div className="w-56">
                <Image src={galangal2} layout="responsive" objectFit="cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            WHY YOU <br /> SHOULD{" "}
            <span className="underline decoration-indigo-500">CHOOSE US?</span>
          </h1>

          <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
            You will not go wrong by choosing us as the main one
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 space-y-3 border-2 border-indigo-400 dark:border-indigo-300 rounded-xl">
              <span className="inline-block text-indigo-500 dark:text-indigo-400">
                <div className="w-16">
                  <Image src={ceklis} layout="responsive" objectFit="cover" />
                </div>
              </span>

              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Quality Controls
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Products made from hand-picked materials
              </p>
            </div>

            <div className="p-8 space-y-3 border-2 border-indigo-400 dark:border-indigo-300 rounded-xl">
              <span className="inline-block text-indigo-500 dark:text-indigo-400">
                <div className="w-16">
                  <Image
                    src={stopwatch}
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
              </span>

              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Time Management
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Our work policies are time efficient
              </p>
            </div>

            <div className="p-8 space-y-3 border-2 border-indigo-400 dark:border-indigo-300 rounded-xl">
              <span className="inline-block text-indigo-500 dark:text-indigo-400">
                <div className="w-16">
                  <Image src={medali} layout="responsive" objectFit="cover" />
                </div>
              </span>

              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Beneficial Price
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Competitive price structures available
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center bg-gray-50 overflow-hidden">
        <div className="container w-full max-w-7xl py-16 m-auto space-y-8 text-gray-500 md:px-12">
          <div>
            <span className="text-gray-600 text-lg font-semibold">
              Main value
            </span>
            <h2 className="mt-4 text-2xl text-gray-900 font-bold md:text-4xl">
              OUR CORE VALUES <br className="lg:block" hidden />
            </h2>
          </div>
          <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-3">
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8">
                <div className="w-16">
                  <Image
                    src={jabat_tangan}
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-indigo-600">
                    Passionate People
                  </h5>
                </div>
              </div>
            </div>
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8">
                <div className="w-16">
                  <Image src={jempol} layout="responsive" objectFit="cover" />
                </div>

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-indigo-600">
                    Supplier and Customer Partnerships
                  </h5>
                </div>
              </div>
            </div>
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8">
                <div className="w-16">
                  <Image src={grafik} layout="responsive" objectFit="cover" />
                </div>

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-indigo-600">
                    Strong Financial Performances
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex items-center justify-center px-5 py-16">
          <div className="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
            <div className="w-full pt-1 text-center pb-5 -mt-16 mx-auto">
              <a href="#" className="block relative w-36 mx-auto">
                <Image src={maps} layout="responsive" objectFit="cover" />
              </a>
            </div>
            <div className="w-full mb-10">
              <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
                “
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
                WE ARE READY TO SERVE YOU WITH HIGHER QUALITY SPICES.
              </p>
              <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                ”
              </div>
            </div>
            <div className="w-full">
              <p className="text-md text-indigo-500 font-bold text-center">
                PT ADHIS COMMODITY INDONESIA
              </p>
            </div>
          </div>
        </div>
      </div>
    </LayoutLanding>
  );
}
