import React from "react";

export default function Answers() {
  return (
    <>
      <div className="answers-block">
        <div className="card-title">
          <div className="title">
            <h3>
              <span>(Total)</span> Answers
            </h3>
          </div>
          <div className="filter-btns">
            <button className="tag-button">Score</button>
            <button className="tag-button">Newest</button>
          </div>
        </div>
        <div className="card">
          <div className="div-creator">
            <div className="inside-div-creator">
              <div className="tag-name">tags</div>
              <div className="tag-score">
                <div className="tag-score-digit"> Tag</div> Score
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
