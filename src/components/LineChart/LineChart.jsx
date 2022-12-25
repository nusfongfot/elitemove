/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
/* eslint-disable react/prop-types */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './linechart.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function LineChart({ active, linear }) {
  const handleOnChaneLabal = (props) => {
    if (props === 'week') {
      return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    } else if (props === 'month') {
      return [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        26, 27, 28, 29, 30, 31,
      ];
    } else if (props === 'year') {
      return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    }
  };
  const handleOnChaneData = (props) => {
    if (props === 'week') {
      return linear;
    } else if (props === 'month') {
      return linear;
    } else if (props === 'year') {
      return linear;
    }
  };
  ChartJS.defaults.color = 'white';
  ChartJS.defaults.font.size = 14;
  const options = {
    // scales: {
    //   y: {
    //     ticks: {
    //       // Include a dollar sign in the ticks
    //       callback(value, index, ticks) {
    //         return `$${value}`;
    //       },
    //     },
    //   },
    // },
    layout: {
      padding: {
        left: 25,
        right: 30,
        top: 10,
        bottom: 10,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };
  // const hours = [2, 1, 1, 3, 5, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const data = {
    labels: handleOnChaneLabal(active),
    datasets: [
      {
        label: 'Minuet',
        data: handleOnChaneData(active),
        borderColor: 'rgb(255, 237, 99)',
        backgroundColor: 'rgb(255, 237, 99)',
      },
    ],
  };
  return <Line options={options} data={data} />;
}

export default LineChart;
