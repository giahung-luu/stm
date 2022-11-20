import {useState, useEffect} from "react";
import { getQuestions } from "../services/listQuestion";
import shuffle from "../lib/shuffle";

function Arena({questions}) {
  const [current, setCurrent] = useState(0);
  const [cQuestion, setCQuestion] = useState(questions[0]);
  useEffect(()=>{
    setCQuestion(questions[current])
  },[current])
  const nextQuestion = (e) => {
    if(current <questions.length - 1 )
     setCurrent((prev)=>prev+1);
  }
  const previousQuestion = (e) => {
    if(current > 0 )
     setCurrent((prev)=>prev-1);
  }
  return (
    <div className="Arena">
      <h2 className="tw-text-center">Arena</h2>
      <div className="tw-container tw-mt-5">
        <div className="tw-flex tw-justify-center row">
          <div className="col-md-12 col-lg-12">
            <div className="tw-border">
              <div className="question tw-bg-gray-700 tw-p-3 border-bottom">
                <div className="tw-flex flex-row tw-justify-between tw-items-center mcq tw-text-white">
                  <h4>MCQ Quiz</h4>
                  <span>({questions.indexOf(cQuestion)+1} of {questions.length})</span>
                </div>
              </div>
              <div className="question tw-bg-gray-600 tw-p-3 border-bottom">
                <div className="tw-flex flex-row tw-items-center question-title">
                  <h3 className="text-danger">Q.</h3>
                  <h5 className="tw-mt-1 tw-ml-2">
                    {cQuestion.title}
                  </h5>
                </div>
                {
                  cQuestion.list_answer.map((answer, index)=>(
                    <div className="ans ml-2" key={index}>
                  <label className="radio">
                    {" "}
                    <input type="radio" name="brazil" value="a" />{" "}
                    <span className="tw-text-white">
                      {answer}
                    </span>
                  </label>
                </div>
                  ))
                }
              </div>
              <div className="tw-flex flex-row tw-justify-between tw-items-center p-3 tw-bg-gray-700">
                <button
                  className="btn btn-primary tw-flex tw-items-center btn-danger tw-text-red-600 hover:tw-text-white"
                  type="button"
                  onClick={previousQuestion}
                >
                  <i className="fa fa-angle-left mt-1 tw-mr-1 "></i>previous
                </button>
                {current !== questions.length - 1 ? (<button
                  className="btn btn-primary tw-flex tw-items-center btn-success tw-text-green-600 hover:tw-text-white"
                  type="button"
                  onClick={nextQuestion}
                >
                  Next<i className="fa fa-angle-right tw-ml-2"></i>
                </button>):
                (<button
                  className="btn btn-primary tw-flex tw-items-center btn-success tw-text-green-600 hover:tw-text-white"
                  type="button"
                >
                  Submit
                </button>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Arena.layout = "default";
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
export default Arena;
