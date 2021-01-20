import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import DialogContentText from '@material-ui/core/DialogContentText';

import InputBase from '@material-ui/core/InputBase';

export default function TemplateDialog(props) {

    const { title, confirmLabel, handleClose, confirm, open, values } = props;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const handleConfirm = () => {
        confirm(name, description);
        handleClose();
    }

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
            <DialogTitle id="form-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Se creará una nueva plantilla con la configuración y  campos dilingenciados en el editor de plantillas.
                </DialogContentText>
                <TextField
                    onChange={e => setName(e.target.value)}
                    value={name}
                    fullWidth
                    placeholder="Nombre"
                />
                <InputBase
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    placeholder='Descripción (Opcional)'
                    multiline
                    rows={3}
                    rowsMax={3}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancelar
                </Button>
                <Button onClick={handleConfirm} color="primary">
                    {confirmLabel}
                </Button>
            </DialogActions>
        </Dialog>
    );

}