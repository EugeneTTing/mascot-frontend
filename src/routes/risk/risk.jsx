import { Outlet, Link } from "react-router-dom";
import "./risk.css";

export default function Risk () {
    return (
        <>
            <h1>Risk</h1>
            <p>User Answers some questions.</p>
            <div>
                <button><Link to={`general`}>Basic Information</Link></button>
                <button><Link to={`breast_cancer`}>Breast Cancer</Link></button>
                <button><Link to={`cvd`}>Cardiovascular Disease</Link></button>
                <button><Link to={`fracture`}>Fracture Risk</Link></button>
            </div>
            <div className="form">
                <Outlet/>
            </div>
        </>
    )
}