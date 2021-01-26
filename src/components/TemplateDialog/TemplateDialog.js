import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import DialogContentText from '@material-ui/core/DialogContentText';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DialogField from '../DialogField/DialogField';

import { useTheme } from '@material-ui/core/styles';



const nameInfo = 'Es necesario definir un nombre de plantilla único';
const descriptionInfo = 'Descripción opcional de la plantilla';
const stateInfo =
    (<span>
        Estado de la plantilla. <strong style={{ color: 'blue' }}>Único:  </strong>Se utilizará esta plantilla para la respuesta automática de la tipología y asunto establecido. <strong style={{ color: 'blue' }} >Variante:</strong> Se intercalará entre las demas plantillas con el mismo asunto y tipología. <strong style={{ color: 'blue' }}>Borrador: </strong>Se guardará un borrador en la tabla de plantillas.
    </span>)

export default function TemplateDialog(props) {

    const { handleClose, createTemplate, open, template } = props;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [state, setState] = useState('unico');
    const [pushed, setPushed] = useState(false);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const resetValues = () => {
        setDescription('');
        setName('');
        setState('unico')
    }

    const handleCreate = () => {
        if (name !== '') {
            createTemplate(name, description);
            closeDialog();
        }
        if (!pushed)
            setPushed(true);
    }

    const closeDialog = () => {
        if (pushed)
            setPushed(false);
        resetValues();
        handleClose();
    }

    useEffect(() => {
        if (template && template.name && template.state) {
            setName(template.name);
            setDescription(template.description ? template.description : '');
            setState(template.state);
        }
    }, [template]);


    return (
        <Dialog
            maxWidth='xs'
            open={open}
            fullScreen={fullScreen}
            onClose={closeDialog}
            aria-labelledby='form-dialog-title'
        >
            <DialogTitle id="form-dialog-title">Crear Plantilla</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Se creará una nueva plantilla con la configuración y  campos dilingenciados en el editor de plantillas.
                </DialogContentText>
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
                            state={description}
                            name="Descripción"
                            infoCard={descriptionInfo}
                        >
                            <TextField
                                onChange={e => setDescription(e.target.value)}
                                multiline
                                value={description}
                                fullWidth
                                rows={2}
                            />
                        </DialogField>
                    </Box>
                    <Box mb={3}>
                        <DialogField
                            state={state}
                            name="Estado"
                            infoCard={stateInfo}
                        >
                            <FormControl component="fieldset">
                                <RadioGroup aria-label="state" name="state1" value={state} onChange={e => setState(e.target.value)}>
                                    <FormControlLabel value="unico" control={<Radio />} label="Establecer como único" />
                                    <FormControlLabel value="variante" control={<Radio />} label="Variante - intercalado" />
                                    <FormControlLabel value="borrador" control={<Radio />} label="Borrador" />
                                </RadioGroup>
                            </FormControl>
                        </DialogField>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeDialog} color="primary">
                    Cancelar
                </Button>
                <Button onClick={handleCreate} color="primary">
                    Crear
                </Button>
            </DialogActions>
        </Dialog>
    );

}