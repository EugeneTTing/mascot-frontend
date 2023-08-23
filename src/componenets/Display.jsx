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
    const total_abs = total * 10

    const additional_abs = total_abs - baseline_abs
    const unaffected = total > baseline ? 1000 - total_abs : 1000 - baseline_abs

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
                        additional_abs > 0 ?

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

    const {
        results
    } = useRiskContext()

    // const hazards = Object.values(results).map(val => val.hazard)

    const bars = Object.values(results).map((res, index) =>
        <div 
            className={`bar ${res.hazard > 1 ? "increased-risk" : "reduced-risk"}`}
            key={index}
            style={{
                width: (Math.abs(1 - res.hazard)/0.5) * 100 + '%',
            }}
            >
            <span data-ratio={res.hazard}></span>
        </div>
    )

    // console.log(hazards)

    const content = (

        <>
            <div>
                <p>This is a summary of the effects HRT use has on your health risks, 
                    expressed as hazard ratios. Hazard ratios measure how an intervention,
                    in this case HRT, effects health outcomes over time. A hazard ratio 
                    larger than 1 means the health outcome is more likely to occur in 
                    people who have used HRT, whilst a hazard ratio less than 1 means 
                    the health outcome is less likely to occur.</p>
                <p>Whilst hazard ratios are helpful in quickly understanding the overall
                    effects of an intervention, they can be misleading. They do not show
                    the absolute risk of health outcomes, which may still be very small 
                    if the baseline risk (risk without HRT use) is low. Click on a tab 
                    above view the absolute risks for each health outcome</p>
            </div>
            
            <div className="summary-container">
                <div className="bar-container">
                    {bars}
                </div>
                <div className="labels">
                    <p>Breast Cancer</p>
                    <p>Stroke</p>
                    <p>CHD</p>
                    <p>VTE</p>
                    <p>Fracture</p>
                </div>
                <div className="axes">
                    <p>0.5</p>
                    <p style={{justifySelf:"center"}}>1.0</p>
                    <p style={{justifySelf:"end"}}>1.5</p>
                </div>
            </div>

        </>
        
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