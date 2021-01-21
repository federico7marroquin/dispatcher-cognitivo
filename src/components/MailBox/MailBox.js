import React, { useEffect, useState } from 'react'
import PieChartIcon from '@material-ui/icons/PieChart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';

//button icons
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import ImageIcon from '@material-ui/icons/Image';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import LinkIcon from '@material-ui/icons/Link';

//image
import textFormat from '../../assets/images/textFormat.JPG'

import Button from '@material-ui/core/Button';

import { CssButton } from './mailBoxStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


export default function MailBox(props) {
    const { handleClicktypOpen, selectedTyp, setSelectedTyp, createTemplate, alreadyCreated, parentSubject, parentBody } = props;
    // const []

    const [subject, setSubject] = useState(parentSubject);
    const [bodyTemplate, setBodyTemplate] = useState(parentBody);
    const [pushed, setPushed] = useState(false);

    useEffect(() => {
        if (alreadyCreated === true) {
            setSelectedTyp([])
            setSubject('');
            setBodyTemplate('');
            setPushed(false);
        }
    }, [alreadyCreated, setSelectedTyp])

    const handleSaveTamplate = () => {
        if (subject !== '' && selectedTyp.length > 0) {
            createTemplate(selectedTyp.join(', '), subject, bodyTemplate);
        }
        setPushed(true)
    }

    const handleDiscardChanges = () => {
        setSelectedTyp([])
        setSubject('');
        setBodyTemplate('');
        setPushed(false);

    }



    return (
        <React.Fragment>
            <Box ml={1} mb={2}>
                <Grid container alignItems='center'>
                    <Tooltip title='Seleccionar tipologías'>
                        <IconButton size='small' onClick={handleClicktypOpen}>
                            <PieChartIcon color={pushed && selectedTyp.length === 0 ? 'error' : 'inherit'} />
                            <ArrowDropDownIcon color={pushed && selectedTyp.length === 0 ? 'error' : 'inherit'} />
                        </IconButton>
                    </Tooltip>
                    <Typography variant='body1'
                        color={pushed && selectedTyp.length === 0 ? 'error' : "textSecondary"}>
                        {selectedTyp.length && selectedTyp.length > 0 ? selectedTyp.join(', ') : pushed ? 'Tipologías*' : 'Tipologías...'}
                    </Typography>
                </Grid>
            </Box>
            <Box ml={1} mr={1} >
                <TextField
                    error={pushed && subject === ''}
                    onChange={e => setSubject(e.target.value)}
                    value={subject}
                    fullWidth
                    placeholder="Asunto"
                />
            </Box>
            <Box m={1}>
                <InputBase
                    // error={pushed&&bodyTemplate===''}
                    onChange={e => setBodyTemplate(e.target.value)}
                    value={bodyTemplate}
                    multiline
                    rows={5}
                    rowsMax={40}
                    fullWidth
                />
            </Box>
            <Box>
                <img src={textFormat} alt='Formato de texto' />
            </Box>
            <Box m={1}>
                <Grid container justify='space-between'>
                    <Box >
                        <Grid container alignItems='center' direction='row'>
                            <ButtonGroup variant="contained" color="secondary">
                                <Button
                                    className='btn'
                                    color='secondary'
                                    onClick={handleSaveTamplate}
                                >
                                    Crear
                            </Button>
                                <CssButton color='secondary'>
                                    <ArrowDropDownIcon />
                                </CssButton>
                            </ButtonGroup>
                            <Box ml={2} >
                                <Grid container spacing={2} justify='center'>
                                    <Grid item>

                                        <Tooltip title='Opciones de Formato'>
                                            <IconButton size='small'>
                                                <TextFormatIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item>

                                        <Tooltip title='Adjuntar Archivo'>
                                            <IconButton size='small'>
                                                <AttachFileIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item>

                                        <Tooltip title='Insertar Link'>
                                            <IconButton size='small'>
                                                <LinkIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item>

                                        <Tooltip title='Insertar Emoji'>
                                            <IconButton size='small'>
                                                <InsertEmoticonIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item>

                                        <Tooltip title='Insertar Foto'>
                                            <IconButton size='small'>
                                                <ImageIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Box>
                    <Box>
                        <Tooltip title='Descartar'>
                            <IconButton size='small' aria-label="Descartar" onClick={handleDiscardChanges}>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Grid>
            </Box>
        </React.Fragment>
    );
}