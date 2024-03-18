import React from "react"
import { QuizContext } from "../App"

export default function Button (props) {
    const value = React.useContext(QuizContext)
    function changeState() {
        value.gameState == "start" && (
          value.setGameState("check")
        )
    
        value.gameState == "check" && (
          value.setGameState("again")
        )
    
        value.gameState == "again" && (
          value.setGameState("start")
        )
      }

    const buttonText = value.gameState.charAt(0).toUpperCase() + value.gameState.slice(1)
    return (
        <button className={props.className} onClick={changeState}>{buttonText}</button>
    )
}