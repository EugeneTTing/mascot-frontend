import { useContext } from "react";
import RiskContext from "../context/RiskContext"

const useRiskContext = () => {
    return useContext(RiskContext)
}

export default useRiskContext