import React, { useState } from "react";

import useravtar from "./man.png";
import SingleUserProfile from "./general-block/SingleUserProfile";
import SingleUserActivity from "./general-block/SingleUserActivity";

import "./userstyle/profile.scss";
import "./general-block/userprofile.scss";
import "./userstyle/popup.css";
import { useLocation } from "react-router";
import { useEffect } from "react";

const SingleUser = ({ mainContract }) => {
  const location = useLocation();
  const { account } = location.state;
  // console.log(account);
  const [isLoading, setLoading] = React.useState(true);
  const [showSingleUserProfile, setSingleUserProfile] = useState(true);
  const [showSingleUserActivity, setSingleUserActivity] = useState(false);
  //   const [buttonPopup, setButtonPopup] = useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [designation, setDesignation] = React.useState("");
  const [about, setAbout] = React.useState("");
  const getProfileData = async (e) => {
    // console.log(mainContract);
    const userName = await mainContract.getUserName(account);
    setName(userName);
    // console.log(name);
    const userEmail = await mainContract.getUserEmail(account);
    setEmail(userEmail);
    // console.log(email);
    const userDesignation = await mainContract.getUserDesignation(account);
    setDesignation(userDesignation);
    const userAbout = await mainContract.getUserDescription(account);
    setAbout(userAbout);
    // console.log(userAbout);
    setLoading(false);
  };
  useEffect(() => {
    getProfileData();
    // setLoading(false);
  }, [mainContract]);
  if (isLoading) {
    return "loading";
  }

  return (
    <>
      <section className="main-container">
        <div className="first-block">
          <img src={useravtar} alt="user avatar" height="128px" width="128px" />
          <div className="user-info">
            <h1 className="user-name">{name}</h1>
            <span>{email}</span>
          </div>
          <div className="btns">
            {/* <button
              onClick={() => {
                setButtonPopup(true);
              }}
            >
              Edit Profile
            </button>
            <button>Claim Rewards</button> */}
          </div>
        </div>
        <div className="nav-user">
          <button
            onClick={() => {
              setSingleUserProfile(true);
              setSingleUserActivity(false);
            }}
            className={showSingleUserProfile ? `active` : ``}
          >
            Profile
          </button>
          <button
            onClick={() => {
              setSingleUserActivity(true);
              setSingleUserProfile(false);
            }}
            className={showSingleUserActivity ? `active` : ``}
          >
            Activity
          </button>
          {showSingleUserProfile ? (
            <SingleUserProfile account={account} mainContract={mainContract} />
          ) : null}
          {showSingleUserActivity ? (
            <SingleUserActivity account={account} mainContract={mainContract} />
          ) : null}
        </div>
      </section>
    </>
  );
};

export default SingleUser;
