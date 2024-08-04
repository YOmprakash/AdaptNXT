import  { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { IoMdInformationCircleOutline } from 'react-icons/io';


const data = [
  { name: 'Page A', Orders: 4000, Sales: 2400, value: 0.8 },
  { name: 'Page B', Orders: 3000, Sales: 1398, value: 1.2 },
  { name: 'Page C', Orders: 2000, Sales: 9800, value: 1.6 },
  { name: 'Page D', Orders: 2780, Sales: 3908, value: 2.0 },
  { name: 'Page E', Orders: 1890, Sales: 4800, value: 2.4 },
  { name: 'Page F', Orders: 2390, Sales: 3800, value: 2.8 },
  { name: 'Page G', Orders: 3490, Sales: 4300, value: 3.2 },
];

const CustomXAxisTick = ({ x, y, payload }) => {
  const value = payload.value;
  return (
    <text x={x} y={y} dy={10} textAnchor="middle" fill="#666">
      {`${(value / 1000).toFixed(1)}k`}
    </text>
  );
};

const CustomYAxisTick = ({ x, y, payload }) => {
  const days = ['0', '1', '2', '3', '4'];
  return (
    <text x={x} y={y} dy={5} textAnchor="middle" fill="#666">
      {days[payload.value] || ''}
    </text>
  );
};

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952';

  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <div className="flex items-center mb-2 border-solid border-b pb-2">
          <h2 className="text-xl text-gray-600 font-semibold mr-2">Sales Data</h2>
          <IoMdInformationCircleOutline className="text-[20px] text-gray-500" />
        </div>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 30,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis  />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Orders" stroke="#F2784B" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Sales" stroke="#51C3D3" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
