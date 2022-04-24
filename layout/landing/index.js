import { FooterLanding } from "components/footer";
import { NavbarLanding } from "components/navbar";

export default function LayoutLanding({ children, menuActive, title }) {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 overflow-hidden relative">
      <NavbarLanding />
      {children}
      <FooterLanding />
    </main>
  );
}
