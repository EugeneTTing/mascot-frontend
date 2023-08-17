import { useEffect, useState } from "react"

const questionArray = [

    "Heart beating quickly or strongly",
    "Feeling tense or nervous",
    "Difficulty in sleeping",
    "Excitable",
    "Attacks of anxiety, panic",
    "Difficulty in concentrating",
    "Feeling tired or lacking in energy",
    "Loss of interest in most things",
    "Feeling unhappy or depressed",
    "Crying spells",
    "Irritability",
    "Felling dizzy or faint",
    "Pressure or tightness in head",
    "Parts of body feel numb",
    "Headaches",
    "Muscle and joint pains",
    "Loss of feeling in hands or feet",
    "Breathing difficulties",
    "Hot flushes",
    "Sweating at night",
    "Loss of interest in sex"

]

const SymptomTracker = () => {

    const [question, setQuestion] = useState(0)

    const [data, setData] = useState({})

    const [completed, setCompleted] = useState(false)

    const handleChange = e => {
        setQuestion(prev => (prev + 1))

        const value = e.target.value
        setData(prevData => {
            setData({
                ...prevData,
                [question]: value
            })
        })
    }

    useEffect(() => {

        if (question === 21) {
            setCompleted(true)
        } else {
            let elem = document.getElementById("progress")
            let width = (question / 20) * 100 + "%"
            elem.style.width = width
        }

    }, [question])


    const content = (
        <>
            <div className="progress-bar">
                <span id="progress"/>
            </div>

            {
                !completed ?
                <>

                    <h3>Please rate the extent to which you experience the following symptom:</h3>

                    <div className="symptom">
                        <p>Q{question + 1}: {questionArray[question]}</p>
                    </div>

                    <div className="form-control center">
                        <button value={0} onClick={handleChange}>Not at all</button>
                        <button value={1} onClick={handleChange}>A little</button>
                        <button value={2} onClick={handleChange}>Quite a bit</button>
                        <button value={3} onClick={handleChange}>Extremely</button>
                    </div>
                </> 
                :
                <>
                    <h2>Report</h2>
                    <h3>Total Score: {Object.values(data).map(v => parseInt(v)).reduce((partialSum, a) => partialSum + a, 0)}</h3>
                    <h3>Psychological Symptoms: {Object.values(data).slice(0, 11).map(v => parseInt(v)).reduce((partialSum, a) => partialSum + a, 0)}</h3>
                    <h3>Somatic (Physical) Symptoms: {Object.values(data).slice(11, 18).map(v => parseInt(v)).reduce((partialSum, a) => partialSum + a, 0)}</h3>
                    <h3>Vasomotor Symptoms: {Object.values(data).slice(18, 20).map(v => parseInt(v)).reduce((partialSum, a) => partialSum + a, 0)}</h3>

                </>
            }

        </>
    )

    return content
}

export default SymptomTracker