import React from "react";
import "./DisplayQuestions.scss";

import AllQuestions from "./AllQuestions";

import membericon from "./group.png";
import staticon from "./stats.png";
import Sidebar from "./Sidebar";

const DisplayQuestions = () => {
  return (
    <>
      <div className="main">
        <div className="content-section">
          <div className="main-top">
            <h2> All Questions</h2>
            <button>Ask Question</button>
          </div>
          <div className="main-dec">
            <p> 10 Questions </p>
            <div className="main-filter">
              <div className="main-tabs">
                <div className="main-tab">
                  <button>Newest</button>
                </div>
                <div className="main-tab">
                  <button>Score</button>
                </div>
                <div className="main-tab">
                  <button>Unanswered</button>
                </div>
              </div>
              <div className="main-filter-item">
                <p>Filter</p>
              </div>
            </div>
          </div>
          <div className="questions">
            <div className="question">
              <AllQuestions />
              <AllQuestions />
              <AllQuestions />
              <AllQuestions />
              <AllQuestions />
              <AllQuestions />
              <AllQuestions />
            </div>
          </div>
          <div class="pagination">
            <a href="#">previous</a>
            <a href="#" className="active">
              1
            </a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">Next</a>
          </div>
        </div>
        

        <Sidebar />
      </div>
    </>
  );
};

export default DisplayQuestions;
