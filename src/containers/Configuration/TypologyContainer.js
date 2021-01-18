import React from 'react';
import { useStyles } from '../../styles/styles';
import TypologyList from '../../components/Typology/TypologyList';
import Grid from '@material-ui/core/Grid';
import Copyright from '../../components/Copyright/Copyright';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

export default function TypologyContainer(props) {
    const classes = useStyles()

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidht='lg' className={classes.container}>
                <Grid
                    justify="center"
                    alignItems="center"
                    className={classes.depositContext}
                    container
                    spacing={3}
                    >
                    <TypologyList />
                </Grid>
                <Box pt={4}>
                    <Copyright />
                </Box>
            </Container>

        </main>
    );
}