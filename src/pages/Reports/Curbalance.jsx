import React, { useEffect } from 'react'
import CountUp from 'react-countup'
import { FaArrowCircleRight } from 'react-icons/fa'



const Curbalance = () => {
 
  return (
    <div className='p-4'>
      <h1 className='dark:text-gray mb-1 font-semibold'>Current Balance</h1>
         <div className='flex justify-between'>
        <div className='font-bold flex items-center gap-2  text-xl dark:text-gray'>$<CountUp start={0} end={39255676} delay={2}  className='dark:opacity-45'/></div>
        <div className='text-3xl cursor-pointer'><FaArrowCircleRight color='green' className='-rotate-45'/></div>
        </div>
        <p className='text-xs font-bold text-olivedrab mb-2 animate-pulse' >+ 2.7% <span className='text-gray'>Than Last Week</span></p>

        {/* Chart */}
        <div  className='flex gap-4'>
             <div className='space-y-4'>
                <p className='font-semibold text-sm dark:text-gray opacity-30'>80</p>
                <p className='font-semibold text-sm dark:text-gray opacity-30'>50</p>
                <p className='font-semibold text-sm dark:text-gray opacity-30'>30</p>
                <p className='font-semibold text-sm dark:text-gray opacity-30'>10</p>
                <p className='font-semibold text-sm dark:text-gray opacity-30'>0</p>
            </div>
            {/* Drawing chart */}
            <div className='w-full flex'>
              {/* 1 */}
              <div  className='w-56'>
                <div className='w-[30%] mt-4 relative z-20 hover:scale-95 h-[10vh] bg-olivedrab rounded-2xl'>
                  <button className='p-1 hover:scale-110 bg-opacity-70 opacity-0 hover:opacity-100 absolute -ml-10 border border-whitesmoke rounded-xl bg-olivedrab font-semibold text-whitesmoke'>$100.23</button>
                  <button className='p-1 hover:scale-110 top-20 bg-opacity-70 absolute opacity-0 hover:opacity-100 -ml-4 border border-whitesmoke rounded-xl bg-olivedrab font-semibold text-whitesmoke'>$90.03</button>
                </div>
                <div className='bg-gray w-[7%] h-[12vh] dark:bg-opacity-35 relative -top-4 left-[6px]'></div>
              </div>
              {/* 2 */}
              <div className='w-56 relative top-4'>
                <div className='w-[30%] top-8 relative z-20 hover:scale-95 h-[10vh] bg-olivedrab rounded-2xl'>
                <button className='p-1 hover:scale-110 bg-opacity-70 opacity-0 hover:opacity-100 absolute -ml-8 border border-whitesmoke rounded-xl bg-olivedrab font-semibold text-whitesmoke'>$140.23</button>
                </div>
                <div className='bg-gray w-[6%] dark:bg-opacity-35 h-[12vh] relative -top-4 left-[6px]'></div>
              </div>
              {/* 3 */}
              <div  className='w-56'>
                <div className='w-[30%] mt-5 relative z-20 hover:scale-95 h-[16vh] bg-olivedrab rounded-2xl'>
                <button className='p-1 hover:scale-110 bg-opacity-70 opacity-0 hover:opacity-100 absolute -ml-10 border border-whitesmoke rounded-xl bg-olivedrab font-semibold text-whitesmoke'>$80.63</button>
                <button className='p-1 hover:scale-110 bg-opacity-70 opacity-0 top-16 hover:opacity-100 absolute -ml-2 border border-whitesmoke rounded-xl bg-olivedrab font-semibold text-whitesmoke'>$30.23</button>
                </div>
                <div className='bg-gray w-[6%] dark:bg-opacity-35 h-[10vh] relative -top-12 left-[6px]'></div>
              </div>
              {/* 4 */}
              <div  className='w-56'>
                <div className='w-[30%] top-7 relative z-20 hover:scale-95 h-[10vh] bg-olivedrab rounded-2xl'>
                <button className='p-1 hover:scale-110 bg-opacity-70 opacity-0 top-5 hover:opacity-100 absolute -ml-5 border border-whitesmoke rounded-xl bg-olivedrab font-semibold text-whitesmoke'>$200.13</button>
                </div>
                <div className='bg-gray dark:bg-opacity-35 w-[5%] h-[14vh] relative -top-4 left-[6px]'></div>
              </div>
              {/* 5 */}
              <div  className='w-56'>
                <div className='w-[30%] mt-4 relative z-20 hover:scale-95 h-[10vh] bg-olivedrab rounded-2xl'>
                <button className='p-1 hover:scale-110 bg-opacity-70 opacity-0 hover:opacity-100 absolute -ml-10 border border-whitesmoke rounded-xl bg-olivedrab font-semibold text-whitesmoke'>$120.24</button>
                <button className='p-1 hover:scale-110 bg-opacity-70 top-16 opacity-0 hover:opacity-100 absolute -ml-10 border border-whitesmoke rounded-xl bg-olivedrab font-semibold text-whitesmoke'>$43.24</button>
                </div>
                <div className='bg-gray w-[6%] dark:bg-opacity-35 h-[12vh] relative -top-4 left-[6px]'></div>
              </div>
            </div>
             {/* Drawing chart */}
        </div>
        <div className='flex justify-around -mt-6 ml-4'>
          <p className='text-gray font-semibold text-sm'>01</p>
          <p className='text-gray font-semibold text-sm'>02</p>
          <p className='text-gray font-semibold text-sm'>03</p>
          <p className='text-gray font-semibold text-sm'>04</p>
          <p className='text-gray font-semibold text-sm'>05</p>
        </div>
        {/* Chart */}
    </div>
  )
}

export default Curbalance