import React from "react";
import { useId } from "react";
import Answer from "./Answer";
import { decode } from "html-entities";
import { QuizContext } from "../App";

function shuffleArray(arr) {
    const newArr = arr.slice()
    for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr
}

export default function Question(props) {
    const value = React.useContext(QuizContext)
    const question = decode(props.question.question)
    const correctAnswer = props.question.correct_answer
    let answerArray = [correctAnswer, ...props.question.incorrect_answers]
    answerArray = shuffleArray(answerArray)
    answerArray = answerArray.map(item => decode(item))

    function generateAnswers(array) {
        const answers = []
        for (let i = 0; i < array.length; i++) {
            const answerId = useId()
            const currentAnswer = array[i]
            answers.push({ id: answerId, selected: null, answer: currentAnswer })
        }
        return answers
    }

    const [answers, setAnswers] = React.useState(generateAnswers(answerArray))

    const mappedAnswers = answers.map(answer => {
        const isAgain = value.gameState == "again"
        return (
            <Answer
                onClick={(event) => toggleSelected(answer.id)}
                id={answer.id}
                key={answer.id}
                correctAnswer={isAgain && correctAnswer}
                selected={answer.selected} >
                {answer.answer}</Answer>
        )
    })

    function toggleSelected(answerId) {
        if (value.gameState == "again") {
            return
        }
        setAnswers(answers => {
            const new_answers = []
            for (let i = 0; i < answers.length; i++) {
                const answer = answers[i]
                answer.id == answerId && new_answers.push({ ...answer, selected: answer.answer }) || new_answers.push({ ...answer, selected: null })
            }
            return new_answers;
        })
    }


    return (
        <div className="question">
            <p className="question--question">{question}</p>
            <div className="question--answers">
                {mappedAnswers}
            </div>
        </div>
    )
}