import FormPages from "./FormPages"
import useFormContext from "../hooks/useFormContext"
import useRiskContext from "../hooks/useRiskContext"
import "./components.css"
import { useEffect, useState } from "react"
import Display from "./Display"

const Form = () => {

    let mockData = {"age":"60","height":"160","weight":"55","ethnicity":"0","alcohol":"2","smoking":"0","fh_cvd":false,"fh_osteo":false,"ash":false,"m_br_cancer":false,"m_br_cancer_age":"","m_br_cancer_2":false,"m_br_cancer_2_age":"","m_ov_cancer":true,"m_ov_cancer_age":"65","m_pa_cancer":false,"m_pa_cancer_age":"","m_dead":true,"m_age":"74","m_yob":"1930","f_pr_cancer":false,"f_pr_cancer_age":"","f_pa_cancer":false,"f_pa_cancer_age":"","f_dead":true,"f_age":"85","f_yob":"1928","menarche":"12","oral_c":"former","oral_c_years":"15","has_children":true,"num_children":"4","age_at_first_child":"25","menopause":false,"menopause_age":"","hysterectomy":true,"hrt":"never","hrt_years":"","hrt_form":"e+p","coil":false,"coil_ius":false,"coil_years":"","cancer":false,"biopsy":false,"num_biopsy":"","atyp_hyperplasia":false,"ra":false,"falls":false,"cvd":false,"heart_failure":true,"varicose_vein":false,"af":true,"hypert_treat":false,"ratio":"","sbp":"","diabetes":"none","kidney":"none","liver":false,"parkin":false,"migraine":false,"sle":true,"semi":true,"copd":false,"malabsorption":false,"dementia":false,"endocrine":false,"hospital":false,"antipsy":"none","steroids":false,"tamoxifen":false,"anticonvulsants":false,"antidepressants":false}

    const mockSubmit = e => {
        e.preventDefault()

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

        const dataJSON = JSON.stringify(mockData)

        xhr.send(dataJSON)

        setSubmitted(true)

    }

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

            {
                !submitted &&
                <button onClick={mockSubmit}>Mock Submit</button>
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