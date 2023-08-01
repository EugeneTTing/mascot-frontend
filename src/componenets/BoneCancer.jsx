import useFormContext from "../hooks/useFormContext"
import BinaryRadio from "./BinaryRadio"
import "./components.css"

const BoneCancer = () => {

    const {
        data,
        handleChange,
    } = useFormContext()

    const content = (
        <>
            <p>Bone, Cancer, and Heart Health</p>

            <div className="form-page">

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="cancer">
                            Have you been diagnosed with any cancer?
                        </label>
                        <BinaryRadio name="cancer"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="biopsy">
                            Have you had a biopsy for a breast lump?
                        </label>
                        <BinaryRadio name="biopsy"/>
                    </div>
                </div>

                {data.biopsy &&
                    <>

                        <div className="question-wrapper">
                            <div className="number-question">
                                <label htmlFor="num_biopsy">
                                    How many biopsies have you had?
                                </label>
                                <input
                                    type="number"
                                    id="num_biopsy"
                                    name="num_biopsy"
                                    value={data.num_biopsy}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="question-wrapper">
                            <div className="binary-question">
                                <label htmlFor="atyp_hyperplasia">
                                    With atypical hyperplasia?
                                </label>
                                <BinaryRadio name="atyp_hyperplasia"/>
                            </div>
                        </div>

                    </>
                }

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="ra">
                            Have you been diagnosed with rheumatoid arthritis?
                        </label>
                        <BinaryRadio name="ra"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="falls">
                            Do you have a history of falls?
                        </label>
                        <BinaryRadio name="falls"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="cvd">
                            Have you ever had a heart attack, angina, stroke, or transient ischaemic attack (TIA)?
                        </label>
                        <BinaryRadio name="cvd"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="heart_failure">
                            Have you had heart failure?
                        </label>
                        <BinaryRadio name="heart_failure"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="varicose_vein">
                            Have you had varicose vein surgery?
                        </label>
                        <BinaryRadio name="varicose_vein"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="af">
                            Do you have atrial fibrillation?
                        </label>
                        <BinaryRadio name="af"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="hypert_treat">
                            Are you on blood pressure treatment?
                        </label>
                        <BinaryRadio name="hypert_treat"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="number-question">
                        <label htmlFor="ratio">
                            What is your cholesterol/HDL ratio? (leave blank if unknown)
                        </label>
                        <input
                            type="number"
                            id="ratio"
                            name="ratio"
                            value={data.ratio}
                            onChange={handleChange}/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="number-question">
                        <label htmlFor="sbp">
                            What is your systolic blood pressure (mmHg)? (leave blank if unknown)
                        </label>
                        <input
                            type="number"
                            id="sbp"
                            name="sbp"
                            value={data.sbp}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                
            </div>

        </>
    )

    return content
}

export default BoneCancer