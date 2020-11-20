import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import Title from '../Title/Title';
const data = [
  {
    name: 'Tipo 1', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Tipo 2', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Tipo 3', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Tipo 4', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Tipo 5', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Tipo 6', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Tipo 7', uv: 3490, pv: 4300, amt: 2100,
  },
];

export default class Example extends PureComponent {

  render() {
    return (
        <React.Fragment>
            <Title>{this.props.title? this.props.title:"Hoy"}</Title>
            <ResponsiveContainer>
                <BarChart

                    data={data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }}/>
                    <Bar name="Resolución en primer nivel" dataKey="pv" fill="#8884d8" />
                    <Bar name="Escalados" dataKey="uv" fill="#82ca9d" />
                    <Bar name="Escalados con prioridad" dataKey="amt" fill="#00C49F" />
                </BarChart>
            </ResponsiveContainer>
    </React.Fragment>
    );
  }
}
