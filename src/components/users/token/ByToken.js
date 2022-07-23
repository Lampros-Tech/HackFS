import React from "react";
import "./ByToken.scss";

const ByToken = () => {
  return (
    <>
      <div className="bytoken-main">
        <div className="token-main">
          <label className="token-lbl">Buy Tokens</label>
        </div>

        <div className="token-text">
          <input type="text"></input>
        </div>
        <div className="token-submit">
          <input type="submit" />
        </div>
      </div>
    </>
  );
};
export default ByToken;
