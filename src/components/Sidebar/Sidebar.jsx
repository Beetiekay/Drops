import React, { useEffect } from 'react'
import logo from "../../Favicon/favicon1.png";
import logod from "../../Favicon/favicon2.png";
import { FaHome, FaWallet } from "react-icons/fa"
import { RiMessage3Fill, RiPieChartFill } from "react-icons/ri"
import { Link } from 'react-router-dom';

//aos
import AOS from "aos";
import "aos/dist/aos.css"


const Sidebar = () => {
  useEffect(() => {
    AOS.init({duration:1200})
 }) 
  return (
    <div data-aos="slide-right" className='w-[6%] h-[100vh] bg-Darkblue relative z-50 p-4 lg:flex hidden dark:bg-opacity-25 rounded-r-3xl'>
        <div>
            {/* Logo */}
            <div className=' cursor-pointer mb-10'>
              <Link to={"/"}><img src={logo} className='w-10 dark:hidden outline-none'/></Link>
              <Link to={"/"}><img src={logod} className='w-10 hidden dark:flex outline-none'/></Link>
            </div>
            {/* Logo */}

            {/* Navigation Links */}
            <div className='flex items-center'>
              <ul className='grid grid-cols-1'>
                <Link to={"/dashboard"} className='hover:translate-x-5 duration-300 cursor-pointer'><button className='p-3 hover:border-r-2 hover:shadow-md hover:bg-white text-whitesmoke bg-opacity-80 text-opacity-85 dark:hover:text-Darkblue hover:text-orange rounded-lg'><li><FaHome size={30}/></li></button></Link>
                <Link to={"/Reports"} className='hover:translate-x-5 duration-300 cursor-pointer'><button className='p-3 hover:border-r-2 hover:shadow-md hover:bg-white dark:hover:text-Darkblue text-whitesmoke bg-opacity-80 text-opacity-85 hover:text-orange rounded-lg'><li><RiPieChartFill size={30}/></li></button></Link>
                <Link to={"/Chats"} className='hover:translate-x-5 duration-300 cursor-pointer'><button className='p-3 hover:border-r-2 hover:shadow-md dark:hover:text-Darkblue hover:bg-white text-whitesmoke bg-opacity-80 text-opacity-85 hover:text-orange rounded-lg'><li><RiMessage3Fill size={30}/></li></button></Link>
                <Link to={"/wallet"} className='hover:translate-x-5 duration-300 cursor-pointer'><button className='p-3 hover:border-r-2 hover:shadow-md hover:bg-white dark:hover:text-Darkblue text-whitesmoke bg-opacity-80 text-opacity-85 hover:text-orange rounded-lg'><li><FaWallet size={30}/></li></button></Link>
              </ul>
            </div>
            {/* Navigation Links */}
        </div>
    </div>
  )
}

export default Sidebar