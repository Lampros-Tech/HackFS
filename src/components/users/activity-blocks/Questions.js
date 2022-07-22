import React from "react";
import '../userstyle/inside-card.scss';

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
          <div className="inside-of-card">
            <div className="score-of-card">
              11640
            </div>
            <div className="title-of-card">
              Why is subtracting these two times (in 1927) giving a strange result?
            </div>
            <div className="date-of-card">
              21 July 2022
            </div>
          </div>
          <div className="inside-of-card">
            <div className="score-of-card">
              11640
            </div>
            <div className="title-of-card">
              Why is subtracting these two times (in 1927) giving a strange result?
            </div>
            <div className="date-of-card">
              21 July 2022
            </div>
          </div>
          <div className="inside-of-card">
            <div className="score-of-card">
              11640
            </div>
            <div className="title-of-card">
              Why is subtracting these two times (in 1927) giving a strange result?
            </div>
            <div className="date-of-card">
              21 July 2022
            </div>
          </div>
          <div className="inside-of-card">
            <div className="score-of-card">
              11640
            </div>
            <div className="title-of-card">
              Why is subtracting these two times (in 1927) giving a strange result?
            </div>
            <div className="date-of-card">
              21 July 2022
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
