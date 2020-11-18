import React from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import CustomTreeMap from '../../components/TreeMap/CustomTreeMap';

import PieChart from '../../components/PieChart/PieChart';
import Orders from '../../components/Orders/Orders';
import Copyright from '../../components/Copyright/Copyright';
import {useStyles} from '../../styles/ResolutionStyles';

export default function ResolutionTime() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight, classes.rechartswrapper);

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    {/* Recent Deposits */}
                    <Grid item xs={12} md={4} lg={4}>
                        <Paper className={fixedHeightPaper}>
                            <PieChart />
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
                            <Orders title="Correos Filtrados" />
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