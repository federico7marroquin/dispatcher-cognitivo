import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import propTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DialogField from '../DialogField/DialogField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


import ComposedIcon from '../ComposedIcon/ComposedIcon';

const typeInfo = 'Nombre de tipología';
const categoryInfo = 'tipo de resolución, Primer nivel, escalados y escalados prioritarios.';
const descripInfo = 'Descripción de la tipología. Opcional'
TypologyDialog.propTypes = {
    title: propTypes.string,
    description: propTypes.string,
    buttonLabel: propTypes.string,
    open: propTypes.bool.isRequired,
    handleClose: propTypes.func.isRequired,
    handleAction: propTypes.func.isRequired,
    typeData: propTypes.object,
    editTypology: propTypes.bool,
}

TypologyDialog.defaultProps = {
    title: 'Crear regla de negocio',
    description: 'Se creará una nuevo regla de negocio con los valores diligenciados a continuación.',
    buttonLabel: 'Crear',
    typeData: {},
    editTypology: false,
}

export default function TypologyDialog(props) {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const { title, description, buttonLabel, open, handleClose, handleAction, typeData, editTypology } = props;

    const [pushed, setPushed] = useState(false);
    const [type, setType] = useState('');
    const [category, setCategory] = useState('Primer nivel');
    const [descrip, setDescrip] = useState('');
    const [disabledFields, setDisabledFields] = useState(
        [true, true]
    )

    useEffect(() => {
            setType(typeData.typology)
            setCategory(typeData.category)
    }, [typeData])

    const setValues = ({ typology, category }) => {
        setType(typology ?? '');
        setCategory(category ?? '');
    }

    const resetValues = () => {
        setType('');
        setCategory('');
        setDescrip('');
        setDisabledFields([true, true]);
    }

    const closeDialog = () => {
        resetValues();
        handleClose();
        if (pushed)
            setPushed(false);
    }

    const executeAction = () => {
        if (type !== '' && category !== '') {
            closeDialog()
            handleAction({ type, category });
        }
        else {
            if (!pushed)
                setPushed(true);
        }
    }

    const allowField = (index) => {
        const tempDisabledFields = [...disabledFields];
        tempDisabledFields[index] = false
        setDisabledFields(tempDisabledFields);
    }

    const debgunType = (e) => {
        e.preventDefault();
        console.log(e.target.value)
         setType(e.target.value)
    }

    return (
        <Dialog
            maxWidth="sm"
            open={open}
            fullScreen={fullScreen}
            aria-labelledby="user-form-dialog-title"
            onClose={closeDialog}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{description}</DialogContentText>
                <Box mt={4}>
                    <Box mb={3}>
                        <DialogField
                            state={type}
                            pushed={pushed}
                            name="Nombre"
                            infoCard={typeInfo}
                        >
                            <Grid
                                container
                                direction="row"
                                justify="flex-start"
                                alignItems="center"
                                spacing={2}
                            >
                                <Grid item xs={editTypology ? 11 : 12}>
                                    <TextField
                                        disabled={disabledFields[0] && editTypology}
                                        error={type === '' && pushed}
                                        onChange={debgunType }
                                        value={type}
                                        fullWidth
                                    />
                                </Grid>
                                {editTypology &&
                                    <Grid item xs={1}>
                                        <ComposedIcon
                                            handlePush={() => allowField(0)}
                                        />
                                    </Grid>}
                            </Grid>
                        </DialogField>
                    </Box>
                    <Box mb={3}>
                        <DialogField
                            state={category}
                            name="Categoría"
                            infoCard={categoryInfo}
                        >
                            <Typography
                                variant="body1"
                                color="textSecondary"
                            >
                                {category}
                            </Typography>
                        </DialogField>
                    </Box>
                </Box>
                <Box mb={3}>
                    <DialogField
                        state={descrip}
                        name="Descripción"
                        infoCard={descripInfo}
                    >
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                            spacing={2}
                        >
                            <Grid item xs={editTypology ? 11 : 12}>
                                <TextField
                                    disabled={disabledFields[1] && editTypology}
                                    onChange={e => setDescrip(e.target.value)}
                                    value={descrip}
                                    fullWidth
                                />
                            </Grid>
                            {editTypology &&
                                <Grid item xs={1}>
                                    <ComposedIcon
                                        handlePush={() => allowField(1)}
                                    />
                                </Grid>}
                        </Grid>
                    </DialogField>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeDialog}>
                    Cancelar
                </Button>
                <Button onClick={executeAction}>
                    {buttonLabel}
                </Button>
            </DialogActions>
        </Dialog>
    );

}