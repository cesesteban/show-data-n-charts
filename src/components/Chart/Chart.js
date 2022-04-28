import React from "react";
import "./chart.module.css";
import { Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

function Chart({ coinHistory, spotHistory }) {
  const labels =
    coinHistory && coinHistory[0] && coinHistory.map((coin) => coin[0]);

  const data = {
    labels,
    datasets: [
      {
        label: "Fut",
        data:
          coinHistory && coinHistory[0] && coinHistory.map((coin) => coin[4]),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        fill: true,
      },
      {
        label: "Spot",
        data:
          spotHistory && spotHistory[0] && spotHistory.map((coin) => coin[4]),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        fill: false,
      },
      // {
      //   label: "Implicit rate",
      //   data:
      //     spotHistory && spotHistory[0] && spotHistory.map((coin) => coin[4]),
      //   borderColor: "rgb(53, 162, 235)",
      //   backgroundColor: "rgba(53, 162, 235, 0.5)",
      //   fill: false,
      // },
    ],
  };
  return (
    <div className="Chart">
      <Line options={options} data={data} />
    </div>
  );
}

export default Chart;
