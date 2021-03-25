import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

export default class TMOBarChart extends PureComponent {

 
  render() {
    const {data, onClick}= this.props;

    const handleClick = (values) => {
      onClick(values.payload);
    }
 
    return (
        <React.Fragment>
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
                    <Bar onClick={handleClick} name="Estatuto Tributario" dataKey="info" fill="#8884d8" />
                    <Bar onClick={handleClick} name="Conceptos DIAN" dataKey="otros" fill="#609" />
                    <Bar onClick={handleClick} name="Conceptos puntuales" dataKey="cert" fill="#82ca9d" />
                    <Bar onClick={handleClick} name="Outsourcing Tributario" dataKey="auto" fill="#0088fe" />
                    <Bar onClick={handleClick} name="Litigios" dataKey="asun" fill="#00C49F" />
                    <Bar onClick={handleClick} name="Preparación contratos" dataKey="pqrs" fill="#ffc658" />


                </BarChart>
            </ResponsiveContainer>
    </React.Fragment>
    );
  }
}
