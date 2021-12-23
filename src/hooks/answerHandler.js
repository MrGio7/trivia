import { useState } from "react";

export default function useAnswerHandler(question, timer, setTimer) {
  const [score, setScore] = useState(0);

  const answerHandler = (ev) => {
    if (ev.target.value === question.correct) {
      ev.target.className = "correct";
      ev.target.parentElement.className = "answers locked";
      setScore(score + 100 * timer);
      setTimer(3);
      setTimeout(() => {
        ev.target.className = "";
        ev.target.parentElement.className = "answers";
      }, 3000);
    } else {
      ev.target.className = "incorrect";
      ev.target.parentElement.childNodes.forEach(
        (currentValue) =>
          currentValue.value === question.correct &&
          (currentValue.className = "correct")
      );
      ev.target.parentElement.className = "answers locked";
      setTimer(3);
      setTimeout(() => {
        ev.target.parentElement.childNodes.forEach(
          (currentValue) => (currentValue.className = "")
        );
        ev.target.parentElement.className = "answers";
      }, 3000);
    }
  };

  return {answerHandler, score};
}
