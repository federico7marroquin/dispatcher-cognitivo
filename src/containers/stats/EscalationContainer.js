import React, { useState } from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Stats from '../../components/Stats/Stats';
import BrushBarChart from '../../components/Charts/BrushBarChart/BrushBarChart';
import Copyright from '../../components/Copyright/Copyright';
import MonthYearhDatePicker from '../../components/Pickers/DatePicker/MonthYearDatePicker';
import {useStyles} from '../../styles/styles';
import Title from '../../components/Title/Title';

export default function EscalationContainer(props) {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const fixedLargeHeightPaper = clsx(classes.paper, classes.fixedLargeHeight);
    const {data, fancyTimeFormat} = props;

    //state
    
    const first = data.reduce(((acc,actual)=> acc+actual.averagePv),0)/data.length;
    const second = data.reduce(((acc,actual)=> acc+actual.averageUv),0)/data.length;
    const third = data.reduce(((acc,actual)=> acc+actual.averageAmt),0)/data.length;
    const total = (first+second+third)/3;
    //
    const escalationDate = new Date();
    escalationDate.setMonth(escalationDate.getMonth()-1);
    //default time
    const [date, setDate] = useState('Noviembre 2020');
    const [datePicker, setDatePicker] = useState(escalationDate);

    //--emails
    
    const [firstResolution, setFirstResolution] = useState(data.reduce(((acc,actual)=> acc+actual.pv),0));
    const [scaled, setScaled] = useState(data.reduce(((acc,actual)=> acc+actual.uv),0));
    const [priorScaled, setPriorScaled] = useState(data.reduce(((acc,actual)=> acc+actual.amt),0));
    const [totalEmails, setTotalEmials] = useState(firstResolution+scaled+priorScaled);
    //--time
    const [firstTime, setFirstTime] = useState(fancyTimeFormat(first));
    const [scaledTime, setScaledTime] = useState(fancyTimeFormat(second));
    const [priorScaledTime, setPriorScaledTime] = useState(fancyTimeFormat(third));
    const [totalTime, setTotalTime] = useState(fancyTimeFormat(total));

    const onChange = (dataChanged)=> {
        ChangeDate(dataChanged);
        changeStats(dataChanged);
    }

   
    const changeStats = (dataChanged) =>{

        let newScaled=0;
        let newPrior=0;
        let newScaledTime=0;
        let newPriorTime=0;
        let newFirstTime=0;
        //{ name: '1', uv: 300, pv: 456 , amt: 100, averageUv: 30, averagePv: 7200, averageAmt: 3600 },

        const newFirstResolution = dataChanged.reduce((acc, actual) => {
            newScaled+= actual.uv;
            newPrior+= actual.amt;
            newScaledTime+= actual.averageUv;
            newPriorTime+= actual.averageAmt;
            newFirstTime+= actual.averagePv;
            return acc + actual.pv
        }, 0);

        newFirstTime = newFirstTime/dataChanged.length;
        newScaledTime = newScaledTime/dataChanged.length;
        newPriorTime = newPriorTime/dataChanged.length;
        const newTotalTime = (newFirstTime + scaledTime + newPriorTime)/3;

        //update quantity of emails
        setFirstResolution(newFirstResolution);
        setScaled(newScaled);
        setPriorScaled(newPrior);
        setTotalEmials(newFirstResolution+ newScaled+newPrior);

        //times
        setFirstTime(fancyTimeFormat(newFirstTime));
        setScaledTime(fancyTimeFormat(newScaledTime));
        setPriorScaledTime(fancyTimeFormat(newPriorTime));
        setTotalTime(fancyTimeFormat(newTotalTime));
    }
 
    const parseMonth = {
        0: 'Enero',
        1: 'Febrero',
        2: 'Marzo',
        3: 'Abril',
        4: 'Mayo',
        5: 'Junio',
        6: 'Julio',
        7: 'Agosto',
        8: 'Septiembre',
        9: 'Octubre',
        10: 'Noviembre',
        11: 'Diciembre'
    }

    const ChangeDate = (dataChanged) => {
        if(dataChanged.length===31 || dataChanged === 'month'){
            setDate(`${parseMonth[datePicker.getMonth()]} ${datePicker.getFullYear()}`)
        }
        else if(dataChanged.length>1){
            setDate(`del ${dataChanged[0].name} al ${dataChanged[dataChanged.length-1].name} de ${parseMonth[datePicker.getMonth()]}, ${datePicker.getFullYear()}`)
        }
        else{
            setDate(` ${dataChanged[0].name} de ${parseMonth[datePicker.getMonth()]}, ${datePicker.getFullYear()}`)
        }

    }



    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    {/* Recent Stats */}
                    <Grid item xs={12} md={3} lg={3}>
                        <Paper className={fixedHeightPaper}>
                            <Stats 
                                title="Primer Nivel" 
                                date={date} 
                                quantity={firstResolution} 
                                time={firstTime} 

                                />
                        </Paper>
                    </Grid>
                     {/* Recent Stats */}
                     <Grid item xs={12} md={3} lg={3}>
                        <Paper className={fixedHeightPaper}>
                            <Stats 
                                title="Escalados" 
                                date={date} 
                                quantity={scaled} 
                                time={scaledTime}
                                />
                        </Paper>
                    </Grid>
                     {/* Recent Stats */}
                     <Grid item xs={12} md={3} lg={3}>
                        <Paper className={fixedHeightPaper}>
                            <Stats 
                                title="Prioritarios" 
                                date={date} 
                                quantity={priorScaled}
                                time={priorScaledTime}
                                />
                        </Paper>
                    </Grid>
                    {/* Recent Stats */}
                    <Grid item xs={12} md={3} lg={3}>
                        <Paper className={fixedHeightPaper}>
                            <Stats 
                                title="Correos Totales" 
                                date={date} 
                                quantity={totalEmails} 
                                time={totalTime}
                                />
                        </Paper>
                    </Grid>
                    {/* <Grid item xs={12} md={3} lg={3} >
                        <Paper className={fixedResponsiveHeightPaper}>
                            <MonthYearhDatePicker/>
                        </Paper>
                    </Grid> */}
                   {/* Recent Orders */}
                   <Grid item xs={12}>
                        <Paper className={fixedLargeHeightPaper}>
                            <Grid container>
                                <Grid item xs={10} md={10} lg={10}>
                                    <Title>Estadísticas</Title>

                                </Grid>
                                <Grid item xs={2} md={2} lg={2} >
                                    <MonthYearhDatePicker 
                                        datePicker ={datePicker}
                                        setDatePicker={setDatePicker} 
                                        onChangeDate={ChangeDate}
                                        />
                                </Grid>
                            </Grid>
                            <BrushBarChart 
                                data={data} 
                                onChange={onChange}
                                />
                        </Paper>
                    </Grid>
                </Grid>
                <Box pt={4}>
                    <Copyright />
                </Box>
            </Container>
        </main>
    );
}