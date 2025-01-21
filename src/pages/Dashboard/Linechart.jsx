import React, { useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, plugins, scales} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, scales, plugins)



const Linechart = () => {

  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
    datasets: [{
        data: [6, 6, 7, 7, 8, 8, 9],
        backgroundColor: 'transparent',
        borderColor: '#da4212',
        pointBorderColor: '#000080',
        pointBorderWidth: 4,
        tension: 0.5
    }]
  };
  const options = {
    plugins: {
        legend: false
    },
    scales: {
        x: {
            grid: {
                display:false
            }
        },
        y: {
            min: 5,
            max: 9,
            ticks: {
                stepSize: 12,
                callback: (value) => + 'k'
            },
            grid: {
                borderDash:[14]
            }
        },
    }
  };

  return (
    <div className='p-2 flex items-center h-60'>
      <Line data={data} options={options} ></Line>
    </div>
  )
}

export default Linechart