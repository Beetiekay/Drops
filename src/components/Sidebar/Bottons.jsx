import React from 'react'
import { FaHome, FaWallet } from "react-icons/fa"
import { RiMessage3Fill, RiPieChartFill } from "react-icons/ri"
import { Link } from 'react-router-dom';


const Bottons = () => {

  return (
    <div className='w-full '>
       {/* Navigation Links */}
          <div className='flex items-center relative z-30 w-[100%] p-2 bg-Darksky rounded-t-3xl'>
              <ul className='w-full grid grid-cols-4'>
                <Link to={"/dashboard"} className=' cursor-pointer'><button className='p-3 hover:border-r-2 hover:shadow-md hover:bg-white text-whitesmoke bg-opacity-80 text-opacity-85 dark:hover:text-Darkblue hover:text-orange rounded-lg'><li><FaHome size={35}/></li></button></Link>
                <Link to={"/Reports"} className=' cursor-pointer'><button className='p-3 hover:border-r-2 hover:shadow-md hover:bg-white dark:hover:text-Darkblue text-whitesmoke bg-opacity-80 text-opacity-85 hover:text-orange rounded-lg'><li><RiPieChartFill size={35}/></li></button></Link>
                <Link to={"/Chats"} className='cursor-pointer'><button className='p-3 hover:border-r-2 hover:shadow-md dark:hover:text-Darkblue hover:bg-white text-whitesmoke bg-opacity-80 text-opacity-85 hover:text-orange rounded-lg'><li><RiMessage3Fill size={35}/></li></button></Link>
                <Link to={"/wallet"} className=' cursor-pointer'><button className='p-3 hover:border-r-2 hover:shadow-md hover:bg-white dark:hover:text-Darkblue text-whitesmoke bg-opacity-80 text-opacity-85 hover:text-orange rounded-lg'><li><FaWallet size={35}/></li></button></Link>
              </ul>
          </div>
        {/* Navigation Links */}
    </div>
  )
}

export default Bottons