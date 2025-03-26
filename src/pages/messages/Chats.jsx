import React, { useEffect } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Designchat from './Designchat'
import Users from './Users'
import Groups from './Groups'
import { Link } from 'react-router-dom'
import { MdDashboard } from 'react-icons/md'
import Bottons from '../../components/Sidebar/Bottons'
import Header from '../../components/Header/Header'

//aos
import AOS from "aos";
import "aos/dist/aos.css";
import Pageloader from '../../components/Pagesloader/Pageloader'


const Chats = () => {
  useEffect(() => {
    AOS.init({duration:1200})
 })
  return (
    <div className='w-[100%] h-[100vh] dark:bg-black lg:flex md:flex block overflow-hidden'>
     <Sidebar/>
     {/* Tab Navlinks */}
     <div className='absolute top-8 left-[35rem] lg:hidden md:block hidden z-10'>
            <input type='checkbox' className='w-12 z-10 peer transition-all h-8 absolute opacity-0 cursor-pointer'/>
            <div className='peer-checked:scale-x-110 duration-300 transition-transform'><MdDashboard size={40} className='dark:text-gray opacity-40 '/></div>

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

      {/* pageloader */}
      <div className='fixed top-0 w-full h-full z-50'><Pageloader/></div>
      {/* pageloader */}

      <div className='lg:hidden md:hidden relative block p-2 z-50'><Header/></div> 

      <div className='w-full h-fit overflow-hidden lg:p-2 md:p-2 p-0 lg:ml-0 md:ml-0 ml-4'>
       <div className='w-full h-full relative z-50 flex'>
       <div data-aos="slide-up" className='lg:w-[30%] md:w-[40%] h-full'><Users/></div>
       <div className='lg:w-[65%] lg:flex md:flex hidden md:w-[60%] w-full h-full'><Designchat/></div>
       <div className='w-[25%] h-full lg:flex md:hidden hidden'><Groups/></div>
     </div>
     </div>

    <div className='fixed bottom-0 w-full left-0 z-50'>
        <Bottons/>
    </div>
</div>
  )
}

export default Chats