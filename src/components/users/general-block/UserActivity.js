import React, { useState } from "react";

import Summary from "../activity-blocks/Summary";
import Answers from "../activity-blocks/Answers";
import Articles from "../activity-blocks/Articles";
import Questions from "../activity-blocks/Questions";
import Tags from "../activity-blocks/Tags";
import Badges from "../activity-blocks/Badges";
import Score from "../activity-blocks/Score";

import "../general-block/useractivity.scss";

export default function UserActivity() {
  const [showSummary, setSummary] = useState(true);
  const [showAnswers, setAnswers] = useState(false);
  const [showQuestions, setQuestions] = useState(false);
  const [showBadges, setBadges] = useState(false);
  const [showScore, setScore] = useState(false);
  const [showArticles, setArticles] = useState(false);
  const [showTags, setTags] = useState(false);

  const summaryButtonHandler = () => {
    setSummary(true);
    setAnswers(false);
    setQuestions(false);
    setBadges(false);
    setScore(false);
    setArticles(false);
    setTags(false);
  };
  const answersButtonHandler = () => {
    setSummary(false);
    setAnswers(true);
    setQuestions(false);
    setBadges(false);
    setScore(false);
    setArticles(false);
    setTags(false);
  };
  const questionsButtonHandler = () => {
    setSummary(false);
    setAnswers(false);
    setQuestions(true);
    setBadges(false);
    setScore(false);
    setArticles(false);
    setTags(false);
  };
  const badgesButtonHandler = () => {
    setSummary(false);
    setAnswers(false);
    setQuestions(false);
    setBadges(true);
    setScore(false);
    setArticles(false);
    setTags(false);
  };
  const scoreButtonHandler = () => {
    setSummary(false);
    setAnswers(false);
    setQuestions(false);
    setBadges(false);
    setScore(true);
    setArticles(false);
    setTags(false);
  };
  const articlesButtonHandler = () => {
    setSummary(false);
    setAnswers(false);
    setQuestions(false);
    setBadges(false);
    setScore(false);
    setArticles(true);
    setTags(false);
  };
  const tagsButtonHandler = () => {
    setSummary(false);
    setAnswers(false);
    setQuestions(false);
    setBadges(false);
    setScore(false);
    setArticles(false);
    setTags(true);
  };
  return (
    <>
      <section className="activity-block">
        <div className="left-block">
          <div>
            <nav className="nav-bar">
              <ul className="nav-bar-ul">
<<<<<<< Updated upstream
                <li
                  className={
                    showSummary ? `nav-bar-li active-li` : `nav-bar-li`
                  }
                  onClick={summaryButtonHandler}
                >
                  {" "}
                  <span className="li-title">Summary</span>
                </li>
                <li
                  className={
                    showAnswers ? `nav-bar-li active-li` : `nav-bar-li`
                  }
                  onClick={answersButtonHandler}
                >
                  {" "}
                  <span className="li-title">Answers</span>
                </li>
                <li
                  className={
                    showQuestions ? `nav-bar-li active-li` : `nav-bar-li`
                  }
                  onClick={questionsButtonHandler}
                >
                  {" "}
                  <span className="li-title">Questions</span>
                </li>
                <li
                  className={showBadges ? `nav-bar-li active-li` : `nav-bar-li`}
                  onClick={badgesButtonHandler}
                >
                  {" "}
                  <span className="li-title">Badges</span>
                </li>
                <li
                  className={showScore ? `nav-bar-li active-li` : `nav-bar-li`}
                  onClick={scoreButtonHandler}
                >
                  {" "}
                  <span className="li-title">Score</span>
                </li>
                <li
                  className={
                    showArticles ? `nav-bar-li active-li` : `nav-bar-li`
                  }
                  onClick={articlesButtonHandler}
                >
                  {" "}
                  <span className="li-title">Articles</span>
                </li>
                <li
                  className={showTags ? `nav-bar-li active-li` : `nav-bar-li`}
                  onClick={tagsButtonHandler}
                >
                  {" "}
                  <span className="li-title">Tags</span>
                </li>
=======
                <li className="nav-bar-li"> <span className="li-title">Summary</span></li>
                <li className="nav-bar-li"> <span className="li-title">Answers</span></li>
                <li className="nav-bar-li"> <span className="li-title">Questions</span></li>
                <li className="nav-bar-li"> <span className="li-title">Badges</span></li>
                <li className="nav-bar-li"> <span className="li-title">Score</span></li>
                <li className="nav-bar-li"> <span className="li-title">Articals</span></li>
                <li className="nav-bar-li"> <span className="li-title">Tags</span></li>
>>>>>>> Stashed changes
              </ul>
            </nav>
          </div>
        </div>
        <div className="right-block">
<<<<<<< Updated upstream
          {showSummary ? <Summary /> : null}
          {showAnswers ? <Answers /> : null}
          {showQuestions ? <Questions /> : null}
          {showBadges ? <Badges /> : null}
          {showScore ? <Score /> : null}
          {showArticles ? <Articles /> : null}
          {showTags ? <Tags /> : null}
=======
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
>>>>>>> Stashed changes
        </div>
      </section>
    </>
  );
}
