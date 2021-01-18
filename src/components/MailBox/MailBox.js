import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PieChartIcon from '@material-ui/icons/PieChart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import ButtonGroup from '@material-ui/core/ButtonGroup';
//button icons
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AttachmentIcon from '@material-ui/icons/Attachment';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import ImageIcon from '@material-ui/icons/Image';
import TextFormatIcon from '@material-ui/icons/TextFormat';

//image
import textFormat from '../../assets/images/textFormat.JPG'

import Button from '@material-ui/core/Button';

import { useStyles, CssTextField, CssButton } from './mailBoxStyles';


export default function MailBox(props) {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.typology}>
                <div className={classes.typeIcon}>
                    <Button className={classes.typeButton}>
                        <PieChartIcon />
                        <ArrowDropDownIcon />
                    </Button>
                </div>
                <div className={classes.typeLabel}>
                    <span primary=''>Tipología seleccionada</span>
                </div>
            </div>
            <div className={classes.subject}>
                <CssTextField
                    fullWidth
                    placeholder="Asunto"
                />
            </div>
            <div className={classes.textBox}>
                <InputBase
                    multiline
                    rows={5}
                    rowsMax={40}
                    fullWidth

                />
            </div>
            <div className={classes.footer}>
                <div className={classes.formatBar}>
                    <img src={textFormat} alt='Formato de texto' />
                </div>
                <div className={classes.buttonGroup}>
                    <div className={classes.buttonOptions}>
                        <ButtonGroup variant="contained" color="secondary">
                            <Button className='btn' color='secondary'> Guardar</Button>
                            <CssButton color='secondary'>
                                <ArrowDropDownIcon />
                            </CssButton>
                        </ButtonGroup>
                        <div className={classes.toolBar}>
                            <CssButton>
                                <TextFormatIcon />
                            </CssButton>
                            <CssButton>
                                <AttachFileIcon fontSize="small" />
                            </CssButton>
                            <CssButton>
                                <AttachmentIcon />
                            </CssButton>
                            <CssButton>
                                <InsertEmoticonIcon />
                            </CssButton>
                            <CssButton>
                                <ImageIcon />
                            </CssButton>
                        </div>
                    </div>
                    <div className={classes.discardOptions}>
                        <CssButton>
                            <DeleteIcon />
                        </CssButton>
                    </div>
                </div>
            </div>
        </div>
    );

}