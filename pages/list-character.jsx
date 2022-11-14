import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { auth } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

function ListCharacter() {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("auth/signup");
      }
    });
  }, [auth]);
  return (
    <div className="row list-character-page">
      <Head>
        <title>List Character</title>
      </Head>
      <div className="col-lg-8">
        <div className="featured-games header-text" style={{ width: "140%" }}>
          <div className="heading-section">
            <h4>
              <em>Nhân Vật</em> Lịch Sử
            </h4>
          </div>
          <div className="">
            <div className="item row py-4 my-2">
              <div className="col-lg-2">
                <img src="images/bac-ho.jpg" alt="Bác Hồ" />
              </div>
              <div className="hover-effect col-lg-10">
                <h4>
                  Hồ Chí Minh
                  <br />
                  <span>2.4K Lượt xem</span>
                </h4>
              </div>
            </div>
            <div className="item row py-4 my-2">
              <div className="hover-effect col-lg-10 text-end">
                <h4>
                  Hồ Chí Minh
                  <br />
                  <span>2.4K Lượt xem</span>
                </h4>
              </div>
              <div className="col-lg-2">
                <img src="images/bac-ho.jpg" alt="Bác Hồ" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
ListCharacter.layout = "default";
export default ListCharacter;
