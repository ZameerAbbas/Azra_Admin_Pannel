  // import React from 'react';
  // import { Line } from 'react-chartjs-2';

  // const RevenueChart = () => {
  //   const data = {
  //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  //     datasets: [
  //       {
  //         label: 'Previous Week',
  //         data: [23, 23, 15, 30, 19, 18, 30, 23, 23, 15, 30, 19],
  //         fill: true,
  //         backgroundColor: 'rgba(250, 227, 232, 0.5)',
  //         borderColor: 'rgba(255, 99, 132, 1)',
  //         borderWidth: 1,
  //         tension: 0.4,
  //       },
  //     ],
  //   };
  //   const options = {
  //     plugins: {
  //       legend: {
  //         display: false,
  //       },
  //     },
  //     scales: {
  //       x: {
  //         type: 'category', // Change type to 'time'
  //         time: {
  //           unit: 'month', // Adjust the time unit as needed
  //         },
  //         grid: {
  //           display: true,
  //         },
  //       },
  //       y: {
  //         type: 'category', // Change type to 'linear'
  //         min: 0,
  //         max: 50,
  //         ticks: {
  //           stepSize: 10,
  //           callback: (value) => (value === 0 ? '' : value + 'k'),
  //         },
  //         grid: {
  //           borderDash: [5],
  //         },
  //       },
  //     },
  //   };
  //   return <Line data={data} options={options} />;
  // };

  // export default RevenueChart;
  import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const RevenueChart = () => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy existing chart instance
    }

    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');

      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Previous Week',
              data: [23, 23, 15, 30, 19, 18, 30, 23, 23, 15, 30, 19],
              fill: true,
              backgroundColor: 'rgba(250, 201, 201, 0.1)',
              borderColor: 'rgba(182, 117, 113, 1)',
              borderWidth: 1,
              tension: 0.4,
            },
          ],
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                
              },
            },
            y: {
              title: {
                display: true,
                
              },
              min:0,
              max:50,
              ticks: {
                stepSize: 10,
                callback: (value) => (value === 0 ? '' : value + 'k'),
              },
            },
          },
        },
      });
    }
  }, []);

  return <canvas ref={chartContainer} />;
};

export default RevenueChart;
