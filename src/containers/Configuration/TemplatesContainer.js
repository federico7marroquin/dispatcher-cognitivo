import React from 'react'
import { useStyles } from '../../styles/styles';
import clsx from 'clsx';
import Copyright from '../../components/Copyright/Copyright';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import MailBox from '../../components/MailBox/MailBox';
import Table from '../../components/Templates/Table';


const headCells = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Nombre ' },
    { id: 'calories', numeric: true, disablePadding: false, label: 'Tipología' },
    { id: 'fat', numeric: true, disablePadding: false, label: 'Asunto' },
    { id: 'carbs', numeric: true, disablePadding: false, label: 'Descripción' },
    { id: 'protein', numeric: true, disablePadding: false, label: 'Fecha' },
];

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
const rows = [
    createData('Consultas pqr', 'PRQS', 'Peticiónes', 'Descripción...', '2 Ene, 2021'),
    createData('Solicitudes de info', 'Solicitud de información', 'Solicitudes', 'Descripción...', '22 Dic, 2020'),
    createData('Borrador certificados', 'Certificados', 'Autoridad', 'Descripción...', '20 Dic, 2020'),
    createData('Tutelas', 'Autorización', 'Proceso de autorización', ' Descripción...', '15 Nov, 2020'),
    createData('En proceso de aprovación', 'Derechos de Petición', 'Servicio al cliente', 'Descripción...', '15 Nov, 2020'),
    createData('1Borrador certificados', 'Certificados', 'Autoridad', 'Descripción...', '20 Dic, 2020'),
    createData('2Tutelas', 'Autorización', 'Proceso de autorización', ' Descripción...', '15 Nov, 2020'),
    createData('3En proceso de aprovación', 'Derechos de Petición', 'Servicio al cliente', 'Descripción...', '15 Nov, 2020'),
    createData('4Borrador certificados', 'Certificados', 'Autoridad', 'Descripción...', '20 Dic, 2020'),
    createData('5Tutelas', 'Autorización', 'Proceso de autorización', ' Descripción...', '15 Nov, 2020'),
    createData('6En proceso de aprovación', 'Derechos de Petición', 'Servicio al cliente', 'Descripción...', '15 Nov, 2020'),
];

export default function TemplatesContainer(props) {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paperMail, classes.fixedMediumHeight)


    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
                <Container maxWidht='lg' className={classes.container}>
                    <Grid className={classes.depositContext} container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.paperMail}>
                                <MailBox/>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paperMail}>
                                <Table
                                    title='Plantillas'
                                    headCells={headCells}
                                    rows={rows}
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