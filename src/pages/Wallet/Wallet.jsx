import React, { useEffect } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import { FaAccusoft, FaCar, FaEllipsisH, FaHeadphonesAlt, FaPlay, FaPlusCircle, FaShoppingCart, FaWallet } from 'react-icons/fa'
import layer from "../../assets/bender.png"
import {MdDashboard} from "react-icons/md"
import logo from "../../Favicon/favicon1.png"
import CountUp from 'react-countup'
import {TiChartPieOutline} from "react-icons/ti"
import { Link } from 'react-router-dom'
import user1 from "../../assets/user2.png"
import user2 from "../../assets/user3.png"
import user3 from "../../assets/user4.png"
import Bchange from './Bchange'
import Bottons from '../../components/Sidebar/Bottons'

//aos
import AOS from "aos";
import "aos/dist/aos.css"
import Pageloader from '../../components/Pagesloader/Pageloader'

const Wallet = () => {
  useEffect(() => {
    AOS.init({duration:1200})
 })
  return (
    <div className='w-[100%] dark:bg-black  flex'>
        <Sidebar/>
     <div className='w-full h-[100vh] p-2'>
      {/* Header */}
       <Header/>
       {/* Tab Navlinks */}
         <div className='absolute top-5 left-[32rem] lg:hidden md:block hidden z-10'>
            <input type='checkbox' className='w-12 z-10 peer transition-all h-8 absolute opacity-0 cursor-pointer'/>
            <div className='peer-checked:scale-x-110 duration-300 transition-transform'><MdDashboard size={40} className='dark:text-gray dark:bg-opacity-40'/></div>

              <div className='w-52 mt-2 h-0 peer-checked:h-fit overflow-hidden'>
              <ul className='bg-black border-2 border-orange text-gray p-2 rounded-lg transition-transform duration-500'>
             <Link to={"/"} className='dark:text-whitesmoke font-semibold text-xl'><li>Dashboard</li></Link>
             <Link to={"/reports"} className='dark:text-whitesmoke font-semibold text-xl'><li>Statistic</li></Link>
             <Link to={"/chats"} className='dark:text-whitesmoke font-semibold text-xl'><li>Message</li></Link>
             <Link to={"/wallet"} className='dark:text-whitesmoke font-semibold text-xl'><li>Wallet</li></Link>
             </ul>
             </div>
         </div>
        {/* Tab Navlinks */}
        {/* Header */}

         <div className='lg:flex md:block w-full lg:h-[88.9vh] md:h-[88.9vh] h-[78.8vh] md:overflow-y-auto overflow-y-auto '>
          {/* Number 1 */}
           <div className='lg:w-[60%] w-full h-[88.7vh] flex justify-center lg:p-6 p-2'>
             <div className='w-[100%] relative lg:left-12 md:left-0'>
              <div className='flex gap-8 mb-5'>
                 <h1 className='text-xl font-semibold dark:text-gray'>Your Cards</h1>
                 <Link to={"/New Card"}><button className='text-sm flex font-semibold gap-2 p-2 dark:bg-whitesmoke dark:text-black bg-Darksky text-whitesmoke rounded-lg items-center'><p>New Card</p><FaPlusCircle size={17}/></button></Link>
              </div>
              {/* Card */}
              <div data-aos="zoom-up" className='lg:w-[75%] md:w-full h-[40vh] dark:bg-opacity-40 bg-Darksky rounded-2xl mb-2'>

               <div className='p-4 flex justify-between'>
                  <div className='flex items-center gap-2'>
                  <img src={logo} alt="" className='w-8'/>
                  <h1 className='font-bold text-xl text-whitesmoke'>Drops</h1>
                 </div>
                 <button className='p-1 w-10 outline-none flex justify-center items-center dark:bg-Darksky dark:text-whitesmoke bg-whitesmoke  rounded-lg'><FaEllipsisH size={20}/></button>
               </div>
                
                <div className='p-2 justify-center items-center gap-2 lg:mt-0 md:mt-28 mt-20'>
                  <h1 className='font-bold text-whitesmoke text-xl'>Total Balance</h1>
                  <div className='flex gap-1 relative z-30 lg:w-[30%] md:w-[30%] w-[40%] p-4 rounded-r-2xl bg-whitesmoke dark:bg-Darksky'>
                    <p className='font-semibold dark:text-whitesmoke text-2xl'>$</p>
                     {/* sketch layer*/}
                      <div className='absolute lg:-top-16 md:-top-16 -top-24 lg:-right-56 md:-right-56 -right-48'>
                      <img src={layer} className='w-48'/>
                      </div>
                    {/* sketch layer*/}
                    <CountUp start={0} end={105023} delay={1} className='font-semibold dark:text-whitesmoke text-2xl'/>
                  </div> 
                </div>

                <div className='p-3 flex justify-between items-center md:mt-10'>
                  <div className='text-xl font-bold text-whitesmoke'><p>*0508  05/25</p></div>
                  <div className='flex'>
                    <div className='w-8 h-8 bg-whitesmoke dark:bg-Darksky rounded-full'></div>
                    <div className='w-8 h-8 dark:border-l-2 dark:border-orange relative -ml-6 border-l border-l-black bg-whitesmoke dark:bg-Darksky rounded-full'></div>
                  </div> 
                </div>
              </div>
              {/* Card */}
                <div className='flex md:justify-between lg:gap-36 md:gap-0 border-b-gray border-b-2 dark:border-b-orange lg:w-[75%] w-f'>
                <Link to={"/Credit Limit"}>
                <button className='flex items-center outline-none gap-2 p-2 hover:opacity-30 rounded-xl'>
                  <TiChartPieOutline className='text-[4rem] text-orange animate-pulse'/>
                  <div>
                    <p className='lg:text-xl md:text-xl text-sm font-bold dark:text-gray'>$802,000</p>
                    <span className='text-sm dark:text-gray'>Credit Limit</span>
                  </div>
                </button>
                </Link>

                <Link to={"/Used"}>
                <button className='flex items-center outline-none gap-2 p-2 hover:opacity-30 rounded-xl'>
                  <TiChartPieOutline className='text-[4rem] text-orange animate-pulse'/>
                  <div>
                    <p className='lg:text-xl md:text-xl text-sm font-bold dark:text-gray'>$302,000</p>
                    <span className='text-sm flex justify-start dark:text-gray'>Used</span>
                  </div>
                </button>
                </Link>
               </div>

               {/* Int.Payment */}
                <div>
                <h1 className='text-xl font-semibold mb-1'>Int.Payments</h1>
                 <div className='lg:h-[16.5vh] h-[20.2vh] lg:w-[75%] md:w-full overflow-y-scroll border-b-2 border-b-gray dark:border-b-orange'>
                   {/* 1 */}
                    <div className='flex cursor-pointer justify-between items-center p-2'>
                     <button className='outline-none p-2 rounded-xl bg-whitesmoke text-orange'><FaPlay size={23}/></button>
                     <div>
                      <h1 className='text-lg font-semibold dark:text-orange'>YouTube Music</h1>
                      <p className='text-sm text-gray'>Next payment 07:08,2024</p>
                     </div>
                     <p className='text-sm text-gray'>Netflix</p>
                     <span className='text-sm dark:text-orange font-semibold'>-$6</span>
                   </div>
                   {/* 2 */}
                   <div className='flex cursor-pointer justify-between items-center p-2'>
                     <button className='outline-none p-2 rounded-xl bg-whitesmoke text-orange'><FaHeadphonesAlt size={23}/></button>
                     <div>
                      <h1 className='text-lg font-semibold dark:text-orange'>Ipad Music</h1>
                      <p className='text-sm text-gray'>Next payment 09:28,2024</p>
                     </div>
                     <p className='text-sm text-gray'>Blutooth</p>
                     <span className='text-sm dark:text-orange font-semibold'>-$8</span>
                   </div>
                   {/* 3 */}
                    <div className='flex cursor-pointer justify-between items-center p-2'>
                     <button className='outline-none p-2 rounded-xl bg-whitesmoke text-orange'><FaShoppingCart size={23}/></button>
                     <div>
                      <h1 className='text-lg font-semibold dark:text-orange'>Shpping</h1>
                      <p className='text-sm text-gray'>Next payment 10:28,2024</p>
                     </div>
                     <p className='text-sm text-gray'>Padlock</p>
                     <span className='text-sm dark:text-orange font-semibold'>-$4</span>
                   </div>
                    {/* 4 */}
                    <div className='flex cursor-pointer justify-between items-center p-2'>
                     <button className='outline-none p-2 rounded-xl bg-whitesmoke text-orange'><FaCar size={23}/></button>
                     <div>
                      <h1 className='text-lg font-semibold dark:text-orange'>Taxi</h1>
                      <p className='text-sm text-gray'>Next payment 02:28,2024</p>
                     </div>
                     <p className='text-sm text-gray'>Transport</p>
                     <span className='text-sm dark:text-orange font-semibold'>-$1.4</span>
                   </div>
                </div>
                </div>      
             </div>
           </div>
          {/* Number 1 */}


          {/* Middle Space */}


          {/* Number 2 */}
          <div  className='lg:w-[40%] w-full h-[88.7vh] flex justify-center'>
            <div className='lg:p-5 p-3 lg:w-[85%] w-full lg:h-[88.7vh] md:h-[88.7] h-[100vh]  relative lg:-left-8 md:left-0 dark:bg-opacity-30 dark:bg-Darksky bg-whitesmoke rounded-2xl shadow-md'>
            {/* Fast Transaction */}
              <div>
               <h1 className='font-semibold text-xl mb-2 dark:text-gray'>Fast Transaction</h1>
               <div className='lg:flex justify-between md:flex-wrap flex-wrap  mb-2'>
                 <button className='p-2 lg:mb-0 md:mb-0 mb-2 bg-whitesmoke dark:bg-opacity-30 border-x border-x-Darksky rounded-xl dark:border-y dark:border-y-orange hover:bg-gray hover:bg-opacity-30'>
                   <div className='flex justify-center mt-2'><FaWallet size={25} className='text-gray mb-2'/></div>
                   <p className='text-gray font-semibold text-sm mb-2'>Manual..</p>
                 </button>

                 <button className='p-2 lg:mb-0 md:mb-0 mb-2 bg-whitesmoke border-x dark:bg-opacity-30 border-x-Darksky rounded-xl dark:border-y dark:border-y-orange hover:bg-gray hover:bg-opacity-30'>
                   <div className='flex justify-center mt-2'><img src={user1} className='text-gray w-7 mb-2'/></div>
                   <p className='text-gray font-semibold text-sm mb-2'>Jasmine .</p>
                 </button>

                 <button className='p-2 lg:mb-0 md:mb-0 mb-2 bg-whitesmoke dark:bg-opacity-30 border-x border-x-Darksky rounded-xl dark:border-y dark:border-y-orange hover:bg-gray hover:bg-opacity-30'>
                   <div className='flex justify-center mt-2'><img src={user2} className='text-gray w-7 mb-2'/></div>
                   <p className='text-gray font-semibold text-sm mb-2'>Alex hun</p>
                 </button>

                 <button className='p-2 lg:mb-0 md:mb-0 mb-2 bg-whitesmoke dark:bg-opacity-30 border-x border-x-Darksky rounded-xl dark:border-y dark:border-y-orange hover:bg-gray hover:bg-opacity-30'>
                   <div className='flex justify-center mt-2'><img src={user3} className='text-gray w-7 mb-2'/></div>
                   <p className='text-gray font-semibold text-sm mb-2'>Max pedi</p>
                 </button>

                 <button className='p-2 lg:mb-0 md:mb-0 mb-2 bg-whitesmoke dark:bg-opacity-30 border-x border-x-Darksky dark:border-y dark:border-y-orange rounded-xl hover:bg-gray hover:bg-opacity-30'>
                   <div className='flex justify-center mt-2'><img src={user2} className='text-gray w-7 mb-2'/></div>
                   <p className='text-gray font-semibold text-sm mb-2'>Beetiekay</p>
                 </button>     
               </div>
              </div>
              {/* Balance Change */}
              <div>
                <h1 className='font-semibold text-xl mb-2 dark:text-gray'>Balance Change</h1>
                <div>
                   <div className='flex gap-28 px-4 cursor-pointer mb-2'>
                    <p className='font-semibold dark:text-gray'>Activity</p>
                    <p className='font-semibold text-gray'>Last week</p>
                  </div>
                  <div><Bchange/></div>
                </div>
              </div>
              {/* Recent Activities */}
              <div>
              <h1 className='font-semibold text-xl mb-2 dark:text-gray'>Recent Activities</h1>
              <div className='overflow-y-auto lg:mb-0 md:mb-0 mb-5 lg:h-28 md:h-32 h-[12.5vh]'>
                {/* Recent 1 */}
                <div className='flex justify-between'>
                   <div className='flex gap-4 mt-1'>
                     <button className='p-2 rounded-xl text-orange shadow-md bg-whitesmoke dark:bg-opacity-40'><FaAccusoft size={20}/></button>
                    <div>
                    <h1 className='text-lg font-semibold dark:text-orange'>To Mercady</h1>
                    <p className='text-sm text-gray'>Sent</p>
                   </div>
                   </div>
                  
                   <p className='text-sm text-gray'>-123,833<span className='font-semibold text-black dark:text-orange'>USDT</span></p>
                </div>

                <div className='flex justify-between'>
                   <div className='flex gap-4 mt-1'>
                     <button className='p-2 rounded-xl text-orange shadow-md bg-whitesmoke dark:bg-opacity-40'><FaAccusoft size={20}/></button>
                    <div>
                    <h1 className='text-lg font-semibold dark:text-orange'>To Luguzo</h1>
                    <p className='text-sm text-gray'>Sent</p>
                   </div>
                   </div>
                  
                   <p className='text-sm text-gray'>-123,833<span className='font-semibold text-black dark:text-orange'>USDT</span></p>
                </div>

                <div className='flex justify-between'>
                   <div className='flex gap-4 mt-1'>
                     <button className='p-2 rounded-xl text-orange shadow-md bg-whitesmoke dark:bg-opacity-40'><FaAccusoft size={20}/></button>
                    <div>
                    <h1 className='text-lg font-semibold dark:text-orange'>To Ikisopo</h1>
                    <p className='text-sm text-gray'>Sent</p>
                   </div>
                   </div>
                  
                   <p className='text-sm text-gray'>-123,833<span className='font-semibold text-black dark:text-orange'>USDT</span></p>
                </div>
              </div>
              </div>
            </div>
          </div>
          {/* Number 2 */}
         </div>
          
          {/* pageloader */}
          <div className='z-0'><Pageloader/></div>
          {/* pageloader */}


        {/* For mobile phone */}
        <div className=' fixed bottom-0 w-full left-0 z-50'>
          <Bottons/>
        </div>
        {/* For mobile phone */}
     </div>
    </div>
  )
}

export default Wallet