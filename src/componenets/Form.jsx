import FormPages from "./FormPages"
import useFormContext from "../hooks/useFormContext"
import useRiskContext from "../hooks/useRiskContext"
import "./components.css"
import { useEffect, useState } from "react"
import Display from "./Display"

const Form = () => {

    const {
        title,
        page,
        data,
        handlePrev,
        handleNext,
        pageComplete,
        heightUnit,
        weightUnit
    } = useFormContext()

    const {
        setResults
    } = useRiskContext()

    const [error, setError] = useState(false)

    const [submitted, setSubmitted] = useState(false)

    const [receivedResult, setReceivedResult] = useState(false)

    const [loading, setLoading] = useState(false)

    function dataToJSON() {

        // Convert to metric units if required
        if (weightUnit === "lb") {
            let newWeight = Math.round(parseFloat(data.weight) / 2.2).toString()
            data.weight = newWeight
        }

        if (heightUnit === "ft") {
            let newFeet = parseFloat(data.heightfeet * 30.48)
            let newInches = parseFloat(data.heightinches * 2.54)
            let newHeight = Math.round(newFeet + newInches).toString()
            data.height = newHeight
        }

        // Delete properties from data to remove unneccesary or empty fields
        [
            "heightfeet",
            "heightinches",
            "m_br_cancer",
            "m_br_cancer_2",
            "m_ov_cancer",
            "m_pa_cancer",
            "f_pr_cancer",
            "f_pa_cancer",
            "t_br_cancer",
            "t_ov_cancer",
            "t_pa_cancer",
            "has_children",
            "menopause",
            "coil"
        ].forEach(p => delete data[p])

        Object.keys(data).filter(key => data[key] === "").forEach(key => delete data[key])

        return JSON.stringify(data)

    }

    const handleSubmit = e => {

        if (page === 5) {
            e.preventDefault()
    
            // HTTP request to backend API
            let xhr = new XMLHttpRequest()
            xhr.open("POST", `${process.env.REACT_APP_API_URL}/risk`, true)
            xhr.setRequestHeader("Content-Type", "application/json")
    
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    try {
                        let res = JSON.parse(this.responseText)
                        console.log(res)
                        setResults(res)
                        setLoading(false)
                        setReceivedResult(true)
                    } catch {
                        setLoading(false)
                        setError(true)
                    }
                } else {
                    setLoading(false)
                    setError(true)
                }
            }
    
            const dataJSON = dataToJSON()
    
            xhr.send(dataJSON)
    
            setSubmitted(true)
            setLoading(true)
        }

    }

    // Sets width of form progress bar
    useEffect(() => {
        let elem = document.getElementById("progress")
        let width = (page / 5) * 100 + "%"
        elem.style.width = width
    }, [page])

    const content = (

        <>
            {
                !submitted && 
                <form onSubmit={handleSubmit}>

                    <div className="form">

                        <div className="progress-bar">
                            <span id="progress"/>
                        </div>

                        <h2>{title[page]}</h2>
                        
                        <FormPages/>

                    </div>

                    <div className="form-control">
                        <button type="button" onClick={handlePrev} hidden={page === 0}>Previous Page</button>

                        <button type="button" onClick={handleNext} hidden={page === 5} disabled={!pageComplete[page]}>Next Page</button>

                        <button type="submit" hidden={!(page === 5)}>Submit</button>
                    </div>
                    
                </form>
            }


            {loading &&
                <div className="loader-container">
                    <span className="loader"></span>
                </div>
            }

            {receivedResult &&
                <Display/>
            }

            {error &&
                <>
                
                    <h1 style={{textAlign: "center"}}>Oops!</h1>
                    <p style={{textAlign: "center"}}>Sorry, an unexpected error has occurred. Please try again later.</p>

                </>
            }
        </>
    )

    return content
}

export default Form