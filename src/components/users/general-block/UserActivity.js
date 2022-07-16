import React from "react";
import "../general-block/useractivity.scss";

export default function UserActivity() {
  return (
    <>
      <section className="activity-block">
        <div className="left-block">
          <div>
            <nav className="nav-bar">
              <ul className="nav-bar-ul">
                <li className="nav-bar-li"> <span className="li-title">Summary</span></li>
                <li className="nav-bar-li"> <span className="li-title">Answers</span></li>
                <li className="nav-bar-li"> <span className="li-title">Questions</span></li>
                <li className="nav-bar-li"> <span className="li-title">Badges</span></li>
                <li className="nav-bar-li"> <span className="li-title">Score</span></li>
                <li className="nav-bar-li"> <span className="li-title">Articals</span></li>
                <li className="nav-bar-li"> <span className="li-title">Tags</span></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="right-block">
          <div className="about-block">
            <div className="card-title">
              <h3>About</h3>
            </div>
            <div className="card">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                ipsum dicta fugit totam eum voluptate beatae fuga, quaerat
                consectetur ipsam magnam rerum velit provident et accusantium
                sapiente saepe temporibus sed numquam! Iusto dolorem ea
                perferendis nulla quaerat eius sit dolor, incidunt odit, natus
                impedit. Suscipit iure nostrum nesciunt. Culpa, odit?
              </p>
            </div>
          </div>
          <div className="badges-block">
            <div className="card-title">
              <h3>Badges</h3>
            </div>
            <div className="card">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                ipsum dicta fugit totam eum voluptate beatae fuga, quaerat
                consectetur ipsam magnam rerum velit provident et accusantium
                sapiente saepe temporibus sed numquam! Iusto dolorem ea
                perferendis nulla quaerat eius sit dolor, incidunt odit, natus
                impedit. Suscipit iure nostrum nesciunt. Culpa, odit?
              </p>
            </div>
          </div>
          <div className="tags-block">
            <div className="card-title">
              <h3>Top Tags</h3>
              <div className="filter-btns">
                <button className="tag-button">Score</button>
                <button className="tag-button">Newest</button>
              </div>
            </div>
            <div className="card">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                ipsum dicta fugit totam eum voluptate beatae fuga, quaerat
                consectetur ipsam magnam rerum velit provident et accusantium
                sapiente saepe temporibus sed numquam! Iusto dolorem ea
                perferendis nulla quaerat eius sit dolor, incidunt odit, natus
                impedit. Suscipit iure nostrum nesciunt. Culpa, odit?
              </p>
            </div>
          </div>
          <div className="post-block">
            <div className="card-title">
              <h3>Top Posts</h3>
              <div className="filter-btns">
                <button className="tag-button">Score</button>
                <button className="tag-button">Newest</button>
              </div>
            </div>
            <div className="card">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                ipsum dicta fugit totam eum voluptate beatae fuga, quaerat
                consectetur ipsam magnam rerum velit provident et accusantium
                sapiente saepe temporibus sed numquam! Iusto dolorem ea
                perferendis nulla quaerat eius sit dolor, incidunt odit, natus
                impedit. Suscipit iure nostrum nesciunt. Culpa, odit?

              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
