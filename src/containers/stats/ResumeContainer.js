import React from 'react';
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
import {useStyles} from '../../styles/styles';

export default function FirstLevelResolution() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedMediumHeight);

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid className={classes.depositContext} container spacing={3}>
                    {/* Recent Deposits */}
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper className={fixedHeightPaper}>
                            <Deposits title="Correos Recientes" date=" 17 de noviembre, 2020" quantity="3024" />
                        </Paper>
                    </Grid>
                   {/* Chart */}
                   <Grid item xs={12} md={8} lg={9}>
                        <Paper className={fixedHeightPaper}>
                            <TMOBarChart  title="TMO x Tipo de Gestión"/>
                        </Paper>
                    </Grid>
                    {/* Chart */}
                    <Grid item xs={12} md={7} lg={8}>
                        <Paper className={fixedHeightPaper}>
                            <Chart />
                        </Paper>
                    </Grid>
                     {/* Recent PieCharts */}
                     <Grid item xs={12} md={5} lg={4}>
                        <Paper className={fixedHeightPaper}>
                            <PieChart radius={70} height={20} width={40} />
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

