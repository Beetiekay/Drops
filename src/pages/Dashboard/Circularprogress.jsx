import React, { useEffect } from 'react'
import CountUp from 'react-countup'

//aos
import AOS from "aos";
import "aos/dist/aos.css";

const Circularprogress = () => {
  useEffect(() => {
    AOS.init({duration:1500})
 }) 

  return (
    <div className='flex justify-center'>
        <div data-aos="zoom-up" className='bg-white dark:bg-Darksky border-r dark:border-orange lg:border-t md:border-t border-t-0 dark:bg-opacity-40 lg:w-[50%] md:w-[50%] w-[52%] h-[24vh] mt-2 flex justify-center items-center rounded-full shadow-md'>
            <div className='flex justify-center items-center bg-white dark:bg-Darksky lg:ml-0 md:ml-0 ml-5 dark:bg-opacity-40 shadow-sm lg:w-[55%] md:w-[55%] w-[57%] h-[13.6vh] shadow-Darksky dark:shadow-orange rounded-full'>
            <CountUp start={60} end={38} delay={1} className='font-semibold text-2xl text-Darksky dark:text-gray'/>
            <p className='font-semibold text-2xl text-Darksky dark:text-gray'>%</p>
            </div>
            <div className='w-4 h-4 dark:bg-orange bg-Darksky  rounded-full lg:absolute md:absolute relative lg:-ml-[6rem] md:-ml-[13rem] -left-12 lg:-mt-[7.7rem] md:-mt-[7.7rem] -top-[5.4rem]'></div>
            <div className='w-4 h-4 dark:bg-orange bg-Darksky  rounded-full absolute lg:flex md:flex hidden  lg:-ml-[6rem] md:-ml-28 lg:-mt-[8rem] md:-mt-[14rem]'></div>
        </div>
    </div>
  )
}

export default Circularprogress