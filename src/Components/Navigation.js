import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../Assets/SCSS/Navigation.scss";
import useComponentVisible from "../hooks/useComponentVisible";
import { burgerOpened, burgerClosed, userOpened, userClosed } from "../Assets/SVG";

const Navigation = ({ userInfo, ranking }) => {
  const {
    ref: statusMenuRef,
    isComponentVisible: statusMenu,
    setIsComponentVisible: setStatusMenu,
  } = useComponentVisible(false);

  const {
    ref: statusUserRef,
    isComponentVisible: statusUser,
    setIsComponentVisible: setStatusUser,
  } = useComponentVisible(false);
  
  let user = { username: "", password: "" };

  const scoreList = () => {
    const scores = ranking.map((each) => each);
    const filteredScore = scores.filter((each) => each.user === userInfo.user);
    const reversed = filteredScore.reverse();

    return reversed;
  };

  const highestScore = () => {
    const sorted = scoreList().sort((a, b) => b.score - a.score);

    return sorted[0].score;
  };

  // Event Handlers
  const changeHandler = (ev) => {
    ev.persist();
    user = {
      ...user,
      [ev.target.name]: ev.target.value,
    };
  };

  const loginHandler = (ev) => {
    ev.preventDefault();
    axios
      .post(`https://trivia-app-server.herokuapp.com/api/users/login`, user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        location.replace("/trivia");
      })
      .catch((err) => {
        console.log(err);
        alert("Invalid Credentials");
      });
  };

  const LogOut = () => {
    localStorage.removeItem("token");
    location.replace("/trivia");
  };

  // When the user clicks on link, close menu
  const linkHandler = () => {
    if (statusMenu === true || statusUser === true) {
      if (statusMenu === true) {
        setStatusMenu(false);
      }
      if (statusUser === true) {
        setStatusUser(false);
      }
    } else return;
  };
  
  return (
    <div className="navBar">
      <div className="navBtns">
        {statusMenu ? burgerOpened : burgerClosed(setStatusMenu)}
        {statusUser ? userOpened : userClosed(setStatusUser)}
      </div>
      <div className="menu">
        <nav ref={statusMenuRef} className={statusMenu ? "navLinks opened" : "navLinks"}>
          <Link to="/" onClick={linkHandler}>
            Home
          </Link>

          <Link to="/top" onClick={linkHandler}>
            Ranking
          </Link>
        </nav>
        {!localStorage.token || !userInfo ? (
          <div ref={statusUserRef} className={statusUser ? "userPage opened" : "userPage"}>
            <form onSubmit={loginHandler}>
              <label>UserName:</label>
              <input
                type="text"
                placeholder="Enter UserName"
                onChange={changeHandler}
                name="username"
                defaultValue={user.username}
              />

              <label>Password:</label>
              <input
                type="password"
                placeholder="Password"
                onChange={changeHandler}
                name="password"
                defaultValue={user.password}
              />

              <input type="submit" className="loginBtn" value="Login" />

              <Link to="/register" onClick={linkHandler}>
                <input type="button" className="loginBtn" value="Register" />
              </Link>
            </form>
          </div>
        ) : (
          <div className={statusUser ? "userPage opened" : "userPage"}>
            <img src={userInfo.img} alt="user" />
            <h2>Welcome {userInfo.user}</h2>

            <h2>Highest Score:</h2>
            <h3>{[scoreList()][0].length >= 1 ? highestScore() : "NULL"} </h3>

            <h2>Last Games:</h2>
            <h3>
              I) {[scoreList()][0].length >= 1 ? scoreList()[0].score : "NULL"}
            </h3>
            <h3>
              II) {[scoreList()][0].length >= 2 ? scoreList()[1].score : "NULL"}
            </h3>
            <h3>
              III){" "}
              {[scoreList()][0].length >= 3 ? scoreList()[2].score : "NULL"}
            </h3>
            <h3>
              IV) {[scoreList()][0].length >= 4 ? scoreList()[3].score : "NULL"}
            </h3>
            <h3>
              V) {[scoreList()][0].length >= 5 ? scoreList()[4].score : "NULL"}
            </h3>

            <input
              type="button"
              className="logoutBtn"
              value="Logout"
              onClick={LogOut}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default Navigation;
