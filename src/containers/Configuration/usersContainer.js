import React from 'react';
import { useStyles } from '../../styles/styles';
import clsx from 'clsx';

import Copyright from '../../components/Copyright/Copyright';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SearchBar from '../../components/SearchBar/SearchBar';
import Table from '../../components/Templates/Table';

const headCells = [
    { id: 'name', numeric: false, disablePadding: true, label: 'ID' },
    { id: 'calories', numeric: true, disablePadding: false, label: 'Nombre' },
    { id: 'fat', numeric: true, disablePadding: false, label: 'Correo' },
    { id: 'carbs', numeric: true, disablePadding: false, label: 'Rol' },
    { id: 'protein', numeric: true, disablePadding: false, label: 'Último Ingreso' },
];

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
const rows = [
    createData('0', 'Sandra Diaz', 'sdias@be-prosolutions.com', 'Administrador', '18 Ene, 2021'),
    createData('1', 'simon bolivar', 'sbolivar@be-prosolutions.com', 'Escritor', '10 Ene, 2021'),
    createData('2', 'Asesor', 'asesor@be-prosolutions.com', 'Lector', '20 Dic, 2020'),
    createData('3', 'Legoshi', 'Legoshi@be-prosolutions.com', 'Escritor', '15 Nov, 2020'),
    createData('4', 'Hannibal Lecter', 'hannibal@be-prosolutions.com', 'Lector', '15 Nov, 2020'),
    createData('5', 'Mikasa ackerman', 'ackerman@be-prosolutions.com', 'Administrador', '10 Ene, 2021'),
    createData('6', 'Wanda Maximoff', 'wmaximoff@be-prosolutions.com', 'Escritor', '15 Nov, 2020'),
    createData('7', 'Pedro Pascal', 'ppascal@be-prosolutions.com', 'Lector', '15 Nov, 2020'),
    createData('8', 'Din Djarin', 'dindjarin@be-prosolutions.com', 'Administrador', '4 Ene, 2021'),
    createData('9', 'Edwin Smith', 'edsmith@be-prosolutions.com', 'Escritor', '15 Nov, 2020'),
    createData('10', 'Rigoberto Uran', 'Uran@be-prosolutions.com', 'Lector', '15 Nov, 2020'),
];



export default function UsersContainer(props) {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container} >
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <SearchBar />
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paperMail}>
                            <Table
                                title='Usuarios'
                                usuarios={true}
                                headCells={headCells}
                                values={rows}    
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