import React, { useState } from 'react'
import PieChartIcon from '@material-ui/icons/PieChart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
//button icons
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AttachmentIcon from '@material-ui/icons/Attachment';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import ImageIcon from '@material-ui/icons/Image';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import LinkIcon from '@material-ui/icons/Link';

//image
import textFormat from '../../assets/images/textFormat.JPG'

import Button from '@material-ui/core/Button';

import { useStyles, CssTextField, CssButton } from './mailBoxStyles';


export default function MailBox(props) {
    const classes = useStyles();
    const { handleClicktypOpen, selectedTyp, setSelectedTyp, createTemplate } = props;
    // const []

    const [subject, setSubject] = useState('');
    const [bodyTemplate, setBodyTemplate] = useState('');

    const handleSaveTamplate = () => {
        createTemplate(selectedTyp.join(', '), subject, bodyTemplate);
    }

    const handleDiscardChanges = () => {
        setSelectedTyp([])
        setSubject('');
        setBodyTemplate('');
    }


    return (
        <div className={classes.wrapper}>
            <div className={classes.typology}>
                <IconButton onClick={handleClicktypOpen}>
                    <PieChartIcon />
                    <ArrowDropDownIcon />
                </IconButton>
                <div className={classes.typeLabel}>
                    <span primary=''>
                        { selectedTyp.length && selectedTyp.length > 0 ?selectedTyp.join(', ') :'Tipologías...'}
                    </span>
                </div>
            </div>
            <div className={classes.subject}>
                <CssTextField
                    onChange={ e => setSubject(e.target.value)}
                    value={subject}
                    fullWidth
                    placeholder="Asunto"
                />
            </div>
            <div className={classes.textBox}>
                <InputBase
                    onChange={e => setBodyTemplate(e.target.value)}
                    value={bodyTemplate}
                    multiline
                    rows={5}
                    rowsMax={40}
                    fullWidth
                />
            </div>
            <div className={classes.formatBar}>
                <img src={textFormat} alt='Formato de texto' />
            </div>
            <div className={classes.buttonGroup}>
                <div className={classes.buttonOptions}>
                    <ButtonGroup variant="contained" color="secondary">
                        <Button 
                            className='btn' 
                            color='secondary' 
                            onClick={handleSaveTamplate}
                            >
                                 Guardar
                            </Button>
                        <CssButton color='secondary'>
                            <ArrowDropDownIcon />
                        </CssButton>
                    </ButtonGroup>
                    <Tooltip title='Opciones de Formato'>
                        <IconButton>
                            <TextFormatIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='Adjuntar Archivo'>
                        <IconButton>
                            <AttachFileIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='Insertar Link'>
                        <IconButton>
                            <LinkIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='Insertar Emoji'>
                        <IconButton>
                            <InsertEmoticonIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='Insertar Foto'>
                        <IconButton>
                            <ImageIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                </div>
                <Tooltip title='Descartar'>
                    <IconButton aria-label="Descartar" onClick={handleDiscardChanges}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    );
}