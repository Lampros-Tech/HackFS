import React, { useState } from "react";

import useravtar from "./man.png";
import UserProfile from "./general-block/UserProfile";
import UserActivity from "./general-block/UserActivity";
import EditProfile from "./EditProfile";

import "./userstyle/profile.scss";
import "./general-block/userprofile.scss";
import "./userstyle/popup.css";
import { useEffect } from "react";

const Profile = ({ mainContract, account }) => {
  const [showProfile, setProfile] = useState(true);
  const [showActivity, setActivity] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);

  //
  const [isLoading, setLoading] = React.useState(true);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [designation, setDesignation] = React.useState("");
  const [about, setAbout] = React.useState("");
  const [tags, setTags] = React.useState("");
  const getProfileData = async (e) => {
    console.log(mainContract);
    const userName = await mainContract.getUserName(account);
    setName(userName);
    console.log(name);
    const userEmail = await mainContract.getUserEmail(account);
    setEmail(userEmail);
    console.log(email);
    const userDesignation = await mainContract.getUserDesignation(account);
    setDesignation(userDesignation);
    const userAbout = await mainContract.getUserDescription(account);
    setAbout(userAbout);
    console.log(userAbout);
    const userTags = await mainContract.getUserTags(account);
    setTags(userTags);
    console.log(userTags);
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
      {buttonPopup && (
        <EditProfile
          closeModal={setButtonPopup}
          mainContract={mainContract}
          account={account}
          name={name}
          email={email}
          designation={designation}
          UserTag={tags}
          about={about}
        />
      )}
      <section className="background-image">
        <div className="background-opacity"></div>
        <div className="inside-cover-image">
          <div className="first-block">
            <img src={useravtar} alt="user avatar" height="84px" width="84px" />
            <div className="user-info">
              <h1 className="user-name">{name}</h1>
              <h3> {designation}</h3>
              <span> {email}</span>
            </div>
            <div className="btns">
              <button
                onClick={() => {
                  setButtonPopup(true);
                }}
              >
                Edit Profile
              </button>
              <button>Claim Rewards</button>
            </div>
          </div>
        </div>
      </section>
      <section className="main-container">
        <div className="nav-user">
          <div className="nav-user-bar">
            <button
              onClick={() => {
                setProfile(true);
                setActivity(false);
              }}
              className={showProfile ? `active` : ``}
            >
              Profile
            </button>
            <button
              onClick={() => {
                setActivity(true);
                setProfile(false);
              }}
              className={showActivity ? `active` : ``}
            >
              Activity
            </button>
          </div>
          {showProfile ? (
            <UserProfile mainContract={mainContract} account={account} />
          ) : null}
          {showActivity ? (
            <UserActivity mainContract={mainContract} account={account} />
          ) : null}
        </div>
      </section>
    </>
  );
};

export default Profile;
