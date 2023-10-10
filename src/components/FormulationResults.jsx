import "./components.css"

const formulationDict = {
    "e": {
        "oral": {
            title: "Tablets",
            desc: "Tablets or pills, containing oestradiol, taken everyday."
        },
        "patch": {
            title: "Patch",
            desc: "A patch containing oestradiol, stuck to the body, and changed every 3 - 5 days."
        },
        "gel": {
            title: "Gel",
            desc: "An oestradiol gel preparation, applied once a day."
        },
        "spray": {
            title: "Spray",
            desc: "A spray containing oestradiol, applied once a day."
        }
    },
    "ep": {
        "oral": {
            title: "Combined Tablets",
            desc: "Tablets containing both oestradiol and a progestogen, taken daily."
        },
        "patch": {
            title: "Combined Patches",
            desc: "A patch containing oestradiol and a progestogen, stuck to the body, and changed every 3 - 5 days"
        },
        "gel": {
            title: "Gel",
            desc: "An oestradiol gel preparation, applied once a day, with progestogen provided seperately."
        },
        "spray": {
            title: "Spray",
            desc: "A spray containing oestradiol, applied once a day, with progestogen provided seperately."
        }
    }
}

const progestogenDict = {
    "mirena": {
        title: "Mirena IUS",
        desc: "A contraceptive Mirena which provides progestogen."
    },
    "micronised": {
        title: "Micronised Progesterone",
        desc: "Utrogestan taken orally at night "
    },
    "provera": {
        title: "Provera",
        desc: "Provera taken orally "
    },
    "norethisterone": {
        title: "Norethisterone",
        desc: "Norethisterone takne orally "
    }
}

function getFormulationOptions(route, index) {

    const type = index === 0 ? "e" : "ep"

    let options = []

    route.forEach((r) => {
        addToArray(r, type, options)
    })

    function addToArray(route, type, array) {
        array.push(formulationDict[type][route])
    }

    return options
}

function getRoutes(data) {

    let routeArr = []

    // transdermal routes in order
    if (data.patch === "true") {
        routeArr.push("patch")
        if (data.transdermal === "gel") {
            routeArr.push("gel")
            routeArr.push("spray")
        } else {
            routeArr.push("spray")
            routeArr.push("gel")
        }
    } else {
        if (data.transdermal === "gel") {
            routeArr.push("gel")
            routeArr.push("spray")
        } else {
            routeArr.push("spray")
            routeArr.push("gel")
        }
        routeArr.push("patch")
    }

    if (data.trans_indic === "false") {
        if (data.preferred_route === "oral") {
            routeArr.unshift("oral")
        } else {
            routeArr.push("oral")
        }
    }

    return routeArr

}

function getProgestogenRoutes(data) {

    let routesArr = Object.keys(progestogenDict)

    if (data.contraception === "false") {
        let index = routesArr.indexOf("mirena")
        if (index > -1) {
            routesArr.splice(index, 1)
        }
    }

    if (data.trans_indic === "true") {
        let index = routesArr.indexOf("provera")
        if (index > -1) {
            routesArr.splice(index, 1)
        }
        index = routesArr.indexOf("norethisterone")
        if (index > -1) {
            routesArr.splice(index, 1)
        }
    }

    return routesArr

}

function getProgestogenOptions(routes, index) {

    let optionsArr = []

    routes.forEach(r => addToOptionsArray(r, index))

    function addToOptionsArray(route, index) {

        if (route === "mirena") {

            optionsArr.push(progestogenDict[route])

        } else {

            let frequency = index === 1 ? "every day on a continuous basis." :
                index === 2 ? "for the last 12 days at the end of your menstrual cycle.":
                "for the last 12 days every 3 months."
    
            let dict = progestogenDict[route]
            let newDict = {}

            newDict.title = dict.title
            newDict.desc = dict.desc + frequency
    
            optionsArr.push(newDict)

        }

    }

    return optionsArr

}

const FormulationInfo = ({dict}) => {

    const content = (

        <div className="formulation-container">

            <h2>{dict.title}</h2>
            <p>{dict.desc}</p>

        </div>

    )

    return content

}

const FormulationResults = ({data, handleReturn}) => {

    console.log(data)

    const prescription = data.hysterectomy === "true" || data.mirena === "true"?
        {
            index: 0,
            name: "Oestrogen Only HRT",
            description: "Since you've had a hysterectomy or have a Mirena, you are not at elevated risk of endometrial cancer, and should be prescribed with oestrogen-only HRT."
        } :
        data.last_period === "more_than_year" ?
        {
            index: 1,
            name: "Continuous Combined HRT",
            description: "Since you have an intact uterus, you should be taking combined HRT continuously, which invovles taking oestrogen and progestogen everyday."
        } : 
        data.periods === "regular" ?
        {
            index: 2,
            name: "Monthly Sequential Combined HRT",
            description: "You should be taking oestrogen everyday, and progestogen alongside it for the last 10 to 14 days of your menstrual cycle every month. At the end of each progestogen cycle, you should have a period."
        } :
        {
            index: 3,
            name: "3 - Monthly Sequential Combined HRT",
            description: "You should be taking oestrogen everyday, and progestogen alongside it for the last 10 to 14 days, every 3 months. At the end of each progestogen cycle, you should have a period."
        }

    const route = getRoutes(data)

    const options = getFormulationOptions(route, prescription.index)
    
    const progestogenRoutes = getProgestogenRoutes(data)

    const progestogenOptions = getProgestogenOptions(progestogenRoutes, prescription.index)

    const content = (
        <>

            <div className="form-control">
                <button type="button" onClick={handleReturn}>Return</button>
            </div>

            <h2>{prescription.name}</h2>

            <p>{prescription.description}</p>

            <h2>Routes of Administration</h2>

            {options.map((m, i) => <FormulationInfo key={i} dict={m}/>)}

            {
                prescription.index !== 0 &&
                
                <>
                    <h2>Progestogen Taken Seperately</h2>

                    {progestogenOptions.map((m, i) => <FormulationInfo key={i} dict={m}/>)}

                </>

            }

        </>
    )   

    return content
} 

export default FormulationResults