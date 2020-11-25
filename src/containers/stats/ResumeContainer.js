import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Chart from '../../components/Charts/Chart/Chart';
import TMOBarChart from '../../components/Charts/BarChart/TMOBarChart';
import Stats from '../../components/Stats/Stats';
import PieChart from '../../components/Charts/PieChart/PieChart';
import Copyright from '../../components/Copyright/Copyright';
import { useStyles } from '../../styles/styles';

export default function ResumeContainer(props) {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedMediumHeight);
    
    const {formatTime, quantity, day, TMOData, todayData} = props;

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid className={classes.depositContext} container spacing={3}>
                    {/* Recent Deposits 2 */}
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper className={fixedHeightPaper}>
                            <Stats
                                title="Correos Recientes"
                                date={day}
                                quantity={quantity}
                                time={formatTime}
                                route="/escalation" />
                        </Paper>
                    </Grid>
                    {/* TMO x Tipo de Gestión 3 */}
                    <Grid item xs={12} md={8} lg={9}>
                        <Link to="/tmo" className={classes.linkDecorator}>
                            <Paper className={fixedHeightPaper}>
                                <TMOBarChart title="TMO x Tipo de Gestión" data={TMOData}/>
                            </Paper> 
                        </Link>
                    </Grid>
                    {/* Chart 5*/}
                    <Grid item xs={12} md={7} lg={8}>
                        <Link to="/autoresolution" className={classes.linkDecorator}>
                            <Paper className={fixedHeightPaper}>
                                <Chart data={todayData}/>
                            </Paper>
                        </Link>
                    </Grid>
                    {/* Recent PieCharts  4*/}
                    <Grid item xs={12} md={5} lg={4}>
                        <Paper className={fixedHeightPaper}>
                            <PieChart radius={70} height={20} width={40} route="/resolutiontime" />
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

