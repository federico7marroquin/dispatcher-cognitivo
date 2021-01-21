import React, {useState} from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Stats from '../../components/Stats/Stats';
import Copyright from '../../components/Copyright/Copyright';
import {useStyles} from '../../styles/styles';
import TMOBarChart from '../../components/Charts/BarChart/TMOBarChart';
import FullDatePicker from '../../components/Pickers/DatePicker/FullDatePicker';
import Title from '../../components/Title/Title';

export default function TMOContainer(props) {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const fixedLargeHeightPaper = clsx(classes.paper, classes.fixedLargeHeight);

    const [total, setTotal] = useState({});
    const [type1, setType1] = useState({});
    const [type2, setType2] = useState({});

    const {data} = props;

    const onClick = (payload) =>{
        if(payload.name ==='Prioritarios'){
            setTotal({title: 'Total ' + payload.name, quantity:  payload.pqrs + payload.asun, time: '36 Horas con 17 Minutos y 33 Segundos'});
            setType1({title: 'PQRS', quantity:  payload.pqrs, time: '28 Horas con 20 Minutos y 2 segundos' });
            setType2({title: 'Asuntos Legales', quantity:  payload.asun, time: '44 Horas con 15 Minutos y 24 Segundos' });
        }
        else if(payload.name ==='Escalados' ){
            setTotal({title:  'Total ' + payload.name, quantity:  payload.cert + payload.auto, time: '1 Hora con 26 Minutos y 6 Segundos'});
            setType1({title: 'Autorizaciones', quantity:  payload.cert, time: '50 Minutos y 35 Segundos' });
            setType2({title: 'Certificados', quantity:  payload.auto, time: '1 Hora con 11 Minutos y 24 Segundos' });
        }
        else {
            setTotal({title: 'Total ' +  payload.name, quantity:  payload.info + payload.otros, time: '31 Segundos'});
            setType1({title: 'Solicitud de Información', quantity:  payload.info, time: '26 Segundos' });
            setType2({title: 'Otros', quantity:  payload.otros, time: '35 Segundos' });
            
        }
    }
    
    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    {/* Recent Deposits */}
                    <Grid item xs={12} md={4} lg={4}>
                        <Paper className={fixedHeightPaper}>
                            <Stats 
                                title={type1? type1.title:"Resolución en Primer Nivel"} 
                                date="Noviembre 2020" 
                                quantity={type1? type1.quantity:"7336" }
                                time={type1? type1.time:"31 Segundos"} 
                                route={false}
                                />
                        </Paper>
                    </Grid>
                     {/* Recent Deposits */}
                     <Grid item xs={12} md={4} lg={4}>
                        <Paper className={fixedHeightPaper}>
                            <Stats 
                                title={type2? type2.title:"Escalados"} 
                                date="Noviembre 2020" 
                                quantity={type2? type2.quantity:"3911" }
                                time={type2? type2.time:"1 Hora con 26 Minutos y 6 Segundos"} 
                                route={false}
                                />
                        </Paper>
                    </Grid>
                     {/* Recent Deposits */}
                     <Grid item xs={12} md={4} lg={4}>
                        <Paper className={fixedHeightPaper}>
                            <Stats 
                                title={total? total.title:"Prioritarios" }
                                date="Noviembre 2020"
                                quantity={total? total.quantity: 3716}
                                time={total? total.time:'36 Horas con 17 Minutos y 33 Segundos'}
                                route={false}
                                />
                        </Paper>
                    </Grid>
                   {/* Recent Orders */}
                   <Grid item xs={12}>
                        <Paper className={fixedLargeHeightPaper}>
                        <Grid container spacing={1}>
                                <Grid item xs={12} md={8} lg={8}>
                                    <Title>TMO x Tipo de Gestión</Title>

                                </Grid>
                                <Grid item xs={6} md={2} lg={2} >
                                    <FullDatePicker 
                                        helperText='Fecha Inicial'
                                        date={new Date('11/01/2020')}
                                        />
                                </Grid>
                                <Grid item xs={6} md={2} lg={2} >
                                    <FullDatePicker 
                                        helperText='Fecha Final'
                                        date={new Date('11/30/2020')}
                                        />
                                </Grid>
                            </Grid>
                            <TMOBarChart title="TMO x Tipo de Gestión" onClick={onClick} data={data}/>
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