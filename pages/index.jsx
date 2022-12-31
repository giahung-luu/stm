import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home page</title>
      </Head>
      <div className="main-banner">
        <div className="row">
          <div className="col-lg-7">
            <div className="header-text">
              <h6>Welcome To STM</h6>
              <h4>
                <em>INTRODUCTION</em> HISTORY MIND MAP HERE
              </h4>
              <div className="main-button">
                <a href="/mindmap">Học Ngay</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.layout = "default";
