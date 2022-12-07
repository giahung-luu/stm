import React from "react";
import { Layout, AdminLayout } from "../components";
import { ToastContainer } from "react-toastify";

import "../styles/assets/bootstrap.min.css";
import "../styles/assets/fontawesome.css";
import "../styles/assets/templatemo-cyborg-gaming.css";
import "../styles/assets/owl.css";
import "../styles/assets/animate.css";
import "../styles/assets/swiper-bundle.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.min.css";
import "../styles/globals.css";
import "../styles/jsmind.css";
import "../styles/mindmap.css";
function MyApp({ Component, pageProps }) {
  let LayoutRender = Component.layout === "default" ? Layout : React.Fragment;
  LayoutRender = Component.layout === "admin" ? AdminLayout : LayoutRender;
  return (
    <LayoutRender>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
      <Component {...pageProps} />
    </LayoutRender>
  );
}

export default MyApp;
