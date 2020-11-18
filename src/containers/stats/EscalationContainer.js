import React from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Deposits from '../../components/Deposits/Deposits';
import BrushBarChart from '../../components/BrushBarChart/BrushBarChart';
import Copyright from '../../components/Copyright/Copyright';
import {useStyles} from '../../styles/styles';

export default function Escalation() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    {/* Recent Deposits */}
                    <Grid item xs={12} md={4} lg={4}>
                        <Paper className={fixedHeightPaper}>
                            <Deposits title="Resolución en Primer Nivel" date=" 17 de noviembre, 2020" quantity="1540" time="25 Segundos" />
                        </Paper>
                    </Grid>
                     {/* Recent Deposits */}
                     <Grid item xs={12} md={4} lg={4}>
                        <Paper className={fixedHeightPaper}>
                            <Deposits title="Escalados" date=" del 17 al 25 de noviembre, 2020" quantity="634" time="2 Horas"/>
                        </Paper>
                    </Grid>
                     {/* Recent Deposits */}
                     <Grid item xs={12} md={4} lg={4}>
                        <Paper className={fixedHeightPaper}>
                            <Deposits title="Correos Totales" date=" Noviembre 2020" quantity="3024" time="1 Hora con 15 minutos"/>
                        </Paper>
                    </Grid>
                   {/* Recent Orders */}
                   <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <BrushBarChart />
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