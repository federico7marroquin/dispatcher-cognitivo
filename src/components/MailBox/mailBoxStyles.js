import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const color = "#000000DE";


export const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: color,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: color,
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: color,
        },
        '&:hover fieldset': {
          borderColor: color,
        },
        '&.Mui-focused fieldset': {
          borderColor: color,
        },
      },
    },
  })(TextField);

export const CssButton = withStyles({

    root: {
        maxWidth: '15px',
        minWidth: '15px',
        padding: '0px 15px',
    }
})(Button);



export const useStyles = makeStyles((theme) => ({

    wrapper: {
        width: '100%',
        height: '100%'

    },
    typology: {
        display: "flex",
        justifyContent: 'start'

    },

    typeButton:{
        width: 'auto',
        display: 'flex',
        justifyContent: 'start'
    },
  
    typeLabel: {
        alignSelf: 'center'

    },
    subject: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),


    },
    textBox: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        padding: '10px 0px',

    },
    formatBar: {
        padding: '0px',
        marginLeft: '0px'
    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),

    },
    buttonOptions:{
        display: 'flex',
    },


}));