import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import propTypes from 'prop-types';

UserDialog.propTypes = {
    buttonLabel: propTypes.string.isRequired,
    open: propTypes.bool.isRequired,
    handleClose: propTypes.func.isRequired,
    handleAction: propTypes.func.isRequired,

}

 UserDialog.defaultProps = {
     buttonLabel: 'Crear',
     
 }

export default function UserDialog(props) {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    
    const { buttonLabel, open, handleClose, handleAction } = props;

    const closeDialog = () => {
        handleClose();
    }

    return (
        <Dialog 
            maxWidth='xs' 
            open={open}
            fullScreen={fullScreen} 
            aria-labelledby='user-form-dialog-title'
            onClose={closeDialog}
        >
            <DialogTitle> </DialogTitle>
            <DialogContent>
                <DialogContentText></DialogContentText>

            </DialogContent>
            <DialogActions>
                <Button onClick=''>
                    Cancelar
                </Button>
                <Button onClick=''>
                    {buttonLabel}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

//Hola Daniel, estaba escribiendo este documento con las recomendaciones para vitalbox, y también como fuente de conocimiento para Be Pro.