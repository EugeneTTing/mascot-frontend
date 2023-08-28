import { createContext, useState, useEffect } from "react";

const FormContext = createContext()

export const FormProvider = ({ children }) => {

    const title = {
        0: "About You",
        1: "Family History",
        2: "Reproductive Health",
        3: "Cancer Health",
        4: "Bone and Heart Health",
        5: "Medical History"
    }

    const [page, setPage] = useState(0)

    /* Object literal for data validation. Key corresponds to each page of form,
    values are functions which returns a boolean value depending on validity of 
    data. Also sets invalid class on inputs to display error message. */
    const validate = {
        0: function() { // About page
            let valid = true

            // Age must be between 40 and 80
            const age = document.getElementById("age")
            if (parseInt(age.value) < 40 || parseInt(age.value) > 80) {
                age.className = "invalid"
                valid = false
            }

            // Height (cm and feet) must be larger than 0
            const height = document.getElementById("height")
            if (heightUnit === "cm" && parseInt(height.value) < 0) {
                height.className = "invalid"
                valid = false
            }
            const feet = document.getElementById("heightfeet")
            if (heightUnit === "ft" && parseInt(feet.value) < 0) {
                feet.className = "invalid"
                valid = false 
            }

            // Height (inches) must be between 0 and 11
            const inches = document.getElementById("heightinches")
            if (heightUnit === "ft" && (parseInt(inches.value) < 0 || parseInt(inches.value) > 11)) {
                inches.className = "invalid"
                valid = false 
            }
            
            return valid
        },
        1: function() { // Family history
            let valid = true

            if (data.m_dead) { // If dead, mother's age + yob must be smaller than current year
                const m_yob = document.getElementById("m_yob")
                if (parseInt(m_yob.value) + parseInt(data.m_age) > new Date().getFullYear() || parseInt(m_yob.value) < 0) {
                    m_yob.className = "invalid"
                    valid = false
                }
            } else { // Mother's age must be larger than target's age
                const m_age = document.getElementById("m_age")
                if (parseInt(m_age.value) < parseInt(data.age) || parseInt(m_age.value) < 0) {
                    m_age.className = "invalid"
                    valid = false
                }
            }

            // Age of diagnosis for cancers cannot exceed age at last follow up
            if (data.m_br_cancer) {
                const br_age = document.getElementById("m_br_cancer_age")
                if (parseInt(br_age.value) > parseInt(data.m_age) || parseInt(br_age.value) < 0) {
                    br_age.className = "invalid"
                    valid  = false
                }
            }

            if (data.m_br_cancer_2) {
                const br2_age = document.getElementById("m_br_cancer_2_age")
                if (parseInt(br2_age.value) > parseInt(data.m_age) || parseInt(br2_age.value) < 0) {
                    br2_age.className = "invalid"
                    valid  = false
                } 
            }

            if (data.m_ov_cancer) {
                const ov_age = document.getElementById("m_ov_cancer_age")
                if (parseInt(ov_age.value) > parseInt(data.m_age) || parseInt(ov_age.value) < 0) {
                    ov_age.className = "invalid"
                    valid  = false
                }
            }

            if (data.m_pa_cancer) {
                const pa_age = document.getElementById("m_pa_cancer_age")
                if (parseInt(pa_age.value) > parseInt(data.m_age) || parseInt(pa_age.value) < 0) {
                    pa_age.className = "invalid"
                    valid  = false
                }
            }

            if (data.f_dead) { // If dead, father's age + yob must be smaller than current year
                const f_yob = document.getElementById("f_yob")
                if (parseInt(f_yob.value) + parseInt(data.f_age) > new Date().getFullYear() || parseInt(f_yob.value) < 0) {
                    f_yob.className = "invalid"
                    valid = false
                }
            } else { // Father's age must be larger than target's age
                const f_age = document.getElementById("f_age")
                if (parseInt(f_age.value) < parseInt(data.age) || parseInt(f_age.value) < 0) {
                    f_age.className = "invalid"
                    valid = false
                }
            }

            // Age of diagnosis for cancers cannot exceed age at last follow up
            if (data.f_pr_cancer) {
                const pr_age = document.getElementById("f_pr_cancer_age")
                if (parseInt(pr_age.value) > parseInt(data.f_age) || parseInt(pr_age.value) < 0) {
                    pr_age.className = "invalid"
                    valid = false
                }
            }

            if (data.f_pa_cancer) {
                const pa_age = document.getElementById("f_pa_cancer_age")
                if (parseInt(pa_age.value) > parseInt(data.f_age) || parseInt(pa_age.value) < 0) {
                    pa_age.className = "invalid"
                    valid = false
                }
            }

            return valid
        },
        2: function() { // Reproductive health
            let valid = true

            const menarche = document.getElementById("menarche")
            if (parseInt(menarche.value) < 8 || parseInt(menarche.value) > 16) {
                menarche.className = "invalid"
                valid = false
            }

            if (data.oral_c !== "never") {
                const oc_years = document.getElementById("oral_c_years")
                if (parseInt(oc_years.value) < 0 || parseInt(oc_years.value) > parseInt(data.age)) {
                    oc_years.className = "invalid"
                    valid = false
                }
            }

            if (data.has_children) {
                const num_child = document.getElementById("num_children")
                if (parseInt(num_child.value) < 0) {
                    num_child.className = "invalid"
                    valid = false
                }
                const child_age = document.getElementById("age_at_first_child")
                if (parseInt(child_age.value) < parseInt(data.menarche) || parseInt(child_age.value) > parseInt(data.age)) {
                    child_age.className = "invalid"
                    valid = false
                }
            }

            if (data.menopause) {
                const men_age = document.getElementById("menopause_age")
                if (parseInt(men_age.value) < parseInt(data.menarche) || parseInt(men_age.value) > parseInt(data.age)){
                    men_age.className = "invalid"
                    valid = false
                }
            }

            if (data.hrt !== "never") {
                const years = document.getElementById("hrt_years")
                if (parseInt(years.value) < 0 || parseInt(years.value) > parseInt(data.age)) {
                    years.className = "invalid"
                    valid = false
                }
            }

            if (data.coil) {
                const years = document.getElementById("coil_years")
                if (parseInt(years.value) < 0 || parseInt(years.value) > parseInt(data.age)) {
                    years.className = "invalid"
                    valid = false
                }
            }
            
            return valid
        },
        3: function() { // Cancer
            let valid = true

            if (data.t_br_cancer) {
                const br = document.getElementById("t_br_cancer_age")
                if (parseInt(br.value) < 0 || parseInt(br.value) > parseInt(data.age)) {
                    br.className = "invalid"
                    valid = false
                }
            }

            if (data.biopsy) {
                const num_biop = document.getElementById("num_biopsy")
                if (parseInt(num_biop) < 0) {
                    num_biop.className = "invalid"
                    valid = false
                }
            }

            return valid
        },
        4: function() { // Bone and heart
            let valid = true

            if (data.ratio !== "") {
                const ratio = document.getElementById("ratio")
                if (parseInt(ratio.value) < 1 || parseInt(ratio.value) > 8) {
                    ratio.className = "invalid"
                    valid = false
                }
            }

            if (data.sbp !== "") {
                const sbp = document.getElementById("sbp")
                if (parseInt(sbp.value) < 50 || parseInt(sbp.value) > 200) {
                    sbp.className = "invalid"
                    valid = false
                }
            }

            return valid
        },
        5: function() { // Medical history
            // Validation not needed
            return true
        }
    }

    const handlePrev = () => setPage(prev => prev - 1)

    /* On next page, page specific validation function is called. If any fail, 
    page does not change, error messages displayed. */
    const handleNext = () => {
        console.log(data)
        if (validate[page]()) {
            setPage(prev => prev + 1)
        }
    }

    // Object representing questionnaire responses
    const [data, setData] = useState({
        age: "",
        height: "",
        heightfeet: "",
        heightinches: "",
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
        t_br_cancer: false,
        t_br_cancer_age: "",
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


    /* Form completion logic, disables next page button if required inputs are 
    not filled. Does NOT validate data. */
    const pageComplete = [

        (
            [data.age, data.weight, data.ethnicity, data.alcohol, data.smoking].every(Boolean) &&
            (data.height || (data.heightfeet && data.heightinches))
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
            (!data.t_br_cancer || data.t_br_cancer_age) &&
            (!data.t_ov_cancer || data.t_ov_cancer_age) &&
            (!data.t_pa_cancer || data.t_pa_cancer_age) &&
            (!data.biopsy || data.num_biopsy)
        ),

        true,

        false
    ]

    // Clears values of conditional number question if not applicable. 
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

    useEffect(() => {
        if (!data.t_br_cancer) {
            setData(prevData => ({
                ...prevData,
                t_br_cancer_age: ""
            }))
        }
    }, [data.t_br_cancer])

    useEffect(() => {
        if (!data.t_ov_cancer) {
            setData(prevData => ({
                ...prevData,
                t_ov_cancer_age: ""
            }))
        }
    }, [data.t_ov_cancer])

    useEffect(() => {
        if (!data.t_pa_cancer) {
            setData(prevData => ({
                ...prevData,
                t_pa_cancer_age: ""
            }))
        }
    }, [data.t_pa_cancer])

    useEffect(() => {
        if (!data.cancer) {
            setData(prevData => ({
                ...prevData,
                t_br_cancer_age: "",
                t_ov_cancer_age: "",
                t_pa_cancer_age: ""
            }))
        }
    }, [data.cancer])

    const handleChange = e => {
        const type = e.target.type
        const name = e.target.name
        const value = e.target.value

        // Special case for binary radio questions sets value to boolean
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

            setData(prevData => ({
                ...prevData,
                weight: ""
            }))
        } else {
            setHeightUnit(value)

            // Ensure height values are not empty string for unused units
            if (value === "ft") {
                setData(prevData => ({
                    ...prevData,
                    height: "",
                    heightfeet: "",
                    heightinches: ""
                }))
            } else {
                setData(prevData => ({
                    ...prevData,
                    height: "",
                    heightfeet: "",
                    heightinches: ""
                }))
            }
        }
    }

    return (
        <FormContext.Provider 
            value={{
                title,
                page, 
                handlePrev,
                handleNext,
                data,
                setData,
                handleChange,
                pageComplete,
                heightUnit,
                weightUnit,
                handleUnitChange
                }}>

            {children}

        </FormContext.Provider>
    )
}

export default FormContext