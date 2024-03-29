import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import useQuestionList from "../../hooks/useQuestionList";
import useTimer from "../../hooks/useTimer";
import useAnswerHandler from "../../hooks/answerHandler";

const Categories = () => {
  const difficulty = useOutletContext()[3];
  const category = useOutletContext()[5];
  const {questions, setQuestions, question, loader} = useQuestionList(20, difficulty, category);
  const {timer, setTimer} = useTimer(20);
  const {answerHandler, score} = useAnswerHandler(question, timer, setTimer);

  useEffect(() => {
    if (timer === 0) {
      if(questions.length > 1) {
        setQuestions(questions.slice(1));
        setTimer(20);
      } else {
        alert(`Congrats, your score is ${score}`);
        location.replace("/trivia");
      }
    }
  }, [timer])


  return loader ? (
    <div className="loader" />
  ) : (
    <div className="gameplay">
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

export default Categories;
