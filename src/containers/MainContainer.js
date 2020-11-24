import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import FSR from './stats/FSRContainer';
import Escalation from './stats/EscalationContainer';
import ResolutionTime from './stats/ResolutionTimeContainer';
import Configuration from './Configuration/ConfigurationContainer'
import TMO from './stats/TMOContainer';
import Resume from './stats/ResumeContainer';
import config from '../config/config.json'

const TMOData = [
    {
        name: 'Tipo 1', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Tipo 2', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Tipo 3', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Tipo 4', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Tipo 5', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Tipo 6', uv: 2390, pv: 3800, amt: 2500,
    },

];
// Generate Sales Data
function createData(time, amount) {
    return { time, amount };
}

const TodayData = [
    createData('00:00', 0),
    createData('03:00', 300),
    createData('06:00', 600),
    createData('09:00', 800),
    createData('12:00', 1500),
    createData('15:00', 2000),
    createData('18:00', 2400),
    createData('21:00', 2400),
    createData('24:00', undefined),
];

const Escalationdata = [
    { name: '1', uv: 300, pv: 456 , amt: 100, averagePv: 30, averageUv: 7200, averageAmt: 3600 },
    { name: '2', uv: 145, pv: 230, amt: 100, averagePv: 20, averageUv: 5000, averageAmt: 2600 },
    { name: '3', uv: 100, pv: 345, amt: 100 , averagePv: 10, averageUv: 7200, averageAmt: 3600},
    { name: '4', uv: 8, pv: 450, amt: 100, averagePv: 30, averageUv: 1000, averageAmt: 3600 },
    { name: '5', uv: 100, pv: 321, amt: 100, averagePv: 30, averageUv: 5000, averageAmt: 2600 },
    { name: '6', uv: 9, pv: 235, amt: 100, averagePv: 60, averageUv: 7200, averageAmt: 3600 },
    { name: '7', uv: 53, pv: 267, amt: 100, averagePv: 20, averageUv: 7200, averageAmt: 2600 },
    { name: '8', uv: 252, pv: 378, amt: 100, averagePv: 30, averageUv: 5000, averageAmt: 3600 },
    { name: '9', uv: 79, pv: 210, amt: 100, averagePv: 30, averageUv: 7200, averageAmt: 2600 },
    { name: '10', uv: 294, pv: 23, amt: 100, averagePv: 20, averageUv: 7200, averageAmt: 3600 },
    { name: '11', uv: 125, pv: 653, amt: 100, averagePv: 30, averageUv: 5000, averageAmt: 3600  },
    { name: '12', uv: 43, pv: 45, amt: 100, averagePv: 20, averageUv: 7200, averageAmt: 2600 },
    { name: '13', uv: 74, pv: 90, amt: 100, averagePv: 20, averageUv: 1000, averageAmt: 5000 },
    { name: '14', uv: 71, pv: 130, amt: 100, averagePv: 30, averageUv: 5000, averageAmt: 3600 },
    { name: '15', uv: 117, pv: 11, amt: 100, averagePv: 20, averageUv: 7200, averageAmt: 5000 },
    { name: '16', uv: 186, pv: 107, amt: 100, averagePv: 20, averageUv: 5000, averageAmt: 3600 },
    { name: '17', uv: 16, pv: 926, amt: 100, averagePv: 30, averageUv: 7200, averageAmt: 3600 },
    { name: '18', uv: 125, pv: 653, amt: 100, averagePv: 30, averageUv: 7200, averageAmt: 2600 },
    { name: '19', uv: 222, pv: 366, amt: 100, averagePv: 60, averageUv: 7200, averageAmt: 3600 },
    { name: '20', uv: 372, pv: 486, amt: 100, averagePv: 10, averageUv: 5000, averageAmt: 5000 },
    { name: '21', uv: 182, pv: 512, amt: 100, averagePv: 60, averageUv: 1000, averageAmt: 3600 },
    { name: '22', uv: 164, pv: 302, amt: 100, averagePv: 30, averageUv: 1000, averageAmt: 5000 },
    { name: '23', uv: 316, pv: 425, amt: 100, averagePv: 60, averageUv: 5000, averageAmt: 3600 },
    { name: '24', uv: 131, pv: 467, amt: 100, averagePv: 30, averageUv: 1000, averageAmt: 5000 },
    { name: '25', uv: 291, pv: 190, amt: 100, averagePv: 60, averageUv: 7200, averageAmt: 3600 },
    { name: '26', uv: 47, pv: 194, amt: 100, averagePv: 30, averageUv: 7200, averageAmt: 3600 },
    { name: '27', uv: 415, pv: 371, amt: 100, averagePv: 30, averageUv: 1000, averageAmt: 2600 },
    { name: '28', uv: 182, pv: 376, amt: 100, averagePv: 60, averageUv: 7200, averageAmt: 5000 },
    { name: '29', uv: 93, pv: 295, amt: 100, averagePv: 10, averageUv: 1000, averageAmt: 2600 },
    { name: '30', uv: 99, pv: 322, amt: 100, averagePv: 10, averageUv: 7200, averageAmt: 5000 },
    { name: '31', uv: 52, pv: 246, amt: 100, averagePv: 60, averageUv: 1000, averageAmt: 2600 },
    
  ];

