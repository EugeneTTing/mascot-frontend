import Form from "../../componenets/Form";
import { FormProvider } from "../../context/FormContext";
import "./risk.css";

export default function Risk () {

    return (
        <>

            <h1>Risk</h1>

            <p>User Answers some questions.</p>

            <FormProvider>
                <Form/>
            </FormProvider>
            
        </>
    )
}