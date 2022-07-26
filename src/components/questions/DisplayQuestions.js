import React from "react";
import "./DisplayQuestions.scss";

import AllQuestions from "./AllQuestions";

import membericon from "./group.png";
import staticon from "./stats.png";
import { useEffect } from "react";
import Sidebar from "./Sidebar";

const DisplayQuestions = ({ account, mainContract }) => {
  const [isLoading, setLoading] = React.useState(true);
  const [num, setNum] = React.useState("");

  const displayQuestions = async (e) => {
    let num = await mainContract.q_id();
    num = parseInt(num._hex, 16);
    console.log(num);
    setNum(num);
    setLoading(false);
  };

  useEffect(() => {
    displayQuestions();
  }, [mainContract]);

  if (isLoading) {
    return "loading";
  }
  return (
    <>
      <div className="main">
        <div className="content-section">
          <div className="main-top">
            <h2> All Questions</h2>
            <button>Ask Question</button>
          </div>
          <div className="main-dec">
            <p> {num} Questions </p>
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
              <AllQuestions account={account} mainContract={mainContract} />
            </div>
          </div>
          {/* <div class="pagination">
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
          </div> */}
        </div>

        <Sidebar />
      </div>
    </>
  );
};

export default DisplayQuestions;
