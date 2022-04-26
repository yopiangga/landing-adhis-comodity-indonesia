import { FooterLanding } from "components/footer";
import { NavbarLanding } from "components/navbar";
import Head from "next/head";

export default function LayoutLanding({ children, title, page }) {
  const defaultTitle = "PT. ADHIS COMMODITY INDONESIA";
  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main className="bg-gray-100 dark:bg-gray-800 overflow-hidden relative">
        <NavbarLanding id={page} />
        {children}
        <FooterLanding />
      </main>
    </>
  );
}
