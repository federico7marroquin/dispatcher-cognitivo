import React, { PureComponent } from 'react';
import {PieChart, Pie, Tooltip, ResponsiveContainer} from 'recharts';


const data01 = [
  { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
];

const data02 = [
  { name: 'Group A', value: 2400 }, { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 }, { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 }, { name: 'Group F', value: 4800 },
];

export default class PieChartTooltip extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/k9jkog04/';

  render() {
    return (
        <ResponsiveContainer>
        <PieChart width={800} height={400}>
            <Pie dataKey="value" isAnimationActive={false} data={data01} cx={400} cy={80} outerRadius={80} fill="#8884d8" label />
            <Pie dataKey="value" data={data02} cx={90} cy={80} innerRadius={40} outerRadius={80} fill="#82ca9d" label/>
            <Tooltip />
        </PieChart>

        </ResponsiveContainer>
    );
  }
}
