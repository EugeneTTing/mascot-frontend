import { createContext, useState, useEffect } from "react";

const FormContext = createContext()

export const FormProvider = ({ children }) => {

    const [page, setPage] = useState(0)

    const [data, setData] = useState({
        age: "",
        height: "",
        weight: "",
        ethnicity: "",
        alcohol: "",
        fh_cvd: false,
        m_br_cancer: false,
        m_br_cancer_age: "",
        m_br_cancer_2: false,
        m_br_cancer_2_age: "",
        m_ov_cancer: false,
        m_ov_cancer_age: "",
        m_pa_cancer: false,
        m_pa_cancer_age: "",
        m_alive: false,
        f_pr_cancer: false,
        f_pr_cancer_age: "",
        f_pa_cancer: false,
        f_pa_cancer_age: "",
        f_alive: false,
        menarche: "",
        oral_c: "never",
        oral_c_years: "",
        has_children: false,
        num_children: "",
        age_at_first_child: "",
        menopause: false,
        menopause_age: "",
        hysterectomy: false,
        hrt: "never",
        hrt_years: "",
        hrt_form: "e+p",
        coil: false,
        coil_ius: false,
        coil_years: "",
        cancer: false,
        biopsy: false,
        num_biopsy: "",
        atyp_hyperplasia: false,
        ra: false,
        falls: false,
        cvd: false,
        heart_failure: false,
        varicose_vein: false,
        af: false,
        hypert_treat: false,
        ratio: "",
        sbp: "",
        diabetes: false,
        kidney: "none",
        liver: false,
        parkin: false,
        migraine: false,
        sle: false,
        semi: false,
        copd: false,
        malabsorption: false,
        dementia: false,
        endocrine: false,
        hospital: false,
        antipsy: "none",
        steroids: false,
        tamoxifen: false,
        anticonvulsants: false,
        antidepressants: false,
    })

    useEffect(() => {
        if (!data.m_br_cancer) {
            setData(prevData => ({
                ...prevData,
                m_br_cancer_age: "",
                m_br_cancer_2: false,
                m_br_cancer_2_age: ""
            }))
        }
        if (!data.m_br_cancer_2) {
            setData(prevData => ({
                ...prevData,
                m_br_cancer_2_age: ""
            }))
        }
    }, [data.m_br_cancer, data.m_br_cancer_2])

    useEffect(() => {
        if (!data.m_ov_cancer) {
            setData(prevData => ({
                ...prevData,
                m_ov_cancer_age: ""
            }))
        }
    }, [data.m_ov_cancer])

    useEffect(() => {
        if (!data.m_pa_cancer) {
            setData(prevData => ({
                ...prevData,
                m_pa_cancer_age: ""
            }))
        }
    }, [data.m_pa_cancer])

    useEffect(() => {
        if (!data.f_pr_cancer) {
            setData(prevData => ({
                ...prevData,
                f_pr_cancer_age: ""
            }))
        }
    }, [data.f_pr_cancer])

    useEffect(() => {
        if (!data.f_pa_cancer) {
            setData(prevData => ({
                ...prevData,
                f_pa_cancer_age: ""
            }))
        }
    }, [data.f_pa_cancer])

    const handleChange = e => {
        const type = e.target.type

        const name = e.target.name

        const value = type === "checkbox"
            ? e.target.checked
            : e.target.value

        if (type === "radio" && (value === "true" || value === "false")) {
            setData(prevData => ({
                ...prevData,
                [name]: (value === "true")
            }))
        } else {
            setData(prevData => ({
                ...prevData,
                [name]: value
            }))
        }
    }

    const disablePrev = page === 0

    const disableNext = page === 4

    return (
        <FormContext.Provider 
            value={{
                page, 
                setPage,
                data,
                setData,
                handleChange,
                disablePrev,
                disableNext,
                }}>

            {children}

        </FormContext.Provider>
    )
}

export default FormContext