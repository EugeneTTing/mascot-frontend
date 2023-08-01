import FormPages from "./FormPages"
import useFormContext from "../hooks/useFormContext"

const Form = () => {

    const {
        setPage,
        data,
        disablePrev,
        disableNext,
    } = useFormContext()

    const handlePrev = () => setPage(prev => prev - 1)

    const handleNext = () => setPage(prev => prev + 1)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(JSON.stringify(data))
    }

    const content = (
        <form onSubmit={handleSubmit}>
            
            <header>
                
                <button type="button" onClick={handlePrev} disabled={disablePrev}>Previous Page</button>

                <button type="button" onClick={handleNext} disabled={disableNext}>Next Page</button>

                <button type="submit">Submit</button>

            </header>

            <FormPages/>

        </form>
    )

    return content
}

export default Form