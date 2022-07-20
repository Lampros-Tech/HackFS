import React, { useState } from "react";
import { useEffect } from "react";
import Axios from 'axios';
import Coin from "./Coin";
import "./Cryptoinfo-style/Coin.scss";
<<<<<<< Updated upstream
import CryptoArticle from "./CryptoArticle";
import "./Cryptoinfo-style/Article.scss";
import CryptoNews from "./CryptoNews";
import "./Cryptoinfo-style/News.scss";
=======
import CryptoNews from "./CryptoNews";
// import pic from "../Cryptoinfo-style/article.jpg"
>>>>>>> Stashed changes

const CryptoInfo = ({id}) => {
    const style = {
        height: 600,
      };
    const [listOfCoins, setListOfCoins]=useState([]);
<<<<<<< Updated upstream

=======
    // const [searchWord, setSearchWord]=useState([""]);
    const axios = require("axios");
>>>>>>> Stashed changes
    useEffect(() =>{
        Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=10").then(
            (response)=>{
                setListOfCoins(response.data.coins);            } 
            );
         },[]);
    
<<<<<<< Updated upstream
    return(
        <>
            
            <div className="crypto-header">
            {
               listOfCoins.map((coin)=>{
                return <Coin name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol}/>;
                })
                }
            </div>
            <div className="crypto-main-container">
            <CryptoArticle/>
            <CryptoNews/>
            </div>
            
=======
         return(
          <>
          <div style={style} className="crypto-App">
          <div className="header">
          <div className="left">
          <div className="actions">
            <h2>Price</h2>
          </div>
          </div>

         <div className="content">
          <h2>Article</h2>
         </div>

         <div className="right">
          <h2>News</h2>
         </div>
        </div>
        

        <div className="main">
        <div className="sidebar-left">Sidebar-Left</div>
        <div className='cryptoDisplay'>{
                    listOfCoins.map((coin)=>{
                    return <Coin name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol}/>;
                })
            }
            </div>
        <div className="content">content</div>
        {/* <img
                src={`pic`}
                alt=""
              /> */}
        <div className="sidebar-right">Sidebar-right</div>
      </div>
    </div>
        

            <CryptoNews/>
           
>>>>>>> Stashed changes
        </>
    )
}

export default CryptoInfo;