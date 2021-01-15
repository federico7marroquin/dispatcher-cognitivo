import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title/Title';
import { Link } from "react-router-dom";

function preventDefault(event) {
  event.preventDefault();
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const useStyles = makeStyles((theme) => ({
  depositContext: {
    flex: 1,
  },
  linkDecoration: {
    textDecoration: "none",
    '&:hover': {
      textDecoration: "underline ",
   }
    
  }

}));

export default function Stats(props) {
  const classes = useStyles();
  const { title, quantity, date, time, route } = props;

  return (
    <React.Fragment>
      <Title>{title? title: "Estadísticas" }</Title>
      <Typography component="p" variant="h4">
      {quantity? numberWithCommas(quantity): "0"}
      </Typography>
      <Typography color="textSecondary">
        <strong>Promedio: { time? time: null}</strong>
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {date? date: "on 15 March, 2019"}
      </Typography>
      <div>
        {
          route &&<Link to={route} className={`${classes.linkDecoration} MuiTypography-colorPrimary`}>
          {/* <Link to={route} color="primary"  > */}
            Ver Detalles
          {/* </Link> */}
        </Link>
        }
        
      </div>
    </React.Fragment>
  );
}
