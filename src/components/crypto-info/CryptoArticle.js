import React from "react";
import "./Cryptoinfo-style/Article.scss";
import pic from "./Cryptoinfo-style/coin.jpg";
import { useEffect } from "react";
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const CryptoArticle = ({ account, mainContract }) => {
  const [isLoading, setLoading] = React.useState(true);
  const [src, setsrc] = useState([]);
  const [content, setContent] = useState([]);
  const navigate = useNavigate();

  const navigateToDisplay = () => {
    // 👇️ navigate to /
    navigate("/displayarticle");
  };
  const getArticles = async (e) => {
    let articleNumbers = await mainContract.article_id();
    articleNumbers = parseInt(articleNumbers._hex, 16);
    console.log(articleNumbers);
    for (let i = 1; i <= articleNumbers; i++) {
      const article = await mainContract.getArticle(i);
      const cidOfImage = article.article_image_cid;
      const title = article.article_title;
      if (cidOfImage == "No Image Found") {
        src.push([pic, title, i]);
      } else {
        src.push([cidOfImage, title, i]);
      }
    }
    setsrc(src);
    setLoading(false);
    console.log(src);
  };

  useEffect(() => {
    getArticles();
  }, [mainContract]);

  if (isLoading) {
    return "loading";
  }

  if (src.length > 0) {
    return (
      <>
        <div className="crypto-article">
          <div className="leftcolumn">
            <div className="article">
              <h2>Bitcoin</h2>
              <div>
                {src.map((inde) => {
                  return (
                    <div className="fakeimg">
                      <img className="crypto-img" src={inde[0]} />
                      <p>{inde[1]}</p>
                      {console.log("id" + inde[2])}
                      <Link
                        className="all-user-link"
                        to={"/displayarticle/"}
                        state={{ id: inde[2] }}
                      >
                        <button id="readmore">Read More</button>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* </div> */}
      </>
    );
  }
};
export default CryptoArticle;
