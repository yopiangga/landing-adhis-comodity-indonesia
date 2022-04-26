import LayoutLanding from "layout/landing/index";

import Image from "next/image";

import cardamom1 from "public/product/cardamom1.jpg";
import cardamom2 from "public/product/cardamom2.jpg";
import cardamom3 from "public/product/cardamom3.jpg";

import chili1 from "public/product/chili1.jpg";
import chili2 from "public/product/chili2.jpg";
import chili3 from "public/product/chili3.jpg";

import cinnamon1 from "public/product/cinnamon1.jpg";
import cinnamon2 from "public/product/cinnamon2.jpg";
import cinnamon3 from "public/product/cinnamon3.jpg";

import clove1 from "public/product/clove1.jpg";
import clove2 from "public/product/clove2.jpg";
import clove3 from "public/product/clove3.jpg";

import coffee1 from "public/product/coffee1.jpg";
import coffee2 from "public/product/coffee2.jpg";
import coffee3 from "public/product/coffee3.jpg";

import galangal1 from "public/product/galangal1.jpg";
import galangal2 from "public/product/galangal2.jpg";
import galangal3 from "public/product/galangal3.jpg";

import ginger1 from "public/product/ginger1.jpg";
import ginger2 from "public/product/ginger2.jpg";
import ginger3 from "public/product/ginger3.jpg";

import nutmeg1 from "public/product/nutmeg1.jpg";
import nutmeg2 from "public/product/nutmeg2.jpg";
import nutmeg3 from "public/product/nutmeg3.jpg";

import tea1 from "public/product/tea1.jpg";
import tea2 from "public/product/tea2.jpg";
import tea3 from "public/product/tea3.jpg";

import turmeric1 from "public/product/turmeric1.jpg";
import turmeric2 from "public/product/turmeric2.jpg";
import turmeric3 from "public/product/turmeric3.jpg";
import { useState } from "react";

