import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, BarController, BarElement, PieController,} from 'chart.js';
import 'chartjs-plugin-datalabels';

export const StatisticsChart1 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    Chart.register(CategoryScale, LinearScale, BarController, BarElement);

    const ctx = chartRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Breast', 'Lung', 'Colorectal', 'Prostate', 'Skin', 'Gastric', 'Bladder'],
        datasets: [
          {
            label: 'Data',
            data: [100, 98, 94, 85, 75, 70, 65],
            backgroundColor: ['rgba(85, 44, 179, 1)', 'rgba(85, 44, 179, 0.9)', 'rgba(85, 44, 179, 0.8)', 'rgba(85, 44, 179, 0.7)', 'rgba(85, 44, 179, 0.6)', 'rgba(85, 44, 179, 0.5)', 'rgba(85, 44, 179, 0.4)', 'rgba(85, 44, 179, 0.3)'],
          },
        ],
      },
      options: {
        indexAxis: 'y',
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
          datalabels: {
            anchor: 'end',
            align: 'end',
            offset: 0,
            color: 'black',
            font: {
              size: 12,
            },
            formatter: function(value, context) {
              return value; // Display the value of each bar as the label
            },
          },
        },
        scales: {
          x: {
            display: false, // Hide x-axis
          },
          y: {
            display: true, // Hide y-axis
            ticks: {
              font: {
                size: 20, // Adjust the font size of the y-axis labels
              },
            },
          },
        },
        layout: {
          padding: 12, // Remove padding
        },
        responsive: true,
        maintainAspectRatio: false,
        barPercentage: 1, // Set the width of each bar as a percentage of available space
        categoryPercentage: 1, // Set the width of each category as a percentage of available space
      },
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} style={{ maxWidth: '470px', maxHeight: '220px', width: '100%', height: '100%' }}/>;
};