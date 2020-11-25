import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../../Title/Title';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  depositContext: {
    flex: 1,
  }

}));

export default function SelectPicker(props) {
  const classes = useStyles();
  const { title} = props;
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <React.Fragment >
      <Title>{title}</Title>
          
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Fuentes</InputLabel>
        <Select
          native
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
          value={age}
          onChange={handleChange}
        >
          <option aria-label="None" value="" />
          <option value={1}>San serif 1</option>
          <option value={2}>San serif 2</option>
          <option value={3}>San serif 3</option>
        </Select>
        <FormHelperText>Escoge una de las fuentes soportadas</FormHelperText>
      </FormControl>
    </React.Fragment>
  );
}
