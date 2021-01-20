import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import FSR from './stats/FSRContainer';
import Escalation from './stats/EscalationContainer';
import ResolutionTime from './stats/ResolutionTimeContainer';
import ThemeContainer from './Theme/ThemeContainer'
import TMO from './stats/TMOContainer';
import Resume from './stats/ResumeContainer';
import Templates from './Configuration/TemplatesContainer';
import Typology from './Configuration/TypologyContainer';
import Users from './Configuration/usersContainer';
import config from '../config/config.json'

const TMOData = [
    {
        name: 'Resolución en primer nivel', info: 5136, otros: 2200
    },
    {
        name: 'Escalados',  cert: 2933, auto: 977
    },
    {
        name: 'Prioritarios',  pqrs: 2476, asun: 1238
    },

];
// Generate Sales Data
function createData(time, amount) {
    return { time, amount };
}

const TodayData = [
    createData('06:00', 0),
    createData('06:20', 1),
    createData('06:40', 2),
    createData('07:00', 5),
    createData('07:20', 8),
    createData('07:40', 7),
    createData('08:00', 9),
    createData('08:20', 12),
    createData('08:40', 10),
    createData('09:00', undefined),
];

const Escalationdata = [
    { name: '1', uv: 100, pv: 256 , amt: 70, averagePv: 30, averageUv: 7200, averageAmt: 259200 },
    { name: '2', uv: 45, pv: 130, amt: 100, averagePv: 20, averageUv: 5000, averageAmt: 76000 },
    { name: '3', uv: 50, pv: 245, amt: 80 , averagePv: 10, averageUv: 7200, averageAmt: 86400},
    { name: '4', uv: 8, pv: 150, amt: 100, averagePv: 30, averageUv: 1000, averageAmt: 259200 },
    { name: '5', uv: 100, pv: 221, amt: 120, averagePv: 30, averageUv: 5000, averageAmt: 26000 },
    { name: '6', uv: 9, pv: 35, amt: 6, averagePv: 60, averageUv: 7200, averageAmt: 36000 },
    { name: '7', uv: 53, pv: 167, amt: 30, averagePv: 20, averageUv: 7200, averageAmt: 86400 },
    { name: '8', uv: 152, pv: 278, amt: 100, averagePv: 30, averageUv: 5000, averageAmt: 259200 },
    { name: '9', uv: 29, pv: 110, amt: 40, averagePv: 30, averageUv: 7200, averageAmt: 76000 },
    { name: '10', uv: 94, pv: 123, amt: 10, averagePv: 20, averageUv: 7200, averageAmt: 86400 },
    { name: '11', uv: 125, pv: 253, amt: 120, averagePv: 30, averageUv: 5000, averageAmt: 259200  },
    { name: '12', uv: 43, pv: 45, amt: 10, averagePv: 20, averageUv: 7200, averageAmt: 26000 },
    { name: '13', uv: 74, pv: 90, amt: 80, averagePv: 20, averageUv: 1000, averageAmt: 50000 },
    { name: '14', uv: 71, pv: 130, amt: 100, averagePv: 30, averageUv: 5000, averageAmt: 36000 },
    { name: '15', uv: 117, pv: 11, amt: 10, averagePv: 20, averageUv: 7200, averageAmt: 259200 },
    { name: '16', uv: 186, pv: 107, amt: 120, averagePv: 20, averageUv: 5000, averageAmt: 36000 },
    { name: '17', uv: 16, pv: 326, amt: 200, averagePv: 30, averageUv: 7200, averageAmt: 36000 },
    { name: '18', uv: 125, pv: 353, amt: 250, averagePv: 30, averageUv: 7200, averageAmt: 86400 },
    { name: '19', uv: 222, pv: 366, amt: 100, averagePv: 60, averageUv: 7200, averageAmt: 259200 },
    { name: '20', uv: 372, pv: 486, amt: 450, averagePv: 10, averageUv: 5000, averageAmt: 86400 },
    { name: '21', uv: 182, pv: 512, amt: 300, averagePv: 60, averageUv: 1000, averageAmt: 86400 },
    { name: '22', uv: 164, pv: 302, amt: 90, averagePv: 30, averageUv: 1000, averageAmt: 86400 },
    { name: '23', uv: 316, pv: 425, amt: 200, averagePv: 60, averageUv: 5000, averageAmt: 86400 },
    { name: '24', uv: 131, pv: 467, amt: 150, averagePv: 30, averageUv: 1000, averageAmt: 259200 },
    { name: '25', uv: 291, pv: 190, amt: 50, averagePv: 60, averageUv: 7200, averageAmt: 259200 },
    { name: '26', uv: 47, pv: 194, amt: 120, averagePv: 30, averageUv: 7200, averageAmt: 86400 },
    { name: '27', uv: 415, pv: 371, amt: 170, averagePv: 30, averageUv: 1000, averageAmt: 76000 },
    { name: '28', uv: 182, pv: 376, amt: 200, averagePv: 60, averageUv: 7200, averageAmt: 259200 },
    { name: '29', uv: 93, pv: 295, amt: 100, averagePv: 10, averageUv: 1000, averageAmt: 76000 },
    { name: '30', uv: 99, pv: 322, amt: 240, averagePv: 10, averageUv: 7200, averageAmt: 259200 },
    
  ];

  const typologies = [
    {name:'Solicitud de Información', checked:false},
    {name:'Peticiones, Quejas y Reclamos', checked:false},
    {name:'Asuntos Legales', checked:false},
    {name:'Demandas', checked:false},
    {name:'Certificados', checked:false},
    {name:'Autorizaciones', checked:false},
    {name:'Derechos de Peticiones', checked:false},
    {name:'Atención Prioritaria', checked:false},
    {name:'Tutelas', checked:false},
    {name:'Servicio al Cliente', checked:false},
    {name:'Casos sin tipificar', checked:false},
    {name:'Soporte técnico', checked:false},
    {name:'Ventas', checked:false},
]

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
                <ThemeContainer />
            </Route>
            <Route path="/templates">
                <Templates
                    typologies={typologies}
                />
            </Route>
            <Route path="/typologies">
                <Typology
                    typologies={typologies}
                />
            </Route>
            <Route path="/users">
                <Users/>
            </Route>
        </Switch>
    );

}

