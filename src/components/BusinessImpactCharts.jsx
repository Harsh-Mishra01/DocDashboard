// BusinessImpactBarChart.js
import { BarChart, Bar, XAxis, Tooltip, CartesianGrid } from 'recharts';

// const data = [
//     { month: 'Jan', value: 8000 },
//     { month: 'Feb', value: 7000 },
//     { month: 'Mar', value: 6000 },
//     { month: 'Apr', value: 7000 },
//     { month: 'May', value: 5000 },
//     { month: 'Jun', value: 6000 },
//     { month: 'Jul', value: 7000 },
// ];

const BusinessImpactBarChart = ({data}) => {
    return (
        <div className=" bg-white shadow-xl border-2 border-slate-200 rounded-lg flex justify-center items-center flex-col">
            <h3 className="text-center text-green-500 font-semibold">Business Impact</h3>
            <BarChart
                width={300}
                height={230}
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fill: '#4B5563' }} />
                {/* <YAxis tick={{ fill: '#4B5563' }} /> */}
                <Tooltip formatter={(value) => `${value}`} />
                <Bar dataKey="value" fill="#07A241" radius={[10, 10, 0, 0]} barSize={10} />
            </BarChart>
        </div>
    );
};

export default BusinessImpactBarChart;
