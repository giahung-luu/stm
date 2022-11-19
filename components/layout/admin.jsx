import React from "react";

// components

import { AdminNavbar } from "../Navbars";
import Sidebar from "../SideBar";
import HeaderStats from "../Headers/HeaderStats";

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">{children}</div>
      </div>
    </>
  );
}
