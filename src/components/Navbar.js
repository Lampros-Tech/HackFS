import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import "../styles/Navbar/navbar.scss"
const Navbar = ({ setOpenWalletOption }) => {
    const cookie = new Cookies();
    const [address, setAddress] = useState(cookie.get('account'))

    useEffect(()=>{
        const addr = cookie.get('account');
        if(addr){
            setAddress(addr)
        }
    },[cookie])

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
                        {
                            address
                                ?
                                <>
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
                                </>
                                :
                                <li>
                                    <button className='connect-btn' onClick={() => { setOpenWalletOption(true) }} >Connect</button>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;