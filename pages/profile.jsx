import React from "react";

function Profile() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-content">
            <div className="row">
              <div className="col-lg-12">
                <div className="main-profile ">
                  <div className="row">
                    <div className="col-lg-4">
                      <img
                        src="assets/images/gai.jpg"
                        alt=""
                        style={{ borderRadius: "23px" }}
                      />
                    </div>
                    <div className="col-lg-4 align-self-center">
                      <div className="main-info header-text">
                        <span>Profile</span>
                        <h4>Phan văn A</h4>
                        <p>
                          Tôi đang là Graphic Design tôi đang sinh sống tại Đà
                          Nẵng
                        </p>
                        <div className="main-border-button">
                          <a href="#">Chỉnh Sửa</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 align-self-center">
                      <ul>
                        <li>
                          Họ Và Tên <span>Phan văn A</span>
                        </li>
                        <li>
                          Nghề Nghiệp <span>Design</span>
                        </li>
                        <li>
                          Thành Phố <span>Đà Nẵng</span>
                        </li>
                        <li>
                          Giới Tính <span>Nam</span>
                        </li>
                        <li>
                          Tuổi <span>25</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Profile.layout = "default";
export default Profile;
