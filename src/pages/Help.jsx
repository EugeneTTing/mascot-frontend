import Collapsible from "../componenets/Collapsible";
import "./routes.css";


export default function Help () {
    return (

        <>

            <h1>Help</h1>
        
            <div className="info-text">

                <Collapsible title={"What is baseline risk?"}>
                    <p>
                        In MAsCoT, the baseline risk is the probability of a health outcome 
                        without the use of HRT. Existing prediction models, derived and 
                        validated by medical researchers, are used to predict baseline risks.
                    </p>
                </Collapsible>

                <Collapsible title={"How is the risk with HRT determine?"}>
                    <p>
                        The effect of HRT use on a health outcome is most commonly 
                        described with relative risk or odds ratios in the literature. 
                        MAsCoT uses ratios found in recent literature to determine
                        the effect of HRT use.
                    </p>
                </Collapsible>

                <Collapsible title={"Breast Cancer"}>

                    <h3>Baseline Risk</h3>
                    <p>The baseline breast cancer risk prediction is provided 
                    by <a href="https://www.canrisk.org">CanRisk</a>, created 
                    by the University of Cambridge [1, 2, 3]. The underlying model 
                    behind CanRisk is the Breast and Ovarian Analysis of 
                    Disease Incidence and Carrier Estimation Algorithm 
                    (BOADICEA).</p>

                    <h3>Risk Ratios</h3>
                    <p>The relative risk of breast cancer with HRT use is taken 
                    from a nested case control study by Vinogradova et al., 
                    assessing the risk of breast cancer from the use of 
                    different types of HRT, reporting adjusted odds ratios 
                    with reference to never users of HRT [4].</p>

                    <p className="references">
                        [1] Lee, A. et al. Boadicea: a comprehensive breast cancer 
                        risk prediction model incorporating genetic and nongenetic risk 
                        factors. Genet Med 21, 1708-1718 (2019).<br/>
                        [2] Carver, T. et al. CanRisk Tool — A Web Interface for the 
                        Prediction of Breast and Ovarian Cancer Risk and the Likelihood 
                        of Carrying Genetic Pathogenic Variants. Cancer Epidemiol 
                        Biomarkers Prev (2020).<br/>
                        [3] Archer, S. et al. Evaluating clinician acceptability of the 
                        prototype CanRisk tool for predicting risk of breast and 
                        ovarian cancer: A multi-methods study. PLoS ONE 15, e0229999 (2020).<br/>
                        [4] Vinogradova, Y. et al. Use of hormone replacement therapy 
                        and risk of breast cancer: nested case-control studies using 
                        the qresearch and cprd databases. BMJ (Clinical research ed.) 371 (2020).<br/>
                    </p>

                </Collapsible>

                <Collapsible title={"Coronary Heart Disease and Stroke"}>

                    <h3>Baseline Risk</h3>
                    <p>The baseline coronary heart disease and stroke risk is 
                    provided by the QRisk3 model, created by doctors and academics working 
                    in the NHS. The model is derived from patient data in the 
                    QResearch database, with over 10 million patients for both 
                    derivation and validation of the model [5].</p>
                    
                    <h3>Risk Ratios</h3>
                    <p>The relative risk of coronary heart disease and stroke 
                    with HRT use is taken from a Cochrane systematic review of 
                    randomised clinical trials assessing the effects of HRT 
                    for the prevention of cardiovascular disease [6].</p>

                    <p className="references">
                        [5] Hippisley-Cox, J. et al. Development and validation of 
                        qrisk3 risk prediction algorithms to estimate future risk of 
                        cardiovascular disease: prospective cohort study. BMJ 357 (2017).<br/>
                        [6] Boardman, H. M. et al. Hormone therapy for preventing 
                        cardiovascular disease in post-menopausal women. Cochrane database 
                        of systematic reviews 3 (2015).<br/>
                    </p>

                </Collapsible>

                <Collapsible title={"Venous Thromboembolism"}>

                    <h3>Baseline Risk</h3>
                    <p>The baseline risk of venous thromboembolism is provided 
                    by QThrombosis, from the same group of doctors and academics 
                    who created QRisk3. The study included over 3 million 
                    patients in the derivation and validation cohort [7].</p>
                    
                    <h3>Risk Ratios</h3>
                    <p>The relative risk of venous thromboembolism with HRT use 
                    is taken from a nested case control study by Vinogradova 
                    et al., assessing the risk of VTE from the use of different 
                    types of HRT, reporting adjusted odds ratios with reference 
                    to never users of HRT [8].</p>

                    <p className="references">
                        [7] Hippisley-Cox, J et al. Development and validation of risk prediction 
                        algorithm (qthrombosis) to estimate future risk of venous 
                        thromboembolism: prospective cohort study. BMJ 343 (2011).<br/>
                        [8] Vinogradova, Y. et al. Use of hormone replacement therapy 
                        and risk of venous thromboembolism: nested case-control studies 
                        using the qresearch and cprd databases. BMJ 364 (2019).<br/>
                    </p>

                </Collapsible>

                <Collapsible title={"Osteoporosis and Fracture"}>

                    <h3>Baseline Risk</h3>
                    <p>The baseline risk of fracture is provided by QFracture, 
                    from the same group who created QRisk3 and QThrombosis. 
                    The study included over 4 million patients in the derivation 
                    and validation cohort [9].</p>
                    
                    <h3>Risk Ratios</h3>
                    <p>The relative risk of fractures with HRT use is taken 
                    from a systematic review by Zhu et al., assessing the 
                    association between HRT use and the development of bone
                    fractures [10].</p>

                    <p className="references">
                        [9] Hippisley-Cox, J et al. Derivation and validation of updated
                        qfracture algorithm to predict risk of osteoporotic fracture 
                        in primary care in the united kingdom: prospective open cohort 
                        study. BMJ (Clinical research ed.) 344 (2012).<br/>
                        [10] Zhu, L. L. et al. Effect of hormone therapy on the risk of 
                        bone fractures: a systematic review and meta-analysis of 
                        randomized controlled trials. Menopause 23 (2016).<br/> 
                    </p>

                </Collapsible>


            </div>


        </>

    )
}