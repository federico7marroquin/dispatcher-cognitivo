import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../../Title/Title';
import Link from '@material-ui/core/Link';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  depositContext: {
    flex: 1,
  },
  linksInRow: {
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(2),
  },

}));

export default function ColorPicker(props) {
  const classes = useStyles();
  const { title, open, handleToggle} = props;


  const defaultOpen= (event) => {
    event.preventDefault();
    handleToggle();
  }
  return (
    <React.Fragment>
      <Title>{title }</Title>
      <div className={classes.linksInRow}>
        <Link color="primary" href="#" onClick={defaultOpen}  > 
            {open? "Ocultar" :"Elegir color"}
        </Link>
      </div>
    </React.Fragment>
  );
}
