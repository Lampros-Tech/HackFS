import React, { useState } from "react";
import { useEffect } from "react";
import Axios from 'axios';
import Coin from "./Coin";
import "./Cryptoinfo-style/Coin.scss";

const CryptoInfo = () => {
    const [listOfCoins, setListOfCoins]=useState([]);
    // const [searchWord, setSearchWord]=useState([""]);

    useEffect(() =>{
    
        Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=10").then(
            (response)=>{
                setListOfCoins(response.data.coins);            } 
            );
         },[]);
    
    return(
        <>
            <div className='cryptoHeader'>
            <div className='cryptoDisplay'>{
                    listOfCoins.map((coin)=>{
                    return <Coin name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol}/>;
                })
            }</div>
            </div>
           
        </>
    )
}

export default CryptoInfo;