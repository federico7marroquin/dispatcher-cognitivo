import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export default function FormDialog(props) {
    const { handleClose, open, setSelectedTyp, values, selectedTyp } = props;
    // const [state, setState] = useState(new Array(values.length).fill(false));
    const [state, setState] = useState(values.map((value)=> selectedTyp.includes(value)));
    const [pushed, setPushed] = useState(false);
    const error = state.filter((v) => v).length < 1;
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        if(selectedTyp.length ===0){
            setState(new Array(values.length).fill(false))
        }
    }, [selectedTyp, values])

    const handleConfirm = () => {
        if (!error) {
            const selected = values.filter((value, index) => state[index])
            setSelectedTyp(selected);
            handleClose();
        }
        setPushed(true);
    }

    const closeDialog = () => {
        setState(values.map((value)=> selectedTyp.includes(value)));
        setPushed(false);
        handleClose();
    }

    const handleChange = (index) => {
        const newState = Array.from(state);
        newState[index] = !newState[index];
        setState(newState);
    }

    return (
        <Dialog open={open} fullScreen={fullScreen} onClose={closeDialog} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Tipologías</DialogTitle>
            <DialogContent>
                <FormControl required error={error && pushed} component="fieldset" >
                    <FormGroup>
                        <Grid container>

                            {values.map((typ, index) =>
                                <Grid key={index} item xs={12} sm={6}>
                                    <FormControlLabel
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
                <Button onClick={closeDialog} color="primary">
                    Cancelar
                </Button>
                <Button onClick={handleConfirm} color="primary">
                    Seleccionar
                </Button>
            </DialogActions>
        </Dialog>
    );
}