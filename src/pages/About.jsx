import Collapsible from "../components/Collapsible";
import "./routes.css";

export default function About () {

    
    function toggleCollapse() {
        console.log("in function")
    }
    
    var coll = document.getElementsByClassName("collapsible");
    console.log(coll)
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", toggleCollapse)
    }

    return (
        <>

            <h1>About</h1>

            <div className="info-text">

                
                <h3>What is MAsCoT?</h3>
                <p>MAsCoT - the Menopause Assessment Communication Tool - is an 
                online tool which provides you with a personalised risk and benefit 
                profile of HRT use. If you and your healthcare provider decide 
                to commence HRT, MAsCoT can also help you figure out the best
                HRT formulation for you. MAsCoT is designed to empower shared 
                decision-making and <b>does not</b> replace medical advice. 
                Please consult with your healthcare provider for more information 
                regarding the menopause and HRT.</p>

                <h3>What is the menopause?</h3>
                <p> Menopause is an important period of transition for 
                all women. It occurs 12 months after a woman's final menstrual 
                period, when the ovaries stop producing hormones such as oestrogen 
                and progesterone. The decline in hormone levels during the 
                menopausal transition leads to menstrual irregularities and 
                various menopause related symptoms. To date over 30 symptoms 
                related to the menopause have been recognised, including vasomotor 
                symptoms such as hot flushes and night sweats, genitourinary 
                symptoms, cognitive symptoms and mood disorders, sleep 
                disturbances, fatigue or tiredness, and loss of sex drive.</p>

                <h3>What is HRT?</h3>
                <p>Hormone replacement therapy (HRT) is an effective and commonly 
                prescribed treatment for managing menopause-related symptoms. 
                It involves the replacement of oestrogen and progestogen in 
                your body. The use of HRT has also been shown to impact the risk-benefit 
                profiles of various long-term health conditions, including 
                coronary heart disease, stroke, pulmonary embolism, breast 
                cancer, endometrial cancer, and osteoporosis. The risk-benefit
                profile of HRT use is highly complex, being effected by factors 
                such as age, time since menopause onset, lifestyle, family history, 
                and type of HRT considered for use. Simply put, HRT use effects 
                every woman differently.</p>


                <h3>Long Term Health Outcomes</h3>
                <Collapsible title={"Breast Cancer"}>
                    <p>Oestrogen-only HRT use has little to no affect on the risk 
                    of breast cancer, whilst combined oestrogen and progestogen 
                    HRT use can be associated with an increase in the risk of 
                    breast cancer. However, the increase in breast cancer risk 
                    is correlated to the treatment duration and reduces after 
                    stopping HRT use.</p>
                </Collapsible>

                <Collapsible title={"Endometrial Cancer"}>
                    <p>The use of oestrogen-only HRT has been shown to increase 
                    the risk of endometrial cancer. However, this risk is 
                    counteracted with the addition of progestogen to HRT. Women 
                    with an intact uterus should be presribed combines 
                    oestrogen-progestogen HRT.
                    </p>
                </Collapsible>

                <Collapsible title={"Cardiovascular Disease"}>
                    <p>When commenced uder the age of 60, HRT use does not 
                    increase the risk of cardiovascular disease. Oestrogen-only 
                    HRT use has no affect on, or reduces the risk of coronary 
                    heart disease. Combined oestrogen and progestogen HRT use is 
                    associate with a small increase in, or has no affect on the 
                    risk ofcoronary heart disease. Taking oral HRT is associated 
                    with a small increase in the risk of stroke.</p>
                </Collapsible>

                <Collapsible title={"Venous Thromboembolism"}>
                    <p>The risk of VTE with transdermal HRT use is no greater 
                    than the baseline population risk. However, oral HRT use is 
                    associated with an increase in the risk of VTE. </p>
                </Collapsible>

                <Collapsible title={"Osteoporosis and Fracture"}>
                    <p>The risk of fragility fracture is decreased while taking 
                    HRT. This protective effect decreases once treatment stops, 
                    but may continue for longer in women who have longer treatment 
                    durations.</p>
                </Collapsible>
                
                <h3>Is HRT right for me?</h3>
                <p>According 
                to <a href="https://www.nice.org.uk/guidance/ng23">guidelines</a> from 
                the National Institute of Health and Care Excellence (NICE) 
                and the British Menopause Society, healthcare providers should 
                explore the risks and benefits of HRT use with their patients 
                before HRT is commenced for treatment of vasomotor symptoms and 
                other short term menopausal symptoms. Most importantly, NICE 
                emohasises the need for an individualised approach when managing 
                menopausal symptoms.</p>


            </div>

        </>
    )
}