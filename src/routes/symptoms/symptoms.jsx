import "./symptoms.css";
import Questionnaire from "./questionnaire";
import { useState } from "react";
import SymptomResults from "./symptomResults";

export default function Symptoms () {

    const [completed, setCompleted] = useState(false);

    return (
        <>
            <h1>Symptoms</h1>
            {completed ? <SymptomResults/> : <Questionnaire setCompleted={setCompleted}/>}
        </>
    )
}