import { useForm } from "react-hook-form";

export default function NumberInput({key, label, name, validation}) {

    const { register, formState: { errors } } = useForm();

    return (
        <div key={key}>
            <label>{label}</label>
            <input type="number" {...register(name, validation)}/>
        </div>
    )

}