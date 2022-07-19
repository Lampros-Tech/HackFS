import React from "react";
import "../general-block/userprofile.scss";

export default function UserProfile() {
  // const [show, setShow] = useState(true);
  // const [show2, setShow2] = useState(true);

  return (
    <>
      <section className="profile-block">
        <div className="left-block">
          <h3>Stats</h3>
          <div className="stats card">
            <div className="stats-inner-block">
              <div>1000</div>
              <div className="stats-title">score</div>
            </div>
            <div className="stats-inner-block">
              <div>1000</div>
              <div className="stats-title">questions</div>
            </div>
            <div className="stats-inner-block">
              <div>1000</div>
              <div className="stats-title">answers</div>
            </div>
            <div className="stats-inner-block">
              <div>1000</div>
              <div className="stats-title">articles</div>
            </div>
            <div className="stats-inner-block">
              <div>1000</div>
              <div className="stats-title">rewards</div>
            </div>
            <div className="stats-inner-block">
              <div>1000</div>
              <div className="stats-title">tips</div>
            </div>
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
              <div className="title">
                <h3>Badges</h3>
              </div>
              {/* <span className="view-all-rpl-btn">view all badges</span> */}
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
              <div className="title">
                <h3>Tags</h3>
                {/* <span className="view-all">view all tags</span> */}
              </div>
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
              <div className="title">
                <h3>Posts</h3>
                {/* <span className="view-all">view all answers</span> */}
              </div>
              <div className="btns-grp">
                <div className="filter-btns-all">
                  <button className="tag-button">All</button>
                  <button className="tag-button">Questions</button>
                  <button className="tag-button">Answers</button>
                  <button className="tag-button">Articles</button>
                </div>
                <div className="filter-btns">
                  <button className="tag-button">Score</button>
                  <button className="tag-button">Newest</button>
                </div>
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
