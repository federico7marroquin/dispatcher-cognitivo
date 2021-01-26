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

import ComposedIcon from '../ComposedIcon/ComposedIcon';

const nameInfo = 'Nombre de usuario';
const emailInfo = 'Correo electrónico del usuario, necesario para ingresar en el aplicativo';
const roleInfo = 'Permisos que obtendrá el usuario';
const passwordInfo = 'Contraseña de usuario. necesaria para ingresar en el aplicativo';
const confirmPasswordInfo = 'Las contraseñas deben concidir';

UserDialog.propTypes = {
    title: propTypes.string,
    description: propTypes.string,
    buttonLabel: propTypes.string,
    open: propTypes.bool.isRequired,
    handleClose: propTypes.func.isRequired,
    handleAction: propTypes.func.isRequired,
    userData: propTypes.object,
    editDialog: propTypes.bool
}

UserDialog.defaultProps = {
    title: 'Crear usuario',
    description: 'Se creará una nuevo usuario con los valores diligenciados a continuación.',
    buttonLabel: 'Crear',
    userData: {},
    editDialog: false,
}

export default function UserDialog(props) {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const { title, description, buttonLabel, open, handleClose, handleAction, userData, editDialog } = props;

    const [pushed, setPushed] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('Lector');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [disabledFields, setDisabledFields] = useState([
        true, true, true, true
    ])

    useEffect(() => {
        console.log('userData', userData);
            setValues(userData);
    }, [userData] )

    const setValues = (editUser) => {
        setName(editUser?.name??'');
        setEmail(editUser?.email??'');
        setRole(editUser?.role??'');
    }
    const resetValues = () => {
        setName('');
        setEmail('');
        setRole('Lector');
        setPassword('');
        setConfirmPassword('');

    }
    const closeDialog = () => {
        resetValues();
        handleClose();
        if (pushed)
            setPushed(false);
    }

    const executeAction = () => {
        if (name !== '' && email !== '' && password !== '' && confirmPassword !== '') {
            closeDialog()
            if(editDialog){
                handleAction({ name, email, role, id: userData.id});
            }
            else{
                handleAction({ name, email, role, id:11});
            }
        }
        else {
            if (!pushed)
                setPushed(true);
        }
    }

    const allowField = (index) => {
        const tempDisabbledFields = [...disabledFields]
        tempDisabbledFields[index] = false
        setDisabledFields(tempDisabbledFields);
        console.table(disabledFields);
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
                            state={name}
                            pushed={pushed}
                            name="Nombre"
                            infoCard={nameInfo}
                        >
                            <Grid
                                container
                                direction="row"
                                justify="flex-start"
                                alignItems="center"
                                spacing={2}
                            >
                                <Grid item xs={editDialog ? 11 : 12}>
                                    <TextField
                                        disabled={disabledFields[0] && editDialog}
                                        error={name === '' && pushed}
                                        onChange={e => setName(e.target.value)}
                                        value={name}
                                        fullWidth
                                    />
                                </Grid>
                                {editDialog &&
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
                            state={email}
                            pushed={pushed}
                            name="Correo Electrónico"
                            infoCard={emailInfo}
                        >
                            <Grid
                                container
                                direction="row"
                                justify="flex-start"
                                alignItems="center"
                                spacing={2}
                            >
                                <Grid item xs={editDialog ? 11 : 12}>
                                    <TextField
                                        disabled={disabledFields[1] && editDialog}
                                        error={email === '' && pushed}
                                        onChange={e => setEmail(e.target.value)}
                                        value={email}
                                        fullWidth
                                    />
                                </Grid>
                                {editDialog &&
                                    <Grid item xs={1}>
                                        <ComposedIcon
                                            handlePush={() => allowField(1)}
                                        />
                                    </Grid>}
                            </Grid>
                        </DialogField>
                    </Box>
                    <Box mb={3}>
                        <DialogField
                            state={role}
                            name="Rol"
                            infoCard={roleInfo}
                        >
                            <Grid
                                container
                                direction="row"
                                justify="flex-start"
                                alignItems="center"
                                spacing={2}
                            >
                                <Grid item xs={editDialog ? 11 : 12}>
                                    <FormControl
                                        fullWidth
                                        disabled={disabledFields[2] && editDialog}
                                    >
                                        <Select
                                            labelId="demo-simple-select-error-label"
                                            id="demo-simple-select-error"
                                            value={role}
                                            onChange={e => setRole(e.target.value)}
                                        >
                                            <MenuItem value="Lector">Lector</MenuItem>
                                            <MenuItem value="Escritor">Editor</MenuItem>
                                            <MenuItem value="Administrador">Administrador</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                {editDialog &&
                                    <Grid item xs={1}>
                                        <ComposedIcon
                                            handlePush={() => allowField(2)}
                                        />
                                    </Grid>
                                }
                            </Grid>
                        </DialogField>
                    </Box>
                    <Box mb={3}>
                        <DialogField
                            state={password}
                            pushed={pushed}
                            name="Contraseña"
                            infoCard={passwordInfo}
                        >
                            <TextField
                                error={password === '' && pushed}
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                fullWidth
                                type="password"
                            />
                        </DialogField>
                    </Box>
                    <Box mb={3}>
                        <DialogField
                            state={confirmPassword}
                            pushed={pushed}
                            name="Confirmar contraseña"
                            infoCard={confirmPasswordInfo}
                        >
                            <TextField
                                error={confirmPassword === '' && pushed}
                                onChange={e => setConfirmPassword(e.target.value)}
                                value={confirmPassword}
                                fullWidth
                                type="password"
                            />
                        </DialogField>
                    </Box>
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

