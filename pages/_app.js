import React from "react";
import { Layout } from "../components";
import "../styles/assets/bootstrap.min.css";
import "../styles/assets/fontawesome.css";
import "../styles/assets/templatemo-cyborg-gaming.css";
import "../styles/assets/owl.css";
import "../styles/assets/animate.css";
import "../styles/assets/swiper-bundle.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const LayoutRender = Component.layout === "default" ? Layout : React.Fragment;
  return (
    <LayoutRender>
      <Component {...pageProps} />
    </LayoutRender>
  );
}

export default MyApp;
