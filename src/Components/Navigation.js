import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../Assets/SCSS/Navigation.scss";

const Navigation = ({ userInfo, ranking }) => {
  const [statusMenu, setStatusMenu] = useState(false);
  const [statusUser, setStatusUser] = useState(false);
  const [user, setUser] = useState({ username: "", password: "" });

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

  const changeHandler = (ev) => {
    ev.persist();
    setUser((user) => ({
      ...user,
      [ev.target.name]: ev.target.value,
    }));
  };

  const loginHandler = (ev) => {
    ev.preventDefault();
    axios
      .post(`https://trivia-app-server.herokuapp.com/api/users/login`, user)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setStatusUser(false);
        localStorage.setItem("token", res.data.token);
        history.go();
      })
      .catch((err) => {
        console.log(err);
        alert("Invalid Credentials");
      });
  };

  const LogOut = () => {
    localStorage.removeItem("token");
    history.go();
  };

  const menuOpenHandler = (ev) => {
    ev.preventDefault();
    setStatusMenu(!statusMenu);
  };

  const userOpenHandler = (ev) => {
    ev.preventDefault();
    setStatusUser(!statusUser);
  };

  // When the user clicks anywhere outside of the menu, close it

  const closeHandler = (ev) => {
    if (ev.target.className === "blank") {
      setStatusMenu(false);
      setStatusUser(false);
    }
  };

  // When the user clicks on link, close menu

  const linkHandler = () => {
    setStatusMenu(false);
    setStatusUser(false);
  };

  return (
    <div className="navBar" onClick={closeHandler}>
      <div className="navBtns">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 48 48"
          width="1em"
          heigth="1em"
          fill="none"
          stroke="currentColor"
          strokeWidth="15%"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={menuOpenHandler}
        >
          {!statusMenu ? (
            <path d="M7.95 11.95h32M7.95 23.95h32M7.95 35.95h32" />
          ) : (
            <path d="M8 8l32 32M8 40L40 8" />
          )}
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 32 32"
          fill="currentColor"
          stroke="currentColor"
          onClick={userOpenHandler}
        >
          <path
            d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24zM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8zM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="menu">
        <nav className={statusMenu ? "navLinks opened" : "navLinks"}>
          <Link to="/" onClick={linkHandler}>
            Home
          </Link>

          <Link to="/top" onClick={linkHandler}>
            Ranking
          </Link>
        </nav>
        {!localStorage.token || !userInfo ? (
          <div className={statusUser ? "userPage opened" : "userPage"}>
            <form onSubmit={loginHandler}>
              <label>
                UserName:
              </label>
              <input
                type="text"
                placeholder="Enter UserName"
                onChange={changeHandler}
                name="username"
                value={user.username}
              />

              <label>
                Password:
              </label>
              <input
                type="password"
                placeholder="Password"
                onChange={changeHandler}
                name="password"
                value={user.password}
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
                I){" "}
                {[scoreList()][0].length >= 1 ? scoreList()[0].score : "NULL"}
              </h3>
              <h3>
                II){" "}
                {[scoreList()][0].length >= 2 ? scoreList()[1].score : "NULL"}
              </h3>
              <h3>
                III){" "}
                {[scoreList()][0].length >= 3 ? scoreList()[2].score : "NULL"}
              </h3>
              <h3>
                IV){" "}
                {[scoreList()][0].length >= 4 ? scoreList()[3].score : "NULL"}
              </h3>
              <h3>
                V){" "}
                {[scoreList()][0].length >= 5 ? scoreList()[4].score : "NULL"}
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
