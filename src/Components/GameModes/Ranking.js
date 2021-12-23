import React, { useEffect } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
import useTimer from "../../hooks/useTimer";
import useQuestionList from "../../hooks/useQuestionList";
import useAnswerHandler from "../../hooks/answerHandler";

const Ranking = () => {
  const userInfo = useOutletContext()[0];
  const {questions, setQuestions, question, loader} = useQuestionList(20, "hard", "");
  const {timer, setTimer} = useTimer(20);
  const {answerHandler, score} = useAnswerHandler(question, timer, setTimer);

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

  return loader ? (
    <div className="loader" />
  ) : !userInfo ? (
    <div className="warning">
      <h1>Please Log In first</h1>
    </div>
  ) : (
    <div className="gameplay">
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
