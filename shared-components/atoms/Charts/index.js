import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Chartjs from 'chart.js';

export const Chart = ({ type, data }) => {
  const configChart = {
    type,
    data,
  };

  const containerRef = useRef();

  useEffect(() => {
    if (containerRef && containerRef.current) {
      const newChartInstance = new Chartjs(containerRef.current, configChart);
    }
  }, [configChart]);
  if (!data || !type) {
    return <div>Missing Data</div>;
  }
  return (
    <div style={{ width: '60%' }}>
      <h2>{data.title}</h2>
      <canvas ref={containerRef} />
    </div>
  );
};

Chart.propTypes = {
  type: PropTypes.oneOf(['line', 'bar', 'pie']),
  data: PropTypes.shape({
    title: PropTypes.string,
    labels: PropTypes.array,
    datasets: PropTypes.arrayOf({
      label: PropTypes.string,
      data: PropTypes.array,
    }),
  }),
};
