import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TypologiesForm from './TypologiesForm';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { useStyles } from './formDialogStyles';
import { Grid } from '@material-ui/core';

export default function FormDialog(props) {
    const { title, confirmLabel, handleClose, open, confirm, values } = props;
    const [state, setState] = useState(new Array(values.length).fill(false));
    const [pushed, setPushed] = useState(false);
    const error = state.filter((v) => v).length < 1;
    const classes = useStyles();

    const handleConfirm = () => {
        if (!error) {
            const selected = values.filter((value, index) => state[index])
            confirm(selected);
            handleClose();
        }

        setPushed(true);

    }


    const handleChange = (index) => {
        const newState = Array.from(state);
        newState[index] = !newState[index];
        setState(newState);
    }

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <FormControl required error={error && pushed} component="fieldset" >
                    <FormGroup>
                        <Grid container>

                            {values.map((typ, index) =>
                                <Grid item xs={6} >
                                    <FormControlLabel
                                        key={index}
                                        control={<Checkbox checked={state[index]} onClick={() => handleChange(index)} name={typ} />}
                                        label={typ}
                                    />
                                </Grid>
                            )}
                        </Grid>
                    </FormGroup>
                    <FormHelperText>Debes seleccionar al menos una tipología para continuar</FormHelperText>
                </FormControl>
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