import React from "react";

function Coin({ name, icon, price, symbol }) {
    
  return (
    <div className="coin">
      <div className="img">
        <img src={icon}></img>
      </div>

      <div className="name">
        <h1>{name}</h1>
      </div>

      <div className="price">
        <h3>{price}</h3>
      </div>

      <div className="symbol">
        <h3>{symbol}</h3>
       </div>
    </div>
  );
}
export default Coin;
