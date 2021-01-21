import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../../Title/Title';
import Link from '@material-ui/core/Link';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  depositContext: {
    flex: 1,
  },
  nose: {
    border: "1px solid green"
  },
  imageSpacing: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
  },
  linksInRow: {
    marginTop: theme.spacing(5),
    marginRight: theme.spacing(2),
  },
  row: {
    display: "flex",
  }

}));

export default function ImagePicker(props) {
  const classes = useStyles();
  const { title, img} = props;

  return (
    <React.Fragment>
      <Title>{title}</Title>
      <img className={classes.imageSpacing} alt='logo' src={img} width="60" height="60"/>
      <div className={classes.row}>
        <div className={classes.linksInRow}>
          <Link color="primary" href="#" onClick={preventDefault}  > 
              Quitar
          </Link>      
        </div>
        <div className={classes.linksInRow}>
          <Link color="primary" href="#" onClick={preventDefault}  > 
              Cambiar imagen
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
