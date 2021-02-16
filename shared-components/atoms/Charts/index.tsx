import React, { useEffect, useRef } from "react";
import Chartjs from "chart.js";

interface Chart {
  type: ["line", "bar", "pie"];
  data: {
    title: string;
    labels: [];
    datasets: [
      {
        label: string;
        data: [];
      }
    ];
  };
}

export const Chart = ({ type, data }) => {
  const configChart = {
    type,
    data,
  };

  const containerRef = useRef();

  useEffect(() => {
    if (containerRef && containerRef.current) {
      // @ts-ignore
      const newChartInstance = new Chartjs(containerRef.current, configChart);
    }
  }, [configChart]);
  if (!data || !type) {
    return <div>Missing Data</div>;
  }
  return (
    <>
      <h2>{data.title}</h2>
      <canvas ref={containerRef} />
    </>
  );
};
