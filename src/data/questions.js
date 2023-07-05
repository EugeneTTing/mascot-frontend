export const questions = [
    [
        // About you
        {
            label: "What is your age?",
            type: "number",
            name: "age",
            validation: {
                min: 33,
                max: 84,
            },
        },
        {
            label: "What is your height? (in cm)",
            type: "number",
            name:"height",
            validation: {
                min: 50,
                max: 300,
            },
        },
        {
            label: "What is your weight? (in kg)",
            type: "number",
            name: "weight",
            validation: {
                min: 20,
                max: 400
            },
        },
        {
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
        },
        {
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
        },
        {
            label: "Are you living in a nursing home?",
            type: "checkbox",
            name: "carehome",
        },
    ],
    [
        // Family history
        {
            label: "Mother",
            type: "family",
            name: "mother",
            validation: {
                required: true,
            },
        },
        {
            label: "Fother",
            type: "family",
            name: "fother",
            validation: {
                required: true,
            },
        },
        {
            label: "Sister",
            type: "family",
            name: "sister",
            validation: {
                required: true,
            },
        },
        {
            label: "Father",
            type: "family",
            name: "father",
            validation: {
                required: true,
            },
        },
    ],
    [
        // Reproductive health
        {
            label: "How old were you when you had your first period?",
            type: "number",
            name: "menarche",
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
            follow_condtion: [
                "Former",
                "Current",
            ],
            follow: [
                {
                    label: "How many years of use?",
                    type: "number",
                    name: "contraceptive_years"
                }
            ],
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
                },
                {
                    label: "How old were you when you had your first child?",
                    type: "number",
                    name: "age_first_child",
                }
            ],
        },
        {
            label: "Have you reached menopause?",
            type: "conditional",
            name: "menopause_onset",
            follow: [
                    {
                    label: "What age were you at menopause onset?",
                    type: "number",
                    name: "menopause_age",
                }
            ],
        },
        {
            label: "Have you had a hysrectormy? IUS in situ?",
            type: "checkbox",
            name: "hyserectomy",
        }
    ],
    [
        // Bone and cancer health
        {
            label: "Have you had cancer?",
            type: "checkbox",
            name: "cancer",
        },
        {
            label: "Have you had a breast biopsy?",
            type: "conditional",
            name: "biopsy",
            follow: [
                {
                    label: "Number of biopsies?",
                    type: "number",
                    name: "num_biopsises",
                },
                {
                    label: "With atypical hyperplasia",
                    type: "checkbox",
                    name: "hyperplasia",
                }
            ]
        },
        {
            label: "Do you suffer from rheumatoid arthritis?",
            type: "checkbox",
            name: "arthritis",
        },
        {
            label: "Do you have a history of falls?",
            type: "checkbox",
            name: "falls",
        },
        {
            label: "Have you had a wrist, spine, hip, or shoulder fracture?",
            type: "checkbox",
            name: "fracture",
        }
    ],
    [
        // CVD
        {
            label: "Have you ever had a heart attack, angina, stroke, or TIA?",
            type: "checkbox",
            name: "heart_attack",
        },
        {
            label: "Have you had a heart failure?",
            type: "checkbox",
            name: "heart_failure",
        },
        {
            label: "Have you had varicose vein surgery?",
            type: "checkbox",
            name: "varicose",
        },
        {
            label: "Do you have atrial fibrillation?",
            type: "checkbox",
            name: "atrial_fibrillation",
        },
        {
            label: "1st degree relative suffered angina or heart attack younger than 60?",
            type: "checkbox",
            name: "relative_heart",
        },
        {
            label: "What is your cholesterol/HDL ratio?",
            type: "number",
            name: "choesterol_hdl_ratio",
        },
        {
            label: "What is your systolic blood pressure (mmHg)?",
            type: "number",
            name: "blood_pressure"
        },
        {
            label: "Are you on blood pressure treatment?",
            type: "checkbox",
            name: "blood_pressure_treatment"
        },
    ],
    [
        // Medical history
        {
            label: "Diabetes.",
            type: "select",
            options: [
                "None",
                "Type 1",
                "Type 2",
            ],
            name: "diabetes"
        },
        {
            label: "Chronic kidney disease.",
            type: "select",
            options: [
                "None or not stated",
                "Stage 3",
                "Stage 4",
                "Stage 5",
            ],
            name: "kidney"
        },
        {
            label: "Chronic liver disease.",
            type: "checkbox",
            name: "liver",
        },
        {
            label: "Parkinson's.",
            type: "checkbox",
            name: "parkinson's",
        },
        {
            label: "Migraines.",
            type: "checkbox",
            name: "migraines",
        },
        {
            label: "Systematic lupus erythematosus (SLE).",
            type: "checkbox",
            name: "sle",
        },
        {
            label: "Sever mental illness.",
            type: "checkbox",
            name: "mental",
        },
        {
            label: "Chronic abstructive pulmonery disease or asthma.",
            type: "checkbox",
            name: "copd",
        },
        {
            label: "Malabsorption e.g. Crohn's or ulcerative colitis.",
            type: "checkbox",
            name: "malabsorption",
        },
        {
            label: "Dementia.",
            type: "checkbox",
            name: "dementia",
        },
        {
            label: "Endocrine conditions.",
            type: "checkbox",
            name: "endocrine",
        },
        {
            label: "Been admitted to the hospital in the past 6 months.",
            type: "checkbox",
            name: "hospital",
        },
    ],
    [
        // medication
        {
            label: "Antipsychotics",
            type: "conditional",
            name: "antipsychotic",
            follow: [
                {
                    label: "Atypical?",
                    type: "checkbox",
                    name: "atypical",
                }
            ]
        },
        {
            label: "Regular medical steroids.",
            type: "checkbox",
            name: "steroids",
        },
        {
            label: "Tamoxifen.",
            type: "checkbox",
            name: "tamoxifen",
        },
        {
            label: "Anticonsulvants.",
            type: "checkbox",
            name: "anticonsulvants",
        },
        {
            label: "Antidepressants.",
            type: "checkbox",
            name: "antidepressants",
        },
    ]
];
