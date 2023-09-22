import React from "react";
import { RadialBarChart, RadialBar, Legend, BarChart, Bar } from "recharts";
import "./Progress.css";

export default function Progress() {
  return (
    <>
      <div className="container">
        <RadialChart />
        <BarGraph />
      </div>
    </>
  );
}

function RadialChart() {
  const data = [
    {
      name: "Focus attention",
      uv: 31.47,
      pv: 2400,
      fill: "#0DB9A4",
    },
    {
      name: "Memory",
      uv: 26.69,
      pv: 4567,
      fill: "#FD635E",
    },
    {
      name: "Hearing",
      uv: 15.69,
      pv: 1398,
      fill: "#FA8A53",
    },
    {
      name: "Speech",
      uv: 8.22,
      pv: 9800,
      fill: "#FAB54D",
    },
    {
      name: "Hearing",
      uv: 8.63,
      pv: 3908,
      fill: "#3CB2E9",
    },
    {
      name: "Memory",
      uv: 2.63,
      pv: 4800,
      fill: "#AECF51",
    },
    {
      name: "unknow",
      uv: 6.67,
      pv: 4800,
      fill: "#0DB9A4",
    },
  ];
  const style = {
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
    lineHeight: "24px",
  };
  return (
    <div>
      <RadialBarChart
        width={500}
        height={300}
        cx={150}
        cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={10}
        data={data}
      >
        <RadialBar
          minAngle={15}
          label={{ position: "insideStart", fill: "#fff" }}
          background
          clockWise
          dataKey="uv"
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </div>
  );
}

function BarGraph() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div>
      <BarChart width={450} height={350} data={data}>
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>
    </div>
  );
}
