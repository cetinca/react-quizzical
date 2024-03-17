import React from "react"
import { QuizContext } from "../App"

export default function Button (props) {
    const value = React.useContext(QuizContext)
    return (
        <button onClick={value.changeState}>{props.children}</button>
    )
}