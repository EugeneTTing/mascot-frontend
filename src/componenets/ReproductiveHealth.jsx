import useFormContext from "../hooks/useFormContext"
import BinaryRadio from "./BinaryRadio"
import "./components.css"

const ReproductiveHealth = () => {

    const {
        data,
        handleChange,
    } = useFormContext()

    const menopause_text = "Menopause is reached when you have not had a period for 12 months."

    const content = (
        <>

            <div className="form-page">

                <div className="question-wrapper">
                    <div className="number-question">

                        <label htmlFor="menarche">
                            How old were you when you had your first period?
                        </label>
                        <input
                            type="number"
                            id="menarche"
                            name="menarche"
                            value={data.menarche}
                            onChange={handleChange}
                        />

                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="radio-question">

                        <p>Have you used oral contraception?</p>

                        <div className="radio-container">

                            <div className="radio-answer">
                                <input type="radio" id="oral_c_never" name="oral_c" value="never" onChange={handleChange} checked={data.oral_c === "never"}/>
                                <label htmlFor="oral_c_never">Never</label>
                            </div>
                            <div className="radio-answer">
                                <input type="radio" id="oral_c_former" name="oral_c" value="former" onChange={handleChange} checked={data.oral_c === "former"}/>
                                <label htmlFor="oral_c_former">Former</label>
                            </div>
                            <div className="radio-answer">
                                <input type="radio" id="oral_c_current" name="oral_c" value="current" onChange={handleChange} checked={data.oral_c === "current"}/>
                                <label htmlFor="oral_c_current">Current</label>
                            </div>

                        </div>

                    </div>
                </div>

                {(data.oral_c === "former" || data.oral_c === "current") && 

                    <div className="question-wrapper conditional">
                        <div className="number-question">

                            <label htmlFor="oral_c_years">
                                How many years of use?
                            </label>
                            <input 
                                type="number"
                                id="oral_c_years"
                                name="oral_c_years"
                                value={data.oral_c_years}
                                onChange={handleChange}
                            />

                        </div>
                    </div>
                }

                <div className="question-wrapper">
                    <div className="binary-question">

                        <label htmlFor="has_children">
                            Do you have children?
                        </label>
                        <BinaryRadio name="has_children"/>

                    </div>
                </div>

                {data.has_children &&

                    <>
                        <div className="question-wrapper conditional">
                            <div className="number-question">

                                <label htmlFor="num_children">
                                    How many children do you have?
                                </label>
                                <input
                                    type="number"
                                    id="num_children"
                                    name="num_children"
                                    value={data.num_children}
                                    onChange={handleChange}
                                />

                            </div>
                        </div>

                        <div className="question-wrapper conditional">
                            <div className="number-question">

                                <label htmlFor="age_at_first_child">
                                    How old were you when you had your first child?
                                </label>
                                <input
                                    type="number"
                                    id="age_at_first_child"
                                    name="age_at_first_child"
                                    value={data.age_at_first_child}
                                    onChange={handleChange}
                                />

                            </div>
                        </div>
                    </>
                }

                <div className="question-wrapper">
                    <div className="binary-question">

                        <label htmlFor="menopause">
                            Have you <span className="tooltip" data-text={menopause_text}>reached menopause</span>? <span className="material-symbols-rounded">help</span>
                        </label>
                        <BinaryRadio name="menopause"/>

                    </div>
                </div>

                {data.menopause &&
                    <div className="question-wrapper conditional">
                        <div className="number-question">

                            <label htmlFor="menopause_age">
                                What age were you at menopause onset?
                            </label>
                            <input
                                type="number"
                                id="menopause_age"
                                name="menopause_age"
                                value={data.menopause_age}
                                onChange={handleChange}
                            />

                        </div>
                    </div>
                }

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="hysterectomy">
                            Have you had a hysterectomy?
                        </label>
                        <BinaryRadio name="hysterectomy"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="radio-question">

                        <p>Have you used hormone replacement therapy?</p>

                        <div className="radio-container">

                            <div className="radio-answer">
                                <input type="radio" id="hrt_never" name="hrt" value="never" onChange={handleChange} checked={data.hrt === "never"}/>
                                <label htmlFor="hrt_never">Never</label>
                            </div>
                            <div className="radio-answer">
                                <input type="radio" id="hrt_former" name="hrt" value="former" onChange={handleChange} checked={data.hrt === "former"}/>
                                <label htmlFor="hrt_former">Former</label>
                            </div>
                            <div className="radio-answer">
                                <input type="radio" id="hrt_current" name="hrt" value="current" onChange={handleChange} checked={data.hrt === "current"}/>
                                <label htmlFor="hrt_current">Current</label>
                            </div>

                        </div>
                    </div>
                </div>

                {(data.hrt === "former" || data.hrt === "current") && 
                    <>
                        <div className="question-wrapper conditional">
                            <div className="number-question">

                                <label htmlFor="hrt_years">
                                    How many years of HRT use?
                                </label>
                                <input 
                                    type="number"
                                    id="hrt_years"
                                    name="hrt_years"
                                    value={data.hrt_years}
                                    onChange={handleChange}
                                />

                            </div>
                        </div>

                        <div className="question-wrapper conditional">
                            <div className="radio-question">

                                <p>What formulation of HRT did you use?</p>

                                <div className="radio-container">

                                    <div className="radio-answer">
                                        <input type="radio" id="hrt_combined" name="hrt_form" value="e+p" onChange={handleChange} checked={data.hrt_form === "e+p"}/>
                                        <label htmlFor="hrt_combined">Combined Oestrogen & Progesterone</label>
                                    </div>
                                    <div className="radio-answer">
                                        <input type="radio" id="hrt_e_only" name="hrt_form" value="e" onChange={handleChange} checked={data.hrt_form === "e"}/>
                                        <label htmlFor="hrt_e_only">Oestrogen Only</label>
                                    </div>
                                    <div className="radio-answer">
                                        <input type="radio" id="hrt_other" name="hrt_form" value="other" onChange={handleChange} checked={data.hrt_form === "other"}/>
                                        <label htmlFor="hrt_other">Other</label>
                                    </div>
                                    <div className="radio-answer">
                                        <input type="radio" id="hrt_unknown" name="hrt_form" value="unknown" onChange={handleChange} checked={data.hrt_form === "unknown"}/>
                                        <label htmlFor="hrt_unknown">Don't know</label>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </>
                }

                <div className="question-wrapper">
                    <div className="binary-question">

                        <label htmlFor="coil">
                            Do you currently have a coil?
                        </label>
                        <BinaryRadio name="coil"/>

                    </div>
                </div>

                {data.coil &&
                    <>
                    
                        <div className="question-wrapper conditional">
                            <div className="binary-question">

                                <label htmlFor="coil_ius">
                                    Does it add progesterone, i.e. intra-uterine system (e.g. Mirena)?
                                </label>
                                <BinaryRadio name="coil_ius"/>

                            </div>
                        </div>

                        <div className="question-wrapper conditional">
                            <div className="number-question">

                                <label htmlFor="coil_years">
                                    How many years of use?
                                </label>
                                <input
                                    type="number"
                                    id="coil_years"
                                    name="coil_years"
                                    value={data.coil_years}
                                    onChange={handleChange}
                                />
                                
                            </div>
                        </div>

                    </>
                }

            </div>
        </>
    )

    return content
}

export default ReproductiveHealth