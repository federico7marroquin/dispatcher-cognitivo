import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title/Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}



const rows = [
  createData(0, '17 Nov, 2020', 'Elvis Presley', 'lonox30535@0335g.com', 'Personalización', 312.44),
  createData(1, '16 Nov, 2020', 'Paul McCartney', 'lijeweddass-3517@yopmail.com', 'Escasez', 866.99),
  createData(2, '16 Nov, 2020', 'Tom Scholz', 'rukkojekku@nedoz.com', 'Autoridad', 100.81),
  createData(3, '16 Nov, 2020', 'Michael Jackson', 'virtozaydi@nedoz.com', 'Curiosidad', 654.39),
  createData(4, '16 Nov, 2020', 'Bruce Springsteen', 'kaknocirde@nedoz.com', 'Utilidad', 212.79),
];

const moreRows = [
  createData(0, '17 Nov, 2020', 'Elvis Presley', 'lonox30535@0335g.com', 'Personalización', 312.44),
  createData(1, '16 Nov, 2020', 'Paul McCartney', 'lijeweddass-3517@yopmail.com', 'Escasez', 866.99),
  createData(2, '16 Nov, 2020', 'Tom Scholz', 'rukkojekku@nedoz.com', 'Autoridad', 100.81),
  createData(3, '16 Nov, 2020', 'Michael Jackson', 'virtozaydi@nedoz.com', 'Curiosidad', 654.39),
  createData(4, '16 Nov, 2020', 'Bruce Springsteen', 'kaknocirde@nedoz.com', 'Utilidad', 212.79),
  createData(5, '16 Nov, 2020', 'Elvis Presley', 'lonox30535@0335g.com', 'Números', 312.44),
  createData(6, '16 Nov, 2020', 'Paul McCartney', 'lijeweddass-3517@yopmail.com', 'Prueba social', 866.99),
  createData(7, '15 Nov, 2020', 'Tom Scholz', 'rukkojekku@nedoz.com', 'Urgencia', 100.81),
  createData(8, '15 Nov, 2020', 'Michael Jackson', 'virtozaydi@nedoz.com', 'Reciprocidad', 654.39),
  createData(9, '15 Nov, 2020', 'Bruce Springsteen', 'kaknocirde@nedoz.com', 'Relevancia', 212.79),
];



const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  row: {
    display: "flex",
  }
}));

export default function Orders(props) {
  const classes = useStyles();
  const [show, setShow] = useState(true);

  const preventDefault =() => {
    setShow(!show);
  }
  const demo = (event) => {
    event.preventDefault();
  }
  return (
    <React.Fragment>
      <Title>{props.title? props.title :"últimos Correos" }</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Correo Electrónico</TableCell>
            <TableCell>Asunto</TableCell>
            <TableCell align="right">Resolución/seg</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { show ? (rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          )) )
          :
          (moreRows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          )) )
          }
        </TableBody>
      </Table>
      <div className={classes.row}>
        <div className={classes.seeMore}>
          <Link color="primary" href="#" onClick={preventDefault}>
          { show ? "Ver más correos": "Ver menos correos"}
          </Link>
        </div>
        <div className={classes.seeMore}>
          <Link color="primary" href="#" onClick={demo}>
            Descargar correos
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
