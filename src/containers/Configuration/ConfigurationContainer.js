import React, { useState } from 'react';
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
import {  TwitterPicker  } from 'react-color';
import { useStyles } from '../../styles/styles';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import { green, orange,  blue, red } from '@material-ui/core/colors';

export const theme = createMuiTheme({
//   typography: {
//     body1: {
//       fontFamily: "'Open Sans', sans-serif",
//       fontWeight: 400,
//       fontSize: 16,
//       color: blue[500] // color texto side bar
//     }
//   },

//   palette: {
//     primary: {
  
//       light: green[500],
//       main: blue[500], //Color principal titulos y links
//       dark: red[500],
//       contrastText: '#fff'
//     },
//     secondary: {
//       light: green[500],
//       main: green[500],
//       dark: orange[500],
//       contrastText: '#fff'
//     }
//   }
})



const useCustmoStyles = makeStyles((theme) => ({
    depositContext: {
      flex: 1,
    },
    fixedGriddHeight: {
        height: "15em"
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


    const handleToggle = (picker) => (event) => {
        setState({ ...state, [picker]: !state[picker] });
    };

    const handleChange = (picker) => (color,event) => 
    {
       setValue({ ...value, [picker]: color.hex });

    };

    const changeTheme = () => {
        console.log(theme.palette.primary.main);
        console.log(value[2]);
        theme.palette.primary.main = value[2];
        console.log(theme.palette.primary.main);

    }

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
                                    
                    
                                    <Grid className={customClasses.fixedGriddHeight} item xs={12} md={6} lg={4} >
                                        <ColorPicker title="Paleta de colores: primario" open={state[0]}  handleToggle={handleToggle(0)}/>
                                        <TwitterPicker 
                                            color={ value[0] }
                                            onChange={ handleChange(0) }
                                            className={clsx(customClasses.colorPicker, state[0] && customClasses.colorPickerOpen)}
                                            />
                                        
                                    </Grid>
                                    <Grid className={customClasses.fixedGriddHeight} item xs={12} md={6} lg={4} >
                                        <ColorPicker title="Paleta de colores: secundario"  open={state[1]} handleToggle={handleToggle(1)}/>
                                        <TwitterPicker 
                                            color={ value[1] }
                                            onChange={ handleChange(1) }
                                             className={clsx(customClasses.colorPicker, state[1] && customClasses.colorPickerOpen)}
                                            />
                                       
                                    </Grid>
                                    <Grid className={customClasses.fixedGriddHeight} item xs={12} md={6} lg={4}>
                                        <ColorPicker title="Color de texto título"  open={state[2]} handleToggle={handleToggle(2)}/>
                                        <TwitterPicker
                                            color={ value[2] }
                                            onChange={ handleChange(2) }
                                             className={clsx(customClasses.colorPicker, state[2] && customClasses.colorPickerOpen)}
                                            />

                                    </Grid>
                                    <Grid className={customClasses.fixedGriddHeight} item xs={12} md={6} lg={4} >
                                        <ColorPicker title="Color de texto primario" open={state[3]} handleToggle={handleToggle(3)}/>
                                        <TwitterPicker
                                            color={ value[3] }
                                            onChange={ handleChange(3) }
                                             className={clsx(customClasses.colorPicker, state[3] && customClasses.colorPickerOpen)}
                                            />
                                    
                                    </Grid>
                                    <Grid className={customClasses.fixedGriddHeight} item xs={12} md={6} lg={4} >
                                        <ColorPicker title="Color de texto secundario"  open={state[4]}  handleToggle={handleToggle(4)}/>
                                        <TwitterPicker 
                                            color={ value[4] }
                                            onChange={ handleChange(4) }
                                             className={clsx(customClasses.colorPicker, state[4] && customClasses.colorPickerOpen)}
                                            />
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={4} >
                                        <SelectPicker title='Cambiar fuente' />
                                    </Grid>
                                    <Grid className= {classes.buttonMargin} item xs={12} md={12} lg={12}>
                                        <Button onClick={changeTheme}  variant="contained" color="primary">
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

