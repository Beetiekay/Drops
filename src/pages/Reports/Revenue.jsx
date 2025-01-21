import React, { useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, plugins, scales} from 'chart.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, scales, plugins)

//aos
import AOS from "aos";
import "aos/dist/aos.css"

const Revenue = () => {
    useEffect(() => {
        AOS.init({duration:1200})
     }) 

    const data = {
        labels: ["S $231", "M $5433", "T $23.3", "W $304.3", "T $21", "F $12", "S $32.6"],
        datasets: [{
            data: [6, 8, 7, 9, 8, 7, 8],
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
    <div data-aos="zoom-out" className='p-3 lg:-mt-4 md:-mt-4 mt-24 w-full'>
      <Line data={data} options={options} ></Line>
    </div>
  )
}

export default Revenue