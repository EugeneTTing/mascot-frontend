import { useState } from "react";
import Questionnaie from "./questionnaire";
import "./risk.css";

export default function Risk () {

    const [page, setPage] = useState(0)

    return (
        <>
            <h1>Risk</h1>
            <p>User Answers some questions.</p>
            <div>
                <button>About you</button>
                <button>Your family</button>
                <button>Reproductive heatlh</button>
                <button>Medical history</button>
            </div>
            
            <Questionnaie page={page}/>
            
        </>
    )
}