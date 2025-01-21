import React, { useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { GiNetworkBars } from "react-icons/gi"
import { FaChartArea, FaRegCreditCard, FaChevronRight, FaEllipsisH, FaPenNib, FaPlusSquare, FaLock, FaNpm } from 'react-icons/fa';
import CountUp from 'react-countup'
import Chart from './Chart';
import Linechart from './Linechart';
import profile from "../../assets/user.png"
import { IoMdPlayCircle } from 'react-icons/io';
import { IoStar, IoTime } from 'react-icons/io5';
import { SiCodeberg } from 'react-icons/si';
import Circularprogress from './Circularprogress';
import bend from "../../assets/bender.png"

//aos
import AOS from "aos";
import "aos/dist/aos.css";
import Pageloader from '../../components/Pagesloader/Pageloader';


const Dashtab = () => {
  useEffect(() => {
    AOS.init({duration:1200})
 });

  return (
    <div className='relative -top-[0.6rem] h-[78.6vh] w-full'>
      <Tabs>
      {/* Tab Headeer */}
      <div className='flex justify-center'>
       <TabList className="w-36 flex gap-1 justify-between shadow-md mt-2 dark:bg-opacity-30 dark:bg-Darksky rounded-2xl ">
        <Tab className='p-3 flex justify-center outline-none w-20 hover:rounded-2xl hover:text-whitesmoke  dark:text-gray rounded-2xl hover:bg-Darkblue opacity-'><GiNetworkBars size={25} /></Tab>
        <Tab className='p-3 flex justify-center hover:text-whitesmoke outline-none w-20 rounded-2xl dark:text-gray hover:bg-Darkblue '><FaRegCreditCard size={25} /></Tab>
      </TabList>
      </div>
      
      {/* pageloader */}
      <div className='z-0'><Pageloader/></div>
      {/* pageloader */}

      {/* Tab Headeer */}
       {/* content */}
         <div className='w-full h-[69vh] mt-2 overflow-y-scroll'>
          <TabPanel>
        <div className='lg:w-[70%] lg:hidden md:hidden block md:w-full overflow-y-scroll p-3'>
          <div className='grid grid-cols-3 gap-5 mb-5'>
           <button className='p-5 lg:flex md:flex block items-center shadow-md outline-none dark:shadow-Darkblue dark:shadow-md dark:hover:bg-Darkblue dark:text-whitesmoke hover:bg-orange hover:text-whitesmoke gap-6 rounded-lg'>
            <FaChartArea size={30} className='scale-150 lg:mb-0 md:mb-0 mb-2'/>
            <div>
              <p className='text-sm font-semibold text-gray'>VISITORS</p>
               <CountUp start={0} end={10234} delay={1} className='font-semibold lg:text-2xl md:text-2xl text-xl'/>
            </div>
           </button>

           <button className='p-5 lg:flex md:flex block items-center shadow-md outline-none hover:bg-orange dark:hover:bg-Darkblue dark:text-whitesmoke dark:shadow-Darkblue dark:shadow-md hover:text-whitesmoke gap-6 rounded-lg'>
            <FaChartArea size={30} className='scale-150 lg:mb-0 md:mb-0 mb-2'/>
            <div>
              <p className='text-sm font-semibold text-gray -ml-3'>CUSTOMERS</p>
               <CountUp start={0} end={4680} delay={1} className='font-semibold lg:text-2xl md:text-2xl text-xl'/>
            </div>
           </button>

           <button className='p-5 lg:flex md:flex block items-center shadow-md hover:bg-orange dark:hover:bg-Darkblue dark:text-whitesmoke outline-none dark:shadow-Darkblue dark:shadow-md hover:text-whitesmoke gap-6 rounded-lg'>
            <FaChartArea size={30} className='scale-150 lg:mb-0 md:mb-0 mb-2'/>
            <div>
              <p className='text-sm font-semibold text-gray'>ORDERS</p>
               <CountUp start={0} end={2980} delay={1} className='font-semibold lg:text-2xl md:text-2xl text-xl'/>
            </div>
           </button>
           </div>
             
           <div className='bg-whitesmoke shadow-md h-[50vh] p-4 dark:bg-Darkblue dark:bg-opacity-25 rounded-xl'>
            {/* Chart h*/}
            <div className='flex justify-between'>
             <button className='font-semibold dark:text-whitesmoke outline-none'><p>Statistics</p></button>
            
              <select className='rounded-xl outline-none dark:bg-Darksky dark:bg-opacity-30 p-2 dark:text-whitesmoke'>
               <option className='font-semibold outline-none dark:text-whitesmoke'>Year</option>
               <option className='font-semibold outline-none dark:text-whitesmoke'>2022</option>
               <option className='font-semibold outline-none dark:text-whitesmoke'>2023</option>
               <option className='font-semibold outline-none dark:text-whitesmoke'>2024</option>
              </select>
            </div>
            <div><Chart/></div>
           </div>
           {/* Chart h*/}

           {/* Two Blocks */}
             <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mt-2'>
                {/* Chart time */}
                <div className='w-full shadow-md rounded-2xl dark:bg-Darkblue dark:bg-opacity-35 bg-whitesmoke bg-opacity-20 h-[40vh] mb-2'>
                  <div className='flex items-center justify-between'>
                    <p className='font-semibold dark:text-gray p-2 px-5'>Spent time</p>
                    <button className='p-2 font-semibold text-sm dark:bg-orange dark:bg-opacity-65 bg-Darksky text-whitesmoke relative right-4 top-2 dark:text-whitesmoke rounded-2xl '>Hours & min</button>
                  </div>
                  <Linechart/>
                </div>
                {/* Chart time */}

                {/* User ID */}
                <div className='w-full shadow-md rounded-2xl mb-2 dark:bg-Darkblue dark:bg-opacity-35 bg-whitesmoke bg-opacity-20 h-[40vh]'>
                  <div className='flex items-center gap-4 p-4'>
                    <img src={profile} className='w-12 cursor-pointer'/>
                    <div className='cursor-pointer'>
                      <h1 className='font-bold font-sans text-xl dark:text-whitesmoke'>Bishir Tukur</h1>
                      <p className='font-semibold text-gray'>Business Trainer</p>
                    </div>
                  </div>
                  <div className='p-4 relative -top-3'>
                   <h1 className='font-bold dark:text-orange text-xl mb-4'>
                    How to property manage your persoanl budget? 
                  </h1>

                  <div className=' grid grid-cols-3 mb-3'>
                      <div className='flex gap-2 items-center'>
                      <IoMdPlayCircle size={30} className='text-Darkblue'/>
                      <p className='font-semibold text-gray'>Video</p>
                      </div>
                      
                      <div className='flex gap-2 items-center'>
                      <IoTime size={30} className='text-Darkblue opacity-65'/>
                      <p className='font-semibold text-gray'>15 mins</p>
                      </div>

                      <div className='flex gap-2 items-center'>
                      <IoStar size={30} className='text-orange'/>
                      <p className='font-semibold text-gray'>12 likes</p>
                      </div>
                  </div>
                   
                   <div className='flex justify-between items-center'>
                     <p className='font-semibold text-gray'>5 days ago</p>
                     <button className='font-semibold bg-Darksky text-whitesmoke hover:opacity-45 p-2 text-xl flex items-center gap-3 rounded-3xl'>Connect <FaChevronRight size={15}/></button>
                   </div>
                  </div>
                </div>
                {/* User ID */}
              </div>
           {/* Two Blocks */}
         </div>
           </TabPanel>

           <TabPanel>
             <div className='lg:w-[25%] md:w-[25%] w-full h-[87vh] lg:hidden md:hidden block bg-white dark:bg-black dark:bg-opacity-20 shadow-md rounded-2xl'>
          <h1 className='text-2xl text-black text-center font-semibold dark:text-gray p-1'>Total Sales</h1>
              <div className='p-4 flex justify-end items-center mt-4'>
                <FaPenNib size={20} className='text-gray hidden cursor-pointer'/>
                <button className='p-2 w-20 flex justify-center relative right-0 -top-5 shadow-md z-0 text-sm font-semibold bg-Darksky dark:text-gray text-whitesmoke dark:bg-opacity-40 rounded-xl'><p>$</p> <CountUp start={0} end={10600} delay={1} /></button>
              </div>
              <div className='w-full'><Circularprogress/></div>
              {/* Card */}
                <div className='flex justify-between p-5 items-center'>
                <p className='font-semibold dark:text-gray'>My card</p>
                <div className='text-gray dark:opacity-20'><FaEllipsisH size={20}/></div>
                </div>
                
                <div data-aos="flip-up" className='flex justify-center'>
                   <div className='w-[85%] h-[24vh] relative bg-Darkblue rounded-2xl p-2'>
                    <div className='w-full flex justify-between mb-2'>
                      <button className='w-12 h-8 rounded-lg bg-gray bg-opacity-40'></button>
                     <p className='text-whitesmoke text-2xl font-semibold relative z-10'><span className='font-bold text-orange opacity-65 text-3xl'>V</span>ISA</p>
                    </div>
                    <div><img src={bend} className='w-20 absolute z-30 ml-12 -mt-12'/></div>
                    <div className='flex justify-around items-center relative z-20'>
                      <p className='font-bold text-xl text-gray'>. . . .</p>
                      <p className='font-bold text-xl text-gray'>. . . .</p>
                      <p className='font-bold text-xl text-gray'>. . . .</p>
                      <p className='font-bold text-xl text-gray mt-2'>5546</p>
                    </div>
                    
                    <div className='flex justify-between p-3 relative z-10 mt-5'>
                      <p className='text-sm font-bold text-gray'>Alex Smith</p>
                      <p className='text-sm font-bold text-gray'>07/25</p>
                    </div>
                   </div>
                   <div>
                      
                   </div>
                   <div className='w-40 h-[24vh] rounded-r-2xl hidden bg-black rounded-l-3xl absolute bg-opacity-45 ml-[7rem]'></div>
                </div>
              {/* Card */}
               <div className='h-[16vh] overflow-y-auto'>
                <div>
                <div className='flex justify-between p-5 items-center -mt-3'>
                  <p className='font-bold dark:text-gray'>Transaction</p>
                  <div className='text-orange cursor-pointer'><FaPlusSquare size={25}/></div>
                </div>
                <div>
                   <div className='flex justify-around items-center mb-2'>
                     <button className='p-2 rounded-xl text-orange dark:text-gray dark:border dark:border-gray shadow-md'><SiCodeberg size={20}/></button>
                     <div>
                       <h1 className='font-bold dark:text-orange'>Taxi</h1>
                       <p className='font-semibold text-gray text-sm'>02:23 PM</p>
                     </div>
                      <p className='font-bold text-sm text-gray'>-$9,20</p>
                   </div>

                   <div className='flex justify-around items-center'>
                     <button className='p-2 rounded-xl dark:text-gray text-orange dark:border dark:border-gray shadow-md'><FaLock size={20}/></button>
                     <div>
                       <h1 className='font-bold dark:text-orange'>Shopping</h1>
                       <p className='font-semibold text-gray text-sm'>11:35 AM</p>
                     </div>
                      <p className='font-bold text-sm text-gray'>-$142,00</p>
                   </div>

                   <div className='flex justify-around items-center'>
                     <button className='p-2 rounded-xl dark:text-gray text-orange dark:border dark:border-gray shadow-md'><FaNpm size={20}/></button>
                     <div>
                       <h1 className='font-bold dark:text-orange'>Netflix</h1>
                       <p className='font-semibold text-gray text-sm'>11:35 AM</p>
                     </div>
                      <p className='font-bold text-sm text-gray'>-$24,99</p>
                   </div>
                </div>
                </div>
              </div>
            </div>
           </TabPanel>
         </div>
       {/* content */}
      </Tabs>
    </div>
  )
}

export default Dashtab