import { makeStyles } from '@material-ui/core/styles';


export  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    }, 
    appBarSpacer: theme.mixins.toolbar,
    
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'hidden',
      flexDirection: 'column',
    //   '&:hover': {
    //     background: theme.palette.background.default,
    //  }
    },
    
    fixedHeight: {
      height: 240,
    },
    fixedMediumHeight: {
      height: 300,
    },

    fixedLargeHeight: {
      height: 400,
    },
    fixedTotalHeight: {
      height: "100%",
    },
    rechartswrapper: {
        margin :" 0 auto"
      },
    linkDecorator: {
      textDecoration: "none" 
    },
    depositContext: {
      flex: 1,
    },
    buttonMargin: {
      marginTop: theme.spacing(3)
    }
    
  }));