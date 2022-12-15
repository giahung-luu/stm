import React, { useState, useEffect, useRef } from "react";
import Head from "next/head.js";
import { getNodes } from "../services/nodeService";

var mind = {
  meta: {
    name: "mindmap",
    author: "",
    version: "1.0",
  },
  format: "node_array",
  data: [
    {
      id: "root",
      isroot: true,
      topic: "Lịch sử 12",
      linkurl: "/post/lichsu12tomtat",
    },
  ],
};
const options = {
  container: "jsmind_container",
  theme: "primary",
  editable: true,
  support_html: true,
  view: {
    draggable: true,
    hide_scrollbars_when_draggable: true,
  },
};
const styles = {
  width: "100%",
  height: "600px",
  borderRadius: "23px",
};
var mindmap;
function Mindmap({ nodes }) {
  //------------------------------------------------------------------//
  const jm = useRef();
  useEffect(() => {
    mindmap = nodes;
    console.log(mindmap);
    jm.current = new window.jsMind(options);
    jm.current.show(mind);
    // nodes.forEach(e => {
    //   if (e.parent_id == "root")
    //     jm.current.add_node(parent_id, root_id, topic);
    // });
    jm.current.add_node(
      "root",
      "root1",
      "Lịch sử thế giới hiện đại (1945-2000)"
    );
    jm.current.add_node("root", "root2", "Lịch sử Việt Nam(1919-2000)");
    // jm.current.add_node('root1', 'sub1', 'Thế chiến thứ hai', { 'linkurl': 'https://www.google.com/' });
    // jm.current.add_node('root1', 'sub5', 'Mĩ, Tây Âu, Nhật Bản (1945 - 2000)');
    // jm.current.add_node('root1', 'sub6', 'Cách mạng khoa học - công nghệ và xu thế toàn cầu hóa');
    // jm.current.add_node('root1', 'sub7', 'Mĩ, Tây Âu, Nhật Bản (1945 - 2000)');

    nodes.forEach((e) => {
      // if (e.parent_id == "root")
      jm.current.add_node(e.parent_id, e.root_id, e.topic);
    });
    // jm.current.pause_click_handle();
  });
  return (
    <>
      <Head>
        <title>Mindmap</title>
        <link rel="stylesheet" href="./css/jsmind.css" />
      </Head>
      <div className="mindmap" style={{ height: "600px" }}>
        <div id="jsmind_container" style={styles}></div>
      </div>
    </>
  );
}
export async function getStaticProps() {
  const nodes = await getNodes();
  if (!nodes) {
    return {
      notFound: true,
    };
  }
  return {
    props: { nodes },
  };
}
export default Mindmap;
Mindmap.layout = "default";
