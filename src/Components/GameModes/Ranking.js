import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { decodeHTML } from "entities";

import "../../Assets/SCSS/Ranking.scss";

const Ranking = () => {
  const [questions, setQuestions] = useState([
    {
      answers: [],
      category: "",
      correct: "",
      question: ""
    }
  ]);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);

  const question = questions[0];

  useEffect(() => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=20&difficulty=hard&type=multiple`
      )
      .then(res => {
        const filteredQuestions = res.data.results.map(each => {
          each.incorrect_answers.push(each.correct_answer);
          each.incorrect_answers.sort(
            (elem1, elem2) => Math.random() - Math.random()
          );

          return {
            category: each.category,
            question: decodeHTML(each.question),
            answers: each.incorrect_answers.map(each => decodeHTML(each)),
            correct: decodeHTML(each.correct_answer)
          };
        });

        setQuestions(filteredQuestions);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const answerHandler = ev => {
    if (ev.target.value === question.correct) {
      ev.target.className = "correct";
      document.getElementsByClassName("overly")[0].className = "overly cover";
      setScore(score + 100 * timer);
      setTimer(4);
      setTimeout(() => {
        questions.shift();
        setQuestions([...questions]);
        setTimer(20);
        document.getElementsByClassName("correct")[0].className = "";
        document.getElementsByClassName("overly")[0].className = "overly";
      }, 3000);
    } else {
      ev.target.className = "incorrect";
      document.getElementsByClassName("overly")[0].className = "overly cover";
      setTimer(4);
      setTimeout(() => {
        questions.shift();
        setQuestions([...questions]);
        setTimer(20);
        document.getElementsByClassName("incorrect")[0].className = "";
        document.getElementsByClassName("overly")[0].className = "overly";
      }, 3000);
    }
  };

  // Timer useInterval Function

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  // Setting up timer

  useInterval(() => {
    setTimer(timer - 1);
    if (timer === 0) {
      questions.shift();
      setQuestions([...questions]);
      setTimer(20);
    }
  }, 1000);

  return (
    <div className="ranking">
      <div className="category">
        <h2>{question.category}</h2>
        <h2>{timer}</h2>
        <h2>score: {score}</h2>
      </div>

      <div className="question">
        <p>{question.question} </p>
      </div>

      <div className="answers">
        <div className="overly" />
        {question.answers.map((object, index) => {
          return (
            <input
              key={index}
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
