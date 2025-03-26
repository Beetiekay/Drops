import React, { useEffect } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import {FaChartArea, FaLock, FaNpm, FaPenNib, FaPlusSquare,} from "react-icons/fa"
import Chart from './Chart'
import Header from '../../components/Header/Header'
import profile from "../../assets/user.png"
import { IoMdPlayCircle } from "react-icons/io"
import { IoCard, IoStar, IoTime } from "react-icons/io5"
import { FaChevronRight } from 'react-icons/fa'
import { FaEllipsisH } from 'react-icons/fa'
import { SiCodeberg } from "react-icons/si"
import { MdDashboard } from "react-icons/md"
import Linechart from './Linechart'
import Circularprogress from './Circularprogress'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'
import Bottons from '../../components/Sidebar/Bottons'
import Dashtab from './Dashtab'


//aos
import AOS from "aos";
import "aos/dist/aos.css";
import Pageloader from '../../components/Pagesloader/Pageloader'


const Dashboard = () => {
  useEffect(() => {
    AOS.init({duration:1200})
 });

  return (
    <div className='w-[100%] dark:bg-black  flex'>
      <Sidebar/>
       <div className='w-full lg:h-[100vh] md:h-[100vh] h-fit p-2'>
        {/* Header */}
        <div className='lg:hidden md:hidden relative p-2 z-50'><Header/></div> 
         {/* Header */}
         <div className='lg:h-[88.9vh] md:h-[88.9vh] h-[89.6vh] flex justify-around'>
        {/* First */}
         <div className='lg:w-[70%] lg:block relative md:block hidden md:w-full overflow-y-scroll p-3'>
          <div className='grid grid-cols-3 gap-5 mb-5'>
           <button className='p-5 shadow-md outline-none dark:shadow-Darkblue dark:shadow-md dark:hover:bg-Darkblue dark:text-whitesmoke hover:bg-orange hover:text-whitesmoke flex items-center gap-6 rounded-lg'>
            <FaChartArea size={30} className='scale-150'/>
            <div>
              <p className='text-sm font-semibold text-gray'>VISITORS</p>
               <CountUp start={0} end={10234} delay={1} className='font-semibold text-2xl'/>
            </div>
           </button>

           <button className='p-5 shadow-md outline-none hover:bg-orange dark:hover:bg-Darkblue dark:text-whitesmoke dark:shadow-Darkblue dark:shadow-md hover:text-whitesmoke flex items-center gap-6 rounded-lg'>
            <FaChartArea size={30} className='scale-150'/>
            <div>
              <p className='text-sm font-semibold text-gray'>CUSTOMERS</p>
               <CountUp start={0} end={4680} delay={1} className='font-semibold text-2xl'/>
            </div>
           </button>

           <button className='p-5 shadow-md hover:bg-orange dark:hover:bg-Darkblue dark:text-whitesmoke outline-none dark:shadow-Darkblue dark:shadow-md hover:text-whitesmoke flex items-center gap-6 rounded-lg'>
            <FaChartArea size={30} className='scale-150'/>
            <div>
              <p className='text-sm font-semibold text-gray'>ORDERS</p>
               <CountUp start={0} end={2980} delay={1} className='font-semibold text-2xl'/>
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
             <div className='grid grid-cols-2 gap-4 mt-2'>
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
                     <button className='font-semibold bg-Darksky text-whitesmoke hover:opacity-45 p-2 text-xl flex items-center justify-center gap-3 rounded-3xl'>Connect <FaChevronRight size={15}/></button>
                   </div>
                  </div>
                </div>
                {/* User ID */}
              </div>
           {/* Two Blocks */}
         </div>
         {/* First */}

         
         
         {/* For tab */}
           <div className='lg:h-[88.9vh] md:h-[88.9vh] h-[90.2vh] flex justify-around'>
          

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

           {/* Circular progress */}
              <div className='w-[64%] left-56 absolute z-30 top-12 lg:hidden md:block hidden'>
                <input type='checkbox' className='absolute peer transition-all left-48 z-20 w-10 h-10 top-1 ml-1 opacity-0'/>
                <div className='absolute left-48'><button className='p-1 bg-Darkblue rounded-xl'><IoCard size={30} className='text-gray'/></button></div>
                {/* Content */}
             <div className='hidden peer-checked:block'>
              <div className='w-[100%] h-[75vh] mt-16 lg:hidden md:block hidden bg-whitesmoke dark:bg-black shadow-md rounded-2xl'>
              <div className='p-4 flex justify-end items-center mt-4'>
                <FaPenNib size={20} className='text-gray cursor-pointer'/>
                <button className='p-2 w-20 flex justify-center absolute right-4 top-36 shadow-md z-0 text-sm font-semibold bg-Darksky dark:text-gray text-whitesmoke dark:bg-opacity-40 rounded-xl'><p>$</p> <CountUp start={0} end={10600} delay={1} /></button>
              </div>
              <div className='w-full'><Circularprogress/></div>
              {/* Card */}
              <div className='flex justify-between p-5 items-center'>
                <p className='font-semibold dark:text-gray'>My card</p>
                <div className='text-gray dark:opacity-20'><FaEllipsisH size={20}/></div>
              </div>
                <div className='flex justify-center'>
                   <div className='w-[85%] h-[24vh] relative bg-Darkblue rounded-2xl p-2'>
                    <div className='w-full flex justify-between mb-2'>
                      <button className='w-12 h-8 rounded-lg bg-gray bg-opacity-40'></button>
                     <p className='text-whitesmoke text-2xl font-semibold relative z-10'><span className='font-bold text-orange opacity-65 text-3xl'>V</span>ISA</p>
                    </div>

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
                   <div className='lg:w-40 md:w-56 h-[24vh] rounded-r-2xl bg-black rounded-l-3xl absolute bg-opacity-45 lg:ml-[7rem] md:ml-[12rem]'></div>
                </div>
              {/* Card */}
               <div className='lg:h-[16vh] md:h-[10vh] overflow-y-auto'>
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
                       <h1 className='font-bold dark:text-orange'>Shopping</h1>
                       <p className='font-semibold text-gray text-sm'>11:35 AM</p>
                     </div>
                      <p className='font-bold text-sm text-gray'>-$24,99</p>
                   </div>
                </div>
                </div>
              </div>
         </div>
                </div>
                {/* Content */}
              </div>
           {/* Circular progress */}
          </div>
          {/* For tab */}
         

         {/* pageloader */}
         <div className='fixed top-0 w-full h-full z-50'><Pageloader/></div>
         {/* pageloader */}


          {/* Side box left */}
           <div className='w-[25%] h-[87vh] lg:block md:hidden hidden bg-whitesmoke dark:bg-Darksky dark:bg-opacity-20 shadow-md rounded-2xl'>
              <div className='p-4 flex justify-end items-center mt-4'>
                <FaPenNib size={20} className='text-gray cursor-pointer'/>
                <button className='p-2 w-20 flex justify-center absolute right-4 top-36 shadow-md z-0 text-sm font-semibold bg-Darksky dark:text-gray text-whitesmoke dark:bg-opacity-40 rounded-xl'><p>$</p> <CountUp start={0} end={10600} delay={1} /></button>
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
                   <div className='w-40 h-[24vh] rounded-r-2xl bg-black rounded-l-3xl absolute bg-opacity-45 ml-[7rem]'></div>
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
          {/* Side box left*/}



         {/* Responsiveness */}
          <div className='w-full lg:hidden md:hidden flex  items-end'>
           <div className='w-full'>
            <Dashtab/>
            <div className=' fixed bottom-0 w-full left-0 z-50'><Bottons/></div>
            </div>
         </div>
         {/* Responsiveness */}
         </div>
       </div>
      </div>
  )
}

export default Dashboard