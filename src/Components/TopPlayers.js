import React from "react";

import "../Assets/SCSS/TopPlayers.scss";

const TopPlayers = props => {
  let mapped = props.ranking.map(each => each);

  let sorted = mapped.sort((a, b) => b.score - a.score);

  let reduced = sorted.reduce((acc, cur) => {
    const x = acc.find(item => item.user === cur.user);

    if (!x) {
      return acc.concat([cur]);
    } else {
      return acc;
    }
  }, []);

  return (
    <div className="TopPlayers">
      <div className="header">
        <h1>Here are our game TOP PLAYERS:</h1>
      </div>

      <div className="body">
        {reduced.map((each, index) => {
          return (
            <div key={index}>
              <h2>{index + 1}</h2>
              <h3>{each.score} </h3>
              <h4>{each.name} </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopPlayers;
