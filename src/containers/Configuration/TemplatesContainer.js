import React, { useState } from 'react'
import { useStyles } from '../../styles/styles';
import clsx from 'clsx';
import Copyright from '../../components/Copyright/Copyright';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import MailBox from '../../components/MailBox/MailBox';
import Table from '../../components/Templates/Table';
import FormDialog from '../../components/FormDialog/FormDialog';
import TemplateDialog from '../../components/TemplateDialog/TemplateDialog';

import TypologiesForm from '../../components/FormDialog/TypologiesForm';

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
    createData('Consultas pqr', 'PRQS', 'Peticiónes', 'Descripción...', '2 Ene. 2021'),
    createData('Solicitudes de info', 'Solicitud de información', 'Solicitudes', 'Descripción...', '22 Dic. 2020'),
    createData('Borrador certificados', 'Certificados', 'Autoridad', 'Descripción...', '20 Dic. 2020'),
    createData('Tutelas', 'Autorización', 'Proceso de autorización', ' Descripción...', '15 Nov. 2020'),
    createData('En proceso de aprovación', 'Derechos de Petición', 'Servicio al cliente', 'Descripción...', '15 Nov. 2020'),
    createData('1Borrador certificados', 'Certificados', 'Autoridad', 'Descripción...', '20 Dic. 2020'),
    createData('2Tutelas', 'Autorización', 'Proceso de autorización', ' Descripción...', '15 Nov. 2020'),
    createData('3En proceso de aprovación', 'Derechos de Petición', 'Servicio al cliente', 'Descripción...', '15 Nov. 2020'),
    createData('4Borrador certificados', 'Certificados', 'Autoridad', 'Descripción...', '20 Dic. 2020'),
    createData('5Tutelas', 'Autorización', 'Proceso de autorización', ' Descripción...', '15 Nov. 2020'),
    createData('6En proceso de aprovación', 'Derechos de Petición', 'Servicio al cliente', 'Descripción...', '15 Nov. 2020'),
];

export default function TemplatesContainer(props) {
    const classes = useStyles();
    const [typOpen, setTypOpen] = useState(false);
    const [templateOpen, setTemplateOpen] = useState(false);
    const [selectedTyp, setSelectedTyp] = useState([]);
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [rules, setRules] = useState('');
    const fixedHeightPaper = clsx(classes.paperMail, classes.fixedMediumHeight);
    const {typologies} = props;

    const handleClicktypOpen = () => {
        setTypOpen(true);
    };

    const handleCloseTyp = () => {
        setTypOpen(false);
    };

    const handleCloseTemplate = () => {
        setTemplateOpen(false);
    };

    const createTemplate = (rules, subject, body) => {
        setTemplateOpen(true);
        setSubject(subject);
        setBody(body);
        setRules(rules);
        const description = '';
        const name = '';
    }
    
    const confirmTemplate = (name, description) => {
        const date = new Date();
        const year = new Intl.DateTimeFormat('es', {year: 'numeric' }).format(date);
        const month = new Intl.DateTimeFormat('es', {month: 'short' }).format(date);
        const day = new Intl.DateTimeFormat('es', {day: '2-digit' }).format(date);
        const template = createData(name, rules, subject, description, ` ${day} ${month} ${year}` );
        rows.push(template);
        console.log(rows)
    }


    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
                <Container maxWidth='lg' className={classes.container}>
                    <Grid className={classes.depositContext} container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.paperMail}>
                                <MailBox
                                    createTemplate={createTemplate}
                                    
                                    handleClicktypOpen={handleClicktypOpen}
                                    selectedTyp = {selectedTyp}
                                    setSelectedTyp={setSelectedTyp}
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paperMail}>
                                <Table
                                    title='Plantillas'
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
                <FormDialog
                    //intefaz
                    title='Tipologías'
                    confirmLabel='Seleccionar'

                    //typolgy
                    type={0}
                    
                    //functions
                    confirm={setSelectedTyp}
                    values={typologies}

                    //open and close dialog
                    open={typOpen}
                    handleClose = {handleCloseTyp}
                />
                <TemplateDialog
                    title='Crear Plantillas'
                    confirmLabel='crear'
                    confirm={confirmTemplate}
                    open={templateOpen}
                    handleClose ={handleCloseTemplate}
                    // values={}
                />

        </main>
    );
}