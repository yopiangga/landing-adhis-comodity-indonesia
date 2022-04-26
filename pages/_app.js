import "../styles/globals.css";
import { UserProvider } from "../context/user";
import AuthStateChangeProvider from "../context/auth";
import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <UserProvider>
      <AuthStateChangeProvider>
        <Component {...pageProps} />
      </AuthStateChangeProvider>
    </UserProvider>
  );
}

export default MyApp;
