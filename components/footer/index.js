import Image from "next/image";
import logo2 from "public/logo2.png";
import Link from "next/link";

export function FooterLanding() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <span className="block w-32 bg-gray-200 rounded-lg">
              <Image src={logo2} layout="responsive" objectFit="cover" />
            </span>

            <h2 className="mt-4 font-medium">PT Adhis Commodity Indonesia</h2>

            <p className=" mt-2 text-sm text-gray-500">
              We are well-known for producing better products and servicing our
              devoted customers 24/7. Our professionals have in-depth knowledge
              of the auditing procedures and inspect the final consignment
              indepth before shipment. We have a well-equipped, spacious, neat
              and clean warehouse. We also have a packaging unit to ensure
              longer shelf life of the products.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>

              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <Link href="/home">
                  <a className="hover:opacity-75"> Home </a>
                </Link>
                <Link href="/about">
                  <a className="hover:opacity-75"> About us </a>
                </Link>
                <Link href="/certificate">
                  <a className="hover:opacity-75"> Certificate </a>
                </Link>
                <Link href="/team">
                  <a className="hover:opacity-75"> Our Team </a>
                </Link>
              </nav>
            </div>

            <div>
              <p className="font-medium">Services</p>

              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <Link href="/product">
                  <a className="hover:opacity-75"> Product </a>
                </Link>
                <Link href="/news">
                  <a className="hover:opacity-75"> News </a>
                </Link>
              </nav>
            </div>

            <div>
              <p className="font-medium">Helpful Links</p>

              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <Link href="/faq">
                  <a className="hover:opacity-75"> FAQs </a>
                </Link>
                <Link href="/term">
                  <a className="hover:opacity-75"> Term </a>
                </Link>
                <Link href="/certificate">
                  <a className="hover:opacity-75"> Contact </a>
                </Link>
              </nav>
            </div>

            <div>
              <p className="font-medium">Legal</p>

              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="">
                  {" "}
                  Privacy Policy{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  Terms & Conditions{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  Returns Policy{" "}
                </a>
                <a className="hover:opacity-75" href="">
                  {" "}
                  Accessibility{" "}
                </a>
              </nav>
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs text-gray-500">
          &copy; 2022 PT. ADHIS COMMODITY INDONESIA
        </p>
      </div>
    </footer>
  );
}
