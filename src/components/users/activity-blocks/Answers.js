import React from "react";
import "../general-block/useractivity.scss";

export default function Answers() {
  // var list = `Who's the person with more answers than Jon Skeet? When will
  //               they catch him in rep terms? Who's the person with more answers
  //               than Jon Skeet? When will they catch him in rep terms?`;

  // var resultList = list.slice(0, 70) + "...";
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
          {/* loop this code from here to */}
          <div className="div-creator">
            <div className="inside-div-creator">
              <div className="total-likes">Likes</div>
              <div className="qa-list">
                Who's the person with more answers than Jon Skeet? When will
                they catch him in rep terms?
              </div>
              <div className="qa-date">24 July 2022</div>
            </div>
          </div>
          {/* here */}
        </div>
      </div>
    </>
  );
}
