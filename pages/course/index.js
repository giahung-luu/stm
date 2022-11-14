import React from "react";
import Link from "next/link";

function Course() {
  return (
    <div>
      <Link href="/course/dbp">dien bien phu </Link>
    </div>
  );
}
Course.layout = "default";
export default Course;
