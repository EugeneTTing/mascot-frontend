import useFormContext from "../hooks/useFormContext"
import BinaryRadio from "./BinaryRadio"
import "./components.css"

const MedicalHistory = () => {

    const {
        data,
        handleChange,
    } = useFormContext()

    const content = (

        <>

            <p>Medical History</p>
            
            <div className="form-page">

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="diabetes">
                            Diabetes
                        </label>
                        <BinaryRadio name="diabetes"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="radio-question">
                        <p>Chronic kidney disease</p>
                        <div className="radio-container">
                            <input type="radio" id="kidney_none" name="kidney" value="none" onChange={handleChange} checked={data.kidney === "none"}/>
                            <label htmlFor="kidney_none">None or not stated</label>
                            <input type="radio" id="kidney_3" name="kidney" value="3" onChange={handleChange} checked={data.kidney === "3"}/>
                            <label htmlFor="kidney_3">Stage 3</label>
                            <input type="radio" id="kidney_4" name="kidney" value="4" onChange={handleChange} checked={data.kidney === "4"}/>
                            <label htmlFor="kidney_4">Stage 4 or 5</label>
                        </div>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="liver">
                            Chronic liver disease
                        </label>
                        <BinaryRadio name="liver"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="parkin">
                            Parkinson's disease
                        </label>
                        <BinaryRadio name="parkin"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="migraine">
                            Migraines
                        </label>
                        <BinaryRadio name="migraine"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="sle">
                            Systematic lupus erythematosus (SLE)
                        </label>
                        <BinaryRadio name="sle"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="semi">
                            Severe mental illness
                        </label>
                        <BinaryRadio name="semi"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="copd">
                            Chronic obstructive pulmonery disease or asthma
                        </label>
                        <BinaryRadio name="copd"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="malabsorption">
                            Malabsorption e.g. Crohn's or ulcerative colitis
                        </label>
                        <BinaryRadio name="malabsorption"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="dementia">
                            Dementia
                        </label>
                        <BinaryRadio name="dementia"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="endocrine">
                            Endocrine conditions eg thyrotoxocosis, hyperparathyroidism, Cushing's syndrome
                        </label>
                        <BinaryRadio name="endocrine"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="hospital">
                            Been admitted to the hospital in the past 6 months
                        </label>
                        <BinaryRadio name="hospital"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="radio-question">
                        <p>Antipsychotic medication</p>
                        <div className="radio-container">
                            <input type="radio" id="none_antipsy" name="antipsy" value="none" onChange={handleChange} checked={data.antipsy === "none"}/>
                            <label htmlFor="none_antipsy">None</label>
                            <input type="radio" id="typ_antipsy" name="antipsy" value="typ" onChange={handleChange} checked={data.antipsy === "typ"}/>
                            <label htmlFor="typ_antipsy">Typical antipsychotics</label>
                            <input type="radio" id="atyp_antipsy" name="antipsy" value="atyp" onChange={handleChange} checked={data.antipsy === "atyp"}/>
                            <label htmlFor="atyp_antipsy">Atypical antipsychotics</label>
                        </div>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="steroids">
                            Regular medical steroids
                        </label>
                        <BinaryRadio name="steroids"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="tamoxifen">
                            Tamoxifen
                        </label>
                        <BinaryRadio name="tamoxifen"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="anticonvulsants">
                            Anticonvulsants
                        </label>
                        <BinaryRadio name="anticonvulsants"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="antidepressants">
                            Antidepressants
                        </label>
                        <BinaryRadio name="antidepressants"/>
                    </div>
                </div>

            </div>
        </>

    )

    return content
}

export default MedicalHistory