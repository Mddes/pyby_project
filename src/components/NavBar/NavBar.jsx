import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
      <Link to="/pyby_project">
       <span style={{color:"#00a0df"}}>PYBY.<span style={{color:"#dfcf00"}}>agency</span></span>
      </Link>
      </div>
      <div className="navbar__menu">
       {/* <Link to="/main"><span>О нас</span></Link>
        <Link to="/main"><span>Рекламодателям</span></Link>
        <Link to="/main"><span>Вебмастерам</span></Link> */}
        <Link to="/pyby_project/contacts"><span>Контакты</span></Link>
        {/* <Link to="/main"><span>FAQ</span></Link> */}
      </div>
      <div className="navbar__enter">
        <div className="enter-login"><Link to="/pyby_project/login"><span>Вход</span></Link></div>
        <span style={{color:"white"}}> / </span>
        <div className="enter-reg"> <Link to="/pyby_project/registration"><span>Регистрация</span></Link></div>
      </div>
    </div>
  );
};

export default NavBar;
