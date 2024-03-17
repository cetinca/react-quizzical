import { QuizContext } from "../App";
import React, { useId } from "react";
import Question from "./Question";

function Game() {
  const { gameState, data } = React.useContext(QuizContext)

  const questions = data.results
  
  return (
    <div className="check">
      <h1>{gameState}</h1>
      {questions.map(item => {
        return <Question key={useId()} question={item} />
      })}
    </div>
  )
}

export default Game