import React, { useState, useEffect } from "react";
import axios from "axios";
import { XmlEntities } from "html-entities";

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
            question: each.question,
            answers: each.incorrect_answers,
            correct: each.correct_answer
          };
        });

        setQuestions(filteredQuestions);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const question = questions[0];

  const answerHandler = ev => {
    if (ev.target.value === question.correct) {
      ev.target.className = "correct";
      document.getElementsByClassName("overly")[0].className = "overly cover";
      setScore(score + 100);
      setTimeout(() => {
        questions.shift();
        setQuestions([...questions]);
        document.getElementsByClassName("correct")[0].className = "";
        document.getElementsByClassName("overly")[0].className = "overly";
      }, 3000);
    } else {
      ev.target.className = "incorrect";
      document.getElementsByClassName("overly")[0].className = "overly cover";
      setTimeout(() => {
        questions.shift();
        setQuestions([...questions]);
        document.getElementsByClassName("incorrect")[0].className = "";
        document.getElementsByClassName("overly")[0].className = "overly";
      }, 3000);
    }
  };

  console.log(question);
  console.log(score);

  return (
    <div className="ranking">
      <div className="category">
        <h2>{question.category}</h2>
      </div>

      <div className="question">
        <p>{XmlEntities.decode(question.question)} </p>
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
