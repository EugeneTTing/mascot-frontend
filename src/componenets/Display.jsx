import "./components.css"
import useRiskContext from "../hooks/useRiskContext"

// <span 
//     key={i}
//     className={`material-symbols-rounded ${i < baseline ? "baseline" : ""} ${i >= baseline && i < total ? "additional" : ""}`}>
//     woman
// </span>

const RiskDisplay = () => {

    const {
        tabNames,
        activeTab,
        results,
        condition
    } = useRiskContext()

    const currentTab = tabNames[activeTab]
    const data = results[currentTab]
    const baseline = data.baseline.toFixed(1)
    const total = (data.baseline * data.hazard).toFixed(1)
    const baseline_abs = baseline * 10
    const additional_abs = ((total - baseline) * 10).toFixed(0)
    const unaffected = total > baseline ? 1000 - total * 10 : 1000 - baseline_abs

    let icons = []
    for (let i = 0; i < 1000; i++) {
        icons.push(
            <svg width="24" height="24" key={i}>
                <circle 
                    cx="12" 
                    cy="12" 
                    r="8" 
                    strokeWidth="2" 
                    stroke={i < total * 10 ? "#D15857" : "#545454"} 
                    fill={i < baseline * 10 ? "whitesmoke" : (i < total * 10 ? "#D15857" : "#545454")}/>
            </svg>
        )
    }

    const content = (

        <>
            <div className="percentage-display">
                <h2>Baseline risk: {baseline}%</h2>
                <h2>Risk with HRT: {total}%</h2>
            </div>

            <div className="icon-array-container">

                <div className="icons">
                    {icons}
                </div>

                <div className="legend-container">

                    <div className="icon-legend">
                        <svg width="36" height="36">
                            <circle
                                cx="18"
                                cy="18"
                                r="12"
                                strokeWidth="3"
                                stroke="#D15857"
                                fill="whitesmoke"/>
                        </svg>
                        <p>{baseline_abs} women like you, who do not use HRT, will {condition[activeTab]} within 5 years.</p>
                    </div>

                    <div className="icon-legend">

                    {
                        total >= baseline ?

                        <>
                            <svg width="36" height="36">
                                <circle
                                    cx="18"
                                    cy="18"
                                    r="12"
                                    strokeWidth="3"
                                    stroke="#D15857"
                                    fill="#D15857"/>
                            </svg>
                            <p>{additional_abs} <b>additional</b> women like you, who do use HRT, will {condition[activeTab]} within 5 years.</p>
                        </>

                        :

                        <>
                            <svg width="36" height="36">
                                <circle
                                    cx="18"
                                    cy="18"
                                    r="12"
                                    strokeWidth="3"
                                    stroke="#545454"
                                    fill="whitesmoke"/>
                            </svg>
                            <p>{- additional_abs} <b>fewer</b> women like you, who do use HRT, will {condition[activeTab]} within 5 years.</p>
                        </>
                    }

                    </div>

                    <div className="icon-legend">
                        <svg width="36" height="36">
                            <circle
                                cx="18"
                                cy="18"
                                r="12"
                                strokeWidth="3"
                                stroke="#545454"
                                fill="#545454"/>
                        </svg>
                        <p>{unaffected} women like you <b>will not</b> {condition[activeTab]} within 5 years, whether or not they use HRT.</p>
                    </div>

                </div>

            </div>
            
        </>

    )
    return content
}

const Summary = () => {
    const content = (
        <p>Summary</p>
    )

    return content
}
 
const Display = () => {

    const {
        activeTab,
        setActiveTab,
    } = useRiskContext()

    const content = (

        <div className="display-container">
            <div className="tab-container">
                <button className={`${activeTab === 0 ? "active" : ""}`} onClick={() => setActiveTab(0)}>Summary</button>
                <button className={`${activeTab === 1 ? "active" : ""}`} onClick={() => setActiveTab(1)}>Breast Cancer</button>
                <button className={`${activeTab === 2 ? "active" : ""}`} onClick={() => setActiveTab(2)}>Coronary Heart Disease</button>
                <button className={`${activeTab === 3 ? "active" : ""}`} onClick={() => setActiveTab(3)}>Stroke</button>
                <button className={`${activeTab === 4 ? "active" : ""}`} onClick={() => setActiveTab(4)}>Venous Thrombosis</button>
                <button className={`${activeTab === 5 ? "active" : ""}`} onClick={() => setActiveTab(5)}>Fracture</button>
            </div>

            {
                activeTab === 0 ? <Summary/> : <RiskDisplay/>
            }

        </div>

    )

    return content
}

export default Display