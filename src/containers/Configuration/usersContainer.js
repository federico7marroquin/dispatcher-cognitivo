import React from 'react';
import { useStyles } from '../../styles/styles';

import Copyright from '../../components/Copyright/Copyright';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SearchBar from '../../components/SearchBar/SearchBar';
import Table from '../../components/Table/GenericTable';

const headCells = [
    { id: 'name',  disablePadding: false, label: 'Nombre' },
    { id: 'email',  disablePadding: false, label: 'Correo' },
    { id: 'role',  disablePadding: false, label: 'Rol' },
    { id: 'entry', disablePadding: false, label: 'Último Ingreso' },
];


function createUser( name, email, role, entry) {
    return {  name, email, role, entry };
}
const rows = [
    createUser( 'Sandra Diaz', 'sdias@be-prosolutions.com', 'Administrador', '18 Ene, 2021'),
    createUser( 'simon bolivar', 'sbolivar@be-prosolutions.com', 'Escritor', '10 Ene, 2021'),
    createUser( 'Asesor', 'asesor@be-prosolutions.com', 'Lector', '20 Dic, 2020'),
    createUser( 'Legoshi', 'Legoshi@be-prosolutions.com', 'Escritor', '15 Nov, 2020'),
    createUser( 'Hannibal Lecter', 'hannibal@be-prosolutions.com', 'Lector', '15 Nov, 2020'),
    createUser( 'Mikasa ackerman', 'ackerman@be-prosolutions.com', 'Administrador', '10 Ene, 2021'),
    createUser( 'Wanda Maximoff', 'wmaximoff@be-prosolutions.com', 'Escritor', '15 Nov, 2020'),
    createUser( 'Pedro Pascal', 'ppascal@be-prosolutions.com', 'Lector', '15 Nov, 2020'),
    createUser( 'Din Djarin', 'dindjarin@be-prosolutions.com', 'Administrador', '4 Ene, 2021'),
    createUser( 'Edwin Smith', 'edsmith@be-prosolutions.com', 'Escritor', '15 Nov, 2020'),
    createUser( 'Rigoberto Uran', 'Uran@be-prosolutions.com', 'Lector', '15 Nov, 2020'),
];



export default function UsersContainer(props) {
    const classes = useStyles();


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
                                headCells={headCells}
                                values={rows}    
                                defaultOrder ='name'
                                initRowsPerPage={10}
                                addFunction = "Agregar Usuarios"
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