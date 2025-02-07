import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = Array.from({ length: (2024 - 1980) / 2 + 1 }, (_, i) => {
  const year = 1980 + i * 2;
  return {
    name: year.toString(),
    notMitigated: Math.floor(1000 + i * 200 + Math.random() * 300), // Increasing trend
    mitigated: Math.floor(800 + i * 180 + Math.random() * 250), // Slightly lower but increasing
  };
});

class GraphComponent extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
            label={{
              value: "Number of SLRPs",
              angle: 90, // Rotating the label text
              position: "insideLeft", // Controls the position of the label
              dx: -10, // Adjust the horizontal offset if needed
              dy: -45, // Adjust the vertical offset if needed
            }}
          />
          <Tooltip />
          <Legend
            formatter={(value) => {
              if (value === "mitigated") return "Mitigated";
              if (value === "notMitigated") return "Not Mitigated";
              return value;
            }}
          />
          <Bar dataKey="mitigated" stackId="a" fill="#8884d8" />
          <Bar dataKey="notMitigated" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default GraphComponent;
