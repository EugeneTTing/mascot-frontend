import "./routes.css";
import SymptomTracker from "../components/SymptomTracker";

export default function Symptoms () {


    return (
        <>

            <h1>Symptoms</h1>

            <div className="info-text">
                <p>The Greene Climacteric Scale is widely used to measure symptoms of 
                menopause, and can be used to assess changes in symptoms 
                before and after the commencing of HRT.</p>
            </div>

            <SymptomTracker/>

        </>
    )
}