import { useState } from "react"
import FormulationForm from "../components/FormulationForm"
import "./routes.css";
import FormulationResults from "../components/FormulationResults"

export default function Formulations () {

    const [data, setData] = useState({})

    const [submit, setSubmit] = useState(false)

    const handleChange = e => {

        const name = e.target.name
        const value = e.target.value

        setData(prev => ({
            ...prev,
            [name]: value
        }))

    }

    const handleSubmit = e => {
        e.preventDefault()
        setSubmit(true)
    }

    const handleReturn = e => {
        setSubmit(false)
    }

    const complete = Object.keys(data).length === 9

    return (
        <>
            <h1>HRT Formulations</h1>

            <div className="info-text">

                <p>There are different types of HRT available, which differ on the 
                hormones they contain, route through which they are administered, 
                and times which they are taken or applied. This short 
                questionnaire takes into account clinical factors and personal preferences, 
                and proposes a few options which are applicable to you, as well as 
                the advantages and disadvantages for each.</p>
                <p>Note that this does not provide an exhaustive list of options which 
                may be available to you, nor are all proposed options guaranteed to 
                be applicable. Please consult with a doctor for further advice.</p>

            </div>

            {
                !submit && <FormulationForm handleChange={handleChange} handleSubmit={handleSubmit} complete={complete}/>
            }

            {
                submit && <FormulationResults data={data} handleReturn={handleReturn}/>
            }

        </>
    )
}