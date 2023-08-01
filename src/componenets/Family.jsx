import useFormContext from "../hooks/useFormContext"
import BinaryRadio from "./BinaryRadio"
import "./components.css"

const Family = () => {

    const {
        data,
        handleChange,
    } = useFormContext()

    const content = (
        <>
        
            <p>Family History</p>

            <div className="form-page">

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="fh_cvd">
                            Do you have a first relative who suffers from angina or heart attack younger than 60?
                        </label>
                        <BinaryRadio name="fh_cvd"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="m_br_cancer">
                            Does your mother have breast cancer?
                        </label>
                        <BinaryRadio name="m_br_cancer"/>
                    </div>
                </div>

                {data.m_br_cancer &&
                    <>
                        <div className="question-wrapper">
                            <div className="number-question">
                                <label htmlFor="m_br_cancer_age">
                                    At what age was the diagnosis?
                                </label>
                                <input
                                    type="number"
                                    id="m_br_cancer_age"
                                    name="m_br_cancer_age"
                                    value={data.m_br_cancer_age}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="question-wrapper">
                            <div className="binary-question">
                                <label htmlFor="m_br_cancer_2">
                                    Does your mother have a second (contralateral) breast cancer diagnosis?
                                </label>
                                <BinaryRadio name="m_br_cancer_2"/>
                            </div>
                        </div>

                        {data.m_br_cancer_2 &&
                            <div className="question-wrapper">
                                <div className="number-question">
                                    <label htmlFor="m_br_cancer_2_age">
                                        At what age was the second diagnosis?
                                    </label>
                                    <input
                                        type="number"
                                        id="m_br_cancer_2_age"
                                        name="m_br_cancer_2_age"
                                        value={data.m_br_cancer_2_age}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        }

                    </>
                }

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="m_ov_cancer">
                            Does your mother have ovarian cancer?
                        </label>
                        <BinaryRadio name="m_ov_cancer"/>
                    </div>
                </div>

                {data.m_ov_cancer &&
                    <div className="question-wrapper">
                        <div className="number-question">
                            <label htmlFor="m_ov_cancer_age">
                                At what age was the diagnosis?
                            </label>
                            <input
                                type="number"
                                id="m_ov_cancer_age"
                                name="m_ov_cancer_age"
                                value={data.m_ov_cancer_age}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                }

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="m_pa_cancer">
                            Does your mother have pancreatic cancer?
                        </label>
                        <BinaryRadio name="m_pa_cancer"/>
                    </div>
                </div>

                {data.m_pa_cancer &&
                    <div className="question-wrapper">
                        <div className="number-question">
                            <label htmlFor="m_pa_cancer_age">
                                At what age was the diagnosis?
                            </label>
                            <input
                                type="number"
                                id="m_pa_cancer_age"
                                name="m_pa_cancer_age"
                                value={data.m_pa_cancer_age}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                }

                {/* <div className="binary-question">
                    <label htmlFor="m_alive">
                        Is your mother alive?
                    </label>
                    <input 
                        type="checkbox"
                        id="m_alive"
                        name="m_alive"
                        checked={data.m_alive}
                        onChange={handleChange}
                    />
                </div> */}

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="f_pr_cancer">
                            Does your father have prostate cancer?
                        </label>
                        <BinaryRadio name="f_pr_cancer"/>
                    </div>
                </div>

                {data.f_pr_cancer &&
                    <div className="question-wrapper">
                        <div className="number-question">
                            <label htmlFor="f_pr_cancer_age">
                                At what age was the prostate cancer diagnosis?
                            </label>
                            <input
                                type="number"
                                id="f_pr_cancer_age"
                                name="f_pr_cancer_age"
                                value={data.f_pr_cancer_age}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                }

                <div className="question-wrapper">
                    <div className="binary-question">
                        <label htmlFor="f_pa_cancer">
                            Does your father have pancreatic cancer?
                        </label>
                        <BinaryRadio name="f_pa_cancer"/>
                    </div>
                </div>

                {data.f_pa_cancer &&
                    <div className="question-wrapper">
                        <div className="number-question">
                            <label htmlFor="f_pa_cancer_age">
                                At what age was the prostate cancer diagnosis?
                            </label>
                            <input
                                type="number"
                                id="f_pa_cancer_age"
                                name="f_pa_cancer_age"
                                value={data.f_pa_cancer_age}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    
                }

                {/* <div className="binary-question">
                    <label htmlFor="f_alive">
                        Is your father alive?
                    </label>
                    <input 
                        type="checkbox"
                        id="f_alive"
                        name="f_alive"
                        checked={data.f_alive}
                        onChange={handleChange}
                    />
                </div> */}

            </div>
        
        </>
    )

    return content
}

export default Family