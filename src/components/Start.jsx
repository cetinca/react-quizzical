import Button from "./Button"
import { QuizContext } from "../App";
import React from "react";


function Start() {
    const value = React.useContext(QuizContext)
    return (
        <div className='start'>
            <h1 className='start--title'>Quizzical</h1>
            <p className='start--description'>Quizzical</p>
        </div>
    )
}

export default Start