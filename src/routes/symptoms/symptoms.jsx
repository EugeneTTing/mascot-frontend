import React, {useState} from "react";
import "./symptoms.css";
import { useDispatch } from "react-redux";
import { append } from "../../redux/symptomSlice";

const questions = [
    "Heart beating quickly or strongly.",
    "Feeling tense or nervous.",
    "Difficulty in sleeping.",
    "Excitable.",
    "Attacks of panic.",
    "Difficulty in concentrating.",
    "Feeling tired or lacking in energy.",
    "Loss of interest in most things",
    "Feeling unhappy or depressed.",
    "Crying spells",
    "Irratability",
    "Feeling dizzy or faint.",
    "Pressure or tightness in head or body.",
    "Parts of budy feel numb or tingling.",
    "Headaches.",
    "Muscle and joint pains.",
    "Loss of feeling in hands or feet.",
    "Breating difficulties.",
    "Hot flushes.",
    "Sweating at night.",
    "Loss of interest in sex.",
]

const Questions = ({index}) => {
    return (
        <>
            <div className='question' key={index}>
                <p>{questions[index]}</p>
            </div>
        </>
    )
}

const SymptomButtons = ({prev, next, response}) => {

    const labels = [
        'Not at all',
        'A little',
        'Quite a bit',
        'Extremely'
    ]

    function symptomClickHandler(severity) {
        response(severity);
        next();
    }

    return (
        <>
            <button onClick={prev}>Previous</button>
            {labels.map((label, index) => {
                return (
                    <button key={index} 
                        onClick={() => symptomClickHandler(index)}>
                        {label}
                    </button>
                )
            })}
        </>
    )
}

export default function Symptoms () {

    const [questionIndex, setQuestionIndex] = useState(0);
    const dispatch = useDispatch();

    function prevQuestion() {
        if (questionIndex > 0) {
            setQuestionIndex(questionIndex - 1);
        }
    }

    function nextQuestion() {
        if (questionIndex < 21) {
            setQuestionIndex(questionIndex + 1);
        }
    }

    function recordResponse(severity) {
        dispatch(append([questionIndex, severity]));
    }

    return (
        <>
            <h1>Symptoms</h1>
            <h3>Please rate the extent to which you are affected by the following symptoms.</h3>
            <p>Q: {questionIndex + 1}/21</p>
            <Questions index={questionIndex}/>
            <SymptomButtons 
                prev={prevQuestion} 
                next={nextQuestion} 
                response={recordResponse}/>
        </>
    )
}