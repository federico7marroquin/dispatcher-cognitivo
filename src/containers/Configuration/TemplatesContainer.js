import React, { useState, useRef, useEffect } from 'react'
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
import { set } from 'date-fns';

const headCells = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Nombre ' },
    { id: 'calories', numeric: true, disablePadding: false, label: 'Tipología' },
    { id: 'fat', numeric: true, disablePadding: false, label: 'Asunto' },
    { id: 'carbs', numeric: true, disablePadding: false, label: 'Descripción' },
    { id: 'protein', numeric: true, disablePadding: false, label: 'Fecha' },
];

function createData(name, calories, fat, carbs, protein, body) {
    return { name, calories, fat, carbs, protein, body };
}
const rows = [
    createData('Consultas pqr', 'PRQS', 'Peticiónes', 'Descripción...', '2 Ene. 2021' , 'este es un body'),
    createData('Solicitudes de info', 'Solicitud de información', 'Solicitudes', 'Descripción...', '22 Dic. 2020', 'este es un body'),
    createData('Borrador certificados', 'Certificados', 'Autoridad', 'Descripción...', '20 Dic. 2020',  'este es un body'),
    createData('Tutelas', 'Autorización', 'Proceso de autorización', ' Descripción...', '15 Nov. 2020', 'este es un body'),
    createData('En proceso de aprovación', 'Derechos de Petición', 'Servicio al cliente', 'Descripción...', '15 Nov. 2020', 'este es un body'),
    createData('1Borrador certificados', 'Certificados', 'Autoridad', 'Descripción...', '20 Dic. 2020', 'este es un body'),
    createData('2Tutelas', 'Autorización', 'Proceso de autorización', ' Descripción...', '15 Nov. 2020', 'este es un body'),
    createData('3En proceso de aprovación', 'Derechos de Petición', 'Servicio al cliente', 'Descripción...', '15 Nov. 2020', 'este es un body'),
    createData('4Borrador certificados', 'Certificados', 'Autoridad', 'Descripción...', '20 Dic. 2020', 'este es un body'),
    createData('5Tutelas', 'Autorización', 'Proceso de autorización', ' Descripción...', '15 Nov. 2020', 'este es un body'),
    createData('6En proceso de aprovación', 'Derechos de Petición', 'Servicio al cliente', 'Descripción...', '15 Nov. 2020', 'este es un body'),
];


export default function TemplatesContainer(props) {
    const classes = useStyles();
    const [typOpen, setTypOpen] = useState(false);
    const [templateOpen, setTemplateOpen] = useState(false);
    const [selectedTyp, setSelectedTyp] = useState([]);
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [rules, setRules] = useState('');
    const [alreadyCreated, setAlreadyCreated] = useState(false);
    const fixedHeightPaper = clsx(classes.paperMail, classes.fixedMediumHeight);
    const {typologies} = props;

    const myRef = useRef(null);



    const executeScroll= () => myRef.current.scrollIntoView({block: "end", behavior: "smooth"});
    // const executeScroll = () => window[`scrollTo`]({ top: 0, behavior: `smooth` });

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
        setAlreadyCreated(false);
    }

    //Se necesita terminar TO DO
    const setTemplateToEdit = (item) => {
        setSubject(item)
        setBody(item.body)
        setSelectedTyp(item.typologies)
        
    }
    
    const confirmTemplate = (name, description) => {
        const date = new Date();
        const year = new Intl.DateTimeFormat('es', {year: 'numeric' }).format(date);
        const month = new Intl.DateTimeFormat('es', {month: 'short' }).format(date);
        const day = new Intl.DateTimeFormat('es', {day: '2-digit' }).format(date);
        const template = createData(name, rules, subject, description, ` ${day} ${month} ${year}`, body );
        setSubject('');
        setBody('');
        setRules('')
        setAlreadyCreated(true);
        rows.push(template);
    }


    return (
        <main className={classes.content} >
            <div className={classes.appBarSpacer} />
                <Container maxWidth='lg' className={classes.container}>
                    <Grid className={classes.depositContext} container spacing={3}>
                        <Grid item xs={12} ref={myRef}>
                            <Paper className={classes.paperMail}>
                                <MailBox
                                   
                                    parentSubject={subject}
                                    parentBody={body}
                                    rules={rules}
                                    alreadyCreated={alreadyCreated}
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
                                    executeScroll={executeScroll}
                                    setTemplateToEdit={setTemplateToEdit}
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
                <FormDialog
                    //functions
                    setSelectedTyp={setSelectedTyp}
                    selectedTyp = {selectedTyp}
                    values={typologies}
                    //open and close dialog mechanism
                    open={typOpen}
                    handleClose = {handleCloseTyp}
                />
                <TemplateDialog
                    createTemplate={confirmTemplate}
                    //open and close dialog mechanism
                    open={templateOpen}
                    handleClose ={handleCloseTemplate}
                />

        </main>
    );
}