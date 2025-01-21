import React, { useEffect } from 'react'

//aos
import AOS from "aos";
import "aos/dist/aos.css";

const Chart = () => {
  useEffect(() => {
    AOS.init({duration:1200})
 });
  return (
    <div className='lg:overflow-hidden md:overflow-hidden overflow-x-auto'>
        <div data-aos="slide-right" className='flex gap-3'>
            <div className='flex items-center'>
                <div className='text-gray font-semibold space-y-6 text-sm mt-4'>
                   <p>2k</p>
                   <p>1k</p>
                   <p>4k</p>
                   <p>2k</p> 
                </div>
                
            </div>
            <div className='mt-5'>
                <div className='flex gap-8 relative left-6 cursor-pointer'>
                   <div className='w-[2%] h-32 bg-gray rounded-b-xl'><button className='p-1 z-10 opacity-0 hover:opacity-100 -top-2 -ml-10 bg-Darksky dark:text-Darkblue text-whitesmoke dark:bg-whitesmoke absolute rounded-2xl text-sm font-semibold'><p className='dark:textw'>$10.363</p></button><div className='w-[5px] h-20 bg-Darksky dark:bg-Darkblue relative -left-[1px] rounded-t-xl'></div></div>
                   <div className='w-[2%]  h-24 bg-gray rounded-b-xl top-3 relative'><div className='w-[5px] h-16 bg-Darksky dark:bg-Darkblue relative -left-[1px] rounded-t-xl'></div> <button className='p-1 z-10 top-2 opacity-0 hover:opacity-100 bg-Darksky dark:text-Darkblue text-whitesmoke dark:bg-whitesmoke absolute rounded-2xl text-sm font-semibold'><p className='dark:textw'>$12.363</p></button></div>
                   <div className='w-[2%] text-gray h-20 bg-gray rounded-b-xl relative top-8'>. <button className='p-1 z-10 top-12 -ml-12 opacity-0 hover:opacity-100d bg-Darksky dark:text-Darkblue text-whitesmoke dark:bg-whitesmoke absolute rounded-2xl text-sm font-semibold'><p className='dark:textw'>$0.363</p></button></div>
                   <div className='w-[2%]  h-24 bg-gray rounded-b-xl'><button className='p-1 z-20 top-9 -ml-4 opacity-0 hover:opacity-100 bg-Darksky dark:text-Darkblue text-whitesmoke dark:bg-whitesmoke absolute rounded-2xl text-sm font-semibold'><p className='dark:textw'>$20.363</p></button><div className='w-[5px] h-16 bg-Darksky dark:bg-Darkblue relative -left-[1px] rounded-t-xl'></div></div>
                   <div className='w-[2%] relative z-10 h-28 bg-gray rounded-b-xl'><div className='w-[5px] h-20 bg-orange relative -left-[1px] rounded-t-xl'></div><button className='p-1 z-10 top-2 opacity-0 hover:opacity-100 bg-Darksky dark:text-Darkblue text-whitesmoke dark:bg-whitesmoke absolute rounded-2xl text-sm font-semibold'><p className='dark:textw'>$50.463</p></button></div>
                   <div className='w-[2%]  h-20 bg-gray rounded-b-xl relative top-10'><div className='w-[5px] h-10 bg-Darksky dark:bg-Darkblue relative -left-[0.5px] rounded-t-xl'><button className='p-1 z-10 top-20 opacity-0 -m-8 hover:opacity-100 bg-Darksky dark:text-Darkblue text-whitesmoke dark:bg-whitesmoke absolute rounded-2xl text-sm font-semibold'><p className='dark:textw'>$7.355</p></button></div></div>
                   <div className='w-[4%] text-gray h-20 bg-gray rounded-b-xl relative top-6'>.<button className='p-1 z-10 top-20 opacity-0 -m-8 hover:opacity-100 bg-Darksky dark:text-Darkblue text-whitesmoke dark:bg-whitesmoke absolute rounded-2xl text-sm font-semibold'><p className='dark:textw'>$7.355</p></button></div>
                   <div className='w-[2%]  h-20 bg-gray rounded-b-xl relative top-3'><div className='w-[5px] h-10 bg-Darksky dark:bg-Darkblue relative -left-[1px] rounded-t-xl'><button className='p-1 z-10 top-0 opacity-0 -ml-16 hover:opacity-100 bg-Darksky dark:text-Darkblue text-whitesmoke dark:bg-whitesmoke absolute rounded-2xl text-sm font-semibold'><p className='dark:textw'>$6.385</p></button></div></div>
                   <div className='w-[2%]  h-20 bg-gray rounded-b-xl relative top-12'><div className='w-[5px] h-12 bg-Darksky dark:bg-Darkblue relative -left-[1px] rounded-t-xl'><button className='p-1 z-10 top-0 opacity-0 -ml-2 hover:opacity-100 bg-Darksky dark:text-Darkblue text-whitesmoke dark:bg-whitesmoke absolute rounded-2xl text-sm font-semibold'><p className='dark:textw'>$7.355</p></button></div></div>
                   <div className='w-[2%] h-28 bg-gray rounded-b-xl relative top-6'><div className='w-[5px] h-20 bg-Darksky dark:bg-Darkblue relative -left-[1px] rounded-t-xl'></div></div>
                   <div className='w-[2%] h-12 bg-gray rounded-b-xl relative top-2'><button className='p-1 z-10 top-5 opacity-0 -m-8 hover:opacity-100 bg-Darksky dark:text-Darkblue text-whitesmoke dark:bg-whitesmoke absolute rounded-2xl text-sm font-semibold'><p className='dark:textw'>$7.355</p></button><div className='w-[5px] h-16 bg-Darksky dark:bg-Darkblue relative -left-[1px] rounded-xl'></div></div>
                   <div className='w-[2%]  h-28 bg-gray rounded-b-xl relative top-6'><div className='w-[5px] h-28 bg-Darksky dark:bg-Darkblue relative -left-[0.2px] rounded-t-xl'><button className='p-1 z-10 top-16 opacity-0 -m-8 hover:opacity-100 bg-Darksky dark:text-Darkblue text-whitesmoke dark:bg-whitesmoke absolute rounded-2xl text-sm font-semibold'><p className='dark:textw'>$2.355</p></button></div></div>
                   <div className='w-[2%]  h-36 bg-gray rounded-b-xl relative top-6'><div className='w-[5px] h-20 bg-Darksky dark:bg-Darkblue relative -left-[0.2px] rounded-t-xl'></div><button className='p-1 z-10 top-4 opacity-0 -m-8 hover:opacity-100 bg-Darksky dark:text-Darkblue text-whitesmoke dark:bg-whitesmoke absolute rounded-2xl text-sm font-semibold'><p className='dark:textw'>$3.355</p></button></div>
                   <div className='w-[2%]  h-20 bg-gray rounded-b-xl relative top-2'><div className='w-[5px] h-16 bg-Darksky dark:bg-Darkblue relative -left-[0.2px] rounded-t-xl'></div></div>
                   <div className='w-[2%]  h-20 bg-whitesmoke rounded-b-xl relative top-2'><div className='w-[5px] h-16 bg-whitesmoke relative -left-[0.2px] rounded-t-xl'><button className='p-1 z-10 top-20 opacity-0 -m-8 hover:opacity-100 bg-Darksky dark:text-Darkblue text-whitesmoke dark:bg-whitesmoke absolute rounded-2xl text-sm font-semibold'><p className='dark:textw'>$7.355</p></button></div></div>
                   <div className='w-[2%]  h-20 bg-gray rounded-b-xl relative top-2'><button className='p-1 z-10 top-20 opacity-0 -ml-8 hover:opacity-100 bg-Darksky dark:text-Darkblue text-whitesmoke dark:bg-whitesmoke absolute rounded-2xl text-sm font-semibold'><p className='dark:textw'>$4.355</p></button><div className='w-[5px] h-16 bg-gray relative -left-[0.2px] rounded-t-xl'></div></div>
                   <div className='w-[2%]  h-28 bg-gray rounded-b-xl relative top-5'><div className='w-[5px] h-20 bg-Darksky dark:bg-Darkblue relative -left-[0.2px] rounded-t-xl'><button className='p-1 z-10 top-20 opacity-0 -m-8 hover:opacity-100 bg-Darksky dark:text-Darkblue text-whitesmoke dark:bg-whitesmoke absolute rounded-2xl text-sm font-semibold'><p className='dark:textw'>$6.355</p></button></div></div>
                   <div className='w-[2%]  h-20 bg-gray rounded-b-xl relative top-16'><div className='w-[5px] h-16 bg-Darksky dark:bg-Darkblue relative -left-[0.2px] rounded-t-xl'></div><button className='p-1 z-10 top-20 opacity-0 -m-8 hover:opacity-100 bg-Darksky dark:text-Darkblue text-whitesmoke dark:bg-whitesmoke absolute rounded-2xl text-sm font-semibold'><p className='dark:textw'>$2.355</p></button></div>
                   <div className='w-[2%]  h-16 bg-gray rounded-b-xl relative top-5'><div className='w-[4px] h-10 bg-Darksky dark:bg-Darkblue relative -left-[0.2px] rounded-t-xl'></div><button className='p-1 z-10 top-0 opacity-0 -ml-3 hover:opacity-100 bg-Darksky dark:text-Darkblue text-whitesmoke dark:bg-whitesmoke absolute rounded-2xl text-sm font-semibold'><p className='dark:textw'>$0.355</p></button></div>
                </div>

                <div className='flex relative top-12 justify-between left-5'>
                  <p className='font-semibold text-gray dark:text-whitesmoke text-sm'>Nov</p>
                  <p className='font-semibold text-gray dark:text-whitesmoke text-sm'>Dec</p>
                  <p className='font-semibold text-gray dark:text-whitesmoke text-sm'>Jan</p>
                  <p className='font-semibold text-gray dark:text-whitesmoke text-sm'>Feb</p>
                  <p className='font-semibold text-gray dark:text-whitesmoke text-sm'>Mar</p>
                  <p className='font-semibold text-gray dark:text-whitesmoke text-sm'>Apr</p>
                  <p className='font-semibold text-gray dark:text-whitesmoke text-sm'>May</p>
                  <p className='font-semibold text-gray dark:text-whitesmoke text-sm'>Jun</p>
                </div>
            </div>
        </div>
        <div className='w-12 lg:h-[40.4vh] md:h-[40.4vh] h-[41vh] relative -top-[11rem] animate-pulse left-[11rem] bg-white absolut dark:bg-black rounded-t-3xl'></div>
    </div>
  )
}

export default Chart