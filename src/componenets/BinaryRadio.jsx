import { useId } from "react"
import useFormContext from "../hooks/useFormContext"
import "./components.css"

const BinaryRadio = ({name}) => {

    const yesId = useId()
    const noId = useId()

    const {
        data,
        handleChange
    } = useFormContext()

    const content = (
        <div id={name} className="radio-container">
            <input 
                type="radio" 
                id={yesId} 
                name={name} 
                value={true}
                checked={data[name]} 
                onChange={handleChange}/>
            <label htmlFor={yesId}>Yes</label>
            <input
                type="radio"
                id={noId}
                name={name}
                value={false}
                checked={!data[name]}
                onChange={handleChange}/>
            <label htmlFor={noId}>No</label>
        </div>
    )

    return content
}

export default BinaryRadio