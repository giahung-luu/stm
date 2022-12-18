import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { UserDropdown, NotificationDropdown } from "./Dropdowns";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState("tw-hidden");
  const router = useRouter();
  return (
    <>
      <nav className="md:tw-left-0 md:tw-block md:tw-fixed md:tw-top-0 md:tw-bottom-0 md:tw-overflow-y-auto md:tw-flex-row md:tw-flex-nowrap md:tw-overflow-hidden tw-shadow-xl tw-bg-white tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-relative md:tw-w-64 tw-z-10 tw-py-4 tw-px-6">
        <div className="md:tw-flex-col md:tw-items-stretch md:tw-min-h-full md:tw-flex-nowrap tw-px-0 tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-w-full tw-mx-auto">
          <button
            className="tw-cursor-pointer tw-text-black tw-opacity-50 md:tw-hidden tw-px-3 tw-py-1 tw-text-xl tw-leading-none tw-bg-transparent tw-rounded tw-border tw-border-solid tw-border-transparent"
            type="button"
            onClick={() =>
              setCollapseShow("tw-bg-white tw-m-2 tw-py-3 tw-px-6")
            }
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            href="/admin"
            className="md:tw-block tw-text-left md:tw-pb-2 tw-text-blueGray-600 tw-mr-0 tw-inline-block tw-whitespace-nowrap tw-text-sm tw-uppercase tw-font-bold tw-p-4 tw-px-0"
          >
            {process.env.NEXT_PUBLIC_APP_NAME}
          </Link>
          {/* User */}
          <ul className="md:tw-hidden tw-items-center tw-flex tw-flex-wrap tw-list-none">
            <li className="tw-inline-block tw-relative">
              <NotificationDropdown />
            </li>
            <li className="tw-inline-block tw-relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:tw-flex md:tw-flex-col md:tw-items-stretch md:tw-opacity-100 md:tw-relative md:tw-mt-4 md:tw-shadow-none tw-shadow tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-z-40 tw-overflow-y-auto tw-overflow-x-hidden tw-h-auto tw-items-center tw-flex-1 tw-rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:tw-min-w-full md:tw-hidden tw-block tw-pb-4 tw-mb-4 tw-border-b tw-border-solid tw-border-blueGray-200">
              <div className="tw-flex tw-flex-wrap">
                <div className="tw-w-6/12">
                  <Link
                    href="/admin"
                    className="md:tw-block tw-text-left md:tw-pb-2 tw-text-blueGray-600 tw-mr-0 tw-inline-block tw-whitespace-nowrap tw-text-sm tw-uppercase tw-font-bold tw-p-4 tw-px-0"
                  >
                    {process.env.NEXT_PUBLIC_APP_NAME}
                  </Link>
                </div>
                <div className="tw-w-6/12 tw-flex tw-justify-end">
                  <button
                    type="button"
                    className="tw-cursor-pointer tw-text-black tw-opacity-50 tw-md:hidden tw-px-3 tw-py-1 tw-text-xl tw-leading-none tw-bg-transparent tw-rounded tw-border tw-border-solid tw-border-transparent"
                    onClick={() => setCollapseShow("tw-hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="tw-my-4 md:tw-min-w-full" />
            {/* Heading */}
            <h6 className="md:tw-min-w-full tw-text-blueGray-500 tw-text-xs tw-uppercase tw-font-bold tw-block tw-pt-1 tw-pb-4 tw-no-underline">
              Admin Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:tw-flex-col md:tw-min-w-full tw-flex tw-flex-col tw-list-none">
              <li className="tw-items-center">
                <Link
                  href="/admin"
                  className={
                    "tw-text-xs tw-uppercase tw-py-3 tw-font-bold tw-block " +
                    (router.pathname === "/admin"
                      ? "tw-text-lightBlue-500 hover:tw-text-lightBlue-600"
                      : "tw-text-blueGray-700 hover:tw-text-blueGray-500")
                  }
                >
                  <i
                    className={
                      "fas fa-tv tw-mr-2 tw-text-sm " +
                      (router.pathname === "/admin"
                        ? "tw-opacity-75"
                        : "tw-text-blueGray-300")
                    }
                  ></i>{" "}
                  Dashboard
                </Link>
              </li>

              <li className="tw-items-center">
                <Link
                  href="/admin/list-character"
                  className={
                    "tw-text-xs tw-uppercase tw-py-3 tw-font-bold tw-block " +
                    (router.pathname.indexOf("/admin/list-character") !== -1
                      ? "tw-text-lightBlue-500 hover:tw-text-lightBlue-600"
                      : "tw-text-blueGray-700 hover:tw-text-blueGray-500")
                  }
                >
                  <i
                    className={
                      "fas fa-list tw-mr-2 tw-text-sm " +
                      (router.pathname.indexOf("/admin/list-character") !== -1
                        ? "tw-opacity-75"
                        : "tw-text-blueGray-300")
                    }
                  ></i>{" "}
                  List Character
                </Link>
              </li>
              <li className="tw-items-center">
                <Link
                  href="/admin/list-question"
                  className={
                    "tw-text-xs tw-uppercase tw-py-3 tw-font-bold tw-block " +
                    (router.pathname.indexOf("/admin/list-question") !== -1
                      ? "tw-text-lightBlue-500 hover:tw-text-lightBlue-600"
                      : "tw-text-blueGray-700 hover:tw-text-blueGray-500")
                  }
                >
                  <i
                    className={
                      "fas fa-question tw-mr-2 tw-text-sm " +
                      (router.pathname.indexOf("/admin/list-question") !== -1
                        ? "tw-opacity-75"
                        : "tw-text-blueGray-300")
                    }
                  ></i>{" "}
                  List Question
                </Link>
              </li>
              <li className="tw-items-center">
                <Link
                  href="/admin/mindmap"
                  className={
                    "tw-text-xs tw-uppercase tw-py-3 tw-font-bold tw-block " +
                    (router.pathname.indexOf("/admin/mindmap") !== -1
                      ? "tw-text-lightBlue-500 hover:tw-text-lightBlue-600"
                      : "tw-text-blueGray-700 hover:tw-text-blueGray-500")
                  }
                >
                  <i
                    className={
                      "fas fa-diagram-project tw-mr-2 tw-text-sm " +
                      (router.pathname.indexOf("/admin/mindmap") !== -1
                        ? "tw-opacity-75"
                        : "tw-text-blueGray-300")
                    }
                  ></i>{" "}
                  Mind Map
                </Link>
              </li>

              <li className="tw-items-center">
                <Link
                  href="/admin/topic"
                  className={
                    "tw-text-xs tw-uppercase tw-py-3 tw-font-bold tw-block " +
                    (router.pathname.indexOf("/admin/topic") !== -1
                      ? "tw-text-lightBlue-500 hover:tw-text-lightBlue-600"
                      : "tw-text-blueGray-700 hover:tw-text-blueGray-500")
                  }
                >
                  <i
                    className={
                      "fas fa-solid fa-pager tw-mr-2 tw-text-sm " +
                      (router.pathname.indexOf("/admin/topic") !== -1
                        ? "tw-opacity-75"
                        : "tw-text-blueGray-300")
                    }
                  ></i>{" "}
                  Topic
                </Link>
              </li>

            </ul>

            {/* Divider */}
            <hr className="tw-my-4 md:tw-min-w-full" />
            {/* Navigation */}

            <ul className="md:tw-flex-col md:tw-min-w-full tw-flex tw-flex-col tw-list-none md:tw-mb-4">
              <li className="tw-items-center">
                <Link
                  href="/admin"
                  className="tw-text-blueGray-700 hover:tw-text-blueGray-500 tw-text-xs tw-uppercase tw-py-3 tw-font-bold tw-block"
                >
                  <i className="fas fa-newspaper tw-text-blueGray-400 tw-mr-2 tw-text-sm"></i>{" "}
                  Landing Page
                </Link>
              </li>

              <li className="tw-items-center">
                <Link
                  href="/admin"
                  className="tw-text-blueGray-700 hover:tw-text-blueGray-500 tw-text-xs tw-uppercase tw-py-3 tw-font-bold tw-block"
                >
                  <i className="fas fa-user-circle tw-text-blueGray-400 tw-mr-2 tw-text-sm"></i>{" "}
                  Profile Page
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
