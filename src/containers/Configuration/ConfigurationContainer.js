import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Copyright from '../../components/Copyright/Copyright';
import Logo from '../../assets/images/Logo.png'
import ColorPicker from '../../components/Pickers/ColorPicker/ColorPicker';
import ImagePicker from '../../components/Pickers/ImagePicker/ImagePicker';
import SelectPicker from '../../components/Pickers/SelectPicker/SelectPicker';
import Dialog from '../../components/Dialog/Dialog';
import { ChromePicker, SwatchesPicker, SketchPicker, BlockPicker, TwitterPicker  } from 'react-color';
import { useStyles } from '../../styles/styles';
import { makeStyles } from '@material-ui/core/styles';



const useCustmoStyles = makeStyles((theme) => ({
    depositContext: {
      flex: 1,
    },
    colorPicker: {
      display: "none",
      marginTop: theme.spacing(2),
    },
    colorPickerOpen : {
        display: "block"
    }
  
  }));
export default function Configuration(props) {
    const classes = useStyles();
    const customClasses = useCustmoStyles();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedTotalHeight);
    const [state, setState] = useState({
        colorPalletePrimary: false,
        colorPalleteSecondary: false,
        colorTitle: false,
        colorTextPrimary: false,
        colorTextSecondary: false,
      });
    const [ value, setValue] = useState({
        colorPalletePrimary: '',
        colorPalleteSecondary: '',
        colorTitle: '',
        colorTextPrimary: '',
        colorTextSecondary: '',
    });


    const open = (picker) => (event) => {
        console.log('open: ' + picker);

        setState({ ...state, [picker]: true });
        return 'Predeterminado';
    };

    const handleClose = (picker, value) => (event) => {
        console.log('handleClose: ' + state[picker] + 'value: '+ value);

        setState({ ...state, [picker]: false });
        setValue({ ...state, [picker]: value });

    };


    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid className={classes.depositContext} container spacing={3}>

                    <Grid item xs={12} md={12} lg={12}>
                        <Paper className={fixedHeightPaper}>
                            <Container maxWidth="lg" className={classes.container}>
                                <Grid className={classes.depositContext} container spacing={3}>

                                    <Grid item xs={12} md={6} lg={4} >
                                        <ImagePicker title='Cargar Logo' img={Logo} />
                                    </Grid>
                                    
                                    <Grid item xs={12} md={6} lg={4} >
                                        <SelectPicker title='Cambiar fuente' />
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={4} >
                                        <ColorPicker title="Paleta de colores: primario" open={open(0)}/>
                                        <TwitterPicker 
                                            className={clsx(customClasses.colorPicker, state[0] && customClasses.colorPickerOpen)}
                                            />
                                        
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={4} >
                                        <ColorPicker title="Paleta de colores: secundario"  open={open(1)}/>
                                        <TwitterPicker 
                                             className={clsx(customClasses.colorPicker, state[1] && customClasses.colorPickerOpen)}
                                            />
                                       
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={4} className={classes.depositContext}>
                                        <ColorPicker title="Color de texto título"  open={open(2)}/>
                                        <TwitterPicker
                                             className={clsx(customClasses.colorPicker, state[2] && customClasses.colorPickerOpen)}
                                            />

                                    </Grid>
                                    <Grid item xs={12} md={6} lg={4} >
                                        <ColorPicker title="Color de texto primario"  open={open(3)}/>
                                        <TwitterPicker
                                             className={clsx(customClasses.colorPicker, state[3] && customClasses.colorPickerOpen)}
                                            />
                                    
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={4} >
                                        <ColorPicker title="Color de texto secundario"  open={open(4)}/>
                                        <TwitterPicker 
                                             className={clsx(customClasses.colorPicker, state[4] && customClasses.colorPickerOpen)}
                                            />
                                    </Grid>
                                    
                                    <Grid className= {classes.buttonMargin} item xs={12} md={12} lg={12}>
                                        <Button  variant="contained" color="primary">
                                            Guardar cambios
                                        </Button>
                                    </Grid>
                                </Grid>



                                



                            </Container>

                        </Paper>
                    </Grid>

                </Grid>
                <Box pt={4}>
                    <Copyright />
                </Box>
            </Container>


        </main>
    );
}

