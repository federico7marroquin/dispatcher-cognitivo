import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Chart from '../../components/Chart/Chart';
import TMOBarChart from '../../components/BarChart/TMOBarChart';
import Deposits from '../../components/Deposits/Deposits';
import PieChart from '../../components/PieChart/PieChart';
import Copyright from '../../components/Copyright/Copyright';
import { useStyles } from '../../styles/styles';

export default function Configuration(props) {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedTotalHeight);
    
    const {formatTime, quantity, day, TMOData, todayData} = props;

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid className={classes.depositContext} container spacing={3}>

                    <Grid item xs={12} md={12} lg={12}>
                        <Paper className={fixedHeightPaper}>
                            <Deposits
                                title="Correos Recientes"
                                date={day}
                                quantity={quantity}
                                time={formatTime}
                                route="/escalation" />
                                <Deposits
                                title="Correos Recientes"
                                date={day}
                                quantity={quantity}
                                time={formatTime}
                                route="/escalation" />
                                <Deposits
                                title="Correos Recientes"
                                date={day}
                                quantity={quantity}
                                time={formatTime}
                                route="/escalation" />
                                <Deposits
                                title="Correos Recientes"
                                date={day}
                                quantity={quantity}
                                time={formatTime}
                                route="/escalation" />
                                <Deposits
                                title="Correos Recientes"
                                date={day}
                                quantity={quantity}
                                time={formatTime}
                                route="/escalation" />
                                <Deposits
                                title="Correos Recientes"
                                date={day}
                                quantity={quantity}
                                time={formatTime}
                                route="/escalation" />
                                <Deposits
                                title="Correos Recientes"
                                date={day}
                                quantity={quantity}
                                time={formatTime}
                                route="/escalation" />
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

