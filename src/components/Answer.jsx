import React from "react";
import { QuizContext } from "../App";

export default function Answer({ onClick, selected, children, correctAnswer}) {
    const value = React.useContext(QuizContext)
    const isAgain = value.gameState == "again"
    const defineClass = isAgain && (children == correctAnswer) && "answer answer-green" || (selected && "answer answer-selected" || "answer")
    return (
        <p className={defineClass} onClick={onClick}>{children}</p>
    )
}