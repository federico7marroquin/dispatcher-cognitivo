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
        // border: '1px solid red',
        width: '100%',
        height: '100%'

    },
    typology: {
        display: "flex",
        color: 'black',
        opacity: '0.7',
        // border: '1px solid blue',
        justifyContent: 'start'

    },
    typeIcon:{
        // border: '1px solid pink',
        marginRight: '0px',
        alignSelf: 'center',
    },
    typeButton:{
        // border: '1px solid red',
        width: 'auto',
        display: 'flex',
        justifyContent: 'start'
    },
  
    typeLabel: {
        // border: '1px solid orange',
        alignSelf: 'center'

    },
    subject: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        // border: '1px solid green'


    },
    textBox: {
        // border: '1px solid yellow',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),

        padding: '10px 0px',

    },
    footer: {
        // border: '1px solid grey',
       

    },
    formatBar: {
        // border: '1px solid cian',
        padding: '0px',
        marginLeft: '0px'

    },
    buttonGroup: {
        // border: '1px solid black',
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
       


    },
    buttonOptions:{
        display: 'flex',
    },
    discardOptions: {
        color: 'black',
        opacity: '0.7',
    },
    toolBar: {
        marginLeft: '5px',
        color: 'black',
        opacity: '0.7',
        display: 'flex',
        alignSelf: 'center',
        fontSize: "50px",
        width: '180px',
        justifyContent: 'space-around'

    },


}));