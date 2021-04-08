import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";

const StyledLineGraph = styled.div`
  & {
    height: 400px;
    border: 2px solid black; 
  }





`;

const LineGraph = () => {
  return (
    <StyledLineGraph>
      <Line className="graph"
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 2,
            },
          ],
        }}
        height="110px"
        options={{
            maintainAspectRatio: false, 
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true, 
                }
              }]
            },
            legend: {
              labels: {
                defaultFontFamily: "'Cairo', sans-serif"
              }
            }
        }}
      />
    </StyledLineGraph>
  );
};

export default LineGraph;
