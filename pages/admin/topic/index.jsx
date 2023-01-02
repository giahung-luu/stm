import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {getTopic} from "../../../services/topicService";
function EditTopic({ topics }) {
    return (
        <>
            <div className="tw-relative tw-flex tw-flex-col tw-min-w-0 tw-break-words tw-w-full tw-b-6 tw-shadow-lg tw-rounded tw-bg-white">
                <div className="tw-rounded-t tw-mb-0 tw-px-4 tw-py-3 tw-border-0">
                    <div className="tw-flex tw-flex-wrap tw-items-center tw-justify-between">
                        <div className="tw-relative tw-w-full tw-px-4 tw-max-w-full tw-flex-grow tw-flex-1">
                            <h3 className="tw-font-semibold tw-text-lg tw-text-blueGray-700">
                                Topic
                            </h3>
                            <div className="tw-block tw-w-full tw-overflow-x-auto">
                                <table className="tw-items-center tw-w-full tw-bg-transparent tw-border-collapse">
                                    <thead>
                                        <tr>
                                            <th
                                                className="tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                                STT
                                            </th>
                                            <th
                                                className="tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                                Topic
                                            </th>
                                            <th
                                                className="tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                                Nội dung
                                            </th>
                                            <th
                                                className="tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                                Hình ảnh
                                            </th>
                                            <th
                                                className="tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                                Video
                                            </th>
                                            <th
                                                className="tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <>
                                            {topics?.map((item, index) => (
                                                <tr key={item.id}>
                                                    <th className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs whitespace-nowrap p-4 text-left flex items-center">
                                                        {index + 1}
                                                    </th>
                                                    <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-p-4">
                                                        {item.topic}
                                                    </td>
                                                    <td className="w-1 tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-p-4">
                                                        {item.content?.map((con) => (
                                                            <li>{con}</li>
                                                        ))}
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                                                        <div className="tw-flex tw-justify-center tw-items-center">
                                                            <Link href={`/admin/topic/edit/${item.id}`}>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={1.5}
                                                                    stroke="currentColor"
                                                                    className="tw-w-6 tw-h-6"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                                                    />
                                                                </svg>
                                                            </Link>
                                                            {/* <button
                                                                onClick={() => handleRemoveTopic(item.id)}
                                                                className="hover:tw-text-red-600"
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={1.5}
                                                                    stroke="currentColor"
                                                                    className="tw-w-6 tw-h-6"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                                    />
                                                                </svg>
                                                            </button> */}
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export async function getStaticProps() {
    const topics = await getTopic();
    if (!topics) {
        return {
            notFound: true,
        };
    }
    return {
        props: { topics },
    };
}

EditTopic.layout = "admin";
export default EditTopic;

