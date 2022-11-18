import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { auth } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
// import bootstrap from "bootstrap";

const showModal = () => {
  const { Modal } = require("bootstrap");
  const myModal = new Modal("#exampleModal");
  myModal.show();
};

function ListCharacter() {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        // router.push("auth/signin");
      }
    });
  }, [auth]);
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
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
                    <span>
                      Hồ Chí Minh (chữ Nho: 胡志明; 19 tháng 5 năm 1890 – 2
                      tháng 9 năm 1969), tên khai sinh Nguyễn Sinh Cung (chữ
                      Nho: 阮生恭), là một nhà cách mạng và chính khách người
                      Việt Nam. Ông là người sáng lập Đảng Cộng sản Việt Nam,
                      từng là Chủ tịch nước Việt Nam Dân chủ Cộng hoà từ
                      1945–1969, Thủ tướng Việt Nam Dân chủ Cộng hòa trong những
                      năm 1945–1955, Tổng Bí thư Ban Chấp hành Trung ương Đảng
                      Lao động Việt Nam từ 1956–1960, Chủ tịch Ban Chấp hành
                      Trung ương Đảng Lao động Việt Nam từ năm 1951 cho đến khi
                      qua đời.
                    </span>
                  </h4>
                </div>
              </div>
              <div className="item row py-4 my-2">
                <div className="hover-effect col-lg-10 text-end">
                  <h4>
                    Hồ Chí Minh
                    <br />
                    <span>
                      Hồ Chí Minh (chữ Nho: 胡志明; 19 tháng 5 năm 1890 – 2
                      tháng 9 năm 1969), tên khai sinh Nguyễn Sinh Cung (chữ
                      Nho: 阮生恭), là một nhà cách mạng và chính khách người
                      Việt Nam. Ông là người sáng lập Đảng Cộng sản Việt Nam,
                      từng là Chủ tịch nước Việt Nam Dân chủ Cộng hoà từ
                      1945–1969, Thủ tướng Việt Nam Dân chủ Cộng hòa trong những
                      năm 1945–1955, Tổng Bí thư Ban Chấp hành Trung ương Đảng
                      Lao động Việt Nam từ 1956–1960, Chủ tịch Ban Chấp hành
                      Trung ương Đảng Lao động Việt Nam từ năm 1951 cho đến khi
                      qua đời.
                    </span>
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
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{ float: "right" }}
        onClick={showModal}
      >
        Test
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">. . .</div>
          </div>
        </div>
      </div>
    </>
  );
}
ListCharacter.layout = "default";
export default ListCharacter;
