import { FooterLanding } from "components/footer";
import { NavbarLanding } from "components/navbar";
import Head from "next/head";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function LayoutLanding({ children, title, page }) {
  const defaultTitle = "PT. ADHIS COMMODITY INDONESIA";
  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main className="bg-gray-100 dark:bg-gray-800 overflow-hidden relative scrollbar-hide">
        <NavbarLanding id={page} />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://wa.me/6283804175139"
          className="fixed z-50 bottom-8 right-8 text-white bg-green-600 rounded-lg border text-xs border-green-600 font-medium px-5 py-2 shadow-lg flex gap-3 items-center"
        >
          <AiOutlineWhatsApp size={24} />
          Adhis Support
        </a>
        {children}
        <FooterLanding />
      </main>
    </>
  );
}
