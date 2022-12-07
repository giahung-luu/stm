import React, { useEffect, useState } from "react";
import Link from "next/link";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Search from "./Search";

function Layout({ children }) {
  const [userCurrent, setUserCurrent] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUserCurrent(user);
      } else {
        // User is signed out
        // ...
      }
    });
  }, [auth]);
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

                <ul className="nav">
                  <li>
                    <Link href="/" className="active">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/list-character">Danh Sách</Link>
                  </li>
                  <li>
                    <Link href="/mindmap">MindMap</Link>
                  </li>
                  <li>
                    <Link href="/arena">Arena</Link>
                  </li>
                  <li>
                    <Link href="/profile">
                      {userCurrent ? (
                        <>
                          {userCurrent.email}
                          <img src="images/profile-header.jpg" alt="" />
                        </>
                      ) : (
                        "Login"
                      )}
                    </Link>
                  </li>
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
                <br />
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
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;
