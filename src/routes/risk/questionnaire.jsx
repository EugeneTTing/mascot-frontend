import NumberInput from "../../utils/numberInput";
import MultipleChoice from "../../utils/multipleChoice";
import { questions } from "../../data/questions";


export default function Questionnaie({page}) {

    const curr_questions = questions[page];

    const questionList = curr_questions.map((q, q_index) => {
        const key = "question" + q_index;
        switch (q.type) {
            case "number":
                return(<NumberInput key={key} label={q.label} name={q.name} validation={q.validation}/>);
            case "select":
                return(<MultipleChoice key={key} label={q.label} name={q.name} validation={q.validation} options={q.options}/>);
            default:
                return(<p>Unexpected question type</p>);
        }
    })

    return (
        <>
            {questionList}
        </>
    )
}