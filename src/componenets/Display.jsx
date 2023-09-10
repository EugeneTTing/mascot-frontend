import "./components.css"
import useRiskContext from "../hooks/useRiskContext"
import { useState } from "react"


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

            {activeTab === 1 &&

                <div className="caveat">
                    <h3>MAsCoT May Underestimate Your Risk</h3>
                    <p>The estimates obtained from MAsCoT cannot account for risk 
                    factors which are not collected by its questionnaire. Certain 
                    risk factors for breast cancer are intentionally left out of 
                    MAsCoT's mode. If you have genetic test results or received 
                    a mammogram in the past, you may have additional information 
                    which will increase the accuracy of your breast cancer risk 
                    prediction. Please visit <a href="https://www.canrisk.org/">CanRisk</a> to
                    find out more.</p>

                </div>
            
            }


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

    const [barUnits, setBarUnits] = useState("abs")

    const {
        results,
        tabNames
    } = useRiskContext()

    const hazardBars = Object.values(tabNames).map((name, index) =>
        <div 
            className={`bar ${results[name].hazard > 1 ? "increased-risk" : "reduced-risk"}`}
            key={index}
            style={{
                width: (Math.abs(1 - results[name].hazard)/1) * 100 + '%',
                gridRowStart: index + 1
            }}
            >
            <span data-ratio={results[name].hazard}></span>
        </div>
    )

    const absBars = Object.values(tabNames).map((name, index) => 
        <div 
            className={`bar ${results[name].hazard > 1 ? "increased-risk" : "reduced-risk"}`}
            key={index}
            style={{
                width: Math.abs(results[name].baseline * 10 * (results[name].hazard - 1)) / 50 * 100 + '%',
                gridRowStart: index + 1
            }}
            >
            <span data-ratio={(results[name].baseline * 10 * (results[name].hazard - 1)).toFixed(0)}></span>
        </div>
    )

    const content = (

        <>

            <div className="tab-container two-button">
                <button className={`${barUnits === "abs" ? "active" : ""}`} onClick={() => setBarUnits("abs")}>Absolute Risk</button>
                <button className={`${barUnits === "haz" ? "active" : ""}`} onClick={() => setBarUnits("haz")}>Hazard Ratios</button>
            </div>

            <div>
                {
                    barUnits === "abs" ?
                    <>
                        <p>This is a summary of the effects HRT use has on your health risks, 
                        expressed as absolute risk change in a population of 1000 women. Absolute 
                        risk change measures how many additional (or fewer) women experience a 
                        health outcome due to an intervention, in this case HRT. A positive change 
                        means more women are likely to experience the health outcome due to HRT use,
                        whilst a negative changes means fewer women are likely to experience the 
                        outcome.</p>
                        <p>Absolute risk change should always be considered alongside the baseline risk 
                        of an outcome. Although HRT may increase the risk of certain outcomes, the actual 
                        risk you face may still be very low.</p>
                    </>
                    :
                    <>
                        <p>This is a summary of the effects HRT use has on your health risks, 
                        expressed as hazard ratios. Hazard ratios measure how an intervention,
                        in this case HRT, effects health outcomes over time. A hazard ratio 
                        larger than 1 means the health outcome is more likely to occur in 
                        people who have used HRT, whilst a hazard ratio less than 1 means 
                        the health outcome is less likely to occur.</p>
                        <p>Whilst hazard ratios are helpful in quickly understanding the overall
                        effects of an intervention, they can be misleading. They do not show
                        the absolute risk of health outcomes, which may still be very small 
                        if the baseline risk (risk without HRT use) is low.</p>
                    </>
                }
            </div>
            
            <div className="summary-container">
                <div className="bar-container">
                    {barUnits === "abs" ? absBars : hazardBars}
                </div>
                <div className="labels">
                    <p>Breast Cancer</p>
                    <p>CHD</p>
                    <p>Stroke</p>
                    <p>VTE</p>
                    <p>Fracture</p>
                </div>
                <div className="axes">
                    <p>{barUnits === "abs" ? "-50" : "0.0"}</p>
                    <p style={{justifySelf:"center"}}>{barUnits === "abs" ? "0" : "1.0"}</p>
                    <p style={{justifySelf:"end"}}>{barUnits === "abs" ? "+50" : "2.0"}</p>
                    <p><i>reduced risk</i></p>
                    <p style={{justifySelf:"center"}}><i>no change</i></p>
                    <p style={{justifySelf:"end"}}><i>increased risk</i></p>
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
            <div className="tab-container six-button">
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