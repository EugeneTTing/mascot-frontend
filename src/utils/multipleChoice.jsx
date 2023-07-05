import { useForm } from "react-hook-form";

export default function MultipleChoice({key, label, name, validation, options}) {

    console.log(options);
    const { register, formState: { errors } } = useForm();

    return (
        <div key={key}>
            <label>{label}</label>
            <select {...register(name, validation)}>
                {options.map((o, o_index) => {
                    return (
                        <option key={o_index}>
                            {o}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}