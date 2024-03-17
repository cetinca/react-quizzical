import React from "react";
import { useId } from "react";
import Answer from "./Answer";
import { decode } from "html-entities";

export default function Question(props) {
    const question = decode(props.question.question)
    let answerArray = [props.question.correct_answer, ...props.question.incorrect_answers]
    answerArray = answerArray.map(item => decode(item))
    
    function generateAnswers(array) {
        const answers = []
        for (let i = 0; i < array.length; i++) {
            const answerId = useId()
            const currentAnswer = array[i]
            answers.push({ id: answerId, selected: false, answer: currentAnswer })
        }
        return answers
    }

    const [answers, setAnswers] = React.useState(generateAnswers(answerArray))

    const mappedAnswers = answers.map(answer => {
        return (
            <Answer onClick={(event) => toggleSelected(answer.id)} id={answer.id} key={answer.id} selected={answer.selected}>{answer.answer}</Answer>
        )
    })

    function toggleSelected(answerId) {
        setAnswers(answers => {
            const new_answers = []
            for (let i = 0; i < answers.length; i++) {
                const answer = answers[i]
                answer.id == answerId && new_answers.push({...answer, selected: true}) || new_answers.push({...answer, selected: false})
            }
            console.log(new_answers)
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