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
        
            <div className="form-page">

                <div className="question-wrapper">
                    <div className="binary-question">
                        <p>
                            Do you have a first relative who suffers from angina or heart attack younger than 60?
                        </p>
                        <BinaryRadio name="fh_cvd"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <p>
                            Do either of your parents suffer from osteoporosis or hip fracture?
                        </p>
                        <BinaryRadio name="fh_osteo"/>
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <p>
                            Do you have any Ashkenazi Jewish ancestors?
                        </p>
                        <BinaryRadio name="ash"/>
                    </div>
                </div>

                <h4>Fill in the following section with details about your mother.</h4>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <p>Is she deceased?</p>
                        <BinaryRadio name="m_dead"/>
                    </div>
                </div>

                <div className="question-wrapper" data-error={"Your mother's age must be greater than zero, and smaller than your age if she is alive."}>
                    <div className="number-question">
                        <label htmlFor="m_age">
                            {data.m_dead ? "Her age at death:" : "Her age:"}
                        </label>
                        <input
                            type="number"
                            id="m_age"
                            name="m_age"
                            value={data.m_age}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="question-wrapper" data-error={"Your mother's year of birth must be greater than zero and consistent with her age at death."}>
                    <div className="number-question">
                        <label htmlFor="m_yob">Her year of birth:</label>
                        <input
                            type="number"
                            id="m_yob"
                            name="m_yob"
                            value={data.m_yob}
                            onChange={handleChange}
                            disabled={!data.m_dead}
                        />
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <p>
                            Does your mother have breast cancer?
                        </p>
                        <BinaryRadio name="m_br_cancer"/>
                    </div>
                </div>

                {data.m_br_cancer &&
                    <>
                        <div className="question-wrapper conditional" data-error={"Age of diagnosis must be greater than zero, and smaller than your mother's age."}>
                            <div className="number-question">
                                <p>
                                    At what age was the breast cancer diagnosis?
                                </p>
                                <input
                                    type="number"
                                    id="m_br_cancer_age"
                                    name="m_br_cancer_age"
                                    value={data.m_br_cancer_age}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="question-wrapper conditional">
                            <div className="binary-question">
                                <p>
                                    Does your mother have a second (contralateral) breast cancer diagnosis?
                                </p>
                                <BinaryRadio name="m_br_cancer_2"/>
                            </div>
                        </div>

                        {data.m_br_cancer_2 &&
                            <div className="question-wrapper conditional2" data-error={"Age of diagnosis must be greater than zero, and smaller than your mother's age."}>
                                <div className="number-question">
                                    <label htmlFor="m_br_cancer_2_age">
                                        At what age was the second (contralateral) breast cancer diagnosis?
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
                        <p>
                            Does your mother have ovarian cancer?
                        </p>
                        <BinaryRadio name="m_ov_cancer"/>
                    </div>
                </div>

                {data.m_ov_cancer &&
                    <div className="question-wrapper conditional" data-error={"Age of diagnosis must be greater than zero, and smaller than your mother's age."}>
                        <div className="number-question">
                            <label htmlFor="m_ov_cancer_age">
                                At what age was the ovarian cancer diagnosis?
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
                        <p>
                            Does your mother have pancreatic cancer?
                        </p>
                        <BinaryRadio name="m_pa_cancer"/>
                    </div>
                </div>

                {data.m_pa_cancer &&
                    <div className="question-wrapper conditional" data-error={"Age of diagnosis must be greater than zero, and smaller than your mother's age."}>
                        <div className="number-question">
                            <label htmlFor="m_pa_cancer_age">
                                At what age was the pancreatic cancer diagnosis?
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

                <h4>Fill in the following section with details about your father.</h4>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <p>Is he deceased?</p>
                        <BinaryRadio name="f_dead"/>
                    </div>
                </div>

                <div className="question-wrapper" data-error={"Your father's age must be greater than zero, and smaller than your age if he is alive."}>
                    <div className="number-question">
                        <label htmlFor="f_age">
                            {data.f_dead ? "His age at death:" : "His age:"}
                        </label>
                        <input
                            type="number"
                            id="f_age"
                            name="f_age"
                            value={data.f_age}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="question-wrapper" data-error={"Your father's year of birth must be greater than zero and consistent with his age at death."}>
                    <div className="number-question">
                        <label htmlFor="f_yob">His year of birth:</label>
                        <input
                            type="number"
                            id="f_yob"
                            name="f_yob"
                            value={data.f_yob}
                            onChange={handleChange}
                            disabled={!data.f_dead}
                        />
                    </div>
                </div>

                <div className="question-wrapper">
                    <div className="binary-question">
                        <p>
                            Does your father have prostate cancer?
                        </p>
                        <BinaryRadio name="f_pr_cancer"/>
                    </div>
                </div>

                {data.f_pr_cancer &&
                    <div className="question-wrapper conditional" data-error={"Age of diagnosis must be greater than zero, and smaller than your father's age."}>
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
                        <p>
                            Does your father have pancreatic cancer?
                        </p>
                        <BinaryRadio name="f_pa_cancer"/>
                    </div>
                </div>

                {data.f_pa_cancer &&
                    <div className="question-wrapper conditional" data-error={"Age of diagnosis must be greater than zero, and smaller than your father's age."}>
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

            </div>
            
        </>
    )

    return content
}

export default Family