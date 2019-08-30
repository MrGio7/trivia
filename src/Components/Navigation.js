import React, { useState } from "react";
import { Link } from "react-router-dom";

import Closed from "../Assets/Img/hamburger-closed.png";
import Opened from "../Assets/Img/hamburger-opened.png";
import UserLogo from "../Assets/Img/user.png";

const Navigation = props => {
  const [status, setStatus] = useState(false);

  const closed = () => {
    return (
      <div className="navClosed">
        <img src={Closed} alt="menu button" onClick={menuOpenHandler} />
        <img src={UserLogo} alt="user button" onClick={menuOpenHandler} />
      </div>
    );
  };

  const opened = () => {
    return (
      <div className="navOpened">
        <img src={Opened} alt="menu button" onClick={menuOpenHandler} />
        <img src={UserLogo} alt="user button" onClick={menuOpenHandler} />
      </div>
    );
  };

  const menuOpenHandler = ev => {
    ev.preventDefault();
    setStatus(!status);
  };

  return <div className="navBar">{status === false ? closed() : opened()}</div>;
};

export default Navigation;
