import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
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
function Mindmap({ nodes }) {
  const jm = useRef();
  useEffect(() => {
    jm.current = new window.jsMind(options);
    jm.current.show(mind);
    var parent_array = ["root"];
    for (let index = 0; index < nodes.length; index++) {
      if (parent_array.includes(nodes[index].parent_id)) {
        // Add node
        var linkurl = "/post/" + nodes[index].id;
        jm.current.add_node(
          nodes[index].parent_id,
          nodes[index].root_id,
          nodes[index].topic,
          {
            linkurl: linkurl,
          }
        );
        // Add parent
        parent_array.push(nodes[index].root_id);
        // Pop nodes
        nodes.splice(index, 1);
        index = -1;
      }
    }
    // jm.current.set_node_background_color();
    jm.current.disable_edit();
  }, []);
  return (
    <>
      <Head>
        <title>Mindmap</title>
        <link rel="stylesheet" href="./css/mindmap.css" />
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
