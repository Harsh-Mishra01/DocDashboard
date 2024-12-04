import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js";
import SamplesPrecuredTable from "./SamplePrecuredTable";

// Register Chart.js components
ChartJS.register(LineElement, PointElement, Tooltip, Legend, CategoryScale, LinearScale);

const ChartComponent = () => {
  const data = {
    labels: ["APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    datasets: [
      {
        data: [5, 9, 14, 19, 15, 16, 23, 18, 22],
        borderColor: "#34D399", // Tailwind green
        backgroundColor: "#34D399",
        tension: 0.4, // Curve the line
        fill: false,
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "#34D399",
        pointBorderWidth: 2,
        pointRadius: 5,
      },
    ],
  };

  // const options = {
  //     responsive: true,
  //     plugins: {
  //         tooltip: {
  //             enabled: false, // Disable the default tooltip
  //             external: (context) => {
  //                 const tooltipModel = context.tooltip;

  //                 // Check if the tooltip should be hidden
  //                 if (!tooltipModel.opacity) {
  //                     const tooltips = document.getElementsByClassName("custom-tooltip");
  //                     Array.from(tooltips).forEach((tooltip) => (tooltip.style.opacity = "0"));
  //                     return;
  //                 }

  //                 const chartCanvas = context.chart.canvas;
  //                 const tooltipEl = document.getElementById("custom-tooltip");

  //                 // Create the tooltip element if it doesn't exist
  //                 if (!tooltipEl) {
  //                     const div = document.createElement("div");
  //                     div.id = "custom-tooltip";
  //                     div.className =
  //                         "custom-tooltip absolute z-10 bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded shadow-lg";
  //                     document.body.appendChild(div);
  //                 }

  //                 // Position the tooltip element
  //                 const position = chartCanvas.getBoundingClientRect();
  //                 tooltipEl.style.opacity = "1";
  //                 tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + "px";
  //                 tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY - 10 + "px";
  //                 tooltipEl.innerHTML = `${tooltipModel.dataPoints[0].raw}`;
  //             },
  //         },
  //         legend: {
  //             display: false,
  //         },
  //     },
  //     scales: {
  //         x: {
  //             grid: {
  //                 display: false, // Remove x-axis gridlines
  //             },
  //             ticks: {
  //                 color: "#9CA3AF", // Tailwind gray
  //             },
  //         },
  //         y: {
  //             grid: {
  //                 display: false, // Remove y-axis gridlines
  //             },
  //             ticks: {
  //                 color: "#9CA3AF", // Tailwind gray
  //             },
  //         },
  //     },
  // };
  const options = {
    responsive: true,
    layout: {
      padding: {
        top: 10,
        bottom: 10,
        left: 10,
        right: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <>
      {/* <div className="bg-white flex flex-col shadow-2xl border border-slate-200 rounded-lg p-8 m-4 h-screen md:h-auto md:max-h-[90vh] md:m-6 lg:max-h-full"> */}
      <div className="bg-white shadow-2xl border border-slate-100 rounded-lg mx-8 mt-8 px-8">

        <SamplesPrecuredTable></SamplesPrecuredTable>

      </div>
    </>
  );
};

export default ChartComponent;
