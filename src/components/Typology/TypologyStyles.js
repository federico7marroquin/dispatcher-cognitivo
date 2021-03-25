import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        margin: 'auto',
    },
    cardHeader: {
        padding: theme.spacing(1, 2),
    },
    list: {
        width: '100%',
        height: '80%',
        backgroundColor: theme.palette.background.paper,
        overflow: 'auto',
    },
    vhHeight: {
        height: '80vh',
        position: 'relative',
      },
    button: {
        margin: theme.spacing(0.5, 0),
    },
    buttonAddContainer: {
        position: 'absolute',
        bottom: '0'
    },
    buttonAdd: {
        margin: theme.spacing(1, 0),
    },
}));