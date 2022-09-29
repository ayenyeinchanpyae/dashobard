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
            //borderColor: "rgba(255,99,132,1)",
            // borderWidth: 1,
            //stack: 1,
            //hoverBackgroundColor: "rgba(255,99,132,0.4)",
            //hoverBorderColor: "rgba(255,99,132,1)",
            data: [65, 59, 80, 81, 56, 55],
          },

          {
            label: "Vocabulary",
            backgroundColor: "#f6d880",
            //borderColor: "rgba(255,99,132,1)",
            // borderWidth: 1,
            //stack: 1,
            //hoverBackgroundColor: "rgba(255,99,132,0.4)",
            //hoverBorderColor: "rgba(255,99,132,1)",
            data: [55, 39, 70, 61, 26, 75],
          },
          {
            label: "Listening",
            backgroundColor: "#ebd295",
            // borderColor: "rgba(255,99,132,1)",
            // borderWidth: 1,
            //stack: 1,
            //hoverBackgroundColor: "rgba(255,99,132,0.4)",
            // hoverBorderColor: "rgba(255,99,132,1)",
            data: [23, 73, 60, 31, 16, 10],
          },
          {
            label: "Reading",
            backgroundColor: "#a68fdd",
            //borderColor: "rgba(255,99,132,1)",
            // borderWidth: 1,
            //stack: 1,
            //hoverBackgroundColor: "rgba(255,99,132,0.4)",
            //hoverBorderColor: "rgba(255,99,132,1)",
            data: [45, 79, 50, 41, 16, 85],
          },
        ],
      },
    };
  }

  render() {
    // const legendMarginRight = {
    //   id: "legendMarginRight",
    //   afterInit(chart, args, options) {
    //     console.log(chart.legend.fit);
    //     const fitValue = chart.legend.fit;
    //     chart.legend.fit = function fit() {
    //       fitValue.bind(chart.legend)();
    //       let width = (this.width = 100);
    //       return width;
    //     };
    //   },
    // };
    const options = {
      maintainAspectRatio: false,
      legend: {
        display: true,
        position: "right",
      },

      type: "bar",
      barThickness: 5,
      //plugins: [legendMarginRight],
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
