import { useState, useEffect } from "react";

function Result({ answers }) {
  const compare = ["a", "b", "c", "d"];
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (answers) {
      const ans = JSON.parse(answers);
      const rightAnswers = ans.filter(
        (ans) => compare[ans.choose] === ans.right_answer
      );
      // score = total right answers point
      setScore(rightAnswers.reduce((acc, cur) => acc + parseInt(cur.point), 0));
    }
  }, [answers]);
  console.log(JSON.parse(answers));
  return (
    <div>
      <h1>Result</h1>
      <p>
        Your score is: <span className="tw-text-[#e75e8d]">{score}</span>
      </p>
      <div className="">
        {answers &&
          JSON.parse(answers).map((ans) => (
            <div key={ans.id}>
              <p className="tw-text-white">
                {ans.title}{" "}
                <span className="tw-text-[#e75e8d]">({ans.point} points)</span>
              </p>
              <ul className="tw-ml-6">
                {ans.list_answer.map((answer, index) => (
                  <li
                    key={index}
                    className={`tw-text-white ${
                      ans.choose === index ? "tw-text-[#e75e8d]" : ""
                    }`}
                  >
                    <p className="tw-flex">
                      {ans.choose === index ? (
                        <span className="tw-text-[#e75e8d]">{answer}</span>
                      ) : (
                        answer
                      )}
                      {ans.right_answer === compare[index] ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="tw-w-6 w-h-6 tw-text-green-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="tw-w-6 tw-h-6 tw-text-red-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}
Result.layout = "default";
export function getServerSideProps(context) {
  const { query } = context;
  const { answers } = query;
  return {
    props: {
      answers,
    },
  };
}
export default Result;
