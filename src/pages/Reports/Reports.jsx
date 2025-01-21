import React from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import { GrStatusGood } from "react-icons/gr"
import { FaArrowCircleRight, FaEllipsisH, FaEllipsisV } from 'react-icons/fa'
import Revenue from './Revenue'
import CountUp from 'react-countup'
import Withdraw from './Withdraw'
import Curbalance from './Curbalance'
import Order from './Order'
import Piechart from './Piechart'
import { Link } from 'react-router-dom'
import { MdDashboard } from "react-icons/md"
import Bottons from '../../components/Sidebar/Bottons'
import Pageloader from '../../components/Pagesloader/Pageloader'


const Reports = () => {
  return (
    <div className='w-[100%] dark:bg-black lg:flex md:flex block'>
         <Sidebar/>
        <div className='w-full lg:h-fit md:h-fit md:w-fit h-[86.8vh] overflow-hidden p-2'>
          {/* Header */}
            <Header/>
           {/* Header */}
            <div className='lg:h-[88.9vh] md:h-[88.9vh] overflow-y-scroll h-[89vh] p-4'>

           {/* Tab Navlinks */}
            <div className='absolute top-5 left-[32rem] lg:hidden md:block hidden z-10'>
            <input type='checkbox' className='w-12 z-10 peer transition-all h-8 absolute opacity-0 cursor-pointer'/>
            <div className='peer-checked:scale-x-110 duration-300 transition-transform'><MdDashboard size={40} className='dark:text-gray dark:bg-opacity-40'/></div>

            <div className='w-52 mt-2 h-0 peer-checked:h-fit overflow-hidden'>
              <ul className='bg-black border-2 border-orange text-gray p-2 rounded-lg transition-transform duration-500'>
                <Link to={"/dashboard"} className='dark:text-whitesmoke font-semibold text-xl'><li>Dashboard</li></Link>
                <Link to={"/reports"} className='dark:text-whitesmoke font-semibold text-xl'><li>Statistic</li></Link>
                 <Link to={"/chats"} className='dark:text-whitesmoke font-semibold text-xl'><li>Message</li></Link>
               <Link to={"/wallet"} className='dark:text-whitesmoke font-semibold text-xl'><li>Wallet</li></Link>
             </ul>
             </div>
            </div>
           {/* Tab Navlinks */}

             
             {/* pageloader */}
             <div className='z-0'><Pageloader/></div>
            {/* pageloader */}


              {/* Top Box */}
              <div className='w-full grid lg:grid-cols-2 md:grid-cols-1 gap-8 mb-4'>
                <div className='w-full bg-whitesmoke overflow-hidden dark:bg-Darkblue dark:bg-opacity-35 h-[45vh] shadow-md rounded-2xl'>
                  <div className='p-4 flex justify-between'>
                    <h1 className='font-semibold lg:text-xl md:text-xl text-sm dark:text-gray'>Total Revenue</h1>

                     <div className='flex justify-between gap-5'>
                      <div className='flex items-center font-semibold gap-1 text-Darksky dark:text-gray'><input type='radio' className='w-4 h-4 dark:text-orange text-Darksky bg-Darksky'/> <p>Monthly</p></div>
                      <div className='flex items-center font-semibold gap-1 dark:text-gray text-Darksky'><GrStatusGood size={20} className='text-Darksky dark:text-orange'/> <p>Weekly</p></div>
                      <button className='p-1  text-orange rounded-sm  w-8 flex justify-center items-center'><FaEllipsisH/></button>
                    </div>
                  </div>
                  
                  <div className='lg:flex md:flex block justify-between'>
                   <div className='flex items-center gap-3 px-4 lg:mb-0 md:mb-0 mb-2'>
                    <div className='dark:text-orange text-3xl text-Darksky -rotate-45'><FaArrowCircleRight/></div>
                     <div className='font-semibold flex items-center gap-1  text-2xl dark:text-gray'>$<CountUp start={0} end={56398274} delay={1} className='dark:opacity-45'/></div>
                  </div>
                  <p className='text-xs font-bold text-olivedrab mb-2 relative lg:-left-5 md:-left-5 left-5 animate-pulse' >+ 0.6% <span className='text-gray'>Than Last Week</span></p>
                  </div>

                  <div className='w-full'><Revenue/></div>
                </div>

                <div className='w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 h-[45vh]'>
                  <div className='w-full h-[45vh] dark:bg-Darkblue dark:bg-opacity-35 bg-whitesmoke shadow-md rounded-2xl'><Withdraw/></div>
                  <div className='w-full h-[45vh] dark:bg-Darkblue dark:bg-opacity-35 bg-whitesmoke shadow-md rounded-2xl'><Curbalance/></div>
                </div>
              </div>
              {/* Top Box */}

              {/* Box button */}
              <div className='w-full grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-8 lg:mt-0 md:mt-0 mt-[23.5rem]'>
              <div className='w-full bg-whitesmoke overflow-hidden dark:bg-Darkblue dark:bg-opacity-35 h-[45vh] shadow-md rounded-2xl'>
                <div className='p-4 flex justify-between'>
                  <p className='font-semibold dark:text-gray text-xl'>Orders Chart</p>
                  <div className='text-orange dark:text-gray'><FaEllipsisV/></div>
                </div>
                {/* Chart Design */}
                <div className='overflow-x-scroll'>
                  <Order/>
                </div>
                {/* Chart Design */}
              </div>
              {/* Betwen two */}
              <div className='w-full  bg-whitesmoke overflow-hidden dark:bg-Darkblue dark:bg-opacity-35 h-[45vh] shadow-md rounded-2xl'>
                <div className='flex justify-between p-4'>
                  <p className='font-semibold dark:text-gray text-xl'>Pie Chart</p>
                  <div className='text-orange dark:text-gray'><FaEllipsisV/></div>
                </div>
                {/* Chart Design */}
                <div className='lg:overflow-hidden md:overflow-hidden overflow-x-auto'>
                  <Piechart/>
                </div>
                {/* Chart Design */}
              </div>
              </div>
              {/* Box button */}
              
           </div>
        </div>
            <div className='p-2 lg:hidden mt-2 md:hidden flex'>
                <Bottons/>
            </div>
      </div>
  )
}

export default Reports