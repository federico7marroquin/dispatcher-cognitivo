import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchBar(props) {

  const classes = useStyles();
  const [ state, setState ] = useState('');
  const { searchFunction } = props;

  const search = (e) => {
    e.preventDefault();
    searchFunction(state);
  }
  const onChangeState = (e) => {
    e.preventDefault();
    if(e.target.value===''){
      searchFunction(e.target.value);
    }
    setState(e.target.value);
  }

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        onChange={onChangeState}
        className={classes.input}
        value={state}
        placeholder="Buscar usuario"
        inputProps={{ 'aria-label': 'Buscar usuario' }}
      />
      <IconButton 
        type="submit" 
        className={classes.iconButton} 
        aria-label="search"
        onClick={search}
      >
        <SearchIcon />
      </IconButton>

    </Paper>
  );
}