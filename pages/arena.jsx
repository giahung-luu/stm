import React from "react";
// import styles from "./arena.css";
function Arena() {
  return (
    <div className="Arena">
      <div className="container mt-5">
        <div className="d-flex justify-content-center row">
          <div className="col-md-10 col-lg-10">
            <div className="border">
              <div className="question bg-white p-3 border-bottom">
                <div className="d-flex flex-row justify-content-between align-items-center mcq">
                  <h4>MCQ Quiz</h4>
                  <span>(5 of 20)</span>
                </div>
              </div>
              <div className="question bg-white p-3 border-bottom">
                <div className="d-flex flex-row align-items-center question-title">
                  <h3 className="text-danger">Q.</h3>
                  <h5 className="mt-1 ml-2">
                    Which of the following country has largest population?
                  </h5>
                </div>
                <div className="ans ml-2">
                  <label className="radio">
                    {" "}
                    <input type="radio" name="brazil" value="brazil" />{" "}
                    <span>Brazil</span>
                  </label>
                </div>
                <div className="ans ml-2">
                  <label className="radio">
                    {" "}
                    <input type="radio" name="Germany" value="Germany" />{" "}
                    <span>Germany</span>
                  </label>
                </div>
                <div className="ans ml-2">
                  <label className="radio">
                    {" "}
                    <input
                      type="radio"
                      name="Indonesia"
                      value="Indonesia"
                    />{" "}
                    <span>Indonesia</span>
                  </label>
                </div>
                <div className="ans ml-2">
                  <label className="radio">
                    {" "}
                    <input type="radio" name="Russia" value="Russia" />{" "}
                    <span>Russia</span>
                  </label>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
                <button
                  className="btn btn-primary d-flex align-items-center btn-danger"
                  type="button"
                >
                  <i className="fa fa-angle-left mt-1 mr-1"></i>&nbsp;previous
                </button>
                <button
                  className="btn btn-primary border-success align-items-center btn-success"
                  type="button"
                >
                  Next<i className="fa fa-angle-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Arena;
