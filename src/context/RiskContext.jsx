import { createContext, useState } from "react";

const RiskContext = createContext()

export const RiskProvider = ({children}) => {

    const tabNames = {
        1: "breast cancer",
        2: "chd",
        3: "stroke",
        4: "vte",
        5: "fracture"
    }

    const condition = {
        1: "be diagnosed with breast cancer",
        2: "suffer from coronary heart disease",
        3: "have a stroke",
        4: "suffer from venous thromboembolism",
        5: "get a fracture"
    }

    const [activeTab, setActiveTab] = useState(0)

    const [results, setResults] = useState({})

    const [caveats, setCaveats] = useState({})

    const handleCaveats = (data) => {

        setCaveats({
            cvd: data.cvd,
            ratio: data.ratio,
            sbp: data.sbp,
        })

    }

    return (
        <RiskContext.Provider
            value={{
                tabNames,
                activeTab,
                setActiveTab,
                results,
                setResults,
                condition,
                handleCaveats,
                caveats
            }}>

            {children}

        </RiskContext.Provider>
    )
}

export default RiskContext