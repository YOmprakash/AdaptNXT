import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { IoMdInformationCircleOutline } from 'react-icons/io';

const data = [
  { name: 'WooCommerce Store', value: 55.8 },
  { name: 'Shopify Store', value: 44.2 },
];

const COLORS = ['#F2784B', '#51C3D3'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize="14"
      fontWeight="bold"
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value, percent } = payload[0];
    return (
      <div className="bg-white p-2 border rounded shadow">
        <p>{`${name}: ${value.toFixed(1)} (${(percent * 100).toFixed(1)}%)`}</p>
      </div>
    );
  }
  return null;
};

const CustomLegend = ({ payload }) => {
  return (
    <div className="flex flex-wrap justify-center mt-4">
      {payload.map((entry, index) => (
        <div key={`item-${index}`} className="flex flex-col items-center mx-4 my-2 text-center">
          <div className="flex items-center">
            <div
              style={{ backgroundColor: entry.color }}
              className="w-4 h-4 rounded-full mr-2"
            ></div>
            <span>{entry.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const CustomPieChart = () => (
  <div className="p-4">

    <div className="relative">
     
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-4 z-10">
        <p className="text-[12px] font-sm">Total</p>
        <p className="text-1xl font-bold">2659</p>
      </div>
      <div className="flex gap-2 items-center mb-4 border-b pb-2">
        <h2 className="text-xl text-gray-600 font-semibold">Portion of Sales</h2>
        <IoMdInformationCircleOutline className="text-[20px] text-gray-500" />
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            startAngle={-110} 
            endAngle={250}   
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <CustomLegend payload={data.map((item, index) => ({ value: item.name, color: COLORS[index] }))} />
    </div>
  </div>
);

export default CustomPieChart;
