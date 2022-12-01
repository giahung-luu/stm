import { useState, useEffect } from "react";
import { getQuestions } from "../../services/listQuestion";

function ArenaByCharacter({ questions }) {
  const [current, setCurrent] = useState(0);
  const [cQuestion, setCQuestion] = useState(questions[0]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    setCQuestion(questions[current]);
  }, [current]);

  const handleChooseAnswer = (index) => {
    const compare = ["a", "b", "c", "d"];
    if (compare[index] == cQuestion.right_answer) setScore((prev) => prev + 1);
    const nextQuestion = cQuestion + 1;
    if (current < questions.length - 1) setCurrent((prev) => prev + 1);
    else {
      setShowScore(true);
    }
  };
  return (
    <div className="Arena">
      <h2 className="tw-text-center"></h2>
      <div className="tw-container tw-mt-5">
        <div className="tw-flex tw-justify-center row">
          <div className="col-md-12 col-lg-12">
            <div className="tw-border">
              <div className="question tw-bg-gray-700 tw-p-3 border-bottom">
                <div className="tw-flex flex-row tw-justify-between tw-items-center mcq tw-text-white">
                  <h4>MCQ Quiz</h4>
                  {!showScore && (
                    <span>
                      ({questions.indexOf(cQuestion) + 1} of {questions.length})
                    </span>
                  )}
                </div>
              </div>
              <div className="question tw-bg-gray-600 tw-p-3 border-bottom">
                {showScore ? (
                  <div className="tw-text-white tw-text-center">
                    Your score is{" "}
                    <span className="tw-text-[#e75e8d]">{score}</span> out of{" "}
                    {questions.length}
                  </div>
                ) : (
                  <>
                    <div className="tw-flex flex-row tw-items-center question-title">
                      <h3 className="text-danger">Q.</h3>
                      <h5 className="tw-mt-1 tw-ml-2">{cQuestion.title}</h5>
                    </div>
                    <div className="tw-grid tw-grid-cols-2 tw-gap-6 tw-mt-7">
                      {cQuestion.list_answer.map((answer, index) => (
                        <button
                          className="tw-col-span-1 tw-border-2 tw-border-[#e75e8d] tw-rounded-md tw-py-4 tw-px-6 tw-bg-[#e75e8d] tw-text-white hover:tw-text-[#e75e8d] hover:tw-bg-transparent tw-transition-colors tw-duration-300 tw-ease-in-out first-letter:tw-uppercase"
                          key={index}
                          onClick={() => handleChooseAnswer(index)}
                        >
                          {answer}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
              <div className="tw-flex flex-row tw-justify-between tw-items-center p-3 tw-bg-gray-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
ArenaByCharacter.layout = "default";
export async function getStaticProps() {
  const questions = await getQuestions();
  if (!questions) {
    return {
      notFound: true,
    };
  }
  return {
    props: { questions },
  };
}
export default ArenaByCharacter;
