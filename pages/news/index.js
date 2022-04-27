import LayoutLanding from "layout/landing/index";
import Link from "next/link";
import Image from "next/image";
import news1 from "public/news/news1.jpg";
import news2 from "public/news/news2.jpg";
import vision from "public/bg/vision-mission.jpg";

const news = [
  {
    title: "Benefits of Galangal",
    description:
      "Galangal, a herb like ginger and turmeric belongs to the rhizome family. It is also known as ‘Siamese ginger’ and is commonly used in Southeast Asian cuisine, especially Thai.",
    date: "July, 06 2020",
    image: news1,
  },
  {
    title: "Indonesia Spice Up the World",
    description:
      "From gastro diplomacy to export, Indonesia wants to bring more local spices abroad.",
    date: "January 05, 2022",
    image: news2,
  },
];

export default function News() {
  return (
    <LayoutLanding page="news" title="News">
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
              News
            </h1>

            <p
              className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl"
              data-aos="fade-right"
            >
              Latest story from our company
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <div className="w-11/12 max-w-7xl py-16">
          <div className="grid 2xl:grid-cols-5 xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
            {news.map((el, idx) => {
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg flex flex-col"
                  data-aos="fade-up"
                >
                  <div className="w-full h-48 relative ">
                    <Image src={el.image} layout="fill" objectFit="cover" />
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font my-4">
                    {el.title}
                  </h2>
                  <p className="leading-relaxed text-base mb-4">
                    {el.description}
                  </p>
                  <div className="text-center mt-auto flex ">
                    <Link href={`/news/${idx + 1}`}>
                      <a className="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        SEE MORE
                      </a>
                    </Link>
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
