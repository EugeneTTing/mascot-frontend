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
        setPage,
        data,
        pageValid
    } = useFormContext()

    const {
        setResults
    } = useRiskContext()

    const [submitted, setSubmitted] = useState(false)

    const [receivedResult, setReceivedResult] = useState(false)

    const handlePrev = () => setPage(prev => prev - 1)

    const handleNext = () => setPage(prev => prev + 1)

    const handleSubmit = e => {

        e.preventDefault()
        console.log(JSON.stringify(data))

        let xhr = new XMLHttpRequest()
        xhr.open("POST", "http://127.0.0.1:5000/risk", true)
        xhr.setRequestHeader("Content-Type", "application/json")

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(this.responseText)
                let res = JSON.parse(this.responseText)
                setResults(res)
                setReceivedResult(true)
            }
        }

        const dataJSON = JSON.stringify(data)

        xhr.send(dataJSON)

        setSubmitted(true)
    }

    useEffect(() => {
        let elem = document.getElementById("progress")
        let width = (page / 4) * 100 + "%"
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

                        <button type="button" onClick={handleNext} hidden={page === 4} disabled={!pageValid[page]}>Next Page</button>

                        <button type="submit" hidden={!(page === 4)}>Submit</button>
                    </div>
                    
                </form>
            }


            {(submitted && !receivedResult) &&
                <p>Loading</p>
            }

            {receivedResult &&
                <Display/>
            }
        </>
    )

    return content
}

export default Form