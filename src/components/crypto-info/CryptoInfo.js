import React, { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import Coin from "./Coin";
import "./Cryptoinfo-style/Coin.scss";
import CryptoArticle from "./CryptoArticle";
import "./Cryptoinfo-style/Article.scss";
import Cryptonews from "./Cryptonews";
import "./Cryptoinfo-style/News.scss";
import CryptoDisplayArticle from "./CryptoDisplayArticle";

<<<<<<< Updated upstream

const CryptoInfo = ({ account, mainContract }) => {
  const [listOfCoins, setListOfCoins] = useState([]);
  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=10").then(
      (response) => {
        setListOfCoins(response.data.coins);
      }
    );
  }, []);

  return (
    <>
      <div className="crypto-header">
        <div className="coin-header">
          {listOfCoins.map((coin) => {
            return (
              <Coin
                name={coin.name}
                icon={coin.icon}
                price={coin.price}
                symbol={coin.symbol}
              />
            );
          })}
        </div>
      </div>
      <div className="crypto-main-container">
        <CryptoArticle mainContract={mainContract} account={account} />
        <Cryptonews />
        <CryptoDisplayArticle />
      </div>
    </>
  );
};
<<<<<<< HEAD
=======
=======
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
>>>>>>> Stashed changes




>>>>>>> 2ea92c2347de88bcd614ec69dc3d9e52f84833f6
export default CryptoInfo;
