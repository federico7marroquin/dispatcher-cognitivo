import React, { useState } from 'react';
import { useStyles } from '../../styles/styles';
import TypologyList from '../../components/Typology/TypologyList';
import Grid from '@material-ui/core/Grid';
import Copyright from '../../components/Copyright/Copyright';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import TypologyDialog from '../../components/TypologyDialog/TypologyDialog';

export default function TypologyContainer(props) {
    const classes = useStyles()
    const [openDialog, setOpenDialog] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [typology, setTypology] = useState('');
    const [category, setCategory] = useState('');

    const handleOpenDialog = () => {
        setOpenDialog(true);
    }

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }

    const handleOpenEditDialog = () => {
        setOpenEditDialog(true);
    }

    const handleCloseEditDialog = () => {
        setOpenEditDialog(false);
    }

    const addTypology = ({ type, category }) => {
        console.log('name', type);
        
    }
    
    const editTypology = ({ type, category }) => {
        console.log('name', type);
    }

    const onOpenDialog = (tempCategory) => {
        handleOpenDialog();
        console.log('tempCategory', tempCategory);
        setTypology('');
        setCategory(tempCategory);
    }
    const displayTypology = (tempTypology, tempCategory) => {
        handleOpenEditDialog();
        setTypology(tempTypology);
        setCategory(tempCategory);
    }

    const { typologies, setTypologies } = props
    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth='lg' className={classes.container} >
                <Grid
                    justify="space-around"
                    alignItems="center"
                    className={classes.depositContext}
                    container
                >
                    <TypologyList
                        setItem={displayTypology}
                        handleOpenDialog={onOpenDialog}
                        typologies={typologies}
                    />
                </Grid>
            </Container>
            <TypologyDialog
                open={openDialog}
                handleClose={handleCloseDialog}
                handleAction={addTypology}
                typeData={{category}}
            />
            <TypologyDialog
                title="Editar tipología"
                description="Se cambiarán los datos de la tipología con los valores diligenciados a continuación."
                buttonLabel="Guardar"
                open={openEditDialog}
                handleClose={handleCloseEditDialog}
                handleAction={editTypology}
                typeData={{typology, category}}
                editTypology
            />
        </main>
    );
}