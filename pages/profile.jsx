import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
import { updateProfile, onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";

function Profile() {
  const router = useRouter();
  const [user, setUser] = useState({
    displayName: "",
    photoURL: "",
  });
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser({
          displayName: user.displayName,
          photoURL: user.photoURL,
        });
      } else {
        router.push("/auth/signin");
      }
    });
  }, [auth]);

  const changeMode = () => {
    setIsEdit(true);
  };

  const handleUpdate = () => {
    updateProfile(auth.currentUser, {
      displayName: user.displayName,
      photoURL: user.photoURL,
    })
      .then(() => {
        setIsEdit(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <div className="main-profile ">
        <div className="row">
          <div className="col-lg-4">
            {user.photoURL && (
              <Image
                src={user.photoURL}
                alt={user.displayName}
                style={{ borderRadius: "23px" }}
                width={300}
                height={300}
              />
            )}
            {isEdit && (
              <input
                name="photoURL"
                id="photoURL"
                type="text"
                className="tw-outline-none tw-py-1 tw-px-2 tw-bg-gray-100 tw-rounded-md tw-mt-2 tw-w-full"
                defaultValue={user.photoURL}
                onChange={handleChange}
              />
            )}
          </div>
          <div className="col-lg-4 align-self-center">
            <div className="main-info header-text">
              <h4>{user.displayName}</h4>
              <p>Tôi đang là Graphic Design tôi đang sinh sống tại Đà Nẵng</p>
              <div className="main-border-button">
                {isEdit ? (
                  <button onClick={handleUpdate}>Lưu</button>
                ) : (
                  <button onClick={changeMode}>Chỉnh Sửa</button>
                )}
              </div>
            </div>
          </div>
          <form className="col-lg-4 align-self-center">
            <ul>
              <li>
                Họ Và Tên{" "}
                {isEdit ? (
                  <span>
                    <input
                      name="displayName"
                      id="displayName"
                      type="text"
                      autoFocus
                      className="tw-outline-none tw-py-1 tw-px-2 tw-bg-transparent"
                      defaultValue={user.displayName}
                      onChange={handleChange}
                    />
                  </span>
                ) : (
                  <span>{user.displayName}</span>
                )}
              </li>
              <li>
                Tuổi <span>25</span>
              </li>
              <li>
                Thành Phố <span>Đà Nẵng</span>
              </li>
              <li>
                Giới Tính <span>Nam</span>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}

Profile.layout = "default";
export default Profile;
