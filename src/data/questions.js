export const questions = [
    [ // About you
        {
            label: "What is your age?",
            type: "number",
            name: "age",
            validation: {
                required: true,
                min: 33,
                max: 84,
            },
        },
        {
            // unit select
            label: "What is your height? (in cm)",
            type: "number",
            name:"height",
            validation: {
                required: true,
                min: 50,
                max: 300,
            },
        },
        {
            // unit select
            label: "What is your weight? (in kg)",
            type: "number",
            name: "weight",
            validation: {
                required: true,
                min: 20,
                max: 400
            },
        },
        {
            // state ethnicity if other selected
            label: "Please select the option which best describes your ethnicity.",
            type: "select",
            name: "ethnicity",
            options: [
                "White or not stated",
                "Indian",
                "Pakistani",
                "Bangladeshi",
                "Other Asian",
                "Black African",
                "Black Carribean",
                "Chinese",
                "Other"
            ],
            validation: {
                required: true,
            },
        },
        {
            // explain what a unit is (in pop up)
            label: "Choose the option which best describes your alcohol intake.",
            type: "select",
            name: "alcohol",
            options: [
                "None",
                "< 1 unit per day",
                "1-2 units per day",
                "3-6 units per day",
                "7-9 units per day",
                "> 9 units per day",
            ],
            validation: {
                required: true,
            },
        },
        {
            label: "Are you living in a nursing home?",
            type: "checkbox",
            name: "carehome",
            validation: {
                required: true,
            },
        },
    ],
    [ // Family history
        {
            label: "Family history",
            type: "family",
            validation: {
                required: true,
            },
        },
        {
            // family history of angina + heart attack
        }
    ],
    [ // Reproductive health
        {
            label: "How old were you when you had your first period?",
            type: "number",
            name: "menarche",
            validation: {
                required: true,
            },
        },
        {
            label: "Have you used oral contraception?",
            type: "conditional_select",
            name: "contraceptive",
            options: [
                "Never",
                "Former",
                "Current",
            ],
            follow_condition: [
                "Former",
                "Current",
            ],
            follow: [
                {
                    label: "How many years of use?",
                    type: "number",
                    name: "contraceptive_years",
                    validation: {
                        required: true,
                    },
                }
            ],
            validation: {
                required: true,
            },
        },
        {
            label: "Do you have children?",
            type: "conditional",
            name: "child",
            follow: [
                {
                    label: "How many children do you have?",
                    type: "number",
                    name: "num_children",
                    validation: {
                        required: true,
                    },
                },
                {
                    label: "How old were you when you had your first child?",
                    type: "number",
                    name: "age_first_child",
                    validation: {
                        required: true,
                    },
                }
            ],
            validation: {
                required: true,
            },
        },
        {
            // define menopause: 12 months after last period
            label: "Have you reached menopause (12 months after last period)?",
            type: "conditional",
            name: "menopause_onset",
            follow: [
                {
                    label: "What age were you at menopause onset?",
                    type: "number",
                    name: "menopause_age",
                    validation: {
                        required: true,
                    },
                },
                {
                    lavel: "Have you used HRT?",
                    type: "conditional_select",
                    name: "hrt_use",
                    options: [
                        "Never",
                        "Former",
                        "Current",
                    ],
                    follow_condition: [
                        "Former",
                        "Current",
                    ],
                    follow: [
                        {
                            label: "What formulation?",
                            type: "select",
                            options: [
                                "E-only",
                                "E+P",
                                "Don't know",
                            ],
                            validation: {
                                required: true,
                            },
                        },
                        {
                            label: "How many years of use?",
                            type: "number",
                            name: "contraceptive_years",
                            validation: {
                                required: true,
                            },
                        }
                    ],
                    validation: {
                        required: true,
                    },
                },
            ],
            validation: {
                required: true,
            },
        },
        {
            label: "Have you had a hysterectomy?",
            type: "checkbox",
            name: "hysterectomy",
            validation: {
                required: true,
            },
        },
        {
            label: "Do you currently have a coil?",
            type: "conditional",
            name: "coil",
            follow: [{
                label: "Does it add progesterone i.e. intra-uterine system (e.g. Mirena)?",
                type: "condtional",
                name: "ius",
                follow: [{
                    label: "What year was it inserted?",
                    type: "number",
                    name: "year_ius"
                }]
            }],
            validation: {
                required: true,
            },
        }
    ],
    [ // Bone and cancer health
        {
            label: "Have you had any cancer?",
            type: "select",
            name: "cancer",
            options: [
                "None",
                "Breast",
                "Ovarian",
                "Endometrial",
                "Cervical",
                "Other (please specify)"
            ],
            validation: {
                required: true,
            },
        },
        {
            label: "Have you had a biopsy for a breast lump?",
            type: "conditional",
            name: "biopsy",
            follow: [
                {
                    label: "Number of biopsies?",
                    type: "number",
                    name: "num_biopsises",
                    validation: {
                        required: true,
                    },
                },
                {
                    label: "With atypical hyperplasia",
                    type: "checkbox",
                    name: "hyperplasia",
                    validation: {
                        required: true,
                    },
                }
            ],
            validation: {
                required: true,
            },
        },
        {
            label: "Have you been diagnosed with rheumatoid arthritis?",
            type: "checkbox",
            name: "arthritis",
            validation: {
                required: true,
            },
        },
        {
            label: "Do you have a history of falls?",
            type: "checkbox",
            name: "falls",
            validation: {
                required: true,
            },
        },
        {
            label: "Have you had a wrist, spine, hip, or shoulder fracture?",
            type: "checkbox",
            name: "fracture",
            validation: {
                required: true,
            },
        }
    ],
    [ // CVD
        {
            label: "Have you ever had a heart attack, angina, stroke, or transient ischaemic attack (TIA)?",
            type: "checkbox",
            name: "heart_attack",
            validation: {
                required: true,
            },
        },
        {
            label: "Have you had heart failure?",
            type: "checkbox",
            name: "heart_failure",
            validation: {
                required: true,
            },
        },
        {
            label: "Have you had varicose vein surgery?",
            type: "checkbox",
            name: "varicose",
            validation: {
                required: true,
            },
        },
        {
            label: "Do you have atrial fibrillation?",
            type: "checkbox",
            name: "atrial_fibrillation",
            validation: {
                required: true,
            },
        },
        {
            label: "What is your cholesterol/HDL ratio? (leave blank if unknown)",
            type: "number",
            name: "choesterol_hdl_ratio",
        },
        {
            label: "What is your systolic blood pressure (mmHg)? (leave blank if unknown)",
            type: "number",
            name: "blood_pressure",
        },
        {
            label: "Are you on blood pressure treatment?",
            type: "checkbox",
            name: "blood_pressure_treatment",
            validation: {
                required: true,
            },
        },
    ],
    [ // Medical history
        {
            label: "Diabetes.",
            type: "select",
            options: [
                "None",
                "Type 1",
                "Type 2",
            ],
            name: "diabetes",
            validation: {
                required: true,
            },
        },
        {
            label: "Chronic kidney disease.",
            options: [
                "None or not stated",
                "Stage 3",
                "Stage 4 or 5",
            ],
            name: "kidney",
            validation: {
                required: true,
            },
        },
        {
            label: "Chronic liver disease.",
            type: "checkbox",
            name: "liver",
            validation: {
                required: true,
            },
        },
        {
            label: "Parkinson's disease.",
            type: "checkbox",
            name: "parkinsons",
            validation: {
                required: true,
            },
        },
        {
            label: "Migraines.",
            type: "checkbox",
            name: "migraines",
            validation: {
                required: true,
            },
        },
        {
            label: "Systematic lupus erythematosus (SLE).",
            type: "checkbox",
            name: "sle",
            validation: {
                required: true,
            },
        },
        {
            label: "Severe mental illness.",
            type: "checkbox",
            name: "mental",
            validation: {
                required: true,
            },
        },
        {
            label: "Chronic obstructive pulmonery disease or asthma.",
            type: "checkbox",
            name: "asthma",
            validation: {
                required: true,
            },
        },
        {
            label: "Malabsorption e.g. Crohn's or ulcerative colitis.",
            type: "checkbox",
            name: "malabsorption",
            validation: {
                required: true,
            },
        },
        {
            label: "Dementia.",
            type: "checkbox",
            name: "dementia",
            validation: {
                required: true,
            },
        },
        {
            label: "Endocrine conditions eg thyrotoxocosis, hyperparathyroidism, Cushing's syndrome.",
            type: "checkbox",
            name: "endocrine",
            validation: {
                required: true,
            },
        },
        {
            label: "Been admitted to the hospital in the past 6 months.",
            type: "checkbox",
            name: "hospital",
            validation: {
                required: true,
            },
        },
    ],
    [ // medication
        {
            label: "Antipsychotic medications",
            type: "conditional",
            name: "antipsychotic",
            follow: [
                {
                    label: "Are they atypical?",
                    type: "checkbox",
                    name: "atypical",
                    validation: {
                        required: true,
                    },
                }
            ],
            validation: {
                required: true,
            },
        },
        {
            label: "Regular medical steroids.",
            type: "checkbox",
            name: "steroids",
            validation: {
                required: true,
            },
        },
        {
            label: "Tamoxifen.",
            type: "checkbox",
            name: "tamoxifen",
            validation: {
                required: true,
            },
        },
        {
            label: "Anticonsulvants.",
            type: "checkbox",
            name: "anticonsulvants",
            validation: {
                required: true,
            },
        },
        {
            label: "Antidepressants.",
            type: "checkbox",
            name: "antidepressants",
            validation: {
                required: true,
            },
        },
    ]
];
