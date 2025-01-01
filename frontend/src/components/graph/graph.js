import React from 'react'
import revenueData from "./revenueDatae.json";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Card } from '@mui/material';

function Graph() {
  return (
    <div>
        <Card  className="dataCard revenueCard">
        <Line
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "RBC",
                data: revenueData.map((data) => data.RBC),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
              {
                label: "WBC",
                data: revenueData.map((data) => data.WBC),
                backgroundColor: "#FF3030",
                borderColor: "#FF3030",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Monthly Revenue & Cost",
              },
            },
          }}
        />
      </Card>

    </div>
  )
}

export default Graph