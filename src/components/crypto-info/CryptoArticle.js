import React from "react";
import "./Cryptoinfo-style/Article.scss";
import pic from "./Cryptoinfo-style/coin.jpg";

const CryptoArticle = () => {
  return (
    <>
      <div className="crypto-article">
          <div className="leftcolumn">
          <div className="scroll">
            <div className="article">
              <h2>Bitcoin</h2>

              <div className="fakeimg">
                <img className="crypto-img" src={pic} />
                {/* <img className="crypto-img" src={pic} /> */}
                {/* <img className="crypto-img" src={pic} />
                <img className="crypto-img" src={pic} /> */}
              </div>

              <div className="crypto-btn">
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <button className="read-more-btn">Read More</button>
              </div>
            </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default CryptoArticle;
