import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./Assets/SCSS/App.scss";

import { Navigation, Home, Ranking } from "./Components";

const App = props => {
  const [userInfo, setUserInfo] = useState({});

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

  return (
    <div className="app">
      <Route
        path="/"
        render={props => <Navigation {...props} userInfo={userInfo} />}
      />

      <Route exact path="/" component={Home} />

      <Route
        exact
        path="/ranking"
        render={props => <Ranking {...props} userInfo={userInfo} />}
      />
    </div>
  );
};

export default App;
