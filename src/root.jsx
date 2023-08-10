import "./root.css";
import {
    Outlet,
    NavLink,
} from "react-router-dom";

export default function Root() {
    return (
        <>
            <div className="sidebar">
                <img src="/images/alt_logo_no_text.svg" alt="logo"/>
                <NavLink to="/" end>Home</NavLink>
                <NavLink to={`about`}>About</NavLink>
                <NavLink to={`risk`}>Risk Calculator</NavLink>
                <NavLink to={`formulations`}>HRT Formulations</NavLink>
                <NavLink to={`symptoms`}>Symptom Tracker</NavLink>
                <NavLink to={`help`}>Help</NavLink>
            </div>
            <div className="detail">
                <Outlet/>
            </div>
        </>
    )
}