import React, { useState, useEffect, useRef } from "react";
import Head from 'next/head.js';
import { getNodes } from "../../../services/nodeService";
import { node } from "prop-types";
var mind = {
    meta: {
        name: 'mindmap',
        author: '',
        version: '1.0',
    },
    format: 'node_array',
    data: [
        { id: 'root', isroot: true, topic: 'Lịch sử 12' }
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

function EditMindMap({ nodes }) {
    //------------------------------------------------------------------//
    const jm = useRef();
    useEffect(() => {
        jm.current = new window.jsMind(options);
        jm.current.show(mind);
        var parent_array = ["root"];
        for (let index = 0; index < nodes.length; index++) {
          if (parent_array.includes(nodes[index].parent_id)) {
            // Add node
            var linkurl = '/post/' + nodes[index].id;
            jm.current.add_node(nodes[index].parent_id, nodes[index].root_id, nodes[index].topic, {
              'linkurl': linkurl
            });
            // Add parent
            parent_array.push(nodes[index].root_id);
            // Pop nodes
            nodes.splice(index, 1);
            index = -1;
            console.log(nodes.length + " " + index);
          }
        }
        jm.current.pause_click_handle();
    });
    const get_nodearray_data = () => {
        var mind_data = jm.current.get_data('node_array');
        var mind_string = jsMind.util.json.json2string(mind_data);
        prompt_info(mind_string);
    }
    const save_nodearray_file = () => {
        var mind_data = jm.current.get_data('node_array');
        var mind_name = mind_data.meta.name;
        var mind_str = jsMind.util.json.json2string(mind_data);
        jsMind.util.file.save(mind_str, 'text/jsmind', mind_name + '.jm');
    }
    return (
        <>
            <Head>
                <link rel="stylesheet" href="../css/edit_mindmap.css" />
                <script type="text/javascript" src="../js/jsmind.js"></script>
                <script type="text/javascript" src="../js/jsmind.draggable-node.js"></script>
                <script type="text/javascript" src="../js/jsmind.screenshot.js"></script>
            </Head>
            <style jsx>{`
                button {
                color: blue;
                }
            `}</style>
            <div id="layout">
                <div id="jsmind_nav">
                    <table>
                        <tbody>
                            <tr>
                                <td>1. Open</td>
                                <td><button onclick="open_json();">open example</button></td>
                            </tr>
                            <tr>
                                <td>2.Select</td>
                                <td><button onclick="show_selected();">get the selected</button></td>
                            </tr>
                            <tr>
                                <td>3.Edit</td>
                                <td><button onclick="toggle_editable(this);">disable editable</button></td>
                                <td><button onclick="add_node();">add a node</button></td>
                                <td><button onclick="modify_node();">modify node</button></td>
                                <td><button onclick="remove_node();">remove node</button></td>
                            </tr>
                            <tr><td>Multi format</td>
                                <td><button class="sub" onClick={() => get_nodearray_data()}>show data</button></td>
                                <td><button class="sub" onClick={() => save_nodearray_file()}>save file</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="jsmind_container"></div>
            </div>
        </>
    )
}
EditMindMap.layout = "admin";

export default EditMindMap;
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

function show_data() {
    var mind_data = _jm.get_data();
    var mind_string = jsMind.util.json.json2string(mind_data);
    prompt_info(mind_string);
}

function save_file() {
    var mind_data = _jm.get_data();
    var mind_name = mind_data.meta.name;
    var mind_str = jsMind.util.json.json2string(mind_data);
    jsMind.util.file.save(mind_str, 'text/jsmind', mind_name + '.jm');
}

function show_selected() {
    var selected_node = _jm.get_selected_node();
    if (!!selected_node) {
        prompt_info(selected_node.topic);
    } else {
        prompt_info('nothing');
    }
}
function get_selected_nodeid() {
    var selected_node = _jm.get_selected_node();
    if (!!selected_node) {
        return selected_node.id;
    } else {
        return null;
    }
}

function add_node() {
    var selected_node = _jm.get_selected_node(); // as parent of new node
    if (!selected_node) {
        prompt_info('please select a node first.');
        return;
    }

    var nodeid = jsMind.util.uuid.newid();
    var topic = '* Node_' + nodeid.substr(nodeid.length - 6) + ' *';
    var node = _jm.add_node(selected_node, nodeid, topic);
}

function modify_node() {
    var selected_id = get_selected_nodeid();
    if (!selected_id) {
        prompt_info('please select a node first.');
        return;
    }

    // modify the topic
    _jm.update_node(selected_id, '--- modified ---');
}

function remove_node() {
    var selected_id = get_selected_nodeid();
    if (!selected_id) {
        prompt_info('please select a node first.');
        return;
    }

    _jm.remove_node(selected_id);
}
function toggle_editable(btn) {
    var editable = _jm.get_editable();
    if (editable) {
        _jm.disable_edit();
        btn.innerHTML = 'enable editable';
    } else {
        _jm.enable_edit();
        btn.innerHTML = 'disable editable';
    }
}
function prompt_info(msg) {
    alert(msg);
}
