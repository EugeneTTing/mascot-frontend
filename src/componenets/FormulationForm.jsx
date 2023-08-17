import "./components.css"

const FormulationForm = ({handleChange, handleSubmit, complete}) => {

    const content = (

        <form onSubmit={handleSubmit} className="form-container">

            <div className="question-wrapper">
                <div className="radio-question">

                    <p>
                        Have you had a hysterectomy?
                    </p>

                    <div className="radio-container">

                        <div className="radio-answer">
                            <input
                                type="radio"
                                id="hysterectomy_yes"
                                name="hysterectomy"
                                value={true}
                                onChange={handleChange}/>
                            <label htmlFor="hysterectomy_yes">Yes</label>
                        </div>

                        <div className="radio-answer">
                            <input
                                type="radio"
                                id="hysterectomy_no"
                                name="hysterectomy"
                                value={false}
                                onChange={handleChange}/>
                            <label htmlFor="hysterectomy_no">No</label>
                        </div>

                    </div>

                </div>
            </div>

            <div className="question-wrapper">
                <div className="radio-question">

                    <p>
                        Do you have a Mirena in situ?
                    </p>

                    <div className="radio-container">

                        <div className="radio-answer">
                            <input
                                type="radio"
                                id="mirena_yes"
                                name="mirena"
                                value={true}
                                onChange={handleChange}/>
                            <label htmlFor="mirena_yes">Yes</label>
                        </div>

                        <div className="radio-answer">
                            <input
                                type="radio"
                                id="mirena_no"
                                name="mirena"
                                value={false}
                                onChange={handleChange}/>
                            <label htmlFor="mirena_no">No</label>
                        </div>

                    </div>

                </div>
            </div>

            <div className="question-wrapper">
                <div className="radio-question">

                    <p>When was the last time you had your period?</p>

                    <div className="radio-container">

                        <div className="radio-answer">
                            <input
                                type="radio"
                                id="less_than_year"
                                name="last_period"
                                value="less_tha_year"
                                onChange={handleChange}/>
                            <label htmlFor="less_than_year">Less than a year ago</label>
                        </div>

                        <div className="radio-answer">
                            <input
                                type="radio"
                                id="more_than_year"
                                name="last_period"
                                value="more_than_year"
                                onChange={handleChange}/>
                            <label htmlFor="more_than_year">More than a year ago</label>
                        </div>

                    </div>

                </div>
            </div>

            <div className="question-wrapper">
                <div className="radio-question">

                    <p>Are you having regular or irregular preiods?</p>

                    <div className="radio-container">

                        <div className="radio-answer">
                            <input
                                type="radio"
                                name="periods"
                                id="regular_periods"
                                value="regular"
                                onChange={handleChange}/>
                            <label htmlFor="regular_periods">Regular periods</label>
                        </div>

                        <div className="radio-answer">
                            <input
                                type="radio"
                                name="periods"
                                id="no_periods"
                                value="none"
                                onChange={handleChange}/>
                            <label htmlFor="no_periods">Irregular periods</label>
                        </div>

                    </div>

                </div>
            </div>

            <div className="question-wrapper">
                <div className="radio-question">

                    <p>Do you prefer oral or transdermal (patches, gels, or sprays) formulations?</p>

                    <div className="radio-container">

                        <div className="radio-answer">
                            <input
                                type="radio"
                                name="preferred_route"
                                id="oral"
                                value="oral"
                                onChange={handleChange}/>
                            <label htmlFor="oral">Oral</label>
                        </div>

                        <div className="radio-answer">
                            <input
                                type="radio"
                                name="preferred_route"
                                id="transdermal"
                                value="transdermal"
                                onChange={handleChange}/>
                            <label htmlFor="transdermal">Transdermal</label>
                        </div>

                    </div>

                </div>
            </div>

            <div className="question-wrapper">
                <div className="radio-question">

                    <p>Are you affected by the following? Select YES if <b>any</b> apply.</p>
                    <ul>
                        <li>Gastrointestinal disorders</li>
                        <li>Previous or family history of VTE</li>
                        <li>BMI higher than 30</li>
                        <li>Variable blood pressure</li>
                        <li>Migraine</li>
                        <li>Gall bladder disease</li>
                        <li>Hepatic inducing enzyme drugs</li>
                    </ul>

                    <div className="radio-container">

                        <div className="radio-answer">
                            <input
                                type="radio"
                                name="trans_indic"
                                id="no_oral"
                                value={true}
                                onChange={handleChange}/>
                            <label htmlFor="no_oral">Yes</label>
                        </div>

                        <div className="radio-answer">
                            <input
                                type="radio"
                                name="trans_indic"
                                id="yes_oral"
                                value={false}
                                onChange={handleChange}/>
                            <label htmlFor="yes_oral">No</label>
                        </div>

                    </div>

                </div>
            </div>

            {/* <div className="question-wrapper">
                <div className="radio-question">

                    <p>
                        How often do you want to take / apply HRT?
                    </p>

                    <div className="radio-container">

                        <div className="radio-answer">
                            <input
                                type="radio"
                                id="apply_more"
                                name="apply_frequency"
                                value="more"
                                onChange={handleChange}/>
                            <label htmlFor="apply_more">Once a day</label>
                        </div>

                        <div className="radio-answer">
                            <input
                                type="radio"
                                id="apply_less"
                                name="apply_frequency"
                                value="less"
                                onChange={handleChange}/>
                            <label htmlFor="apply_less">Every 3 - 5 days</label>
                        </div>

                    </div>

                </div>
            </div> */}

            <div className="question-wrapper">
                <div className="radio-question">

                    <p>
                        Are you happy with having a patch stuck onto your skin continuously?
                    </p>

                    <div className="radio-container">

                        <div className="radio-answer">
                            <input
                                type="radio"
                                id="patch_yes"
                                name="patch"
                                value={true}
                                onChange={handleChange}/>
                            <label htmlFor="patch_yes">I am happy</label>
                        </div>

                        <div className="radio-answer">
                            <input
                                type="radio"
                                id="patch_no"
                                name="patch"
                                value={false}
                                onChange={handleChange}/>
                            <label htmlFor="patch_no">I prefer not</label>
                        </div>

                    </div>

                </div>
            </div>

            <div className="question-wrapper">
                <div className="radio-question">

                    <p>
                        Do you prefer apply gels or sprays transdermally?
                    </p>

                    <div className="radio-container">

                        <div className="radio-answer">
                            <input
                                type="radio"
                                id="gel"
                                name="transdermal"
                                value="gel"
                                onChange={handleChange}/>
                            <label htmlFor="gel">Gel</label>
                        </div>

                        <div className="radio-answer">
                            <input
                                type="radio"
                                id="spray"
                                name="transdermal"
                                value="spray"
                                onChange={handleChange}/>
                            <label htmlFor="spray">Spray</label>
                        </div>

                    </div>

                </div>
            </div>

            <div className="question-wrapper">
                <div className="radio-question">

                    <p>
                        Do you need contraception?
                    </p>

                    <div className="radio-container">

                        <div className="radio-answer">
                            <input
                                type="radio"
                                id="contraception_yes"
                                name="contraception"
                                value={true}
                                onChange={handleChange}/>
                            <label htmlFor="contraception_yes">Yes</label>
                        </div>

                        <div className="radio-answer">
                            <input
                                type="radio"
                                id="contraception_no"
                                name="contraception"
                                value={false}
                                onChange={handleChange}/>
                            <label htmlFor="contraception_no">No</label>
                        </div>

                    </div>

                </div>
            </div>

            <div className="form-control">
                <button type="sumbit" disabled={!complete}>Submit</button>
            </div>

        </form>

    )

    return content
}

export default FormulationForm