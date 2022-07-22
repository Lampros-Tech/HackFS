import React from 'react'
import { useState } from 'react';
import "./AllQuestions.scss"


function AllQuestions() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
      if (count === 0){
          setCount(0) 
      } else if (count === 1){
          <span>{decrement}</span>
      } else {
          <span>{increment}</span>
      }

  }

  const increment = () => {
      setCount(count + 1)
  }
     
   const decrement = () => {
      setCount(count - 1)
  }

  return (
    <>
     <div className="DisplayQuestions">
        <div className="DisplayQuestions-left">
          <div className="DisplayQuestions-votes">
            <p>{count}</p>
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
           
            <p> Ask by <img src="https://i.pravatar.cc/30"alt=''/> </p>
            
           
          
          </div>
          {/* <div  className='avatar'>
          <img src='https://i.pravatar.cc/30'alt=''/>
          </div> */}

          <div className="counter">
      
      <button className='plus' onClick={increment}>+</button>
      <h2>{count}</h2>
      <button className='minus' onClick={decrement}>-</button>
    </div>
          
        </div>
      </div></>




  )
}

export default AllQuestions