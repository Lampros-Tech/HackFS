import React, { useState } from "react";

import useravtar from "./man.png";
import UserProfile from "./general-block/UserProfile";
import UserActivity from "./general-block/UserActivity";
import EditProfile from "./EditProfile";

import "./userstyle/profile.scss";
import "./general-block/userprofile.scss";
import "./userstyle/popup.css";

const Profile = () => {
  const [showProfile, setProfile] = useState(true);
  const [showActivity, setActivity] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      {buttonPopup && <EditProfile closeModal={setButtonPopup} />}
      <section className="main-container">
        <div className="first-block">
          <img src={useravtar} alt="user avatar" height="128px" width="128px" />
          <div className="user-info">
            <h1 className="user-name">Jaydip Patel</h1>
            <span> jdpatel4405@gmail.com</span>
          </div>
          <div className="btns">
            <button
              onClick={() => {
                setButtonPopup(true);
              }}
            >
              Edit Profile
            </button>
            <button>Score</button>
          </div>
        </div>
        <div className="nav-user">
          <button
            onClick={() => {
              setProfile(true);
              setActivity(false);
            }}
          >
            Profile
          </button>
          <button
            onClick={() => {
              setActivity(true);
              setProfile(false);
            }}
          >
            Activity
          </button>
          {showProfile ? <UserProfile /> : null}
          {showActivity ? <UserActivity /> : null}
        </div>
      </section>
    </>
  );
};

export default Profile;
