import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { decodeHTML } from "entities";

import "../../Assets/SCSS/Ranking.scss";
import { useOutletContext } from "react-router-dom";
import useTimer from "../../hooks/useTimer";

const Ranking = () => {
  const [userInfo] = useOutletContext();
  const [questions, setQuestions] = useState([
    {
      answers: [],
      category: "",
      correct: "",
      question: "",
    },
  ]);
  const [score, setScore] = useState(0);
  const [loader, setLoader] = useState(true);
  const {timer, setTimer} = useTimer(20);

  const question = questions[0];

  useEffect(() => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=20&difficulty=hard&type=multiple`
      )
      .then((res) => {
        const filteredQuestions = res.data.results.map((each) => {
          each.incorrect_answers.push(each.correct_answer);
          each.incorrect_answers.sort(() => Math.random() - Math.random());

          return {
            category: each.category,
            question: decodeHTML(each.question),
            answers: each.incorrect_answers.map((each) => decodeHTML(each)),
            correct: decodeHTML(each.correct_answer),
          };
        });

        setQuestions(filteredQuestions);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (timer === 0) {
      if(questions.length > 1) {
        setQuestions(questions.slice(1));
        setTimer(20);
      } else {
        scoreDeployHandler();
        alert(`Congrats, your score is ${score}`);
        location.replace("/trivia");
      }
    }
  }, [timer])

  const scoreDeployHandler = () => {
    const userScore = { score: score, id_user: userInfo.id };

    axios
      .post(`https://trivia-app-server.herokuapp.com/api/score/add`, userScore)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const answerHandler = (ev) => {
    if (ev.target.value === question.correct) {
      if (questions.length > 1) {
        ev.target.className = "correct";
        ev.target.parentElement.className = 'answers locked'
        setScore(score + 100 * timer);
        setTimer(3);
        setTimeout(() => {
          setQuestions(questions.slice(1));
          setTimer(20);
          ev.target.className = "";
          ev.target.parentElement.className = 'answers'
        }, 3000);
      } else {
        ev.target.className = "correct";
        ev.target.parentElement.className = 'answers locked'
        setScore(score + 100 * timer);
        setTimer(3);
      }
    } else {
      if (questions.length > 1) {
        ev.target.className = "incorrect";
        ev.target.parentElement.childNodes.forEach((currentValue) => currentValue.value === question.correct && (currentValue.className = "correct"));
        ev.target.parentElement.className = 'answers locked'
        
        setTimer(3);
        setTimeout(() => {
          setQuestions(questions.slice(1));
          setTimer(20);
          ev.target.parentElement.childNodes.forEach((currentValue) => currentValue.className = "");
          ev.target.parentElement.className = 'answers'
        }, 3000);
      } else {
        ev.target.className = "incorrect";
        ev.target.parentElement.childNodes.forEach((currentValue) => currentValue.value === question.correct && (currentValue.className = "correct"));
        ev.target.parentElement.className = 'answers locked'
        setTimer(3);
      }
    }
  };

  return loader ? (
    <div className="loader" />
  ) : !userInfo ? (
    <div className="warning">
      <h1>Please Log In first</h1>
    </div>
  ) : (
    <div className="ranking">
      <h3>SCORE: {score}</h3>
      <div className="category">
        <h2>{question.category}</h2>
        <h2>{timer}</h2>
      </div>

      <div className="question">
        <p>{question.question} </p>
      </div>

      <div className="answers">
        {question.answers.map((object, index) => {
          return (
            <input
              key={index}
              id={object}
              type="button"
              value={object}
              onClick={answerHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Ranking;
