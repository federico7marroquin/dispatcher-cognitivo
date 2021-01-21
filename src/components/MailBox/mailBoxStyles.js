import { withStyles } from '@material-ui/core/styles';
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

