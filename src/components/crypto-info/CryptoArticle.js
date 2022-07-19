import React from "react";
import "./Cryptoinfo-style/Article.scss";
import pic from "./Cryptoinfo-style/coin.jpg";

const CryptoArticle = () => {
  return (
    <>
      <div className="crypto-article">
        <div className="leftcolumn">
          <div className="article">
            <h2>TITLE </h2>

            <div className="fakeimg">
              <img className="crypto-img" src={pic}/>
            </div>
            <p>Some text..</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoArticle;
