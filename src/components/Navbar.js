import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar/navbar.scss"
const Navbar = () => {
    return (
        <>
            <div className="navbar-main">
                <div className="navbar-left">
                    <div className="navbar-logo">
                        Stack Overflow
                    </div>
                </div>
                <div className="navbar-middle">
                    <div className="searchbar">
                        <input type='text' />
                    </div>
                </div>
                <div className="navbar-right">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/info">Crypto News</Link>
                        </li>
                        <li>
                            <Link to="/ask-question">Ask Question</Link>
                        </li>
                        <li>
                            <Link to='/add-article'>Add Article</Link>
                        </li>
                        <li>
                            <Link to='/message/<id>'>Messages</Link>
                        </li>
                        <li>
                            <Link to='profile'>Profile</Link>
                        </li>
                        <li>
                            <button>Connect</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;