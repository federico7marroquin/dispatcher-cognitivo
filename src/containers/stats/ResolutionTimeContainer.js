import React from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import CustomTreeMap from '../../components/Charts/TreeMap/CustomTreeMap';

import PieChart from '../../components/Charts/PieChart/PieChart';
import Emails from '../../components/Emails/Emails';
import Copyright from '../../components/Copyright/Copyright';
import {useStyles} from '../../styles/styles';

export default function ResolutionTime() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedLargeHeight, classes.rechartswrapper);

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    {/* Recent Deposits */}
                    <Grid item xs={12} md={4} lg={4}>
                        <Paper className={fixedHeightPaper}>
                            <PieChart radius={130} height={20} width={40}/>
                        </Paper>
                    </Grid> 
                    {/* Recent Deposits */}
                    <Grid item xs={12} md={8} lg={8}>
                        <Paper className={fixedHeightPaper}>
                            <CustomTreeMap />
                        </Paper>
                    </Grid> 
                    {/* Recent Orders */}
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Emails title="Correos Filtrados" />
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