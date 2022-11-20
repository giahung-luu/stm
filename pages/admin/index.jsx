import React, { useEffect } from "react";
import {
  CardLineChart,
  CardBarChart,
  CardPageVisits,
  CardSocialTraffic,
} from "../../components";
import { auth } from "../../lib/firebase";

function Admin() {
  useEffect(() => {
    console.log(auth.currentUser);
  }, []);
  return (
    <>
      <div className="tw-flex tw-flex-wrap"></div>
    </>
  );
}
Admin.layout = "admin";
export default Admin;
