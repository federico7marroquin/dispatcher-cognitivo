import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import Title from '../../Title/Title';



export default class Example extends PureComponent {

  render() {
    const {data, onChange} = this.props;

    const filterValues = (values) => {
      const startIndex = values.startIndex;
      const endIndex = values.endIndex;
      const filtered = data.filter( column =>  column.name>startIndex && column.name-1<= endIndex)
      onChange(filtered);
    }

    return (
        <React.Fragment>
            {/* <Title>Histórico mes</Title> */}
            <ResponsiveContainer >
              <BarChart
                  width={1100}
                  height={350}
                  data={data}
                  margin={{
                    top: 5, right: 20, left: 10, bottom: 5,
                  }}
                  >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                  <ReferenceLine y={0} stroke="#000" />
                  <Brush dataKey="name" height={30} stroke="#8884d8" onChange={filterValues}/>
                  <Bar name="Resolución en primer nivel" dataKey="pv" fill="#8884d8" />
                  <Bar name="Escalados" dataKey="uv" fill="#82ca9d" />
                  <Bar name="Escalados con prioridad" dataKey="amt" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
  }
}
