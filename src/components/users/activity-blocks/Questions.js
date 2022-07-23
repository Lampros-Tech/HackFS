import React from "react";
import "../userstyle/inside-card.scss";

export default function Questions() {
  return (
    <>
      <div className="questions-block">
        <div className="card-title">
          <div className="title">
            <h3>
              <span>(Total)</span> Questions
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
