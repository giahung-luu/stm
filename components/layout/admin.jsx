import React from "react";

// components

import { AdminNavbar } from "../Navbars";
import Sidebar from "../SideBar";
import HeaderStats from "../Headers/HeaderStats";

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="tw-relative md:tw-ml-64 tw-bg-blueGray-100">
        <AdminNavbar />
        <HeaderStats />
        <div className="tw-px-4 md:tw-px-10 tw-mx-auto tw-w-full -tw-m-24 tw-pb-10">
          {children}
          
        </div>
      </div>
    </>
  );
}
