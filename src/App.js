/********************* DEPENDENCIES ********************/
import React, { useState, useRef, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // react-router v4/v5
import Cookies from "universal-cookie";

/********************* WEB3 DEPENDENCIES ********************/
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
// import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
// import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";
// import Web3 from 'web3';
import { ethers } from "ethers";

/********************* IMAGES ********************/
import metamask from "./components/mm.png";
import coinbase from "./components/cbw.png";
// import walletconnect from "./components/wc.png";

/********************* COMPONENTS ********************/
import Navbar from "./components/Navbar";
import Home from "./components/homepage/Home";
import CryptoInfo from "./components/crypto-info/CryptoInfo";
import AddQuestions from "./components/questions/AddQuestions";
import DisplayQuestions from "./components/questions/DisplayQuestions";
import SingleQuestion from "./components/questions/SingleQuestion";
import AddArticle from "./components/questions/AddArticle";
import Chat from "./components/chat/Chat";
import Profile from "./components/users/Profile";
import FindUsers from "./components/users/FindUsers";
import SingleUser from "./components/users/SingleUser";
import Login from "./components/login/Login";

/********************* CSS CLASS ********************/
import "./index.css";
import "./App.scss";

const App = () => {
  const { activate, deactivate } = useWeb3React();
  const [openWalletOption, setOpenWalletOption] = useState(false);
  // const [address, setAddress] = useState("");
  const [haveMetamask, sethaveMetamask] = useState(true);
  const [accountAddress, setAccountAddress] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const cookie = new Cookies();

  const CoinbaseWallet = new WalletLinkConnector({
    url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
    appName: "Web3-react Demo",
    supportedChainIds: [1, 3, 4, 5, 42, 137],
  });

  // const WalletConnect = new WalletConnectConnector({
  //   rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  //   bridge: "https://bridge.walletconnect.org",
  //   qrcode: true,
  // });

  // const Injected = new InjectedConnector({
  //   supportedChainIds: [1, 3, 4, 5, 42, 137]
  // });

  const wrapperRef = useRef(null);

  window.ethereum.on("accountsChanged", function (accounts) {
    let acc = accounts[0];
    if (!acc) {
      setIsConnected(false);
      cookie.remove("account");
      window.location.reload();
    }
  });

  useEffect(() => {
    const { ethereum } = window;
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      sethaveMetamask(true);
    };
    checkMetamaskAvailability();
  }, [ethereum]);

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);
      cookie.set("account", accounts[0], { path: "/", maxAge: 3600 });
      setAccountBalance(bal);
      setIsConnected(true);
      setOpenWalletOption(false);
    } catch (error) {
      setIsConnected(false);
    }
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /*
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpenWalletOption(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideAlerter(wrapperRef);

  return (
    <>
      <div className="App">
        <Router>
          <Navbar setOpenWalletOption={setOpenWalletOption} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/info" element={<CryptoInfo />} />
            <Route path="/ask-question" element={<AddQuestions />} />
            <Route path="/find-question" element={<DisplayQuestions />} />
            <Route
              path="/single-question/:id"
              element={<SingleQuestion id={1} />}
            />
            <Route path="/add-article" element={<AddArticle />} />
            <Route path="/message/:id" element={<Chat id={1} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/find-profile" element={<FindUsers />} />
            <Route path="/user/:id" element={<SingleUser id={1} />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
        {openWalletOption ? (
          <div className="alert-main">
            <div className="alert-box" ref={wrapperRef}>
              <div className="alert-header">
                <div className="title">CONNECT</div>
              </div>
              <div className="alert-container">
                <div className="alert-holder">
                  <div className="image">
                    <img
                      src={metamask}
                      onClick={() => {
                        connectWallet();
                      }}
                      title="metamask"
                      className="mm"
                      alt="metamask"
                    />
                  </div>
                  <div className="image">
                    <img
                      src={coinbase}
                      onClick={() => {
                        activate(CoinbaseWallet);
                      }}
                      title="coinbase"
                      className="mm"
                      alt="coinbase"
                    />
                  </div>
                  {/* <div className='image'>
                      <img src={walletconnect} onClick={() => { activate(WalletConnect) }} className="mm" alt="wallet connect image" />
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default App;
