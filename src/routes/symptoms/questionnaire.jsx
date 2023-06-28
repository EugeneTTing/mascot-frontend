import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { append } from "../../redux/symptomSlice";
import { symptomQuestions, symptomLabels } from "./symptomResults";



const Questions = ({index}) => {
    return (
        <>
            <div className='question' key={index}>
                <p>{symptomQuestions[index]}</p>
            </div>
        </>
    )
}

const SymptomButtons = ({prev, next, response}) => {

    function symptomClickHandler(severity) {
        response(severity);
        next();
    }

    return (
        <>
            <button onClick={prev}>Previous</button>
            {symptomLabels.map((label, index) => {
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

export default function Questionnaire({setCompleted}) {

    const [questionIndex, setQuestionIndex] = useState(0);
    const dispatch = useDispatch();

    function prevQuestion() {
        if (questionIndex > 0) {
            setQuestionIndex(questionIndex - 1);
        }
    }

    function nextQuestion() {
        if (questionIndex < 20) {
            setQuestionIndex(questionIndex + 1);
        } else if (questionIndex === 20) {
            setCompleted(true);
        }
    }

    function recordResponse(severity) {
        dispatch(append([questionIndex, severity]));
    }

    return (
        <>
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