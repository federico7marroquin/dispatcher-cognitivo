import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title/Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits(props) {
  const classes = useStyles();
  const { title, quantity, date, time } = props;
  return (
    <React.Fragment>
      <Title>{title? title: "Recent Deposits" }</Title>
      <Typography component="p" variant="h4">
      {quantity? quantity: "$3,024.00"}
      </Typography>
      <Typography color="textSecondary">
        <strong>Promedio: { time? time: null}</strong>
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {date? date: "on 15 March, 2019"}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver Balance
        </Link>
      </div>
    </React.Fragment>
  );
}
