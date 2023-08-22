import { createContext, useState, useEffect } from "react";

const FormContext = createContext()

export const FormProvider = ({ children }) => {

    const title = {
        0: "About You",
        1: "Family History",
        2: "Reproductive Health",
        3: "Cancer, Bone, and Heart Health",
        4: "Medical History"
    }

    const [page, setPage] = useState(0)

    const [data, setData] = useState({
        age: "",
        height: "",
        heightfeet: "0",
        heightinches: "0",
        weight: "",
        ethnicity: "",
        alcohol: "",
        smoking: "",
        fh_cvd: false,
        fh_osteo: false,
        ash: false,
        m_br_cancer: false,
        m_br_cancer_age: "",
        m_br_cancer_2: false,
        m_br_cancer_2_age: "",
        m_ov_cancer: false,
        m_ov_cancer_age: "",
        m_pa_cancer: false,
        m_pa_cancer_age: "",
        m_dead: false,
        m_age: "",
        m_yob: "",
        f_pr_cancer: false,
        f_pr_cancer_age: "",
        f_pa_cancer: false,
        f_pa_cancer_age: "",
        f_dead: false,
        f_age: "",
        f_yob: "",
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
        diabetes: "none",
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


    // Form validation logic. Cannot move on to next page if some data invalid.
    const pageValid = [

        (
            Object.values(data).slice(0, 8).every(Boolean) 
            && data.age > 39 && data.age < 81
            && data.heightinches >= 0 && data.heightinches < 13
        ),

        (
            Object.keys(data)
            .filter(key => data[key] && (key.startsWith("f_") || key.startsWith("m_"))&& key.endsWith("cancer"))
            .map(key => data[key.concat("_age")]).every(Boolean) &&
            [data.m_age, data.m_yob, data.f_age, data.f_yob].every(Boolean)
        ),

        (
            data.menarche && 
            (!data.has_children || (data.num_children && data.age_at_first_child)) &&
            (!data.menopause || data.menopause_age) &&
            (data.oral_c === "never" || data.oral_c_years) &&
            (data.hrt === "never" || data.hrt_years) &&
            (!data.coil || data.coil_years)
        ),

        (
            !data.biopsy || (data.num_biopsy)
        ),

        false
    ]

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

    useEffect(() => {
        if (data.oral_c === "never") {
            setData(prevData => ({
                ...prevData,
                oral_c_years: ""
            }))
        }
    }, [data.oral_c])

    useEffect(() => {
        if (!data.has_children) {
            setData(prevData => ({
                ...prevData,
                num_children: "",
                age_at_first_child: ""
            }))
        }
    }, [data.has_children])

    useEffect(() => {
        if (!data.menopause) {
            setData(prevData => ({
                ...prevData,
                menopause_age: ""
            }))
        }
    }, [data.menopause])

    useEffect(() => {
        if (data.hrt === "never") {
            setData(prevData => ({
                ...prevData,
                hrt_years: "",
                hrt_form: "e+p"
            }))
        }
    }, [data.hrt])

    useEffect(() => {
        if (!data.coil) {
            setData(prevData => ({
                ...prevData,
                coil_ius: false,
                coil_years: ""
            }))
        }
    }, [data.coil])

    useEffect(() => {
        if (!data.biopsy) {
            setData(prevData => ({
                ...prevData,
                num_biopsy: "",
                atyp_hyperplasia: false
            }))
        }
    }, [data.biopsy])

    const handleChange = e => {
        const type = e.target.type
        const name = e.target.name
        const value = e.target.value

        if (type === "radio" && (value === "true" || value === "false")) {
            setData(prevData => ({
                ...prevData,
                [name]: value === "true"
            }))
        } else {
            setData(prevData => ({
                ...prevData,
                [name]: value
            }))
        }
        
        // Auto complete parents' year of birth if alive
        if (name === "m_age" && !data.m_dead) {
            if (value !== "") {
                let yob = (new Date().getFullYear() - parseInt(value)).toString()
                setData(prevData => ({
                    ...prevData,
                    m_yob: yob
                }))
            } else {
                setData(prevData => ({
                    ...prevData,
                    m_yob: ""
                }))
            }
        }

        if (name === "f_age" && !data.f_dead) {
            if (value !== "") {
                let yob = (new Date().getFullYear() - parseInt(value)).toString()
                setData(prevData => ({
                    ...prevData,
                    f_yob: yob
                }))
            } else {
                setData(prevData => ({
                    ...prevData,
                    f_yob: ""
                }))
            }
        }
    }

    const [heightUnit, setHeightUnit] = useState("cm")

    const [weightUnit, setWeightUnit] = useState("kg")

    const handleUnitChange = e => {
        const unit = e.target.name
        const value = e.target.value
        
        if (unit === "weight") {
            setWeightUnit(value)
        } else {
            setHeightUnit(value)

            // Ensure height values are not empty string for unused units
            if (value === "ft") {
                setData(prevData => ({
                    ...prevData,
                    height: "0",
                    heightfeet: "",
                    heightinches: ""
                }))
            } else {
                setData(prevData => ({
                    ...prevData,
                    height: "",
                    heightfeet: "0",
                    heightinches: "0"
                }))
            }
        }
    }

    return (
        <FormContext.Provider 
            value={{
                title,
                page, 
                setPage,
                data,
                setData,
                handleChange,
                pageValid,
                heightUnit,
                weightUnit,
                handleUnitChange
                }}>

            {children}

        </FormContext.Provider>
    )
}

export default FormContext