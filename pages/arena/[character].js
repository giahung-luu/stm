import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getQuestionsByIdCharacter } from "../../services/listQuestion";

function ArenaByCharacter({ params }) {
  const { character } = params;
  const router = useRouter();

  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [cQuestion, setCQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [choose, setChoose] = useState();

  useEffect(() => {
    if (character) {
      getQuestionsByIdCharacter(character).then((res) => {
        if (questions.length === 0) {
          setQuestions(res);
        }
        if (answers.length === 0) {
          setAnswers(res);
        }
        setCQuestion(res[0]);
      });
    }
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      setCQuestion(questions[current]);
    }
    setChoose(null);
  }, [current]);

  const handleChooseAnswer = (index) => {
    const compare = ["a", "b", "c", "d"];
    setChoose(compare[index]);
    const newAnswers = answers.map((ans) => {
      if (ans.id === cQuestion.id) {
        ans.choose = index;
      }
      return ans;
    });
    setAnswers(newAnswers);

    if (current < questions.length - 1) {
      setCurrent((prev) => prev + 1);
    } else {
      router.push({
        pathname: "/arena/result",
        query: {
          answers: JSON.stringify(answers),
        },
      });
    }
  };

  return (
    <div className="Arena">
      <div className="tw-container tw-mt-5">
        <div className="tw-flex tw-justify-center row">
          {questions.length > 0 ? (
            <div className="col-md-12 col-lg-12">
              <div className="tw-border">
                <div className="question tw-bg-gray-700 tw-p-3 border-bottom">
                  <div className="tw-flex flex-row tw-justify-between tw-items-center mcq tw-text-white">
                    <h4>MCQ Quiz</h4>
                  </div>
                </div>
                <div className="question tw-bg-gray-600 tw-p-3 border-bottom">
                  <div className="tw-flex flex-row tw-items-center question-title">
                    <h3 className="text-danger">Q.</h3>
                    <h5 className="tw-mt-1 tw-ml-2">{cQuestion.title}</h5>
                  </div>
                  <div className="tw-grid tw-grid-cols-2 tw-gap-6 tw-mt-7">
                    {cQuestion.length !== 0 &&
                      cQuestion?.list_answer.map((answer, index) => (
                        <button
                          className="tw-col-span-1 tw-border-2 tw-border-[#e75e8d] tw-rounded-md tw-py-4 tw-px-6 tw-bg-[#e75e8d] tw-text-white hover:tw-text-[#e75e8d] hover:tw-bg-transparent tw-transition-colors tw-duration-300 tw-ease-in-out first-letter:tw-uppercase"
                          key={index}
                          onClick={() => handleChooseAnswer(index)}
                        >
                          {answer}
                        </button>
                      ))}
                  </div>
                </div>
                <div className="tw-flex flex-row tw-justify-between tw-items-center p-3 tw-bg-gray-700" />
              </div>
            </div>
          ) : (
            <div className="tw-flex tw-justify-center tw-items-center">
              <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
                <div className="tw-flex tw-justify-center tw-items-center tw-w-12 tw-h-12 tw-rounded-full tw-bg-[#e75e8d]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="tw-h-6 tw-w-6 tw-text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="tw-text-white tw-text-2xl tw-mt-3">
                  Not Found Questions
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
ArenaByCharacter.layout = "default";
export function getServerSideProps(context) {
  return {
    props: { params: context.params },
  };
}
export default ArenaByCharacter;
