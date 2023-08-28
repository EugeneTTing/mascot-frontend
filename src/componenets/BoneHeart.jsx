import useFormContext from "../hooks/useFormContext"
import BinaryRadio from "./BinaryRadio"
import "./components.css"

const BoneHeart = () => {

    const {
        data,
        handleChange,
    } = useFormContext()

    const content = (
        <>

            <div className="form-page">

                {/* <div className="question-wrapper">
                    <div className="binary-question">
                        <p>
                            Have you been diagnosed with any cancer?
                        </p>
                        <BinaryRadio name="cancer"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <p>
                            Have you had a biopsy for a breast lump?
                        </p>
                        <BinaryRadio name="biopsy"/>
                    </div>
                </div>

                {data.biopsy &&
                    <>

                        <div className="question-wrapper" data-error={"Number of biopsies must be greater than zero."}>
                            <div className="number-question">
                                <p>
                                    How many biopsies have you had?
                                </p>
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
                                <p>
                                    With atypical hyperplasia?
                                </p>
                                <BinaryRadio name="atyp_hyperplasia"/>
                            </div>
                        </div>

                    </>
                } */}

                <div className="question-wrapper">
                    <div className="binary-question">
                        <p>
                            Have you been diagnosed with rheumatoid arthritis?
                        </p>
                        <BinaryRadio name="ra"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <p>
                            Do you have a history of falls?
                        </p>
                        <BinaryRadio name="falls"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <p>
                            Have you ever had a heart attack, angina, stroke, or transient ischaemic attack (TIA)?
                        </p>
                        <BinaryRadio name="cvd"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <p>
                            Have you had heart failure?
                        </p>
                        <BinaryRadio name="heart_failure"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <p>
                            Have you had varicose vein surgery?
                        </p>
                        <BinaryRadio name="varicose_vein"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <p>
                            Do you have atrial fibrillation?
                        </p>
                        <BinaryRadio name="af"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <p>
                            Are you on blood pressure treatment?
                        </p>
                        <BinaryRadio name="hypert_treat"/>
                    </div>
                </div>

                <div className="question-wrapper" data-error={"Your cholesterol/HDL ratio must be between 1 and 8."}>
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

                <div className="question-wrapper" data-error={"Your systolic blood pressure must be between 50 and 200."}>
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

export default BoneHeart