import React, { useState } from "react";

import useravtar from "./man.png";
import SingleUserProfile from "./general-block/SingleUserProfile";
import SingleUserActivity from "./general-block/SingleUserActivity";
// import EditProfile from "./EditProfile";

import "./userstyle/profile.scss";
import "./general-block/userprofile.scss";
import "./userstyle/popup.css";
// import { useEffect } from "react";

const SingleUser = ({ id }) => {
  const [showSingleUserProfile, setSingleUserProfile] = useState(true);
  const [showSingleUserActivity, setSingleUserActivity] = useState(false);
  //   const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <section className="main-container">
        <div className="first-block">
          <img src={useravtar} alt="user avatar" height="128px" width="128px" />
          <div className="user-info">
            <h1 className="user-name">User Name</h1>
            <span> User Email</span>
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
          {showSingleUserProfile ? <SingleUserProfile /> : null}
          {showSingleUserActivity ? <SingleUserActivity /> : null}
        </div>
      </section>
    </>
  );
};

export default SingleUser;
