import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { addQuestion, getQuestions } from "../../../services/listQuestion";

function ListQuestion({ color }) {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const handleAddQuestion = (e) => {
    e.preventDefault();
    const {
      title,
      point,
      a_answer,
      b_answer,
      c_answer,
      d_answer,
      right_answer,
    } = e.target;
    const result = addQuestion(
      title.value,
      point.value,
      [a_answer.value, b_answer.value, c_answer.value, d_answer.value],
      right_answer.value
    );
    if (result) {
      console.log("complete");
    } else {
    }
  };

  useEffect(() => {
    const getData = getQuestions();
    console.log(getData);
  }, []);
  return (
    <>
      <div
        className={
          "tw-relative tw-flex tw-flex-col tw-min-w-0 tw-break-words tw-w-full tw-b-6 tw-shadow-lg tw-rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="tw-rounded-t tw-mb-0 tw-px-4 tw-py-3 tw-border-0">
          <div className="tw-flex tw-flex-wrap tw-items-center tw-justify-between">
            <div className="tw-relative tw-w-full tw-px-4 tw-max-w-full tw-flex-grow tw-flex-1">
              <h3
                className={
                  "tw-font-semibold tw-text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Questions
              </h3>
            </div>
            <button
              className="tw-py-1 tw-px-4 tw-bg-lightBlue-500 tw-text-white tw-rounded-lg"
              onClick={() => setShowModal(true)}
            >
              Add question
            </button>
          </div>
        </div>
        {showModal ? (
          <>
            <div className="tw-justify-center tw-items-center tw-flex tw-overflow-x-hidden tw-overflow-y-auto tw-fixed tw-inset-0 tw-z-50 tw-outline-none tw-focus:outline-none">
              <div className="tw-relative tw-w-auto tw-my-6 tw-mx-auto tw-max-w-3xl">
                {/*content*/}
                <form
                  className="tw-border-0 tw-rounded-lg tw-shadow-lg tw-relative tw-flex tw-flex-col tw-w-full tw-bg-white tw-outline-none tw-focus:outline-none"
                  onSubmit={handleAddQuestion}
                >
                  {/*header*/}
                  <div className="tw-flex tw-items-start tw-justify-between tw-p-5 tw-border-b tw-border-solid tw-border-blueGray-200 tw-rounded-t">
                    <h3 className="tw-text-3xl tw-font-semibold">
                      Add question
                    </h3>
                    <button
                      className="tw-p-1 tw-ml-auto tw-bg-transparent tw-border-0 tw-text-black tw-float-right tw-text-3xl tw-leading-none tw-font-semibold tw-outline-none focus:tw-outline-none"
                      onClick={() => setShowModal(false)}
                      type="button"
                    >
                      <span className="tw-text-black tw-h-6 tw-w-6 tw-text-2xl tw-block tw-outline-none focus:tw-outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="tw-relative tw-p-6 tw-flex-auto">
                    <div>
                      <label htmlFor="">Title</label>
                      <input type="text" name="title" />
                    </div>
                    <div>
                      <label htmlFor="">Point</label>
                      <input type="number" name="point" />
                    </div>
                    <div>
                      <label>List answer</label>
                      <div className="tw-flex">
                        <span>A</span>
                        <input type="text" name="a_answer" className="border" />
                        <input type="radio" name="right_answer" value="a" />
                      </div>
                      <div className="tw-flex">
                        <span>B</span>
                        <input type="text" name="b_answer" className="border" />
                        <input type="radio" name="right_answer" value="b" />
                      </div>
                      <div className="tw-flex">
                        <span>C</span>
                        <input type="text" name="c_answer" className="border" />
                        <input type="radio" name="right_answer" value="c" />
                      </div>
                      <div className="tw-flex">
                        <span>D</span>
                        <input type="text" name="d_answer" className="border" />
                        <input type="radio" name="right_answer" value="d" />
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="tw-flex tw-items-center tw-justify-end tw-p-6 tw-border-t tw-border-solid tw-border-blueGray-200 tw-rounded-b">
                    <button
                      className="tw-text-red-500 tw-background-transparent tw-font-bold tw-uppercase tw-px-6 tw-py-2 tw-text-sm tw-outline-none focus:tw-outline-none tw-mr-1 tw-mb-1 tw-ease-linear tw-tw-transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="tw-bg-emerald-500 tw-text-white active:tw-bg-emerald-600 tw-font-bold tw-uppercase tw-text-sm tw-px-6 tw-py-3 tw-rounded tw-shadow hover:tw-shadow-lg tw-outline-none focus:tw-outline-none tw-mr-1 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150"
                      type="submit"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="tw-opacity-25 tw-fixed tw-inset-0 tw-z-40 tw-bg-black"></div>
          </>
        ) : null}
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
                  STT
                </th>
                <th
                  className={
                    "tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Title
                </th>
                <th
                  className={
                    "tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Point
                </th>
                <th
                  className={
                    "tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Right Answer
                </th>

                <th
                  className={
                    "tw-px-6 tw-align-middle tw-border tw-border-solid tw-py-3 tw-text-xs tw-uppercase tw-border-l-0 tw-border-r-0 tw-whitespace-nowrap tw-font-semibold tw-text-left " +
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
                <th className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs whitespace-nowrap p-4 text-left flex items-center">
                  1
                </th>
                <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-p-4">
                  Nguyên thủ những nước nào sau đây tham dự Hội nghị Ianta
                  (2/1945)?
                </td>
                <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                  5
                </td>
                <td className="tw-border-t-0 tw-px-6 tw-align-middle tw-border-l-0 tw-border-r-0 tw-text-xs tw-whitespace-nowrap tw-p-4">
                  <span className="tw-font-bold tw-text-center">B</span>
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
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

ListQuestion.layout = "admin";
ListQuestion.layout = "admin";
ListQuestion.defaultProps = {
  color: "light",
};

ListQuestion.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
export default ListQuestion;
