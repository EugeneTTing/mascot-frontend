import useFormContext from "../hooks/useFormContext"
import BinaryRadio from "./BinaryRadio"
import "./components.css"

const Cancer = () => {

    const {
        data,
        handleChange,
    } = useFormContext()

    const content = (
        <>

            <div className="form-page">

                <div className="question-wrapper">
                    <div className="binary-question">
                        <p>
                            Have you been diagnosed with any cancer?
                        </p>
                        <BinaryRadio name="cancer"/>
                    </div>
                </div>

                {data.cancer &&
                    <>

                        <div className="question-wrapper conditional">
                            <div className="binary-question">
                                <p>
                                    Have you been diagnosed with breast cancer?
                                </p>
                                <BinaryRadio name="t_br_cancer"/>
                            </div>
                        </div>

                        {data.t_br_cancer &&

                            <div className="question-wrapper conditional2" data-error={"Age of diagnosis must be greater than zero, and smaller than your age."}>
                                <div className="number-question">
                                    <label htmlFor="t_br_cancer_age">
                                        At what age was the breast cancer diagnosis?
                                    </label>
                                    <input
                                        type="number"
                                        id="t_br_cancer_age"
                                        name="t_br_cancer_age"
                                        value={data.t_br_cancer_age}
                                        onChange={handleChange}/>
                                </div>
                            </div>

                        }

                        <div className="question-wrapper conditional">
                            <div className="binary-question">
                                <p>
                                    Have you been diagnosed with ovarian cancer?
                                </p>
                                <BinaryRadio name="t_ov_cancer"/>
                            </div>
                        </div>

                        {data.t_ov_cancer &&

                            <div className="question-wrapper conditional2" data-error={"Age of diagnosis must be greater than zero, and smaller than your age."}>
                                <div className="number-question">
                                    <label htmlFor="t_ov_cancer_age">
                                        At what age was the ovarian cancer diagnosis?
                                    </label>
                                    <input
                                        type="number"
                                        id="t_ov_cancer_age"
                                        name="t_ov_cancer_age"
                                        value={data.t_ov_cancer_age}
                                        onChange={handleChange}/>
                                </div>
                            </div>

                        }

                        <div className="question-wrapper conditional">
                            <div className="binary-question">
                                <p>
                                    Have you been diagnosed with pancreatic cancer?
                                </p>
                                <BinaryRadio name="t_pa_cancer"/>
                            </div>
                        </div>

                        {data.t_pa_cancer &&

                            <div className="question-wrapper conditional2" data-error={"Age of diagnosis must be greater than zero, and smaller than your age."}>
                                <div className="number-question">
                                    <label htmlFor="t_pa_cancer_age">
                                        At what age was the pancreatic cancer diagnosis?
                                    </label>
                                    <input
                                        type="number"
                                        id="t_pa_cancer_age"
                                        name="t_pa_cancer_age"
                                        value={data.t_pa_cancer_age}
                                        onChange={handleChange}/>
                                </div>
                            </div>

                        }

                    </>
                }

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

                        <div className="question-wrapper conditional" data-error={"Number of biopsies must be greater than zero."}>
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

                        <div className="question-wrapper conditional">
                            <div className="binary-question">
                                <p>
                                    With atypical hyperplasia?
                                </p>
                                <BinaryRadio name="atyp_hyperplasia"/>
                            </div>
                        </div>

                    </>
                }

            </div>

        </>
    )

    return content
}

export default Cancer