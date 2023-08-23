import React from 'react';
import { Bar } from 'react-chartjs-2';
import { LinearScale, CategoryScale, BarElement, Chart } from 'chart.js'; // Import necessary components

Chart.register(LinearScale, CategoryScale, BarElement); 


const Weeklystats = () => {
  // Generate random data for 3 months
  const labels = ['Week 1', 'Week 2', 'Week 3'];
  const months = ['June', 'July', 'August', 'September'];
  const data = {
    labels: labels,
    datasets: months.map(month => ({
      label: month,
      backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.6)`,
      data: labels.map(() => Math.floor(Math.random() * 20) + 10), // Random values for demonstration
    })),
  };

  const options = {
    
    scales: {
      x: {
        type: 'category',
        labels: ['Week 1', 'Week 2', 'Week 3'],
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
      <h2 className="text-purple-600 text-sm font-semibold mb-2 mt-5">Weekly Stats</h2>
        <Bar data={data} options={options} />
    </div>
  );
};

export default Weeklystats;

