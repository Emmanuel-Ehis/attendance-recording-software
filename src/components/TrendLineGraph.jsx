import React from 'react';
import { Line } from 'react-chartjs-2';
import { LinearScale, CategoryScale, BarElement, LineElement, PointElement, Chart } from 'chart.js'; // Import necessary components

Chart.register(LinearScale, CategoryScale, BarElement, LineElement, PointElement);

const TrendLineGraph = () => {
  const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Trend in Student Attendance',
        data: labels.map(() => Math.floor(Math.random() * 60) + 20), // Random values for demonstration
        fill: false,
        borderColor: 'purple',
        tension: 0.3,
      },
    ],
  };
const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="hidden md:block w-full md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto">
      <h2 className="text-purple-600 text-sm font-semibold mb-2">Trend in Student Attendance</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default TrendLineGraph;

