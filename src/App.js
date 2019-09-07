import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./Assets/SCSS/App.scss";

import {
  Navigation,
  Home,
  Ranking,
  Casual,
  Categories,
  Register,
  TopPlayers
} from "./Components";

const App = props => {
  const [userInfo, setUserInfo] = useState(null);
  const [ranking, setRanking] = useState([{ score: "", user: "" }]);
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");

  console.log(ranking);

  // getting logged in user data
  useEffect(() => {
    axios
      .get(`https://trivia-app-server.herokuapp.com/api/users/user`, {
        headers: { token: localStorage.token }
      })
      .then(res => {
        setUserInfo(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // getting ranking scores array by username
  useEffect(() => {
    axios
      .get(`https://trivia-app-server.herokuapp.com/api/score/ranking`)
      .then(res => {
        setRanking(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="app">
      <Route
        path="/"
        render={props => (
          <Navigation {...props} userInfo={userInfo} ranking={ranking} />
        )}
      />

      <Route
        exact
        path="/"
        render={props => (
          <Home
            {...props}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            category={category}
            setCategory={setCategory}
          />
        )}
      />

      <Route
        exact
        path="/ranking"
        render={props => (
          <Ranking
            {...props}
            userInfo={userInfo}
            ranking={ranking}
            setRanking={setRanking}
          />
        )}
      />

      <Route
        exact
        path="/casual"
        render={props => (
          <Casual
            {...props}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />
        )}
      />

      <Route
        exact
        path="/categories"
        render={props => (
          <Categories
            {...props}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            category={category}
            setCategory={setCategory}
          />
        )}
      />

      <Route
        exact
        path="/top"
        render={props => <TopPlayers {...props} ranking={ranking} />}
      />

      <Route exact path="/register" component={Register} />
    </div>
  );
};

export default App;
