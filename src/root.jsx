import "./root.css";
import {
    Outlet,
    Link,
} from "react-router-dom";

export default function Root() {
    return (
        <>
            <div className="sidebar">
                <h2>MAsCoT</h2>
                <li><Link to={`about`}>About</Link></li>
                <li><Link to={`risk/general`}>Risk Calculator</Link></li>
                <li><Link to={`symptoms`}>Symptom Tracker</Link></li>
                <li><Link to={`help`}>Help</Link></li>
            </div>
            <div className="detail">
                <Outlet />
            </div>
        </>
    )
}