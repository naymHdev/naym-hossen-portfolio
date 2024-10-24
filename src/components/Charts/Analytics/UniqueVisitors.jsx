"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DATA_COUNT = 12;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

// Mock data generation function
const generateRandomNumbers = (count, min, max) =>
  Array.from({ length: count }, () =>
    Math.floor(Math.random() * (max - min) + min)
  );

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const data = {
  labels: labels,
  datasets: [
    {
      data: generateRandomNumbers(DATA_COUNT, NUMBER_CFG.min, NUMBER_CFG.max),
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      borderWidth: 2,
      borderRadius: 10,
      borderSkipped: false,
    },
  ],
};

// Bar chart options (optional)
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#10acf4",
      },
    },
    y: {
      ticks: {
        color: "#10acf4",
      },
    },
  },
};

const UniqueVisitors = () => {
  return (
    <div className="mt-10 rounded-md shadow-md p-6">
      <h2 className="text-xl font-bold text-white mb-4">
        Page Views / Unique Visitors
      </h2>
      <section>
        <Bar data={data} options={options} />
      </section>
    </div>
  );
};

export default UniqueVisitors;
