import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Search from "./Search";

function Layout({ children }) {
  const router = useRouter();
  const [userCurrent, setUserCurrent] = useState();

  const userRef = useRef(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUserCurrent(user);
      } else {
      }
    });
  }, [auth]);

  useEffect(() => {
    if (userCurrent) {
      userRef.current.classList.add("tw-hidden");
    }
  }, [router.pathname]);
  const toggleModal = (e) => {
    if (userRef.current.classList.contains("tw-hidden")) {
      userRef.current.classList.remove("tw-hidden");
    } else {
      userRef.current.classList.add("tw-hidden");
    }
  };

  const handleLogout = () => {
    signOut(auth);
    userRef.current.classList.add("tw-hidden");
    // reload
    window.location.reload();
  };

  return (
    <>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <Link href="/" className="logo">
                  <h2
                    style={{
                      fontsize: "50px",
                      color: "hotpink",
                    }}
                  >
                    STM
                  </h2>
                </Link>

                <Search />

                <ul className="nav tw-relative">
                  <li>
                    <Link
                      href="/"
                      className={router.pathname === "/" ? "active" : ""}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/list-character"
                      className={
                        router.pathname === "/list-character" ? "active" : ""
                      }
                    >
                      Danh Sách
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/mindmap"
                      className={router.pathname === "/mindmap" ? "active" : ""}
                    >
                      MindMap
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/arena"
                      className={router.pathname === "/arena" ? "active" : ""}
                    >
                      Arena
                    </Link>
                  </li>
                  {userCurrent ? (
                    <li>
                      <button
                        className="tw-bg-[#27292a] tw-text-gray-500 tw-rounded-full tw-overflow-hidden tw-h-full"
                        onClick={toggleModal}
                      >
                        <Image
                          src={userCurrent.photoURL || "/images/avatar.png"}
                          width={40}
                          height={40}
                          alt="avatar"
                          className="tw-object-cover"
                        />
                      </button>
                      <div
                        ref={userRef}
                        className="tw-hidden tw-absolute tw-top-auto -tw-bottom-10 tw-right-10 tw-bg-gray-700 tw-shadow tw-rounded-sm tw-overflow-hidden tw-min-w-[200px]"
                      >
                        <ul className="tw-w-full">
                          <li>
                            <Link
                              href="/profile"
                              className="tw-py-1 tw-px-3 tw-text-gray-300 hover:tw-bg-gray-200 tw-block tw-text-left"
                            >
                              Profile
                            </Link>
                          </li>

                          <li className="tw-border-2 tw-border-gray-200">
                            <button
                              className="tw-py-1 tw-px-3 tw-text-gray-300 hover:tw-bg-gray-200 tw-block tw-text-left tw-w-full hover:tw-text-[#e75e8d]"
                              onClick={handleLogout}
                            >
                              Logout
                            </button>
                          </li>
                        </ul>
                      </div>
                    </li>
                  ) : (
                    <li>
                      <Link href="/auth/signin">Login</Link>
                    </li>
                  )}
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">{children}</div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>
                Copyright © 202 <a href="#">STM - HISTORY LEARNING</a> Company.
                All rights reserved.
                {/* <br />
                Design:{" "}
                <a
                  href="https://templatemo.com"
                  target="_blank"
                  title="free CSS templates"
                >
                  Vipro
                </a>{" "}
                Distributed By{" "}
                <a href="https://themewagon.com" target="_blank">
                  ThemeWagon
                </a> */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;
