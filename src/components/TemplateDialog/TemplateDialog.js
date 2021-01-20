import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import DialogContentText from '@material-ui/core/DialogContentText';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Tooltip from '@material-ui/core/Tooltip';

import { useTheme } from '@material-ui/core/styles';



const nameInfo = 'Es necesario definir un nombre de plantilla único';
const descriptionInfo = 'Descripción opcional de la plantilla';
const stateInfo =
    (<span>
        Estado de la plantilla. <strong style={{ color: 'blue' }}>Único:  </strong>Se utilizará esta plantilla para la respuesta automática de la tipología y asunto establecido. <strong style={{ color: 'blue' }} >Variante:</strong> Se intercalará entre las demas plantillas con el mismo asunto y tipología. <strong style={{ color: 'blue' }}>Borrador: </strong>Se guardará un borrador en la tabla de plantillas.
    </span>)

export default function TemplateDialog(props) {

    const { handleClose, createTemplate, open } = props;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [state, setState] = useState('unico');
    const [pushed, setPushed] = useState(false);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));


    const handleCreate = () => {
        if (name !== '') {
            createTemplate(name, description);
            //reset values
            setDescription('');
            setName('');
            setState('unico')
            //close dialog
            handleClose();
        }
        if (!pushed)
            setPushed(true);
    }

    const closeDialog = () => {
        //reset values
        setDescription('');
        setName('');
        setState('unico')
        if (pushed)
            setPushed(false);
        //close dialog
        handleClose()
    }


    return (
        <Dialog maxWidth='xs' open={open} fullScreen={fullScreen} onClose={closeDialog} aria-labelledby='form-dialog-title'>
            <DialogTitle id="form-dialog-title">Crear Plantilla</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Se creará una nueva plantilla con la configuración y  campos dilingenciados en el editor de plantillas.
                </DialogContentText>
                <Box mt={4} mb={3}>
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"

                    >
                        <Typography component="h3" variant="body1" color={name === '' && pushed ? 'error' : "textSecondary"} noWrap>
                            Nombre
                        </Typography>
                        <Box ml={1}>

                            <Tooltip arrow fontSize={40} title={nameInfo} placement="right">
                                <IconButton size='small'>
                                    <InfoOutlinedIcon color={name === '' && pushed ? 'error' : "inherit"} fontSize="small" />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Grid>

                    <TextField
                        error={name === '' && pushed}
                        onChange={e => setName(e.target.value)}
                        value={name}
                        fullWidth
                    />
                </Box>
                <Box mb={3}>
                    <Grid
                        container
                        direction='row'
                        justify='flex-start'
                        alignItems='center'
                    >
                        <Typography component="h3" variant="body1" color="textSecondary" noWrap>
                            Descripción
                        </Typography>
                        <Box ml={1}>
                            <Tooltip arrow title={descriptionInfo} placement="right">
                                <IconButton size='small'>
                                    <InfoOutlinedIcon fontSize="small" />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Grid>
                    <TextField
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                        multiline
                        fullWidth
                        rows={2}
                    />
                </Box>
                <Box mb={4}>
                    <Grid
                        container
                        direction='row'
                        justify='flex-start'
                        alignItems='center'
                    >
                        <Typography component="h3" variant="body1" color="textSecondary" noWrap>
                            Estado
                        </Typography>
                        <Tooltip arrow title={stateInfo} placement='right'>
                            <IconButton>
                                <InfoOutlinedIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="state" name="state1" value={state} onChange={e => setState(e.target.value)}>
                            <FormControlLabel value="unico" control={<Radio />} label="Establecer como único" />
                            <FormControlLabel value="variante" control={<Radio />} label="Variante - intercalado" />
                            <FormControlLabel value="borrador" control={<Radio />} label="Borrador" />
                        </RadioGroup>
                    </FormControl>
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