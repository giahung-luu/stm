import React from "react";
import PropTypes from "prop-types";

function ListCharacter({ color }) {
  return (
    <>
      <div
        className={
          "tw-relative tw-flex tw-flex-col tw-min-w-0 tw-break-words tw-w-full tw-mb-6 tw-shadow-lg tw-rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="tw-rounded-t tw-mb-0 tw-px-4 tw-py-3 tw-border-0">
          <div className="tw-flex tw-flex-wrap tw-items-center">
            <div className="tw-relative tw-w-full tw-px-4 tw-max-w-full tw-flex-grow tw-flex-1">
              <h3
                className={
                  "tw-font-semibold tw-text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Character
              </h3>
            </div>
          </div>
        </div>
        <div className="tw-block tw-w-full tw-overflow-x-auto">
          {/* Projects table */}
          <table className="tw-items-center tw-w-full tw-bg-transparent tw-border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Name
                </th>
                <th
                  className={
                    "tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Budget
                </th>
                <th
                  className={
                    "tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Status
                </th>
                <th
                  className={
                    "tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Users
                </th>
                <th
                  className={
                    "tw-px-6 tw-align-middle tw-border tw-order-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Completion
                </th>
                <th
                  className={
                    "tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4 tw-text-left tw-flex tw-items-center">
                  <img
                    src="/img/bootstrap.jpg"
                    className="tw-h-12 tw-w-12 tw-bg-white tw-rounded-full tw-border"
                    alt="..."
                  ></img>{" "}
                  <span
                    className={
                      "tw-ml-3 tw-font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    Argon Design System
                  </span>
                </th>
                <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap p-4">
                  $2,500 USD
                </td>
                <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                  <i className="tw-fas tw-fa-circle tw-text-orange-500 tw-mr-2"></i>{" "}
                  pending
                </td>
                <td className="tw-order-t-0 tw-px-6 tw-lign-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                  <div className="flex">
                    <img
                      src="/img/team-1-800x800.jpg"
                      alt="..."
                      className="tw-w-10 tw-h-10 tw-rounded-full tw-border-2 tw-border-blueGray-50 tw-shadow"
                    ></img>
                    <img
                      src="/img/team-2-800x800.jpg"
                      alt="..."
                      className="tw-w-10 tw-h-10 tw-rounded-full tw-border-2 tw-border-blueGray-50 tw-shadow -ml-4"
                    ></img>
                    <img
                      src="/img/team-3-800x800.jpg"
                      alt="..."
                      className="tw--10 tw-h-10 tw-rounded-full tw-border-2 tw-border-blueGray-50 tw-shadow tw--ml-4"
                    ></img>
                    <img
                      src="/img/team-4-470x470.png"
                      alt="..."
                      className="tw-w-10 tw-h-10 tw-rounded-full tw-border-2 tw-border-blueGray-50 tw-shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                  <div className="tw-flex tw-items-center">
                    <span className="tw-mr-2">60%</span>
                    <div className="tw-relative tw-w-full">
                      <div className="tw-overflow-hidden tw-h-2 tw-text-xs tw-flex tw-rounded tw-bg-red-200">
                        <div
                          style={{ width: "60%" }}
                          className="tw-shadow-none tw-flex tw-flex-col tw-text-center tw-whitespace-nowrap tw-text-white tw-justify-center tw-bg-red-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4 tw-text-right">
                  {/* <TableDropdown /> */}
                </td>
              </tr>
              <tr>
                <th className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4 tw-text-left tw-flex tw-items-center">
                  <img
                    src="/img/angular.jpg"
                    className="tw-h-12 tw-w-12 tw-bg-white tw-rounded-full tw-border"
                    alt="..."
                  ></img>{" "}
                  <span
                    className={
                      "tw-ml-3 tw-font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    Angular Now UI Kit PRO
                  </span>
                </th>
                <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                  $1,800 USD
                </td>
                <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                  <i className="tw-fas tw-fa-circle tw-ext-emerald-500 tw-mr-2"></i>{" "}
                  completed
                </td>
                <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                  <div className="flex">
                    <img
                      src="/img/team-1-800x800.jpg"
                      alt="..."
                      className="tw-w-10 tw-h-10 tw-rounded-full tw-border-2 tw-border-blueGray-50 tw-shadow"
                    ></img>
                    <img
                      src="/img/team-2-800x800.jpg"
                      alt="..."
                      className="tw-w-10 tw-h-10 tw-rounded-full tw-border-2 tw-border-blueGray-50 tw-shadow tw--ml-4"
                    ></img>
                    <img
                      src="/img/team-3-800x800.jpg"
                      alt="..."
                      className="tw-w-10 tw-h-10 tw-rounded-full tw-border-2 tw-border-blueGray-50 tw-shadow tw--ml-4"
                    ></img>
                    <img
                      src="/img/team-4-470x470.png"
                      alt="..."
                      className="tw-w-10 tw-h-10 tw-rounded-full tw-border-2 tw-border-blueGray-50 tw-shadow tw--ml-4"
                    ></img>
                  </div>
                </td>
                <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                  <div className="tw-flex tw-items-center">
                    <span className="tw-mr-2">100%</span>
                    <div className="tw-relative tw-w-full">
                      <div className="tw-overflow-hidden tw-h-2 tw-text-xs tw-flex tw-rounded tw-bg-emerald-200">
                        <div
                          style={{ width: "100%" }}
                          className="tw-shadow-none tw-flex tw-flex-col tw-text-center tw-whitespace-nowrap tw-text-white tw-justify-center tw-bg-emerald-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4 tw-text-right">
                  {/* <TableDropdown /> */}
                </td>
              </tr>
              <tr>
                <th className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4 tw-text-left tw-flex tw-items-center">
                  <img
                    src="/img/sketch.jpg"
                    className="tw-h-12 tw-w-12 tw-bg-white tw-rounded-full tw-border"
                    alt="..."
                  ></img>{" "}
                  <span
                    className={
                      "tw-ml-3 tw-font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    Black Dashboard Sketch
                  </span>
                </th>
                <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-order-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                  $3,150 USD
                </td>
                <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                  <i className="tw-fas tw-fa-circle tw-text-red-500 tw-mr-2"></i>{" "}
                  delayed
                </td>
                <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                  <div className="flex">
                    <img
                      src="/img/team-1-800x800.jpg"
                      alt="..."
                      className="tw-w-10 tw-h-10 tw-rounded-full tw-border-2 tw-border-blueGray-50 tw-shadow"
                    ></img>
                    <img
                      src="/img/team-2-800x800.jpg"
                      alt="..."
                      className="tw-w-10 tw-h-10 tw-rounded-full tw-border-2 tw-border-blueGray-50 tw-shadow tw--ml-4"
                    ></img>
                    <img
                      src="/img/team-3-800x800.jpg"
                      alt="..."
                      className="tw-w-10 tw-h-10 tw-rounded-full tw-border-2 tw-border-blueGray-50 tw-shadow tw--ml-4"
                    ></img>
                    <img
                      src="/img/team-4-470x470.png"
                      alt="..."
                      className="tw-w-10 tw-h-10 tw-rounded-full tw-border-2 tw-border-blueGray-50 tw-shadow tw--ml-4"
                    ></img>
                  </div>
                </td>
                <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                  <div className="tw-flex tw-items-center">
                    <span className="tw-mr-2">73%</span>
                    <div className="tw-relative tw-w-full">
                      <div className="tw-overflow-hidden tw-h-2 tw-text-xs tw-flex tw-rounded tw-bg-red-200">
                        <div
                          style={{ width: "73%" }}
                          className="tw-shadow-none tw-flex tw-flex-col tw-text-center tw-whitespace-nowrap tw-text-white tw-justify-center tw-bg-red-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4 tw-text-right">
                  {/* <TableDropdown /> */}
                </td>
              </tr>
              <tr>
                <th className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4 tw-text-left tw-flex tw-items-center">
                  <img
                    src="/img/react.jpg"
                    className="tw-h-12 tw-w-12 tw-bg-white tw-rounded-full tw-border"
                    alt="..."
                  ></img>{" "}
                  <span
                    className={
                      "tw-ml-3 tw-font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    React Material Dashboard
                  </span>
                </th>
                <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                  $4,400 USD
                </td>
                <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                  <i className="tw-fas tw-fa-circle tw-text-teal-500 tw-mr-2"></i>{" "}
                  on schedule
                </td>
                <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                  <div className="flex">
                    <img
                      src="/img/team-1-800x800.jpg"
                      alt="..."
                      className="tw-w-10 tw-h-10 tw-rounded-full tw-border-2 tw-border-blueGray-50 tw-shadow"
                    ></img>
                    <img
                      src="/img/team-2-800x800.jpg"
                      alt="..."
                      className="tw-w-10 tw-h-10 tw-rounded-full tw-border-2 tw-border-blueGray-50 tw-shadow tw--ml-4"
                    ></img>
                    <img
                      src="/img/team-3-800x800.jpg"
                      alt="..."
                      className="tw-w-10 tw-h-10 tw-rounded-full tw-border-2 tw-border-blueGray-50 tw-shadow tw--ml-4"
                    ></img>
                    <img
                      src="/img/team-4-470x470.png"
                      alt="..."
                      className="tw-w-10 tw-h-10 tw-rounded-full tw-border-2 tw-border-blueGray-50 tw-shadow tw--ml-4"
                    ></img>
                  </div>
                </td>
                <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                  <div className="tw-flex tw-items-center">
                    <span className="tw-mr-2">90%</span>
                    <div className="tw-relative tw-w-full">
                      <div className="tw-overflow-hidden tw-h-2 tw-text-xs tw-flex tw-rounded tw-bg-teal-200">
                        <div
                          style={{ width: "90%" }}
                          className="tw-shadow-none tw-flex tw-flex-col tw-text-center tw-whitespace-nowrap tw-text-white tw-justify-center tw-bg-teal-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-hitespace-nowrap tw-p-4 tw-text-right">
                  {/* <TableDropdown /> */}
                </td>
              </tr>
              <tr>
                <th className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4 tw-ext-left tw-flex tw-items-center">
                  <img
                    src="/img/vue.jpg"
                    className="tw-h-12 tw-w-12 tw-bg-white tw-rounded-full tw-border"
                    alt="..."
                  ></img>{" "}
                  <span
                    className={
                      "tw-ml-3 tw-font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    React Material Dashboard
                  </span>
                </th>
                <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-order-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                  $2,200 USD
                </td>
                <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                  <i className="tw-fas tw-fa-circle tw-text-emerald-500 tw-mr-2"></i>{" "}
                  completed
                </td>
                <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                  <div className="flex">
                    <img
                      src="/img/team-1-800x800.jpg"
                      alt="..."
                      className="tw-w-10 tw-h-10 tw-rounded-full tw-border-2 tw-border-blueGray-50 tw-shadow"
                    ></img>
                    <img
                      src="/img/team-2-800x800.jpg"
                      alt="..."
                      className="tw-w-10 tw-h-10 tw-rounded-full tw-border-2 tw-border-blueGray-50 tw-shadow tw--ml-4"
                    ></img>
                    <img
                      src="/img/team-3-800x800.jpg"
                      alt="..."
                      className="tw-w-10 tw-h-10 tw-rounded-full tw-border-2 tw-border-blueGray-50 tw-shadow tw--ml-4"
                    ></img>
                    <img
                      src="/img/team-4-470x470.png"
                      alt="..."
                      className="tw-w-10 tw-h-10 tw-rounded-full tw-border-2 tw-border-blueGray-50 tw-shadow tw--ml-4"
                    ></img>
                  </div>
                </td>
                <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                  <div className="tw-flex tw-items-center">
                    <span className="tw-mr-2">100%</span>
                    <div className="tw-relative tw-w-full">
                      <div className="tw-overflow-hidden tw-h-2 tw-text-xs tw-flex tw-rounded tw-bg-emerald-200">
                        <div
                          style={{ width: "100%" }}
                          className="tw-shadow-none tw-flex tw-flex-col tw-text-center tw-whitespace-nowrap tw-text-white tw-justify-center tw-bg-emerald-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4 tw-text-right">
                  {/* <TableDropdown /> */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
ListCharacter.layout = "admin";
ListCharacter.defaultProps = {
  color: "light",
};

ListCharacter.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
export default ListCharacter;
