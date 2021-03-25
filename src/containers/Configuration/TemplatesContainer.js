import React, { useState, useRef } from 'react'
import { useStyles } from '../../styles/styles';
import Copyright from '../../components/Copyright/Copyright';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import MailBox from '../../components/MailBox/MailBox';
import Table from '../../components/Table/GenericTable';
import FormDialog from '../../components/FormDialog/FormDialog';
import TemplateDialog from '../../components/TemplateDialog/TemplateDialog';
import { tutelas } from '../../config/templates';

const headCells = [
    { id: 'name', disablePadding: true, label: 'Nombre ' },
    { id: 'typologies', disablePadding: false, label: 'Tipología' },
    { id: 'subject', disablePadding: false, label: 'Asunto' },
    { id: 'description', disablePadding: false, label: 'Descripción' },
    { id: 'state', disablePadding: false, label: 'Estado' },
];



//name, typologies, subject, description, date, body, state
function makeTemplate(name, typologies, subject, description, state, date, body ) {
    return { name, typologies, subject, description, state, date, body };
}
const rows = [
    makeTemplate('Calendario', 
        'Calendario Tributario',
        'Fechas importantes', 
        'Solicitud Calendario para pago de impuestos', 
        'borrador', 
        '2 Ene. 2021' , 
        tutelas.body),
    makeTemplate('Estatuto Tributario', 
    'Estatuto Tributario', 
    'Solicitud de información tributaria', 
    'Solicitud de normas asociadas al estatuto tributario', 
    'unico',
    '22 Dic. 2020', 
    tutelas.body),
    makeTemplate('DIAN', 
    'Conceptos DIAN', 
    'DIAN', 
    'Solicitud de conceptos emitidos por la DIAN', 
    'variante',
    '20 Dic. 2020',  
    tutelas.body),
    makeTemplate('CE sentencias', 
    'Sentencias Consejo de Estado', 
    'Sentencias Consejo de estado', 
    'Solicitud de sentencias del Consejo de Estado', 
    'borrador',
    '20 Dic. 2020', 
    tutelas.body),
    makeTemplate('Solicitudes rutinarias', 
    'Conceptos rutinarios preestablecidos', 
    'Solicitudes!!', 
    'Solicitud de conceptos rutinarios de baja complejidad ', 
    'Borrador',
    '15 Nov. 2020', 
    tutelas.body),
    makeTemplate('Conceptos', 
    'Conceptos puntuales', 
    'Conceptos puntuales', 
    'Solicitud de conceptos que requieren desarrollo especial', 
    'variante',
    '20 Dic. 2020', 
    tutelas.body),
    makeTemplate('Planeación tributaria', 
    'Preparación planeación tributaria', 
    'Haz tu planeación', 
    'Solicitud de una planeación tributaria que implica la inversión de un número significativo de horas', 
    'borrador',
    '15 Nov. 2020', 
    tutelas.body),
    makeTemplate('Asistencia a contratos', 
    'Preparación contratos', 
    'Contrato asistido', 
    'Solicitud de la preparación de un contrato para atender una operación particular del cliente', 
    'unico',
    '03 Mar. 2021', 
    tutelas.body),
    makeTemplate('Litigios DIAN', 
    'Litigios', 
    'Litigio No 2312', 
    'Solicitud para atender un litigio ante la DIAN', 
    'unico',
    '17 Feb. 2021', 
    tutelas.body),
    makeTemplate('Estudios de precios', 
    'Estudios de Precios de Transferencia', 
    'Precios de transferencia', 
    'Solicitud para preparar el estudio de precios de transferencia y documentación comprobatoria', 
    'unico',
    '02 Feb. 2021', 
    tutelas.body),
    makeTemplate('Declaraciones de renta', 
    'Preparación declaraciones de renta', 
    'Declaración de renta', 
    'Solicitud para preparar la declaración de renta de la Compañía', 
    'borrador',
    '26 Ene. 2021', 
    tutelas.body),
    makeTemplate('Outsourcing', 
    'Outsourcing Tributario', 
    'Outsourcing tributario', 
    'Solicitud para dar cumplimiento a las obligaciones tributarias periódicas de la Compañía', 
    'variante',
    '22 Feb. 2021', 
    tutelas.body),
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
    const {typologies} = props;
    const [template, setTemplate] = useState({});

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

    //refactor
    const createTemplate = (rules, subject, body) => {
        setTemplateOpen(true);
        setSubject(subject);
        setBody(body);
        setRules(rules);
        setAlreadyCreated(false);
    }

    //Se necesita terminar TO DO
    const setTemplateToEdit = (item) => {
        // setSubject(item)
        // setBody(item.body)
        // setSelectedTyp(item.typologies)
        console.log('item', item);
        setTemplate(item);
        executeScroll();
        
    }
    
    const confirmTemplate = (name, description) => {
        const date = new Date();
        const year = new Intl.DateTimeFormat('es', {year: 'numeric' }).format(date);
        const month = new Intl.DateTimeFormat('es', {month: 'short' }).format(date);
        const day = new Intl.DateTimeFormat('es', {day: '2-digit' }).format(date);
        const newTemplate = makeTemplate(name, template?.typologies , template?.subject, description, 'Borrador',` ${day} ${month} ${year}`, template?.body );
        setSubject('');
        setBody('');
        setRules('')
        setAlreadyCreated(true);
        rows.push(newTemplate);
    }

    const edit = () => {
        
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

                                    //Edit template
                                    template={template}

                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paperMail}>
                                <Table
                                    title='Plantillas'
                                    headCells={headCells}
                                    values={rows}
                                    defaultOrder ='name'
                                    initRowsPerPage={5}
                                    setItem={setTemplateToEdit}
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
                    //Edit template
                    template={template}
                />

        </main>
    );
}