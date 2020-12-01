import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import Title from '../../Title/Title';

export default class Example extends PureComponent {

 
  render() {
    const {data, onClick}= this.props;

    const handleClick = (values) => {
      onClick(values.payload);
    }
 
    return (
        <React.Fragment>
            {/* <Title>{this.props.title? this.props.title:"Hoy"}</Title> */}
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
                    <Bar onClick={handleClick} name="Solicitud de Información" dataKey="info" fill="#8884d8" />
                    <Bar onClick={handleClick} name="Otros" dataKey="otros" fill="#609" />
                    <Bar onClick={handleClick} name="Certificados" dataKey="cert" fill="#82ca9d" />
                    <Bar onClick={handleClick} name="Autorizaciones" dataKey="auto" fill="#0088fe" />
                    <Bar onClick={handleClick} name="Asuntos Legales" dataKey="asun" fill="#00C49F" />
                    <Bar onClick={handleClick} name="PQRS" dataKey="pqrs" fill="#ffc658" />


                </BarChart>
            </ResponsiveContainer>
    </React.Fragment>
    );
  }
}
