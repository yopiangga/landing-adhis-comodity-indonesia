import LayoutLanding from "layout/landing/index";

import Image from "next/image";
import founder from "public/team/founder.jpg";
import co_founder from "public/team/co-founder.jpg";

export default function OurTeam() {
  return (
    <LayoutLanding>
      <section className="text-white bg-gray-900">
        <div className="max-w-screen-xl px-4 py-32 mx-auto lg:h-fit lg:items-center lg:flex">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-600">
              Our Team
            </h1>

            <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
              Founder of the company
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <div className="w-full max-w-7xl py-16 px-12">
          <h1 className="text-3xl mb-3 text-center">Professional Team</h1>
          <p className="text-center">Meet the best team in world</p>

          <div className="grid 2xl:grid-cols-5 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
            <div className="text-center mb-8 md:mb-0">
              <div className="w-48 h-48 overflow-hidden border-8 border-green-400 rounded-full mx-auto -mb-24">
                <Image src={founder} layout="responsive" objectFit="cover" />
              </div>
              <div className="bg-white shadow-lg rounded-lg px-8 pt-32 pb-10 text-gray-400">
                <h3 className="font-title text-gray-800 text-xl mb-3">
                  Adi Supardi
                </h3>
                <p className="font-body">Founder</p>
              </div>
            </div>
            <div className="text-center mb-8 md:mb-0">
              <div className="w-48 h-48 overflow-hidden border-8 border-green-400 rounded-full mx-auto -mb-24">
                <Image src={co_founder} layout="responsive" objectFit="cover" />
              </div>
              <div className="bg-white shadow-lg rounded-lg px-8 pt-32 pb-10 text-gray-400">
                <h3 className="font-title text-gray-800 text-xl mb-3">
                  Euis Daniati
                </h3>
                <p className="font-body">CO-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutLanding>
  );
}
