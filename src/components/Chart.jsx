import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ["1w", "2w", "3w", "4w", "5w", "6w"],
        datasets: [
          {
            label: "Grammar",
            backgroundColor: "#755ba8",
            borderColor: "rgba(255,99,132,1)",
            // borderWidth: 1,
            //stack: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [65, 59, 80, 81, 56, 55],
          },

          {
            label: "Reading",
            backgroundColor: "#f0a56d",
            borderColor: "rgba(255,99,132,1)",
            // borderWidth: 1,
            //stack: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [45, 79, 50, 41, 16, 85],
          },
          {
            label: "Vocabulary",
            backgroundColor: "#f6d880",
            borderColor: "rgba(255,99,132,1)",
            // borderWidth: 1,
            //stack: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [55, 39, 70, 61, 26, 75],
          },
          {
            label: "Listening",
            backgroundColor: "#ebd295",
            borderColor: "rgba(255,99,132,1)",
            // borderWidth: 1,
            //stack: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [23, 73, 60, 31, 16, 85],
          },
        ],
      },
    };
  }

  render() {
    const options = {
      legend: {
        display: true,
        position: "right",
      },
      maintainAspectRatio: false,
      type: "bar",
      barThickness: 5,
    };
    return (
      <div className="w-[550px] h-[200px]">
        <Bar
          data={this.state.data}
          width={null}
          height={null}
          options={options}
        />
      </div>
    );
  }
}

export default Chart;