const products = [
  {
    name: "Nutmeg",
    description:
      "Nutmeg is the dried seed of a musky nut. It is mostly used as a condiment in sweet foods. It is commonly used in the production of meat products, soups, sauces, baked products, and so forth.",
    image: [nutmeg1, nutmeg2, nutmeg3],
    specification: [
      {
        label: "Color",
        value: "Medium Dark Brown ",
      },
      {
        label: "Purity",
        value: "99-100% ",
      },
      {
        label: "Moisture",
        value: "11% Max ",
      },
      {
        label: "Damaged",
        value: "1-2% Max",
      },
      {
        label: "Foreign Matter",
        value: "1% Max ",
      },
      {
        label: "Origin",
        value: "Indonesia",
      },
      {
        label: "Packaging",
        value: "15-50 kgs/pp bag or according to customer request",
      },
    ],
    cta: "Hi, PT Adhis Commodity Indonesia! I'm interested for your Nutmeg",
  },
  {
    name: "Clove",
    description:
      "Clove is a spice made from the tiny reddish-brown flower buds of a tropical evergreen tree in the Myrtaceae family. Cloves, which have a strong perfume and a fiery and pungent taste, are used to flavor a variety of meals, notably meats and bread items.",
    image: [clove1, clove2, clove3],
    specification: [
      {
        label: "Color",
        value: "Brown Reddish",
      },
      {
        label: "Spices",
        value: "Dry Cloves ",
      },
      {
        label: "Moisture",
        value: "5-12% ",
      },
      {
        label: "Stems",
        value: "1 % ",
      },
      {
        label: "Baby Clove",
        value: "1% ",
      },
      {
        label: "Headless clove",
        value: "1% ",
      },
      {
        label: "Odd matters",
        value: "0% ",
      },
      {
        label: "Packaging",
        value: "15-50 kgs/pp bag or according to customer request",
      },
    ],
    cta: "Hi, PT Adhis Commodity Indonesia! I'm interested for your Clove",
  },
  {
    name: "Cardamom",
    description:
      "Cardamom (Amomum Compactum), often known as Kapulaga, is an agricultural commodities crop with a variety of uses in taste and herbs. This spice is frequently used to enhance the flavor and scent of food.",
    image: [cardamom1, cardamom2, cardamom3],
    specification: [
      {
        label: "Origin",
        value: "Indonesia",
      },
      {
        label: "Style",
        value: "Sun Dried ",
      },
      {
        label: "Color",
        value: "White Brown ",
      },
      {
        label: "Shape",
        value: "Whole ",
      },
      {
        label: "Moisture",
        value: "15% - 20%",
      },
      {
        label: "Impurity",
        value: "1%",
      },
      {
        label: "Packaging",
        value: "15-50 kgs/pp bag or according to customer request",
      },
    ],
    cta: "Hi, PT Adhis Commodity Indonesia! I’m interested for your Cardamom",
  },
  {
    name: "Chili",
    description:
      "Chili is a plant that is easy to grow in the lowlands or in the highlands. Chili plants contain lots of vitamin A and vitamin C, which cause a spicy taste and provide warmth when used for cooking spices. Not just spicy and delicious, chili has several benefits, relieves pain, for weight loss, maintains digestive health, maintains blood sugar levels, and much more.",
    image: [chili1, chili2, chili3],
    specification: [
      {
        label: "Style",
        value: "Instant ",
      },
      {
        label: "Shape",
        value: "Straight ",
      },
      {
        label: "Processing Form",
        value: "Raw",
      },
      {
        label: "Shelf Life",
        value: "2-3 Years ",
      },
      {
        label: "Color",
        value:
          "Red Packaging: 15-50kgs/ pp bag or according to customer request",
      },
    ],
    cta: "Hi, PT Adhis Commodity Indonesia! I'm interested for your Chili",
  },
  {
    name: "Coffee",
    description:
      "Coffee is a drink made from brewed coffee beans that have been roasted and ground into powder. Coffee is one of the commodities in the world that is cultivated in more than 50 countries.",
    image: [coffee1, coffee2, coffee3],
    specification: [
      {
        label: "Type",
        value: "Coffee Bean ",
      },
      {
        label: "Processing Type",
        value: "Roasted ",
      },
      {
        label: "Moisture",
        value: "5 %",
      },
      {
        label: "Shelf Life",
        value: "18 months ",
      },
      {
        label: "Weight",
        value: "0.5 kg",
      },
      {
        label: "Cultivation Type",
        value: "COMMON",
      },
      {
        label: "Color",
        value: "Brown",
      },
      {
        label: "Packaging",
        value: "15-50kgs/ pp bag or according to customer request",
      },
    ],
    cta: "Hi, PT Adhis Commodity Indonesia! I'm interested for your Coffee",
  },
  {
    name: "Tea",
    description:
      "Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis.",
    image: [tea1, tea2, tea3],
    specification: [
      {
        label: "Moisture",
        value: "4-5%",
      },
      {
        label: "Admixtur",
        value: "1% max",
      },
      {
        label: "Tea dust",
        value: "0, no stick, no yellow leaf, fresh green",
      },
      {
        label: "Packaging",
        value: "15-50kgs/ pp bag or according to customer request",
      },
    ],
    cta: "Hi, PT Adhis Commodity Indonesia! I'm interested for your Tea",
  },
  {
    name: "Cinnamon",
    description:
      "Cinnamon is a spice derived from the inner bark of numerous Cinnamomum tree species. Cinnamon is mostly used as an aromatic condiment and flavoring addition in a number of cuisines, including sweet and savory meals, morning cereals, snack foods, tea, and traditional foods.",
    image: [cinnamon1, cinnamon2, cinnamon3],
    specification: [
      {
        label: "Moisture",
        value: "13.5 - 14% Max ",
      },
      {
        label: "Admixture",
        value: "1% Max",
      },
      {
        label: "Length",
        value: "8 - 20cm",
      },
      {
        label: "Colour",
        value: "Natural ",
      },
      {
        label: "Shape",
        value: "Smooth touch, no fungus",
      },
      {
        label: "Packaging",
        value: "15-50 kgs/pp bag or according to customer request",
      },
    ],
    cta: "Hi, PT Adhis Commodity Indonesia! I'm interested for your Cinnamon",
  },
  {
    name: "Turmeric",
    description:
      "Turmeric is a spice derived from the turmeric plant. It is widely seen in Asian cuisine. Turmeric is arguably best known as the major spice in curry. It has a warm, bitter flavor and is commonly used to flavor and color curry powders, mustards, butter, and cheeses.",
    image: [turmeric1, turmeric2, turmeric3],
    specification: [
      {
        label: "Origin",
        value: "Indonesia",
      },
      {
        label: "Cultivation Type",
        value: "Conventional ",
      },
      {
        label: "Weight",
        value: "Around 30 gr per pcs ",
      },
      {
        label: "Maturity",
        value: "70 to 95% or Negotiable",
      },
      {
        label: "Taste",
        value: "earthy and bitter, almost musky, with a bit of peppery spice ",
      },
      {
        label: "Shape",
        value: "Big size and fat ",
      },
      {
        label: "Scientific Name",
        value: "Curcuma longa ",
      },
      {
        label: "Packaging",
        value: "15-50 kgs/pp bag or according to customer request",
      },
    ],
    cta: "Hi, PT Adhis Commodity Indonesia! I'm interested for your Turmeric",
  },
  {
    name: "Galangal",
    description:
      "Galangal is frequently incorporated into seafood meals because its flavor helps hide fishiness, and it is also regularly boiled into tea. The rhizome is available fresh, dried, and powdered, and when ground, the flavor becomes softer yet earthier. Galangal root complements chicken and fish, as well as shellfish, garlic, onions, tamarind, chilies, lemongrass, bell peppers, and green onions.",
    image: [galangal1, galangal2, galangal3],
    specification: [
      {
        label: "Source",
        value: "Fresh Galangal from farmer Sliced and sun-dried",
      },
      {
        label: "Moisture",
        value: "12-13% ",
      },
      {
        label: "Function",
        value: "herbal medicine as raw material ",
      },
      {
        label: "Packaging",
        value: "15-50 kgs/pp bag or according to customer request",
      },
    ],
    cta: "Hi, PT Adhis Commodity Indonesia! I'm interested for your Galangal",
  },
  {
    name: "Ginger",
    description:
      "Ginger is a herb that is mostly cultivated in Asia. It is commonly used as a spice in cuisine and has several health advantages.",
    image: [ginger1, ginger2, ginger3],
    specification: [
      {
        label: "Style",
        value: "Fresh ",
      },
      {
        label: "Size",
        value: "150-500 grams",
      },
      {
        label: "Water Content",
        value: "12-14% ",
      },
      {
        label: "Processing",
        value: "Cleaned 95% without Soil ",
      },
      {
        label: "Origin",
        value: "Indonesia",
      },
      {
        label: "Planting Life",
        value: "9-10 Month",
      },
      {
        label: "Packaging",
        value: "15-50kgs/pp bag or according to customer request",
      },
    ],
    cta: "Hi, PT Adhis Commodity Indonesia! I'm interested for your White Ginger",
  },
];

