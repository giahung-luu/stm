import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { UserDropdown, NotificationDropdown } from "./Dropdowns";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState("hidden");
  const router = useRouter();
  return (
    <>
      <nav className="md:tw-left-0 md:tw-block md:tw-fixed md:tw-top-0 md:tw-bottom-0 md:tw-overflow-y-auto md:tw-flex-row md:tw-flex-nowrap md:tw-overflow-hidden tw-shadow-xl tw-bg-white tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-relative md:tw-w-64 tw-z-10 tw-py-4 tw-px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            href="/admin"
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
          >
            {process.env.NEXT_PUBLIC_APP_NAME}
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    href="/admin"
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                  >
                    {process.env.NEXT_PUBLIC_APP_NAME}
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Admin Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  href="/admin"
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (router.pathname === "/admin"
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (router.pathname === "/admin"
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Dashboard
                </Link>
              </li>

              <li className="items-center">
                <Link
                  href="/admin/list-character"
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (router.pathname.indexOf("/admin/list-character") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                >
                  <i
                    className={
                      "fas fa-list mr-2 text-sm " +
                      (router.pathname.indexOf("/admin/list-character") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  List Character
                </Link>
              </li>
              <li className="items-center">
                <Link
                  href="/admin/list-question"
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (router.pathname.indexOf("/admin/list-question") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                >
                  <i
                    className={
                      "fas fa-question mr-2 text-sm " +
                      (router.pathname.indexOf("/admin/list-question") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  List Question
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/landing" legacyBehavior>
                  <a
                    href="#pablo"
                    className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  >
                    <i className="fas fa-newspaper text-blueGray-400 mr-2 text-sm"></i>{" "}
                    Landing Page
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/profile" legacyBehavior>
                  <a
                    href="#pablo"
                    className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  >
                    <i className="fas fa-user-circle text-blueGray-400 mr-2 text-sm"></i>{" "}
                    Profile Page
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
