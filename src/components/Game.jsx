import { QuizContext } from "../App";
import React, { useId } from "react";
import Question from "./Question";
import Button from "./Button";

function Game() {
  const value = React.useContext(QuizContext)
  const questions = value.data
  
  return (
    <div className="check">
      <div className="check--container">
      <h1 className="check--title">Questions</h1>
      {questions.map(item => {
        return <Question key={useId()} question={item} />
      })}
      </div>
      <Button className='start--button'/>
    </div>
  )
}

export default Game