import { useState } from "react";
import Form from "../components/Form";
import { FormProvider } from "../context/FormContext";
import "./routes.css";
import { RiskProvider } from "../context/RiskContext";

export default function Risk () {

    const [start, setStart] = useState(false)

    return (
        <>

            <h1>Risk Calculator</h1>

            {!start &&
                <>
                    <div className="info-text">
                        <p>There is a complex and highly variable risk and benefit profile 
                        associated with HRT use, which is influenced by age, time since 
                        menopause onset, and clinical factors such as family history of 
                        chronic illnesses, to name a few. After completing this questionnaire,
                        you will be provided with a personalised risk assessment based on the 
                        data you submit, along with expert advice regarding your menopausal 
                        health.</p>
                        <p>We ask that you complete the questionnaire as thoroughly
                        and as accurately as possible to ensure that you receive accurate
                        advice. The risk assessment provided is truly an estimate, and may
                        not take into account other factors which affect you. Please consult
                        with a doctor for further advice.</p>
                        <p className="disclaimer">Your data is sent to a server to calculate 
                        your health risks, but is discarded and not saved.</p>
                    </div>
            
                    <button className="start-button" onClick={() => {setStart(true)}}>
                        Start
                    </button>
                </>

            }

            {start &&
                <RiskProvider>
                    <FormProvider>
                        <Form/>
                    </FormProvider>
                </RiskProvider>
            }
            
        </>
    )
}