import React, { useState, useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import axios from "axios";

import "./Assets/SCSS/App.scss";

import {
  Navigation,
  Home,
  Ranking,
  Casual,
  Categories,
  Register,
  TopPlayers,
} from "./Components";

const App = (props) => {
  const [userInfo, setUserInfo] = useState(null);
  const [ranking, setRanking] = useState([{ score: "", user: "" }]);
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");

  console.log(ranking);

  // getting logged in user data
  useEffect(() => {
    axios
      .get(`https://trivia-app-server.herokuapp.com/api/users/user`, {
        headers: { token: localStorage.token },
      })
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // getting ranking scores array by username
  useEffect(() => {
    axios
      .get(`https://trivia-app-server.herokuapp.com/api/score/ranking`)
      .then((res) => {
        setRanking(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return ( 
    <div className="App">
      <Navigation userInfo={userInfo} ranking={ranking}/>
      <Outlet />
    </div>

  )
};

export default App;
