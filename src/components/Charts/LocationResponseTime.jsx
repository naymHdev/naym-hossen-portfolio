"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LocationResponseTime = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartCanvas = chartRef.current.getContext("2d");

    // Easing and animation configuration
    let easing = "easeOutQuad"; // This will now be used as the easing type in the animation options
    const totalDuration = 5000;
    const data = [];
    const data2 = [];
    let prev = 100;
    let prev2 = 80;

    // Populate data
    for (let i = 0; i < 1000; i++) {
      prev += 5 - Math.random() * 10;
      data.push({ x: i, y: prev });
      prev2 += 5 - Math.random() * 10;
      data2.push({ x: i, y: prev2 });
    }

    const duration = (ctx) =>
      ((ctx.index / data.length) * totalDuration) / data.length;
    const delay = (ctx) => (ctx.index / data.length) * totalDuration;
    const previousY = (ctx) =>
      ctx.index === 0
        ? ctx.chart.scales.y.getPixelForValue(100)
        : ctx.chart
            .getDatasetMeta(ctx.datasetIndex)
            .data[ctx.index - 1].getProps(["y"], true).y;

    // Define animation object with the new easing type
    const animation = {
      x: {
        type: "number",
        easing: "linear", // Linear for x
        duration: duration,
        from: NaN, // the point is initially skipped
        delay(ctx) {
          if (ctx.type !== "data" || ctx.xStarted) {
            return 0;
          }
          ctx.xStarted = true;
          return delay(ctx);
        },
      },
      y: {
        type: "number",
        easing, // Use the easing defined at the top ("easeOutQuad")
        duration: duration,
        from: previousY,
        delay(ctx) {
          if (ctx.type !== "data" || ctx.yStarted) {
            return 0;
          }
          ctx.yStarted = true;
          return delay(ctx);
        },
      },
    };

    // Chart configuration
    const config = {
      type: "line",
      data: {
        datasets: [
          {
            borderColor: "red",
            borderWidth: 1,
            radius: 0,
            data: data,
          },
          {
            borderColor: "blue",
            borderWidth: 1,
            radius: 0,
            data: data2,
          },
        ],
      },
      options: {
        animation: animation,
        interaction: {
          intersect: false,
        },
        plugins: {
          legend: false,
          title: {
            display: false,
          },
        },
        scales: {
          x: {
            type: "linear",
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
        backgroundColor: "transparent",
      },
    };

    // Create the chart
    const myChart = new Chart(chartCanvas, config);

    // Clean up the chart when component unmounts
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className=" mt-10 rounded-md shadow-md p-6">
      <h1 className="text-xl font-bold text-white mb-4">
        Location Response Time
      </h1>
      <canvas ref={chartRef} />
    </div>
  );
};

export default LocationResponseTime;
