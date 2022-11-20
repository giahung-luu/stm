import React from "react";
import PropTypes from "prop-types";

export default function CardStats({
  statSubtitle,
  statTitle,
  statArrow,
  statPercent,
  statPercentColor,
  statDescripiron,
  statIconName,
  statIconColor,
}) {
  return (
    <>
      <div className="tw-relative tw-flex tw-flex-col tw-min-w-0 tw-break-words tw-bg-white tw-rounded tw-mb-6 xl:tw-mb-0 tw-shadow-lg">
        <div className="tw-flex-auto tw-p-4">
          <div className="tw-flex tw-flex-wrap">
            <div className="tw-relative tw-w-full tw-pr-4 tw-max-w-full tw-flex-grow tw-flex-1">
              <h5 className="tw-text-blueGray-400 tw-uppercase tw-font-bold tw-text-xs">
                {statSubtitle}
              </h5>
              <span className="tw-font-semibold tw-text-xl tw-text-blueGray-700">
                {statTitle}
              </span>
            </div>
            <div className="tw-relative tw-w-auto tw-pl-4 tw-flex-initial">
              <div
                className={
                  "tw-text-white tw-p-3 tw-text-center tw-inline-flex tw-items-center tw-justify-center tw-w-12 tw-h-12 tw-shadow-lg tw-rounded-full " +
                  statIconColor
                }
              >
                <i className={statIconName}></i>
              </div>
            </div>
          </div>
          <p className="tw-text-sm tw-text-blueGray-400 tw-mt-4">
            <span className={statPercentColor + " tw-mr-2"}>
              <i
                className={
                  statArrow === "up"
                    ? "fas fa-arrow-up"
                    : statArrow === "down"
                    ? "fas fa-arrow-down"
                    : ""
                }
              ></i>{" "}
              {statPercent}%
            </span>
            <span className="tw-whitespace-nowrap">{statDescripiron}</span>
          </p>
        </div>
      </div>
    </>
  );
}

CardStats.defaultProps = {
  statSubtitle: "Traffic",
  statTitle: "350,897",
  statArrow: "up",
  statPercent: "3.48",
  statPercentColor: "text-emerald-500",
  statDescripiron: "Since last month",
  statIconName: "far fa-chart-bar",
  statIconColor: "bg-red-500",
};

CardStats.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statArrow: PropTypes.oneOf(["up", "down"]),
  statPercent: PropTypes.string,
  // can be any of the text color utilities
  // from tailwindcss
  statPercentColor: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: PropTypes.string,
};
