import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./Assets/SCSS/App.scss";

import { Navigation, Home, Ranking, TopPlayers, Casual } from "./Components";

const App = props => {
  const [userInfo, setUserInfo] = useState({});
  const [ranking, setRanking] = useState([{ score: "", user: "" }]);

  // getting logged in user data
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/users/user`, {
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
      .get(`http://localhost:5000/api/score/ranking`)
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

      <Route exact path="/" component={Home} />

      <Route
        exact
        path="/ranking"
        render={props => <Ranking {...props} userInfo={userInfo} />}
      />

      <Route exact path="/casual" component={Casual} />
    </div>
  );
};

export default App;
