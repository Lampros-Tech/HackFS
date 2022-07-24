import React from 'react'
import './sidebar.scss'
import membericon from "./group.png";
import staticon from "./stats.png";

function Sidebar() {
  return (
    <>
    <div className="right-section">
          <div className="sidebar-heading">
            
            <h2>
              <img src={staticon} alt />
              Stats
            </h2>
          </div>
          <div className="grid-container">
            <div class="grid-item-1">
              <p>Question</p>
              <h2>200</h2>
            </div>
            <div class="grid-item-2">
              <p>Best Answers</p>

              <h2>129</h2>
            </div>
            <div class="grid-item-3">
              <p>Answers</p>
              <h2>56</h2>
            </div>
            <div class="grid-item-4">
              <p>Users</p>
              <h2>40</h2>
            </div>
          </div>
          <div className="top-members">
            <div className="heading-members">
              <h2>
                <img src={membericon} alt />
                Top Members
              </h2>
            </div>
            {/* <div className="members">
              <img className="profile-img" src="https://i.pravatar.cc/200" alt=""/>
              <div className="text-container">
                <p className="title-text">Austin May</p>
                <h2>USer Name</h2>
                <p className="info-text">Lorem, ipsum dolor.</p>
                <p className="desc-text">
                  Lorem, ipsum.
                </p>
              </div>
              
            
              
            </div>
           */}
            <div class="cards">
              <div class="card card-1">
                <h3 class="card__title">
                  <img
                    className="profile-img-1"
                    src="https://i.pravatar.cc/70"
                    alt=""
                  />
                  Lorem, ipsum dolor.
                  <p>Lorem ipsum dolor sit.</p>
                </h3>
              </div>
            </div>
            <div class="cards">
              <div class="card card-1">
                <h3 class="card__title">
                  <img
                    className="profile-img-1"
                    src="https://i.pravatar.cc/70"
                    alt=""
                  />
                  Lorem, ipsum dolor.
                  <p>Lorem ipsum dolor sit.</p>
                </h3>
              </div>
            </div>
            <div class="cards">
              <div class="card card-1">
                <h3 class="card__title">
                  <img
                    className="profile-img-1"
                    src="https://i.pravatar.cc/70"
                    alt=""
                  />
                  Lorem, ipsum dolor.
                  <p>Lorem ipsum dolor sit.</p>
                </h3>
              </div>
            </div>
            <div class="cards">
              <div class="card card-1">
                <h3 class="card__title">
                  <img
                    className="profile-img-1"
                    src="https://i.pravatar.cc/70"
                    alt=""
                  />
                  Lorem, ipsum dolor.
                  <p>Lorem ipsum dolor sit.</p>
                </h3>
              </div>
            </div>
            <div class="cards">
              <div class="card card-1">
                <h3 class="card__title">
                  <img
                    className="profile-img-1"
                    src="https://i.pravatar.cc/70"
                    alt=""
                  />
                  Lorem, ipsum dolor.
                  <p>Lorem ipsum dolor sit.</p>
                </h3>
              </div>
            </div>
            
            
          </div>
        </div>
    </>
    

    
  )
}

export default Sidebar