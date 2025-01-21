import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, plugins, scales} from 'chart.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, scales, plugins)


const Bchange = () => {
    const data = {
        labels: ["$231", "$5433", "$23.3", "$304.3", "$21",],
        datasets: [{
            data: [8, 6, 8, 6,  8],
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
    <div className='p-3 lg:-mt-4 md:-mt-4 mt-24 w-full'>
      <Line data={data} options={options} ></Line>
    </div>
  )
}

export default Bchange;