import { QuizContext } from "../App";
import React from "react";
import Button from "./Button";


function Start() {
    const value = React.useContext(QuizContext)
    return (
        <div className='start'>
            <h1 className='start--title'>Quizzical</h1>
            <p className='start--description'>Play a question game</p>
            <Button className='start--button'/>
        </div>
    )
}

export default Start