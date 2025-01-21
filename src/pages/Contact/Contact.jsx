import React, { useEffect } from 'react'
import { FaChevronLeft, FaPhone, FaSearchLocation } from 'react-icons/fa'
import {FiMessageCircle} from "react-icons/fi"
import { Link } from 'react-router-dom'

//aos
import AOS from "aos";
import "aos/dist/aos.css";
import Pageloader from '../../components/Pagesloader/Pageloader';


const Contact = () => {
  useEffect(() => {
    AOS.init({duration:1200})
 })
  return (
    <div className='w-full h-[100vh] p-2 dark:bg-black overflow-hidden'>
      <div className='flex items-center mb-2'>
         {/* for large screen */}
         <Link to={"/dashboard"} className='lg:flex md:flex hidden'>
         <button className='p-2 rounded-lg text-Darkblue hover:bg-gray outline-none dark:text-orange hover:text-black'><FaChevronLeft size={30}/></button>
        </Link>
        {/* for small screen */}
        <Link to={"/settings"} className='lg:hidden md:hidden flex'>
         <button className='p-2 rounded-lg text-Darkblue hover:bg-gray outline-none dark:text-orange hover:text-black'><FaChevronLeft size={30}/></button>
        </Link>
        <div className='flex justify-center w-full'><h1 className='lg:text-4xl md:text-4xl text-2xl text-Darksky font-bold dark:text-orange text-center'>Get In Touch</h1></div>
      </div>
      {/* paraghrap */}

      {/* pageloader */}
      <div className='z-0'><Pageloader/></div>
      {/* pageloader */}
       <div className='w-full lg:h-fit md:h-fit lg:overflow-visible md:overflow-visible overflow-y-auto h-[92vh]'>
        <div className='flex justify-center lg:p-4 md:p-4 p-1 lg:mt-0 md:mt-0 mt-4'>
        <p className='lg:w-[60%] md:w-[60%] w-[100%] lg:text-lg md:text-lg text-sm font-semibold text-center text-gray'>We'll create high-quality linkable content and build at least 40 high-authority links to each
          asset, paving the way for you to grow your rankings. improve brand.
        </p>
       </div>
      {/* Forms section */}
      <div data-aos="slide-right" className='flex h-[75vh] justify-center items-center'>
        <div className='lg:flex md:flex block justify-between lg:w-[75%] md:w-[75%] w-full h-[60vh] dark:bg-Darksky dark:bg-opacity-40 bg-whitesmoke rounded-xl p-4'>
          {/* Contact info */}
          <div className='lg:w-[35%] md:w-[50%] w-full h-[55vh] lg:mb-0 md:mb-0 mb-10 lg:bg-Darksky md:bg-Darksky bg-none p-5 rounded-lg'>
            <h1 className='lg:text-3xl md:text-2xl text-3xl font-semibold text-gray mb-5'>Contact Information</h1>
            <p className='w-[80%] text-sm font-semibold text-start mb-2 text-gray'>
             We'll create high-quality linkable content and build at least 40 high-authority.
            </p>

            {/* contacts */}
            <div className='space-y-2 mt-4 relative'>
              <div className='p-2 flex items-center gap-4'>
                <FaPhone size={25} className='text-gray'/>
                 <div className='text-gray'>
                   <p>*081433174</p>
                   <p>*09025791853</p>
                 </div>
              </div>

              <div className='p-2 flex items-center gap-4'>
                <FiMessageCircle size={25} className='text-gray'/>
                 <div className='text-gray'>
                   <p>bastukur1997@gmail.com</p>
                 </div>
              </div>
                {/* deco */}
                <div className='absolute lg:flex md:hidden flex top-0 right-0 lg:w-72 md:w-72 w-32 animate-pulse rotate-45 lg:h-32 md:h-32 h-44 bg-gray opacity-20 rounded-full'></div>
               {/* deco */}
              <div className='p-2 flex items-center gap-4'>
                <FaSearchLocation size={25} className='text-gray'/>
                 <div className='text-gray'>
                   <p>Katsina State</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Contact info forms*/}
           <div className='lg:w-[63%] md:w-[63%] w-full lg:h-[55vh] md:h-[55] h-[40vh] lg:p-5 md:p-5 p-0 rounded-lg'>
            <form action=''>
              <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mb-5'>
                 <input type='name' name='name' placeholder=' Your Name' className='w-full dark:bg-Darksky dark:bg-opacity-0 dark:border-orange dark:text-orange bg-whitesmoke border-b-2 outline-none'/>
                 <input type='email' name='email' placeholder='Your Email' className='w-full dark:bg-Darksky dark:bg-opacity-0 dark:border-orange dark:text-orange bg-whitesmoke border-b-2 outline-none'/>
              </div>
              <input type='text' name='text' placeholder='Your Subject' className='w-full  mb-5 dark:bg-Darksky dark:bg-opacity-0 dark:border-orange dark:text-orange bg-whitesmoke border-b-2 outline-none'/>

              <textarea  name='email' placeholder='Your Email'  className='w-full lg:h-[28vh] md:h-[30vh] mb-4 dark:bg-Darksky dark:bg-opacity-0 dark:border-orange dark:text-orange bg-whitesmoke border-b-2 outline-none'/>

              <button type='submit' className='p-2 rounded-lg bg-Darksky font-semibold text-whitesmoke focus:opacity-20 dark:bg-whitesmoke dark:text-orange'>Send Messages</button>
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact