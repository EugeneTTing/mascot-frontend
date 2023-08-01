import useFormContext from "../hooks/useFormContext"
import "./components.css"

const About = () =>  {

    const {
        data,
        handleChange,
    } = useFormContext()

    const content = (

        <>

            <p>About</p>

            <div className="form-page">

                <div className="question-wrapper">
                    <div className="number-question">
                        <label htmlFor="age">Age (40-80): </label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={data.age}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="number-question">
                        <label htmlFor="height">Height (cm): </label>
                        <input
                            type="number"
                            id="height"
                            name="height"
                            value={data.height}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="number-question">
                        <label htmlFor="weight">Weight (kg): </label>
                        <input
                            type="number"
                            id="weight"
                            name="weight"
                            value={data.weight}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="select-question">
                        <label htmlFor="ethnicity">Select the option which best describes your ethnicity. </label>
                        <select 
                            id="ethnicity" 
                            name="ethnicity"
                            value={data.ethnicity}
                            onChange={handleChange}
                        >
                            <option hidden disabled value="">-- please select an option --</option>
                            <option value="0">White</option>
                            <option value="1">Indian</option>
                            <option value="2">Pakistani</option>
                            <option value="3">Bangladeshi</option>
                            <option value="4">Other Asian</option>
                            <option value="5">Black African</option>
                            <option value="6">Black Carribean</option>
                            <option value="7">Chinese</option>
                            <option value="8">Other</option>
                        </select>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="select-question">
                        <label htmlFor="alocohol">Select the option which best describes your level of alcohol consumption. </label>
                        <select 
                            id="alcohol" 
                            name="alcohol"
                            value={data.alcohol}
                            onChange={handleChange}
                        >
                            <option hidden disabled value="">-- please select an option --</option>
                            <option value="0">None</option>
                            <option value="1">{"< 1 unit per day"}</option>
                            <option value="2">1 - 2 units per day</option>
                            <option value="3">3 - 6 units per day</option>
                            <option value="4">7 - 9 units per day</option>
                            <option value="5">{"> 9 units per day"}</option>
                        </select>
                    </div>
                </div>

            </div>

        </>

    )

    return content
}

export default About