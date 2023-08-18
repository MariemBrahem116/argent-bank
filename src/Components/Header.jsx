import React from 'react'
import logo from '../Assets/argentBankLogo.png';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import { useSelector } from 'react-redux';
import LogoutLink from './LogoutLink';

function Header() {
  const firstName = useSelector((state) => state.auth.firstName);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <header className="header">
    <Link className="headerLink" to="/">
       <img className="headerLogo" src={logo} alt="Argent Bank Logo" />
    </Link>
       {isLoggedIn ? (
            <nav className="nav">
               <Link className="navItem" to="/profile">
                  <i className="fa fa-user-circle"></i>
                  <p className="navItemText">{firstName}</p>
               </Link>
               <LogoutLink to="/" />
            </nav>
         ) : (
            <nav className="nav">
               <Link className="navItem" to="/login">
                  <i className="fa fa-user-circle"></i>
                  <p className="navItemText">Sign In</p>
               </Link>
            </nav>
         )}
 </header>
  )
}

export default Header