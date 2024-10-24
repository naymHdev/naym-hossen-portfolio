"use client";

import { Chart } from "react-google-charts";

// Geo Chart Data
export const geoChartOptions = {
  region: "world",
  displayMode: "markers",
  backgroundColor: "#0B1E2C",
  colorAxis: { colors: ["#21608C", "#21608C"] },
  markerOpacity: 0.8,
  sizeAxis: { minValue: 0, maxValue: 100 },
  markers: {
    color: "#21608C",
    stroke: "#4285f4",
    strokeWidth: 2,
  },
};

export const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["Bangladesh", 7000],
  ["India", 700],
  ["Pakistan", 9000],
  ["Nepal", 1400],
];

// Component for displaying the chart and statistics
const VisitorStatistics = () => {
  return (
    <div className="lg:flex gap-6 mt-10 p-6 rounded-md shadow-md">
      {/* Left Sidebar with Statistics */}
      <div className="w-1/3">
        <h2 className="text-lg font-bold text-white mb-6">
          VISITOR'S STATISTICS
        </h2>

        <div className="space-y-8">
          {/* Unique Visitors */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200">
              Unique Visitors
            </h3>
            <p className="text-xs text-foreground mt-2">
              Last Week Rise by 62%
            </p>
            <div className="h-2 bg-gray-300 rounded-full mt-1">
              <div
                className="h-full bg-blue-500 rounded-full mt-2"
                style={{ width: "62%" }}
              ></div>
            </div>
          </div>

          {/* Registrations */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200">
              Registrations
            </h3>
            <p className="text-xs text-foreground mt-2">
              Up by 57% last 7 days
            </p>
            <div className="h-2 bg-gray-300 rounded-full mt-1">
              <div
                className="h-full bg-blue-500 rounded-full mt-2"
                style={{ width: "57%" }}
              ></div>
            </div>
          </div>

          {/* Direct Sales */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200">
              Direct Sales
            </h3>
            <p className="text-xs text-foreground mt-2">
              Last Month Rise by 22%
            </p>
            <div className="h-2 bg-gray-300 rounded-full mt-1">
              <div
                className="h-full bg-blue-500 rounded-full mt-2"
                style={{ width: "22%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Geo Chart Section */}
      <div className="w-2/3">
        <Chart
          chartEvents={[
            {
              eventName: "select",
              callback: ({ chartWrapper }) => {
                const chart = chartWrapper.getChart();
                const selection = chart.getSelection();
                if (selection.length === 0) return;
              },
            },
          ]}
          chartType="GeoChart"
          width="100%"
          height="100%"
          data={data}
          options={geoChartOptions}
        />
      </div>
    </div>
  );
};

export default VisitorStatistics;
