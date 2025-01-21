import React, { useEffect } from 'react'
import {FaChevronLeft} from "react-icons/fa"
import { Link } from 'react-router-dom'
import Block from './Block'

//aos
import AOS from "aos";
import "aos/dist/aos.css";

const Help = () => {
  useEffect(() => {
    AOS.init({duration:1200})
 })
  return (
    <div className='w-[100%] h-screen dark:text-whitesmoke dark:bg-black'>
      {/* Back button */}
      <div>
        {/* for large screen */}
        <Link to={"/dashboard"} className='lg:flex md:flex hidden'>
         <button className='p-2 rounded-lg text-Darkblue hover:bg-gray outline-none dark:text-orange hover:text-black'><FaChevronLeft size={30}/></button>
        </Link>
        {/* for small screen */}
        <Link to={"/settings"} className='lg:hidden md:hidden flex'>
         <button className='p-2 rounded-lg text-Darkblue hover:bg-gray outline-none dark:text-orange hover:text-black'><FaChevronLeft size={30}/></button>
        </Link>
      </div>
       {/* Back button */}

      
       <div data-aos="slide-up" className='w-full lg:h-[92vh] md:h-[92.7vh] h-[89.3vh] overflow-y-scroll'>
         <h1 className='lg:text-4xl md:text-4xl text-2xl font-semibold dark:text-orange text-center mb-5'>Help Center</h1>
          <div className=' flex justify-center mb-4'>
           <p className='lg:w-[40%] md:w-[60%] w-[90%] lg:text-sm md:text-sm text-xs text-center dark:text-gray'>Explore Our <span className='text-Darkblue'>SupportDropApp</span> For Answers to your quetions and assistance with
            your social media experience.</p>
         </div>
         <div><Block/></div>
       </div>
    </div>
  )
}

export default Help