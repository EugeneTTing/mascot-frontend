import useFormContext from "../hooks/useFormContext"
import About from "./About"
import BoneCancer from "./BoneCancer"
import Family from "./Family"
import MedicalHistory from "./MedicalHostory"
import ReproductiveHealth from "./ReproductiveHealth"

const FormPages = () => {

    const {
        page
    } = useFormContext()

    const display = {
        0: <About/>,
        1: <Family/>,
        2: <ReproductiveHealth/>,
        3: <BoneCancer/>,
        4: <MedicalHistory/>
    }

    const content = (
        display[page]
    )

    return content
}

export default FormPages