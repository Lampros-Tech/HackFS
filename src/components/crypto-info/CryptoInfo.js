import React, { useState } from "react";
import { useEffect } from "react";
import Axios from 'axios';
import Coin from "./Coin";
import "./Cryptoinfo-style/Coin.scss";
import CryptoArticle from "./CryptoArticle";
import "./Cryptoinfo-style/Article.scss";
import Cryptonews from "./Cryptonews";
import "./Cryptoinfo-style/News.scss";

const CryptoInfo = ({id}) => {
    const style = {
        height: 600,
      };
    const [listOfCoins, setListOfCoins]=useState([]);
    useEffect(() =>{
        Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=10").then(
            (response)=>{
                setListOfCoins(response.data.coins);            } 
            );
         },[]);
    
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
            <Cryptonews/>
            </div>
           
        </>
    )
}

export default CryptoInfo;