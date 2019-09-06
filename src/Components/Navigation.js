import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../Assets/SCSS/Navigation.scss";

import Closed from "../Assets/Img/hamburger-closed.png";
import Opened from "../Assets/Img/hamburger-opened.png";
import UserLogo from "../Assets/Img/user.png";

const Navigation = props => {
  const [statusMenu, setStatusMenu] = useState(false);
  const [statusUser, setStatusUser] = useState(false);
  const [user, setUser] = useState({ username: "", password: "" });

  const scoreList = () => {
    const scores = props.ranking.map(each => each);
    const filteredScore = scores.filter(
      each => each.user === props.userInfo.user
    );
    const reversed = filteredScore.reverse();

    return reversed;
  };

  const highestScore = () => {
    const sorted = scoreList().sort((a, b) => b.score - a.score);

    return sorted[0].score;
  };

  const changeHandler = ev => {
    ev.persist();
    setUser(user => ({
      ...user,
      [ev.target.name]: ev.target.value
    }));
  };

  const loginHandler = ev => {
    ev.preventDefault();
    axios
      .post(`http://localhost:5000/api/users/login`, user)
      .then(res => {
        console.log(res);
        console.log(res.data);
        setStatusUser(false);
        localStorage.setItem("token", res.data.token);
        props.history.go();
      })
      .catch(err => {
        console.log(err);
        alert("Invalid Credentials");
      });
  };

  const LogOut = () => {
    localStorage.removeItem("token");
    props.history.push("/");
  };

  const menuPage = () => {
    return statusMenu ? (
      <div className="navMenu">
        <ul>
          <Link to="/">
            <h2>🅷🅾🅼🅴</h2>
          </Link>

          <h2>🆁🅰🅽🅺🅸🅽🅶</h2>
          <h2>🅰🅱🅾🆄🆃</h2>
        </ul>
      </div>
    ) : null;
  };

  const loginPage = () => {
    return statusUser ? (
      <div className="navUser">
        <form onSubmit={loginHandler}>
          <label>
            <h2>🆄🆂🅴🆁🅽🅰🅼🅴:</h2>
          </label>
          <input
            type="text"
            placeholder="Enter UserName"
            onChange={changeHandler}
            name="username"
            value={user.username}
          />

          <label>
            <h3>🅿🅰🆂🆂🆆🅾🆁🅳:</h3>
          </label>
          <input
            type="password"
            placeholder="Password"
            onChange={changeHandler}
            name="password"
            value={user.password}
          />

          <div className="log_reg">
            <input type="submit" className="loginBtn" value="Login" />
            <input type="button" className="loginBtn" value="Register" />
          </div>
        </form>
      </div>
    ) : null;
  };

  const userPage = () => {
    return statusUser ? (
      <div className="userPage">
        <img src={props.userInfo.img} alt="picture of the user" />
        <h2>Welcome {props.userInfo.user}</h2>

        <div>
          <h2>Highest Score:</h2>
          <h3>{highestScore()} </h3>
        </div>

        <div>
          <h2>Last Games:</h2>
          <h3>I) {scoreList()[0].score}</h3>
          <h3>II) {scoreList()[1].score}</h3>
          <h3>III) {scoreList()[2].score}</h3>
          <h3>IV) {scoreList()[3].score}</h3>
          <h3>V) {scoreList()[4].score}</h3>
        </div>

        <input
          type="button"
          className="logoutBtn"
          value="Logout"
          onClick={LogOut}
        />
      </div>
    ) : null;
  };

  const openedMenu = () => {
    return (
      <div className="navOpened">
        {menuPage()}
        {!localStorage.token || !props.userInfo ? loginPage() : userPage()}
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
