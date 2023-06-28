import { useSelector } from "react-redux";

export const symptomQuestions = [
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

export const symptomLabels = [
    'Not at all',
    'A little',
    'Quite a bit',
    'Extremely'
]

// Accepts an array of responses to symptom questionnaire, return sub-scores and total scores.
function calcualateScore(responses) {
    return responses.reduce(
        (accumulator, currentVal) => accumulator + currentVal,
        0
    );
}

export default function SymptomResults() {

    const symptomResponses = useSelector((state) => state.symptom.value);

    const link = "http://localhost:5000/symptom/" + symptomResponses.join('');

    return (
        <>
            <p>Processing your responses.</p>
            <p>Total score: {calcualateScore(symptomResponses)}</p>
            <a href={link} download="example.pdf" target="_blank" rel="noreferrer">
                <button>Download Results</button>
            </a>
        </>
    )
}