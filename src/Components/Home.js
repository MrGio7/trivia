import React from "react";
import { Link } from "react-router-dom";

import "../Assets/SCSS/Home.scss";

const Home = props => {

  //  Casual Handler

  const modalBtnHandler = ev => {
    ev.preventDefault();
    const modal = document.getElementsByClassName("casualModal")[0];
    modal.style.display = "block";
  };

  const modalCloseHandler = ev => {
    ev.preventDefault();
    const modal = document.getElementsByClassName("casualModal")[0];
    modal.style.display = "none";
  };

  const chooseDifficulty = ev => {
    props.setDifficulty(ev.target.value.toLowerCase());
  };

  // Casual Handler END

  // Category Handler

  const categoryModalBtn = ev => {
    ev.preventDefault();
    const modal = document.getElementsByClassName("categoryDifModal")[0];
    modal.style.display = "block";
  }

  const chooseCatDifficulty = ev => {
    ev.preventDefault();

    props.setDifficulty(ev.target.value.toLowerCase());

    const modal = document.getElementsByClassName("categoryDifModal")[0];
    const catModal = document.getElementsByClassName("categoryModal")[0];

    modal.style.display = "none";
    catModal.style.display = "block";
  }

  const chooseCategory = ev => {
    props.setCategory(ev.target.id)
  }

  const difModalClose = ev => {
    ev.preventDefault();
    const modal = document.getElementsByClassName("categoryDifModal")[0];
    modal.style.display = "none";
  };

  const catModalClose = ev => {
    ev.preventDefault();
    const modal = document.getElementsByClassName("categoryModal")[0];
    modal.style.display = "none";
  };

    // Category Handler END
  

  return (
    <div className="home">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>

      {/* Ranking */}

      <Link to="/ranking">
        <button className="button">
          <span>Ranking </span>
        </button>
      </Link>

       {/* Ranking END */}

      {/* Casual */}

      <button className="button" onClick={modalBtnHandler}>
        <span>Casual </span>
      </button>

      <div className="casualModal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={modalCloseHandler}>
              &times;
            </span>
            <h2>Please Choose Difficulty</h2>
          </div>
          <div className="modal-body">
            <Link to="/casual">
              <input type="button" value="Easy" onClick={chooseDifficulty} />
            </Link>
            <Link to="/casual">
              <input type="button" value="Medium" onClick={chooseDifficulty} />
            </Link>
            <Link to="/casual">
              <input type="button" value="Hard" onClick={chooseDifficulty} />
            </Link>
          </div>
        </div>
      </div>

      {/* Casual END */}

{/* Select Category */}

      <button className="button" onClick={categoryModalBtn}>
        <span>Select Category</span>
      </button>

      <div className="categoryDifModal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={difModalClose}>
              &times;
            </span>
            <h2>Please Choose Difficulty</h2>
          </div>
          <div className="modal-body">
            <input type="button" value="Easy" onClick={chooseCatDifficulty} />
            <input type="button" value="Medium" onClick={chooseCatDifficulty} />
            <input type="button" value="Hard" onClick={chooseCatDifficulty} />
          </div>
        </div>
      </div>

      <div className="categoryModal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={catModalClose}>
              &times;
            </span>
            <h2>Please Choose Category</h2>
          </div>
          <div className="modal-body">
            <Link to="/categories">
              <input
                type="button"
                value="Films"
                id="11"
                onClick={chooseCategory}
              />
            </Link>
            <Link to="/categories">
              <input
                type="button"
                value="Music"
                id="12"
                onClick={chooseCategory}
              />
            </Link>
            <Link to="/categories">
              <input
                type="button"
                value="Celebrities"
                id="26"
                onClick={chooseCategory}
              />
            </Link>
            <Link to="/categories">
              <input
                type="button"
                value="Vehicles"
                id="28"
                onClick={chooseCategory}
              />
            </Link>
            <Link to="/categories">
              <input
                type="button"
                value="Sports"
                id="21"
                onClick={chooseCategory}
              />
            </Link>
            <Link to="/categories">
              <input
                type="button"
                value="Anime/Manga"
                id="31"
                onClick={chooseCategory}
              />
            </Link>
            <Link to="/categories">
              <input
                type="button"
                value="Cartoon/Animations"
                id="32"
                onClick={chooseCategory}
              />
            </Link>
            <Link to="/categories">
              <input
                type="button"
                value="Mathematics"
                id="19"
                onClick={chooseCategory}
              />
            </Link>
            <Link to="/categories">
              <input
                type="button"
                value="Geography"
                id="22"
                onClick={chooseCategory}
              />
            </Link>
            <Link to="/categories">
              <input
                type="button"
                value="Art"
                id="25"
                onClick={chooseCategory}
              />
            </Link>
            <Link to="/categories">
              <input
                type="button"
                value="History"
                id="23"
                onClick={chooseCategory}
              />
            </Link>
            <Link to="/categories">
              <input
                type="button"
                value="Mythology"
                id="20"
                onClick={chooseCategory}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Select Category END */}

      <button className="button">
        <span>Leave Feedback</span>
      </button>
    </div>
  );
};

export default Home;
