import React from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip
} from 'recharts';
import Title from '../Title/Title';
import Link from '@material-ui/core/Link';
import { useStyles } from './PieStyles';

const data = [
  { name: 'Primer nivel', value: 700 },
  { name: 'Escalados', value: 280 },
  { name: 'Escalados con prioridad', value: 100 },

];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function preventDefault(event) {
  event.preventDefault();
}

export default function EmailPieChart(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Resolución de peticiones</Title>
      <ResponsiveContainer className={classes.container}>
        <PieChart>
          <Pie
            data={data}
            labelLine={false}
            
            label={renderCustomizedLabel}
            fill="#8884d8"
            dataKey="value"

          >
            {
              data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
          <Tooltip/>
        </PieChart>
      </ResponsiveContainer>

      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver Detalles
      </Link>
      </div>
    </React.Fragment>
  );
}

