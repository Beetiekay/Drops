import React, { useEffect } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import CountUp from 'react-countup'

//aos
import AOS from "aos";
import "aos/dist/aos.css"

const Withdraw = () => {
  useEffect(() => {
    AOS.init({duration:1200})
 }) 
  return (
    <div className='p-4'>
        <h1 className='dark:text-gray mb-1 font-semibold'>Withdrawn</h1>
        <div className='flex justify-between'>
        <div className='font-bold flex items-center gap-2  text-xl dark:text-gray'>$<CountUp start={0} end={45673} delay={1} className='dark:opacity-45'/></div>
        <div className='text-3xl cursor-pointer text-orange '><FaArrowCircleLeft className='-rotate-45'/></div>
        </div>
        <p className='text-xs font-bold animate-pulse text-orange mb-2' >- 1.6% <span className='text-gray'>Than Last Week</span></p>

        <div className='flex w-full'>

             <div className='space-y-4 mt-2'>
                <p className='font-semibold text-sm dark:text-gray opacity-30'>80</p>
                <p className='font-semibold text-sm dark:text-gray opacity-30'>50</p>
                <p className='font-semibold text-sm dark:text-gray opacity-30'>30</p>
                <p className='font-semibold text-sm dark:text-gray opacity-30'>10</p>
                <p className='font-semibold text-sm dark:text-gray opacity-30'>0</p>
            </div>
           {/* bar chart */}
            <div className='w-full flex gap-4 mt-5 ml-5 items-center'>

              <div data-aos="zoom-in" className='w-full flex gap-2'>
                <div className='w-[15%] h-[17vh] relative top-6 dark:bg-gray bg-Darksky rounded-t-2xl'>
                <button className='p-1 hover:scale-110 bg-opacity-70 opacity-0 hover:opacity-100 absolute -ml-10 border border-gray rounded-xl bg-orange font-semibold text-whitesmoke'>-$20.23</button>
                <button className='p-1 hover:scale-110 bg-opacity-70 top-20 opacity-0 hover:opacity-100 absolute -ml-3 border border-gray rounded-xl bg-orange font-semibold text-whitesmoke'>-$20.23</button>
                </div>
                <div className='w-[15%] h-[21vh] bg-orange rounded-t-2xl'></div>
              </div>

              <div data-aos="zoom-in" className='w-full flex gap-2 mt-12'>
                <div className='w-[15%] h-[8vh] relative top-6 dark:bg-gray bg-Darksky rounded-t-2xl'>
                <button className='p-1 hover:scale-110 bg-opacity-70 opacity-0 hover:opacity-100 absolute -ml-3 border border-gray rounded-xl bg-orange font-semibold text-whitesmoke'>-$05.23</button>
                </div>
                <div className='w-[15%] h-[12vh] bg-orange rounded-t-2xl'></div>
              </div>

              <div data-aos="zoom-in" className='w-full flex gap-2 mt-2'>
                <div className='w-[15%] h-[15vh] relative top-6 dark:bg-gray bg-Darksky rounded-t-2xl'>
                <button className='p-1 hover:scale-110 bg-opacity-70 opacity-0 hover:opacity-100 absolute -ml-1 border border-gray rounded-xl bg-orange font-semibold text-whitesmoke'>-$10.23</button>
                <button className='p-1 hover:scale-110 bg-opacity-70 top-20 opacity-0 hover:opacity-100 absolute -ml-3 border border-gray rounded-xl bg-orange font-semibold text-whitesmoke'>-$08.23</button>
                </div>
                <div className='w-[15%] h-[19vh] bg-orange rounded-t-2xl'></div>
              </div>

              <div className='w-full flex gap-2 mt-16'>
                <div className='w-[15%] h-[5vh] relative top-6 dark:bg-gray bg-Darksky rounded-t-2xl'>
                <button className='p-1 hover:scale-110 bg-opacity-70 opacity-0 hover:opacity-100 -top-6 absolute -ml-1 border border-gray rounded-xl bg-orange font-semibold text-whitesmoke'>-$12.23</button>
                </div>
                <div className='w-[15%] h-[9vh] bg-orange rounded-t-2xl'></div>
              </div>
            </div>
            {/* bar chart */}
        </div>
         <div className='flex justify-around -mt-2 dark:text-gray text-sm opacity-35'>
          <p>Saturday</p>
          <p>Monday</p>
          <p>Tuesday</p>
         </div>
    </div>
  )
}

export default Withdraw