export default function Product() {
  const [active, setActive] = useState({ idx: 0, choice: 0 });

  function convertTextToMessage(text) {
    return text.replace(" ", "%20");
  }

  return (
    <LayoutLanding page="product" title="Product">
      <section className="text-white bg-gray-900">
        <div className="max-w-screen-xl px-4 py-32 mx-auto lg:h-fit lg:items-center lg:flex">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-600"
              data-aos="fade-left"
            >
              Product
            </h1>

            <p
              className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl"
              data-aos="fade-right"
            >
              Our products are guaranteed quality and quality
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <div className="w-full max-w-7xl py-16 px-12">
          <h1 className="text-3xl mb-3" data-aos="fade-up">
            OUR BEST PRODUCTS
          </h1>
          <p data-aos="fade-up">
            We are committed to bringing high-quality products and comprehensive
            services. We have proudly offered our Commodity Products for
            International Marketing with that positive attitude and confidence.
            We encourage you to join us in experiencing the richness of
            Indonesian spices and building a long-term mutually beneficial
            partnership.
          </p>

          <div className="grid 2xl:grid-cols-2 xl:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
            {products.map((el, idx) => {
              return (
                <div
                  key={idx}
                  className="relative w-full flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 mx-auto border border-white bg-white"
                  data-aos="fade-up"
                >
                  <div className="w-full md:w-72 md:h-full h-64 relative">
                    <Image src={el.image[0]} layout="fill" objectFit="cover" />
                    <h4 className="absolute bottom-4 left-4 text-white font-medium">
                      PT. ADHIS COMMODITY INDONESIA
                    </h4>
                  </div>
                  <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                    <h3 className="font-black text-gray-800 md:text-3xl text-xl mb-2">
                      {el.name}
                    </h3>
                    <ul className="flex text-center border-b border-gray-200 mb-4">
                      <li className="flex-1">
                        <button
                          onClick={() => setActive({ idx: idx, choice: 0 })}
                          className={`w-full relative block p-3 text-sm font-medium bg-white border-gray-200 ${
                            (active.idx == idx && active.choice == 0) ||
                            active.idx != idx
                              ? "border-t border-l border-r"
                              : ""
                          }`}
                        >
                          <span className="absolute inset-x-0 w-full h-px bg-white -bottom-px"></span>
                          General
                        </button>
                      </li>

                      <li className="flex-1">
                        <button
                          onClick={() => setActive({ idx: idx, choice: 1 })}
                          className={`block relative w-full p-3 text-sm font-medium bg-white border-gray-200 ${
                            active.idx == idx && active.choice == 1
                              ? "border-t border-l border-r"
                              : ""
                          }`}
                        >
                          <span className="absolute inset-x-0 w-full h-px bg-white -bottom-px"></span>
                          Detail{" "}
                        </button>
                      </li>
                    </ul>

                    <div
                      className={`${
                        (active.idx == idx && active.choice == 0) ||
                        active.idx != idx
                          ? "block"
                          : "hidden"
                      }`}
                    >
                      <p className="md:text-lg text-gray-500 text-base mb-3">
                        {el.description}
                      </p>

                      <a
                        href={`https://wa.me/6283804175139?text= ${convertTextToMessage(
                          el.cta
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-success text-white"
                      >
                        INQUIRY NOW
                      </a>
                    </div>

                    <div
                      className={`${
                        active.idx == idx && active.choice == 1
                          ? "block"
                          : "hidden"
                      }`}
                    >
                      {el.specification.map((spe, i) => {
                        return (
                          <div key={i} className="flex">
                            <div className="lg:w-40 w-1/3">
                              <h4 className="font-medium">{spe.label}</h4>
                            </div>
                            <div className="grow">
                              <h4>{spe.value}</h4>
                            </div>
                          </div>
                        );
                      })}
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
