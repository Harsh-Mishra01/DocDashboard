// PotentialVsROIChart.js
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

// const data = [
//     { name: 'RCPA', value: 85, color: '#07A241' }, // Tailwind's green-500
//     { name: 'Potential', value: 15, color: '#A7F3D0' }, // Tailwind's green-200
// ];

const PotentialVsROIChart = ({data}) => {
    return (
        <div className=" bg-white rounded-lg flex flex-col justify-center items-center">
            <h3 className="text-center text-green-500 font-semibold">Potential Vs ROI</h3>
            <PieChart width={200} height={160}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    startAngle={90}
                    endAngle={-270}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
            <div className="flex justify-center space-x-4 mt-2">
                <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#A7F3D0' }}></div>
                    <span className="text-sm text-gray-700">ROI</span>
                </div>
                <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#07A241' }}></div>
                    <span className="text-sm text-gray-700">Potential</span>
                </div>
            </div>
        </div>
    );
};

export default PotentialVsROIChart;
