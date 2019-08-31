import React from "react";
import { Link } from "react-router-dom";

import "../Assets/SCSS/Home.scss";
import Art from "../Assets/Img/Categories/Art.png";
import Casual from "../Assets/Img/Categories/Casual.png";
import Geography from "../Assets/Img/Categories/Geography.png";
import History from "../Assets/Img/Categories/History.png";
import POP from "../Assets/Img/Categories/POP.png";
import Ranking from "../Assets/Img/Categories/Ranking.png";
import Science from "../Assets/Img/Categories/Science.png";
import Sport from "../Assets/Img/Categories/Sport.png";

const Home = props => {
  return (
    <div className="home">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>

      <button className="button">
        <span><img src={Ranking} /> Ranking </span>
      </button>
      <button className="button">
        <span><img src={Casual} />Casual </span>
      </button>
      <button className="button">
        <span>Select Category</span>
      </button>
      <button className="button">
        <span>Leave Feedback</span>
      </button>
    </div>
  );
};

export default Home;