export default function MainContainer() {
    const [formatTime, setFormatTime] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const fromDate = new Date("11/1/2020").getTime();
    const toDate = new Date("11/25/2020").getTime();
    const today = new Date();

    
    
    function fancyTimeFormat(duration) {

        const hrs = ~~(duration / 3600);
        const mins = ~~((duration % 3600) / 60);
        const secs = ~~duration % 60;
        let ret = "";

        if (hrs > 0) {
            ret += "" + hrs + (hrs === 1 ? " Hora " : " Horas ");

            if (mins > 0) {
                ret += "con " + mins + (mins === 1 ? " Minuto " : " Minutos ");
            }

            if (secs > 0) {
                ret += "y " + secs + (secs === 1 ? " Segundo " : " Segundos ");
            }
        }
        else if (mins > 0) {
            ret += "" + mins + (mins === 1 ? " Minuto " : " Minutos ");

            if (secs > 0) {
                ret += "y " + secs + (secs === 1 ? " Segundo " : " Segundos ");
            }
        }
        else if (secs > 0) {
            ret += "" + secs + (secs === 1 ? " Segundo " : " Segundos ");
        }
        else { ret = '0 Segundos' }

        return ret;
    }

    useEffect(() => {

        const calculateAverageTime = (config) => {
            //arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])

            //recent emails
            let recent = 0;

            const average = config.reduce((acc, email) => {
                const emailDate = new Date(email.date).getTime();

                if (emailDate > fromDate && emailDate < toDate) {
                    recent++;
                    return email.resolutionTime + acc;
                }
                else return acc;

            }, 0);
            const time = fancyTimeFormat(average / recent);
            setFormatTime(time);
            setQuantity(recent);
        }

        calculateAverageTime(config);

    }, []);



    return (
        <Switch>
            <Route exact path="/" >
                <Resume
                    formatTime={formatTime}
                    quantity={quantity}
                    day={today.toLocaleDateString("es-ES", options)}
                    TMOData={TMOData}
                    todayData={TodayData}
                />
            </Route>
            <Route path="/escalation">
                <Escalation  
                    data={Escalationdata}
                    fancyTimeFormat={fancyTimeFormat}
                     />
            </Route>
            <Route path="/tmo">
                <TMO data={TMOData} />
            </Route>
            <Route path="/autoresolution"  >
                <FSR data={TodayData}/>
            </Route>
            <Route path="/resolutiontime"  >
                <ResolutionTime />
            </Route>
            <Route path="/configuration" >
                <Configuration />
            </Route>
        </Switch>
    );

}

