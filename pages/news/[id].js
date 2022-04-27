import { useRouter } from "next/router";
import LayoutLanding from "layout/landing/index";
import news1 from "public/news/news1.jpg";
import news2 from "public/news/news2.jpg";
import Image from "next/image";
import { useState } from "react";
import vision from "public/bg/vision-mission.jpg";

const news = [
  {
    title: "Benefits of Galangal",
    description:
      "Galangal, a herb like ginger and turmeric belongs to the rhizome family. It is also known as ‘Siamese ginger’ and is commonly used in Southeast Asian cuisine, especially Thai.",
    date: "July, 06 2020",
    image: news1,
    essay: [
      "Galangal, a herb like ginger and turmeric belongs to the rhizome family. It is also known as ‘Siamese ginger’ and is commonly used in Southeast Asian cuisine, especially Thai.",
      "The name galangal is derived form the Chinese word for ginger. Botanically it is known as alpinia galanga. This tuber is known to have numerous medicinal and health benefits. And sit is used by many homeopaths and healthcare professionals. Here are some of their heath benefits:",
      "Galangal contains anti-inflammatory properties and therefore is beneficial in treatment of arthritis and rheumatoid arthritis.",
      "It also helps to relieve discomfort caused due to inflammation of the abdomen and ulcers too. - To curb sea and motion sickness, nausea, chew a few slices of fresh galangal.",
      "Galangal contains a host of anti-oxidants that helps to minimise the damage caused by free radicals and other toxins in the body.",
      "To improve blood circulation in the body, include galangal in your diet.",
      "If you suffer form diarrhoea, chew a few slices of fresh galangal to seek relief.",
      "Besides being a rich source of iron, sodium, vitamins A and C, it contains flavanoids and phytonutrients.",
    ],
  },
  {
    title: "Indonesia Spice Up the World",
    description:
      "From gastro diplomacy to export, Indonesia wants to bring more local spices abroad.",
    date: "January 05, 2022",
    image: news2,
    essay: [
      "From gastro diplomacy to export, Indonesia wants to bring more local spices abroad",
      "As the world’s fourth-largest exporter of spices, the Indonesian spice industry is highly lucrative. According to the Ministry of Trade, spice and herb exports are valued at USD500 million per year, and the country is known to be the world’s second-largest pepper producer in the world, next to Vietnam.",
      "The Indonesian government plans to take the industry further by launching a program called Indonesia Spice Up the World (ISUTW), which to promote and increase investment opportunities on local spices and herbs. Specifically, the program wants to bring attention to Indonesian spices and dishes at the international stage to boost the value of export for local spices.",
      "The ISUTW program was launched at the National Day of the Indonesian Pavilion on November 4, in Expo 2020 Dubai. “The Indonesian Pavilion will show the world the richness of Indonesian spices. In its heyday, spices were even more valuable than gold. Now, Indonesian spices with their distinctive aroma and taste, as well as full of benefits, show Indonesia’s invaluable biodiversity that is not shared by all nations in the world,” said the Director General of National Export Development of the Ministry of Trade, Didi Sumedi.",
      "Indonesia’s main export products for spices are nutmeg, cloves, white pepper, cinnamon, and cardamom, with the majority of its importers being the United States, China, India, Vietnam, and the Netherlands. Currently, the export value of processed and fresh Indonesian spices experience a positive trend with an average growth of 2.95% over the last five years. In 2020, the export value was recorded at USD1.02 billion.",
      "However, the opportunity for Indonesian spices isn’t just in exporting goods. One of the Indonesia Spice Up the World programs encourages the Indonesian diaspora to display local culinary delights in their countries and supports existing Indonesian restaurants abroad, both part of the government’s restaurant gastro diplomacy.",
      "In fact, according to the Embassy of Indonesia in New York, there are around 100 Indonesian restaurants on the east coast. This signs a good beginning for gastro diplomacy, knowing that there’s a high population of Indonesians in the area and a responsive market to Indonesian cuisine. The Indonesia Spice Up the World will strengthen the existing Indonesian restaurant communities worldwide and grow them even further.",
      "In the future, Indonesian restaurants which are members of the Indonesia Spice Up The World program will receive support and facilities from the government, such as business rebranding, assistance in spices and herbs supply, or promotional materials for tourism products and the creative economy.",
      "Through Indonesia Spice Up the World, the government hopes to increase exports of processed food, especially spices, and conversely, attract more tourists to visit Indonesia and try local dishes first hand.",
      "Within the country, the government is focusing on strengthening the upstream herbs and spices industry, making room for plenty of investment opportunities. A Dutch company Verstegen Spices & Sauces B.V., for instance, had already planned to invest in the nutmeg processing industry in Fakfak Regency, West Papua. In response, the Minister of Investment/Chairman of BKPM Bahlil Lahadalia has expressed his enthusiasm to assist Spices & Sauces in securing the land-use permits in the region.",
      "India, the third-largest importer of Indonesian spices, is also eager to strengthen cooperation in the spice trade. One of them is by investing in Central Java, a province with rich herbal commodities, such as ginger, turmeric, and curcuma, to be processed as herbal medicines popular in India. Leveraging this cooperation, India and Indonesia signed a memorandum of understanding during the 2021 Trade Expo Indonesia Digital Edition (TEI-DE) to increase their collaboration.",
      "Various investment opportunities are still available in the spice processing industry. Currently, 45% of the spice market is run by Micro, Small and Medium Enterprises (MSMEs), which tend to be behind in technology and are very segmented. For potential investors, this is an opportunity to bridge the funding gap and modernize the traditional industry to meet global demands.",
      "The Indonesian government wishes to restore the glorious Indonesian spice era, a historical period for the world. Through Indonesia Spice Up the World, the local spice industry will be strengthened both internally and externally. By 2024, it is expected that more than 4,000 Indonesian restaurants will open around the world, and the value of spice exports will reach USD2 billion.",
    ],
  },
];

export default function NewsDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [article, setArticle] = useState(news[id - 1]);

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
              Detail News
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
          <h1 className="text-4xl font-bold mb-2" data-aos="fade-up">
            {article.title}
          </h1>
          <h5 className="font-medium text-sm mb-8" data-aos="fade-up">
            Date : {article.date}
          </h5>
          <div className="w-full relative mb-8" data-aos="fade-up">
            <Image src={article.image} layout="responsive" objectFit="cover" />
          </div>
          {article.essay.map((item, index) => {
            return (
              <p key={index} className="mb-5" data-aos="fade-up">
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </LayoutLanding>
  );
}
