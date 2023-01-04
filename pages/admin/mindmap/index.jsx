import React, { useEffect, useRef } from "react";
import Head from 'next/head.js';
import { getNodes, addNode, editNode, deleteNode, Node } from "../../../services/nodeService";
import { addTopic, deleteTopic} from "../../../services/topicService";

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
function EditMindMap({ nodesF }) {
    //------------------------------------------------------------------//
    const jm = useRef();
    useEffect(() => {
        var nodesM = nodesF.slice()
        jm.current = new window.jsMind(options);
        jm.current.show(mind);
        var parent_array = ["root"]; // Mảng chứa node cha để đối chiếu
        for (let index = 0; index < nodesM.length; index++) {
            if (parent_array.includes(nodesM[index].parent_id)) {
                // Add node
                var linkurl = '/post/' + nodesM[index].id;
                jm.current.add_node(nodesM[index].parent_id, nodesM[index].root_id, nodesM[index].topic, {
                    'linkurl': linkurl
                });
                // Add parent
                parent_array.push(nodesM[index].root_id);
                // Pop nodes
                nodesM.splice(index, 1);
                index = -1;
            }
        }

        jm.current.pause_click_handle();
        // var nodes = jm.current.mind.nodes
        // for (var nodeid in nodes)
        //     console.log(nodes[nodeid].topic)
    });

    // Control 
    const save = () => {

    }
    const open_node = () => {
        var selected_node = jm.current.get_selected_node();
        if (!!selected_node) {
            window.open(selected_node.data.linkurl);
        } else {
            prompt_info('Vui lòng chọn node trước');
        }
    }
    const get_selected_nodeid = () => {
        var selected_node = jm.current.get_selected_node();
        if (!!selected_node) {
            return selected_node.id;
        } else {
            return null;
        }
    }
    const add_node = async () => {
        var selected_node = jm.current.get_selected_node();
        if (!selected_node) {
            prompt_info('Vui lòng chọn node trước');
            return;
        }
        var nodeid = jsMind.util.uuid.newid();
        var topic = document.querySelector('#topic').value
        if (topic == null)
            topic = '* Node_' + nodeid.substr(nodeid.length - 6) + ' *';
        jm.current.add_node(selected_node, nodeid, topic);

        var node = new Node(selected_node.id, nodeid, topic)
        var id = await addNode(node);
        addTopic(id,topic)
        nodesF.push({
            "id" : id,
            "parent_id" : selected_node.id,
            "root_id" : nodeid,
            "topic" : topic
        })
    }
    const modify_node = () => {
        const topic = document.querySelector('#topic').value
        var selected_id = get_selected_nodeid();
        if (!selected_id) {
            prompt_info('Vui lòng chọn node trước');
            return;
        }
        jm.current.update_node(selected_id, topic);
        nodesF.forEach(e => {
            if(e.root_id == selected_id)
                editNode(e.id,new Node(e.parent_id,e.root_id,topic))
        });
    }
    const remove_node = () => {
        var selected_id = get_selected_nodeid();
        if (!selected_id) {
            prompt_info('Vui lòng chọn node trước');
            return;
        }
        jm.current.remove_node(selected_id);
        nodesF.forEach(e => {
            if(e.root_id == selected_id){
                deleteNode(e.id)
                deleteTopic(e.id)
            }
        });
    }
    return (
        <>
            <Head>
                <link rel="stylesheet" href="../css/edit_mindmap.css" />
                <script type="text/javascript" src="../js/jsmind.js"></script>
                <script type="text/javascript" src="../js/jsmind.draggable-node.js"></script>
                <script type="text/javascript" src="../js/jsmind.screenshot.js"></script>
            </Head>
            <div className="tw-relative tw-flex tw-flex-col tw-min-w-0 tw-break-words tw-w-full tw-b-6 tw-shadow-lg tw-rounded tw-bg-white">
                <div id="layout">
                    <div id="jsmind_nav">
                        <ul>
                            <li id="button">
                                <button
                                    className="tw-py-1 tw-px-4 tw-bg-lightBlue-500 tw-text-white tw-rounded-lg hover:tw-text-lightBlue-500 hover:tw-bg-white tw-border tw-border-lightBlue-500"
                                    onClick={() => add_node()}>
                                    Thêm node
                                </button>
                            </li>
                            <li id="button">
                                <button
                                    className="tw-py-1 tw-px-4 tw-bg-lightBlue-500 tw-text-white tw-rounded-lg hover:tw-text-lightBlue-500 hover:tw-bg-white tw-border tw-border-lightBlue-500"
                                    onClick={() => modify_node()}>
                                    Sửa node
                                </button>
                            </li>
                            <li id="button">
                                <button
                                    className="tw-py-1 tw-px-4 tw-bg-lightBlue-500 tw-text-white tw-rounded-lg hover:tw-text-lightBlue-500 hover:tw-bg-white tw-border tw-border-lightBlue-500"
                                    onClick={() => open_node()}>
                                    Mở topic
                                </button>
                            </li>
                            <li id="button">
                                <button
                                    className="tw-py-1 tw-px-4 tw-bg-lightBlue-500 tw-text-white tw-rounded-lg hover:tw-text-lightBlue-500 hover:tw-bg-white tw-border tw-border-lightBlue-500"
                                    onClick={() => remove_node()}>
                                    Xoá node
                                </button>
                            </li>
                            <li id="button">
                                <button
                                    className="tw-py-1 tw-px-4 tw-bg-lightBlue-500 tw-text-white tw-rounded-lg hover:tw-text-lightBlue-500 hover:tw-bg-white tw-border tw-border-lightBlue-500"
                                    onClick={() => save()}>
                                    Lưu
                                </button>
                            </li>
                            <div className="tw-text-sky-800 tw-px-2">
                                Tên node
                            </div>
                            <li id="button">
                                <input className="tw-px-2 tw-py-1 tw-placeholder-blueGray-300 tw-text-blueGray-600 tw-relative tw-bg-white tw-rounded tw-text-sm tw-border tw-border-blueGray-300 tw-outline-none focus:tw-outline-none focus:tw-shadow-outline tw-w-full"
                                    type="text" name="topic" id="topic" />
                            </li>
                        </ul>
                    </div>
                    <div id="jsmind_container"></div>
                </div>
            </div>
        </>
    )
}
EditMindMap.layout = "admin";

export default EditMindMap;
export async function getStaticProps() {
    const nodesF = await getNodes();
    if (!nodesF) {
        return {
            notFound: true,
        };
    }
    return {
        props: { nodesF },
    };
}
function prompt_info(msg) {
    alert(msg);
}
