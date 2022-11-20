import React from "react";

// components

import CardStats from "../Cards/Stats";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="tw-relative tw-bg-blueGray-800 md:tw-pt-32 tw-pb-32 tw-pt-12">
        <div className="tw-px-4 md:tw-px-10 tw-mx-auto tw-w-full">
          <div>
            {/* Card stats */}
            <div className="tw-flex tw-flex-wrap">
              <div className="tw-w-full lg:tw-w-6/12 xl:tw-w-3/12 tw-px-4">
                <CardStats
                  statSubtitle="TRAFFIC"
                  statTitle="350,897"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="tw-text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="tw-bg-red-500"
                />
              </div>
              <div className="tw-w-full lg:tw-w-6/12 xl:tw-w-3/12 tw-px-4">
                <CardStats
                  statSubtitle="NEW USERS"
                  statTitle="2,356"
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="tw-text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="tw-bg-orange-500"
                />
              </div>
              <div className="tw-w-full lg:tw-w-6/12 xl:tw-w-3/12 tw-px-4">
                <CardStats
                  statSubtitle="SALES"
                  statTitle="924"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="tw-text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="tw-bg-pink-500"
                />
              </div>
              <div className="tw-w-full lg:tw-w-6/12 xl:tw-w-3/12 tw-px-4">
                <CardStats
                  statSubtitle="PERFORMANCE"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="tw-text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="tw-bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
