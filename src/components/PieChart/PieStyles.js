import { makeStyles } from '@material-ui/core/styles';


export  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    }, 
    
    container: {
     justifyContent: "center",
     alignItems: "center"
    },
    linkDecoration: {
      textDecoration: "none"
    }
    
  }));