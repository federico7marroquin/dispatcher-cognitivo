import React from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Stats from '../../components/Stats/Stats';
import BrushBarChart from '../../components/Charts/BrushBarChart/BrushBarChart';
import Copyright from '../../components/Copyright/Copyright';
import {useStyles} from '../../styles/styles';
import TMOBarChart from '../../components/Charts/BarChart/TMOBarChart';

export default function TMO(props) {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const fixedLargeHeightPaper = clsx(classes.paper, classes.fixedLargeHeight);
    const {data} = props;
    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    {/* Recent Deposits */}
                    <Grid item xs={12} md={4} lg={4}>
                        <Paper className={fixedHeightPaper}>
                            <Stats title="Resolución en Primer Nivel" date=" 17 de noviembre, 2020" quantity="1540" time="25 Segundos" route={false}/>
                        </Paper>
                    </Grid>
                     {/* Recent Deposits */}
                     <Grid item xs={12} md={4} lg={4}>
                        <Paper className={fixedHeightPaper}>
                            <Stats title="Escalados" date=" del 17 al 25 de noviembre, 2020" quantity="634" time="2 Horas" route={false}/>
                        </Paper>
                    </Grid>
                     {/* Recent Deposits */}
                     <Grid item xs={12} md={4} lg={4}>
                        <Paper className={fixedHeightPaper}>
                            <Stats title="Correos Totales" date=" Noviembre 2020" quantity="3024" time="1 Hora con 15 minutos y 35 segundos" route={false}/>
                        </Paper>
                    </Grid>
                   {/* Recent Orders */}
                   <Grid item xs={12}>
                        <Paper className={fixedLargeHeightPaper}>
                            <TMOBarChart title="TMO x Tipo de Gestión" data={data}/>
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