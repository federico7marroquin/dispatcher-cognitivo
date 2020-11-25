import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import Title from '../../Title/Title';

export default class Example extends PureComponent {

  render() {
    const {data}= this.props;
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
