import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

// Sample data
const data = [
    {
        name: "JAN",
        visit1: 1,
        visit2: 1,
        visit3: 1,
        visitdates: ["01-01-2024", "10-01-2024", "10-01-2024",],
    },
    {
        name: "FEB",
        visit1: 1,
        visit2: 1,
        visit3: 0,
        visitdates: ["05-02-2024", "15-02-2024", "25-02-2024"],
    },
    {
        name: "MAR",
        visit1: 1,
        visit2: 1,
        visit3: 1,
        visitdates: ["03-03-2024", "12-03-2024"],
    },
    {
        name: "APR",
        visit1: 1,
        visit2: 1,
        visit3: 1,
        visitdates: ["07-04-2024", "14-04-2024", "21-04-2024"],
    },
    {
        name: "MAY",
        visit1: 1,
        visit2: 0,
        visit3: 0,
        visitdates: ["02-05-2024"],
    },
    {
        name: "JUN",
        visit1: 1,
        visit2: 1,
        visit3: 0,
        visitdates: ["05-06-2024", "18-06-2024"],
    },
    {
        name: "JUL",
        visit1: 1,
        visit2: 1,
        visit3: 0,
        visitdates: ["05-06-2024", "18-06-2024"],
    },
    {
        name: "AUG",
        visit1: 1,
        visit2: 0,
        visit3: 1,
        visitdates: ["05-06-2024", "18-06-2024"],
    },
    {
        name: "SEP",
        visit1: 1,
        visit2: 1,
        visit3: 1,
        visitdates: ["05-06-2024", "18-06-2024", "18-06-2024"],
    },
    {
        name: "OCT",
        visit1: 1,
        visit2: 1,
        visit3: 0,
        visitdates: ["05-06-2024", "18-06-2024"],
    },
    {
        name: "NOV",
        visit1: 1,
        visit2: 0,
        visit3: 1,
        visitdates: ["05-06-2024", "18-06-2024"],
    },
    {
        name: "DEC",
        visit1: 1,
        visit2: 0,
        visit3: 1,
        visitdates: ["05-06-2024", "18-06-2024"],
    },
];

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const visitdates = payload[0].payload.visitdates || [];
        return (
            <div className="bg-white p-3 border border-gray-300 rounded shadow-md">
                <p className="font-semibold">{label}</p>
                <p className="text-gray-600">Visit Dates:</p>
                <ul className="list-disc pl-5 text-sm text-gray-800">
                    {visitdates.map((date, index) => (
                        <li key={index}>{date}</li>
                    ))}
                </ul>
            </div>
        );
    }
    return null;
};


const GraphicalComponent = () => {
    return (
        <div className="w-full  mx-auto p-4">
            <ResponsiveContainer width="100%" height={200}>
                <BarChart
                    data={data}
                    margin={{ top: 30, right: 20, left: 10, bottom: 5 }}
                    barGap={30}
                    barCategoryGap="25%" 
                >
                    <XAxis dataKey="name" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    {/* Multi-colored bars */}
                    <Bar dataKey="visit1" stackId="a" fill="#07A241" />
                    <Bar dataKey="visit2" stackId="a" fill="#56C07E" />
                    <Bar dataKey="visit3" stackId="a" fill="#CDECD9" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default GraphicalComponent;
