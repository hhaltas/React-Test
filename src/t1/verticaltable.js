import React from "react";
import { Bar } from "react-chartjs-2";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

export default React.memo(function Verticaltable(props) {
  return (
    <div>
      <Bar options={options} data={props.item} />
    </div>
  );
});
