import React from "react";

export default function Tags() {
  return (
    <>
      <div className="tags-block">
        <div className="card-title">
          <div className="title">
            <h3>
              <span>(Total)</span> Tags
            </h3>
          </div>
          <div className="filter-btns">
            <button className="tag-button">Score</button>
            <button className="tag-button">Newest</button>
          </div>
        </div>
        <div className="card">
          <div className="logged-in-scroll-card">
            {/* run this code to create tags list  */}
            {/* . */}
            {/* . */}
            {/* . */}

            <div className="div-creator">
              <div className="inside-div-creator">
                <div className="tag-name">tag</div>
                <div className="tag-score">
                  <div className="tag-score-digit"> Tag</div> Score
                </div>
              </div>
            </div>
            {/* till here */}
          </div>
        </div>
      </div>
    </>
  );
}
