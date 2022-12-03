import { useState, useEffect } from "react";
import {
  getQuestionById,
  updateQuestion,
} from "../../../../services/listQuestion";
import { getCharacters } from "../../../../services/characterService";
import { notify } from "../../../../components";

function EditQuestion({ params }) {
  const { id } = params;
  const [question, setQuestion] = useState({});
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (id) {
      getQuestionById(id).then((res) => {
        setQuestion(res[0]);
      });
      getCharacters().then((res) => {
        setCharacters(res);
      });
    }
  }, [id]);

  const handleUpdateQuestion = (e) => {
    e.preventDefault();
    const {
      character,
      title,
      point,
      a_answer,
      b_answer,
      c_answer,
      d_answer,
      right_answer,
    } = e.target;
    if (!character.value) {
      alert("Vui lòng chọn nhân vật cho câu hỏi!");
    } else if (!right_answer.value) {
      alert("Vui lòng chọn đáp án đúng cho câu hỏi!");
    } else {
      const result = updateQuestion(
        id,
        character.value,
        title.value,
        point.value,
        [a_answer.value, b_answer.value, c_answer.value, d_answer.value],
        right_answer.value
      );
      if (result) {
        notify("Cập nhật câu hỏi thành công", "success");
      } else {
        notify("Cập nhật câu hỏi thất bại", "error");
      }
    }
  };

  return (
    <>
      <div className="tw-relative tw-flex tw-flex-col tw-min-w-0 tw-break-words tw-w-full tw-b-6 tw-shadow-lg tw-rounded tw-bg-white">
        <div className="tw-rounded-t tw-mb-0 tw-px-4 tw-py-3 tw-border-0">
          <div className="tw-flex tw-flex-wrap tw-items-center tw-justify-between">
            <div className="tw-relative tw-w-full tw-px-4 tw-max-w-full tw-flex-grow tw-flex-1">
              <h3 className="tw-font-semibold tw-text-lg tw-text-blueGray-700">
                Edit Question
              </h3>
            </div>
          </div>
        </div>

        {question.id && (
          <form
            className="tw-border-0 tw-rounded-lg tw-shadow-lg tw-relative tw-flex tw-flex-col tw-w-full tw-bg-white tw-outline-none tw-focus:outline-none"
            onSubmit={handleUpdateQuestion}
          >
            {/*body*/}
            <div className="tw-relative tw-p-6 tw-flex-auto">
              <div>
                <label htmlFor="character" className="tw-mr-4">
                  Nhân vật
                </label>
                <select
                  name="character"
                  id="character"
                  className="tw-p-2 tw-ml-4"
                  defaultValue={question.character}
                >
                  {characters?.map((item, index) => (
                    <option value={item.id} key={index}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <label htmlFor="title" className="tw-block">
                  Title
                </label>
                <textarea
                  name="title"
                  rows="4"
                  className="tw-px-2 tw-py-1 tw-placeholder-blueGray-300 tw-text-blueGray-600 tw-relative tw-bg-white tw-rounded tw-text-sm tw-border tw-border-blueGray-300 tw-outline-none focus:tw-outline-none focus:tw-shadow-outline tw-w-full"
                  required={true}
                  defaultValue={question.title}
                />
              </div>
              <div>
                <label htmlFor="point" className="tw-block">
                  Point
                </label>
                <input
                  type="number"
                  name="point"
                  className="tw-px-2 tw-py-1 tw-placeholder-blueGray-300 tw-text-blueGray-600 tw-relative tw-bg-white tw-rounded tw-text-sm tw-border tw-border-blueGray-300 tw-outline-none focus:tw-outline-none focus:tw-shadow-outline tw-w-full"
                  required={true}
                  defaultValue={question.point}
                />
              </div>
              <div>
                <label>List answer</label>
                <div className="tw-flex tw-mb-2 tw-items-center">
                  <span className="tw-mr-2">A</span>
                  <input
                    type="text"
                    name="a_answer"
                    className="tw-px-2 tw-py-1 tw-placeholder-blueGray-300 tw-text-blueGray-600 tw-relative tw-bg-white tw-rounded tw-text-sm tw-border tw-border-blueGray-300 tw-outline-none focus:tw-outline-none focus:tw-shadow-outline tw-flex-grow"
                    required={true}
                    defaultValue={question?.list_answer[0]}
                  />
                  <input
                    type="radio"
                    name="right_answer"
                    value="a"
                    className="tw-ml-2"
                    defaultChecked={question.right_answer === "a"}
                  />
                </div>
                <div className="tw-flex tw-mb-2 tw-items-center">
                  <span className="tw-mr-2">B</span>
                  <input
                    type="text"
                    name="b_answer"
                    className="tw-px-2 tw-py-1 tw-placeholder-blueGray-300 tw-text-blueGray-600 tw-relative tw-bg-white tw-rounded tw-text-sm tw-border tw-border-blueGray-300 tw-outline-none focus:tw-outline-none focus:tw-shadow-outline tw-flex-grow"
                    required={true}
                    defaultValue={question?.list_answer[1]}
                  />
                  <input
                    type="radio"
                    name="right_answer"
                    value="b"
                    className="tw-ml-2"
                    defaultChecked={question.right_answer === "b"}
                  />
                </div>
                <div className="tw-flex tw-mb-2 tw-items-center">
                  <span className="tw-mr-2">C</span>
                  <input
                    type="text"
                    name="c_answer"
                    className="tw-px-2 tw-py-1 tw-placeholder-blueGray-300 tw-text-blueGray-600 tw-relative tw-bg-white tw-rounded tw-text-sm tw-border tw-border-blueGray-300 tw-outline-none focus:tw-outline-none focus:tw-shadow-outline tw-flex-grow"
                    required={true}
                    defaultValue={question?.list_answer[2]}
                  />
                  <input
                    type="radio"
                    name="right_answer"
                    value="c"
                    className="tw-ml-2"
                    defaultChecked={question.right_answer === "c"}
                  />
                </div>
                <div className="tw-flex tw-mb-2 tw-items-center">
                  <span className="tw-mr-2">D</span>
                  <input
                    type="text"
                    name="d_answer"
                    className="tw-px-2 tw-py-1 tw-placeholder-blueGray-300 tw-text-blueGray-600 tw-relative tw-bg-white tw-rounded tw-text-sm tw-border tw-border-blueGray-300 tw-outline-none focus:tw-outline-none focus:tw-shadow-outline tw-flex-grow"
                    required={true}
                    defaultValue={question?.list_answer[3]}
                  />
                  <input
                    type="radio"
                    name="right_answer"
                    value="d"
                    className="tw-ml-2"
                    defaultChecked={question.right_answer === "d"}
                  />
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="tw-flex tw-items-center tw-justify-end tw-p-6 tw-border-t tw-border-solid tw-border-blueGray-200 tw-rounded-b">
              <button
                className="tw-bg-lightBlue-500 tw-text-white active:tw-bg-emerald-600 tw-font-bold tw-uppercase tw-text-sm tw-px-6 tw-py-2 tw-rounded tw-shadow hover:tw-shadow-lg tw-outline-none focus:tw-outline-none tw-mr-1 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
EditQuestion.layout = "admin";
export async function getServerSideProps(context) {
  return {
    props: { params: context.params },
  };
}
export default EditQuestion;
