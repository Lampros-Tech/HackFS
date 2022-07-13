/********************* DEPENDENCIES ********************/
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom' // react-router v4/v5

/********************* COMPONENTS ********************/
import Navbar from './components/Navbar';
import Home from './components/homepage/Home';
import CryptoInfo from './components/crypto-info/CryptoInfo';
import AddQuestions from './components/questions/AddQuestions';
import DisplayQuestions from './components/questions/DisplayQuestions';
import SingleQuestion from './components/questions/SingleQuestion';
import AddArticle from './components/questions/AddArticle';
import Chat from './components/chat/Chat';
import Profile from './components/users/Profile';
import FindUsers from './components/users/FindUsers';
import SingleUser from './components/users/SingleUser';
import Login from './components/login/Login';

/********************* CSS CLASS ********************/
import './index.css';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/info" element={<CryptoInfo />} />
            <Route path='/ask-question' element={<AddQuestions />} />
            <Route path='/find-question' element={<DisplayQuestions />} />
            <Route path='/single-question/:id' element={<SingleQuestion id={1} />} />
            <Route path='/add-article' element={<AddArticle />} />
            <Route path='/message/:id' element={<Chat id={1} />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/find-profile' element={<FindUsers />} />
            <Route path='/user/:id' element={<SingleUser id={1} />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;