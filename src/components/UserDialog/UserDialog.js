import React, { useState } from 'react';

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

const nameInfo = 'Nombre de usuario';
const emailInfo = 'Correo electrónico del usuario, necesario para ingresar en el aplicativo';
const roleInfo = 'Permisos que obtendrá el usuario';
const passwordInfo = 'Contraseña de usuario. necesaria para ingresar en el aplicativo';
const confirmPasswordInfo = 'Las contraseñas deben concidir';

UserDialog.propTypes = {
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    buttonLabel: propTypes.string.isRequired,
    open: propTypes.bool.isRequired,
    handleClose: propTypes.func.isRequired,
    handleAction: propTypes.func.isRequired,
}

UserDialog.defaultProps = {
    title: 'Crear usuario',
    description: 'Se creará una nuevo usuario con los valores diligenciados a continuación.',
    buttonLabel: 'Crear',
    open: true,
}

export default function UserDialog(props) {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [pushed, setPushed] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('Lector');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { title, description, buttonLabel, open, handleClose, handleAction } = props;

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
            handleAction({ name, email, role });
        }
        else {
            if (!pushed)
                setPushed(true);
        }
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
                            <TextField
                                error={name === '' && pushed}
                                onChange={e => setName(e.target.value)}
                                value={name}
                                fullWidth
                            />
                        </DialogField>
                    </Box>
                    <Box mb={3}>
                        <DialogField
                            state={email}
                            pushed={pushed}
                            name="Correo Electrónico"
                            infoCard={emailInfo}
                        >
                            <TextField
                                error={email === '' && pushed}
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                fullWidth
                            />
                        </DialogField>
                    </Box>
                    <Box mb={3}>
                        <DialogField
                            state={role}
                            name="Rol"
                            infoCard={roleInfo}
                        >
                            <FormControl fullWidth>
                                <Select
                                    labelId="demo-simple-select-error-label"
                                    id="demo-simple-select-error"
                                    value={role}
                                    onChange={e => setRole(e.target.value)}
                                >
                                    <MenuItem value="Lector">Lector</MenuItem>
                                    <MenuItem value="Editor">Editor</MenuItem>
                                    <MenuItem value="Administrador">Administrador</MenuItem>
                                </Select>
                            </FormControl>
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

