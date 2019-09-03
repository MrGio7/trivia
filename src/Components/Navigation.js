import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../Assets/SCSS/Navigation.scss";

import Closed from "../Assets/Img/hamburger-closed.png";
import Opened from "../Assets/Img/hamburger-opened.png";
import UserLogo from "../Assets/Img/user.png";

const Navigation = props => {
  const [statusMenu, setStatusMenu] = useState(false);
  const [statusUser, setStatusUser] = useState(false);

  const openedMenu = () => {
    return (
      <div className="navOpened">
        {statusMenu ? (
          <div className="navMenu">
            <ul>
              <Link to="/">
                <h2>🅷🅾🅼🅴</h2>
              </Link>

              <h2>🆁🅰🅽🅺🅸🅽🅶</h2>
              <h2>🅰🅱🅾🆄🆃</h2>
            </ul>
          </div>
        ) : null}

        {statusUser ? (
          <div className="navUser">
            <ul>
              <h2>🆄🆂🅴🆁🅽🅰🅼🅴:</h2>
              <h2>🅿🅰🆂🆂🆆🅾🆁🅳:</h2>
            </ul>
          </div>
        ) : null}
      </div>
    );
  };

  const menuOpenHandler = ev => {
    ev.preventDefault();
    setStatusMenu(!statusMenu);
  };

  const userOpenHandler = ev => {
    ev.preventDefault();
    setStatusUser(!statusUser);
  };

  return (
    <div className="navBar">
      <div className="navBtns">
        <img
          src={!statusMenu ? Closed : Opened}
          alt="menu button"
          onClick={menuOpenHandler}
        />
        <img src={UserLogo} alt="user button" onClick={userOpenHandler} />
      </div>
      {openedMenu()}
    </div>
  );
};
export default Navigation;
