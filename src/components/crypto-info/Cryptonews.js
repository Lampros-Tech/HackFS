// import React from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Cryptoinfo-style/News.scss";

const Cryptonews = () => {
  return (
    <>
      <div className="crypto-news">
        <div className="rightcolumn">
          <div className="news">
            <h2>TITLE </h2>
            {/* {first7ApiData?.map((data, _index) => (
              <div key={_index}>
                <a href={data.coins}>
                  <p>{data.stat}</p>
                </a>
              </div>
            ))} */}
            <div className="fakeimg-1">Image</div>
            <p>Some text..</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cryptonews;
