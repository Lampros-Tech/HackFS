import React from 'react'
import "./AllQuestions.scss"

function AllQuestions() {
  return (
    <>
     <div className="DisplayQuestions">
        <div className="DisplayQuestions-left">
          <div className="DisplayQuestions-votes">
            <p> 0</p>
            <p> votes</p>
          </div>
          <div className="DisplayQuestions-answer">
            <p> 0</p>
            <p> answer</p>
          </div>
        </div>
        <div className="DisplayQuestions-right">
          <h2>
        test User
          </h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Nunc congue nisi vitae suscipit tellus mauris a diam. Risus at ultrices mi tempus imperdiet nulla. Orci eu lobortis elementum nibh tellus molestie nunc non blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Nunc congue nisi vitae suscipit tellus mauris a diam. Risus at ultrices mi tempus imperdiet nulla. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. </p>
        
          <div className="DisplayQuestions-askby">
            <small> 2 days ago</small>
            <p> Ask by </p>
          </div>
          
        </div>
      </div></>




  )
}

export default AllQuestions