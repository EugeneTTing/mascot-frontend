import useFormContext from "../hooks/useFormContext"
import "./components.css"

const About = () =>  {

    const {
        data,
        handleChange,
        heightUnit,
        weightUnit,
        handleUnitChange
    } = useFormContext()

    const alcohol = "One unit equates to 10 ml of pure alcohol. The number of units in a drink depends on its size and strength. For example, a pint of lager contains 2-3 units, whilst a single shot of spirits contains 1 unit."

    const content = (

        <>
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
                        <label htmlFor="height">Height:</label>
                        <div className="input-units">
                            {heightUnit === "ft" 
                                ?
                                <>
                                    <input
                                        type="number"
                                        id="height"
                                        name="heightfeet"
                                        value={data.heightfeet}
                                        onChange={handleChange}
                                    />
                                    <p>feet</p>
                                    <input
                                        type="number"
                                        id="height"
                                        name="heightinches"
                                        value={data.heightinches}
                                        onChange={handleChange}
                                    />
                                    <p>inches</p>
                                </>
                                : 
                                <input
                                    type="number"
                                    id="height"
                                    name="height"
                                    value={data.height}
                                    onChange={handleChange}
                                />
                            }
                            <div className="unit-switch">
                                <button type="button" name="height" value="cm" className={heightUnit === "cm" ? "active" : ""} onClick={handleUnitChange}>cm</button>
                                <button type="button" name="height" value="ft" className={heightUnit === "ft" ? "active" : ""} onClick={handleUnitChange}>ft</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="number-question">
                        <label htmlFor="weight">Weight:</label>
                        <div className="input-units">
                            <input
                                type="number"
                                id="weight"
                                name="weight"
                                value={data.weight}
                                onChange={handleChange}
                            />
                            <div className="unit-switch">
                                <button type="button" name="weight" value="kg" className={weightUnit === "kg" ? "active" : ""} onClick={handleUnitChange}>kg</button>
                                <button type="button" name="weight" value="lb" className={weightUnit === "lb" ? "active" : ""} onClick={handleUnitChange}>lb</button>
                            </div>
                        </div>
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
                    <div className="select-question explained">
                        <label htmlFor="alocohol">Select the option which best describes your <span className="tooltip" data-text={alcohol}>level of alcohol consumption</span>. <span className="material-symbols-rounded">help</span></label>
                        <select 
                            id="alcohol" 
                            name="alcohol"
                            value={data.alcohol}
                            onChange={handleChange}>
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

                <div className="question-wrapper">
                    <div className="select-question">
                        <label htmlFor="smoking">Select the option which best describes your smoking status. </label>
                        <select
                            id="smoking"
                            name="smoking"
                            value={data.smoking}
                            onChange={handleChange}>
                            <option hidden disabled value="">-- please select an option</option>
                            <option value="0">Non-smoker</option>
                            <option value="1">Ex-smoker</option>
                            <option value="2">Smoke less than 10 cigarettes a day</option>
                            <option value="3">Smoke between 10-19 cigarettes a day</option>
                            <option value="4">Smoke more than 20 cigarettes a day</option>
                        </select>
                        
                    </div>
                </div>

            </div>

        </>

    )

    return content
}

export default About