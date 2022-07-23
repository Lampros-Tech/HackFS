import React from "react";
import "../general-block/userprofile.scss";
import { useEffect } from "react";

export default function UserProfile({ mainContract, account }) {
  // const [show, setShow] = useState(true);
  // const [show2, setShow2] = useState(true);

  const [isLoading, setLoading] = React.useState(true);
  const [designation, setDesignation] = React.useState("");
  const [about, setAbout] = React.useState("");
  const [tag, setTag] = React.useState([]);
  const [score, setScore] = React.useState(null);
  const [noOfQuestions, setNoOfQuestions] = React.useState(null);
  const [noOfAnswers, setNoOfAnswers] = React.useState(null);
  const [noOfArticles, setNoOfArticles] = React.useState(null);
  const [rewards, setRewards] = React.useState(null);
  const [tips, setTips] = React.useState(null);

  const getOtherData = async (e) => {
    // console.log(mainContract);
    const userDesignation = await mainContract.getUserDesignation(account);
    setDesignation(userDesignation);
    const userAbout = await mainContract.getUserDescription(account);
    setAbout(userAbout);
    const userTags = await mainContract.getUserTags(account);
    setTag(userTags);
    // console.log(tag);
    let userScore = await mainContract.getTotalScore(account);
    userScore = parseInt(userScore._hex, 16);
    setScore(userScore);
    // console.log(score);
    const userInfoStruct = await mainContract.getUserInfo(account);
    let userNoOfQuestions = userInfoStruct.noOfQuestions;
    userNoOfQuestions = parseInt(userNoOfQuestions._hex, 16);
    setNoOfQuestions(userNoOfQuestions);
    let userNoOfAnswers = userInfoStruct.noOfAnswers;
    userNoOfAnswers = parseInt(userNoOfAnswers._hex, 16);
    setNoOfAnswers(userNoOfAnswers);
    let userNoOfArticles = userInfoStruct.noOfArticles;
    userNoOfArticles = parseInt(userNoOfArticles._hex, 16);
    setNoOfArticles(userNoOfArticles);
    let userRewards = userInfoStruct.totalReward;
    userRewards = parseInt(userRewards._hex, 16);
    setRewards(userRewards);
    let userTips = userInfoStruct.totalTip;
    userTips = parseInt(userTips._hex, 16);
    setTips(userTips);

    setLoading(false);
  };

  useEffect(() => {
    getOtherData();
    // setLoading(false);
  }, [mainContract]);

  if (isLoading) {
    return "loading";
  }

  return (
    <>
      <section className="profile-block">
        <div className="left-block">
          <div className="stats-title-h3">
            <h3>Stats</h3>
          </div>
          <div className="stats card">
            <div className="stats-inner-block">
              <div>{score}</div>
              <div className="stats-title">prominences</div>
            </div>
            <div className="stats-inner-block">
              <div>{score}</div>
              <div className="stats-title">score</div>
            </div>
            <div className="stats-inner-block">
              <div>{noOfQuestions}</div>
              <div className="stats-title">questions</div>
            </div>
            <div className="stats-inner-block">
              <div>{noOfAnswers}</div>
              <div className="stats-title">answers</div>
            </div>
            <div className="stats-inner-block">
              <div>{noOfArticles}</div>
              <div className="stats-title">articles</div>
            </div>
            <div className="stats-inner-block">
              <div>{rewards}</div>
              <div className="stats-title">rewards</div>
            </div>
            <div className="stats-inner-block">
              <div>{tips}</div>
              <div className="stats-title">tips</div>
            </div>
            <div className="stats-inner-block">
              <div>{tips}</div>
              <div className="stats-title">tokens</div>
            </div>
          </div>
        </div>
        <div className="right-block">
          <div className="about-block">
            <div className="card-title">
              <h3>About</h3>
            </div>
            <div className="card">
              <p>{about}</p>
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
              <p>{tag}</p>
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
