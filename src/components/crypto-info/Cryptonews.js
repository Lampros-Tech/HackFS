<<<<<<< Updated upstream
import React from "react";
import "./Cryptoinfo-style/News.scss";

const CryptoNews = () => {
  return (
    <>
      <div className="crypto-news">
        <div className="rightcolumn">
          <div className="news">
            <h2>TITLE </h2>

            <div className="fakeimg-1">Image</div>
            <p>Some text..</p>
          </div>
        </div>
      </div>
    </>
  );
};
=======
import React, { useState, useEffect } from "react";
import axios from "axios";

function CryptoNews() {
  // const axios = require("axios");
  const [apiData, setApiData] = useState();

  //   const options = {
  //     method: "GET",
  //     url: "https://alpha-vantage.p.rapidapi.com/query",
  //     params: {
  //       interval: "5min",
  //       function: "TIME_SERIES_INTRADAY",
  //       symbol: "MSFT",
  //       datatype: "json",
  //       output_size: "compact",
  //     },
  //     headers: {
  //       "X-RapidAPI-Key": "fbb16cf004msh1af9515587b6182p19a6c2jsn2ae4a5a1e3b6",
  //       "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
  //     },
  //   };

  const headers = {
    "X-RapidAPI-Key": "fbb16cf004msh1af9515587b6182p19a6c2jsn2ae4a5a1e3b6",
    "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
  };

  useEffect(() => {
    axios
      .get(
        "https://alpha-vantage.p.rapidapi.com/query?interval=5mins&function=TIME_SERIES_INTRADAY&symbol=MSFT",
        { headers: { headers } }
      )
      .then(function (response) {
        console.log(response.data);
        setApiData(response.data);
        console.log(apiData);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div className="App">
      {/* <div className="right">
        <h2>{apiData.options}</h2>
      </div> */}
    </div>
  );
}
>>>>>>> Stashed changes

export default CryptoNews;
