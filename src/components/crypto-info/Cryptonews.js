import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cryptoinfo-style/News.scss";

const Cryptonews = () => {
<<<<<<< Updated upstream
  const [apiData, setApiData] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://crypto-news-live8.p.rapidapi.com/news/bitcoinnews",
      headers: {
        "X-RapidAPI-Key": "fbb16cf004msh1af9515587b6182p19a6c2jsn2ae4a5a1e3b6",
        "X-RapidAPI-Host": "crypto-news-live8.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setApiData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(apiData);
  const first7Apidata = apiData?.slice(0, 8);

=======
>>>>>>> Stashed changes
  return (
    <>
      <div className="crypto-news">
        <div className="rightcolumn">
          <div className="news">
<<<<<<< Updated upstream
<<<<<<< HEAD
            <h2>News</h2>
            {first7Apidata?.map((data, _index) => (
=======
            <h2>TITLE </h2>
            {/* {first7ApiData?.map((data, _index) => (
>>>>>>> Stashed changes
              <div key={_index}>
=======
            <h2>Popular News</h2>
            {first7Apidata?.map((data, _index) => (
              <div className="apidata" key={_index}>
>>>>>>> 2ea92c2347de88bcd614ec69dc3d9e52f84833f6
                <a href={data.url}>
                  <p>{data.title}</p>
                </a>
              </div>
<<<<<<< Updated upstream
            ))}
            {/* <div className="fakeimg-1">Image</div> */}
=======
            ))} */}
            <div className="fakeimg-1">Image</div>
            <p>Some text..</p>
>>>>>>> Stashed changes
          </div>
        </div>
      </div>
    </>
  );
};

export default Cryptonews;
