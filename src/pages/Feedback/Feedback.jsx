import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaStar } from 'react-icons/fa'
import Scroll from './Scroll'

//aos
import AOS from "aos";
import "aos/dist/aos.css";

const Feedback = () => {
  useEffect(() => {
    AOS.init({duration:1200})
 })

  return (
    <div className='w-[100%] h-full dark:bg-black'>
      {/* Header */}
      <div className='flex items-center mb-2 gap-2 p-2'>
         {/* for large screen */}
         <Link to={"/dashboard"} className='lg:flex md:flex hidden'>
         <button className='p-2 rounded-lg text-Darkblue hover:bg-gray outline-none dark:text-orange hover:text-black'><FaChevronLeft size={30}/></button>
        </Link>
        {/* for small screen */}
        <Link to={"/settings"} className='lg:hidden md:hidden flex'>
         <button className='p-2 rounded-lg text-Darkblue hover:bg-gray outline-none dark:text-orange hover:text-black'><FaChevronLeft size={30}/></button>
        </Link>
        <div className='flex w-full'><h1 className='lg:text-3xl md:text-3xl text-2xl text-Darkblue font-bold dark:text-orange text-center'>Feedback</h1></div> 
      </div>
      {/* Header */}

      <div data-aos="slide-left" className='w-full lg:h-[88.8vh] md:h-[93.5vh] h-[90.5vh] overflow-y-scroll'>

       {/* 1st */}
       <div className=' w-full p-4'>
         <div className='lg:flex md:flex block justify-between gap-2 w-full h-[45vh]'>

          <div className='lg:w-[40%] md:w-[40%] w-full p-5'>
            {/* rate 1 */}
             <div className='w-full flex items-center gap-2  mb-8 '>
             <div className='grid grid-cols-3 gap-2'>
               <p className='font-semibold text-xl dark:text-gray'>5</p>
               <FaStar size={20} className='text-orange'/>
             </div>
             {/* slider */}
             <div className='w-full dark:bg-Darksky dark:bg-opacity-30 h-4 bg-gray rounded-lg'>
               <div className='w-[40%] h-4 dark:bg-gray bg-orange rounded-lg'>
               </div>
             </div>
             {/* slider */}
             <p className='font-semibold text-xl dark:text-gray'>989</p>
             </div>
            {/* rate 2 */}
             <div className='w-full flex items-center gap-2 mb-8 '>
             <div className='grid grid-cols-3 gap-2'>
               <p className='font-semibold text-xl dark:text-gray'>4</p>
               <FaStar size={20} className='text-orange'/>
             </div>
             {/* slider */}
             <div className='w-full dark:bg-Darksky dark:bg-opacity-30 h-4 bg-gray rounded-lg'>
               <div className='w-[60%] h-4  dark:bg-gray bg-orange rounded-lg'>
               </div>
             </div>
             {/* slider */}
             <p className='font-semibold text-xl dark:text-gray'>4.5k</p>
             </div>
             {/* rate 3 */}
             <div className='w-full flex items-center gap-2 mb-8 '>
             <div className='grid grid-cols-3 gap-2'>
               <p className='font-semibold text-xl dark:text-gray'>3</p>
               <FaStar size={20} className='text-orange'/>
             </div>
             {/* slider */}
             <div className='w-full dark:bg-Darksky dark:bg-opacity-30 h-4 bg-gray rounded-lg'>
               <div className='w-[20%] h-4  dark:bg-gray bg-orange rounded-lg'>
               </div>
             </div>
             {/* slider */}
             <p className='font-semibold text-xl dark:text-gray'>50</p>
             </div>
             {/* rate 4 */}
             <div className='w-full flex items-center gap-2 mb-8 '>
             <div className='grid grid-cols-3 gap-2'>
               <p className='font-semibold text-xl dark:text-gray'>2</p>
               <FaStar size={20} className='text-orange'/>
             </div>
             {/* slider */}
             <div className='w-full dark:bg-Darksky dark:bg-opacity-30 h-4 bg-gray rounded-lg'>
               <div className='w-[15%] h-4  dark:bg-gray bg-orange rounded-lg'>
               </div>
             </div>
             {/* slider */}
             <p className='font-semibold text-xl dark:text-gray'>16</p>
             </div>
              {/* rate 4 */}
              <div className='w-full flex items-center gap-2'>
               <div className='grid grid-cols-3 gap-2'>
                 <p className='font-semibold text-xl dark:text-gray'>1</p>
                 <FaStar size={20} className='text-orange'/>
               </div>
              {/* slider */}
               <div className='w-full dark:bg-Darksky dark:bg-opacity-30 h-4 bg-gray rounded-lg'>
                <div className='w-[10%] h-4  dark:bg-gray bg-orange rounded-lg'>
                </div>
               </div>
             {/* slider */}
               <p className='font-semibold text-xl dark:text-gray'>8</p>
              </div>
          </div>

          {/* in the mid */}


          <div className='lg:w-[65%] md:w-[65%] w-full h-[45vh] lg:p-8 md:p-8 p-0'>
            <h1 className='lg:text-3xl md:text-3xl text-2xl dark:text-orange font-semibold p-2'>Customer Ratings & Feedback</h1>
            <p className='p-2 mb-8 dark:text-gray'>
              One of the standout features of pagedone is its intuitive  and user friendly interface.
              Navigating through the system feels natural, and the layout make it easy to locate and utilize 
              various design element. This is particular beneficial for designers looking to streamline their workflow.
            </p>
            {/* buttons */}

            <div className='grid grid-cols-2 gap-5 p-2'>
              <button className='w-full lg:p-3 md:p-3 lg:text-sm md:text-sm text-xs p-2 font-semibold bg-whitesmoke hover:text-gray hover:bg-Darksky rounded-3xl'>Leave Us Feedback</button>
              <button className='w-full lg:p-3 lg:text-sm md:text-sm text-xs md:p-3 p-3 font-semibold bg-whitesmoke hover:text-gray hover:bg-Darksky rounded-3xl'>Read Feedbacks</button>
            </div>
          </div>
         </div>
       </div>

      {/* 2nd */}
      <div className='flex justify-center w-full lg:h-[70vh] md:h-[60vh] h-[60vh] lg:p-2 md:p-2 p-0 lg:mt-0 md:mt-0 mt-[22rem] '>
         <div className='w-[95%] lg:h-[64vh] md:h-[40vh] h-[47vh] bg-whitesmoke dark:bg-Darksky rounded-2xl dark:bg-opacity-30 o p-2'>
           <div className='flex justify-between items-center'>
            <h1 className='lg:text-3xl md:text-3xl text-xs text-Darkblue dark:text-orange font-semibold p-2'>Recent Feedback</h1>

            <div className='flex items-center gap-2 p-2'>
              <p className='font-semibold lg:text-lg md:text-lg text-xs  dark:text-gray'>Sort By:</p>
              <select className='font-semibold lg:text-lg md:text-lg text-xs dark:text-gray dark:bg-Darksky rounded-xl p-2 outline-none bg-none border-none'>
                <option className='dark:bg-Darkblue'>5 Star Ratings</option>
                <option className='dark:bg-Darkblue'>2 Star Ratings</option>
              </select>
            </div>
           </div>
           {/* scroll */}
           <div className='overflow-y-scroll'>
            <Scroll/>
           </div>
         </div>
      </div>
      </div>
    </div>
  )
}

export default Feedback