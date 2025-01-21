import React from 'react'
import { Link } from 'react-router-dom'
import user from "../../assets/user.png"
import { FaEdit } from 'react-icons/fa'
import { BiLogOut } from "react-icons/bi"
import Theme from '../../components/Theme/Theme'
import { FaBell, FaSearch } from "react-icons/fa"
import { IoCloseOutline, IoSettings } from 'react-icons/io5'
import { MdCancel } from 'react-icons/md'
import dp from "../../Favicon/favicon1.png"
import dp2 from "../../Favicon/favicon2.png"
import Not from './Not'



const Header = () => {
  return (
    <div className='lg:p-2 md:p-2 p-1 grid grid-cols-3 mb-2'>
      {/* mobil phone dp */}
      <div className='lg:hidden md:hidden flex'>
       <img src={dp} className='lg:hidden md:hidden hidden dark:flex  w-12'/>
       <img src={dp2} className='lg:hidden md:hidden flex dark:hidden  w-12'/>
      </div>
      {/* mobil phone dp */}
    {/* Input */}
     <form action='' className='lg:flex md:flex hidden items-center bg-whitesmoke dark:bg-opacity-10 dark:bg-gray shadow-md rounded-md'>
      <button type='submit' className='p-2 hover:opacity-40'><FaSearch size={20} className='opacity-70 cursor-pointer  dark:text-whitesmoke'/></button> <input type='search' placeholder='Search' className='w-full p-2 outline-none bg-whitesmoke dark:bg-black dark:bg-opacity-10 text-whitesmoke'/>
     </form>
    {/* Input */}

    {/* Links */}
    <div className='lg:flex md:flex hidden justify-center px-16  items-center gap-2'>
     <ul className='flex gap-5'>
      <Link to={"/Feedback"} className='font-semibold dark:text-gray hover:scale-110 dark:hover:text-Darkblue duration-300 transition'><li>Feedback</li></Link>
      <Link to={"/Contact"} className='font-semibold dark:text-gray hover:scale-110 dark:hover:text-Darkblue duration-300 transition'><li>Contacts</li></Link>
      <Link to={"/Help"} className='font-semibold dark:text-gray hover:scale-110 dark:hover:text-Darkblue duration-300 transition'><li>Help</li></Link>
    </ul>
    </div>
    {/* Links */}

   {/* Profile & Notification */}
    <div className='flex justify-end'>
     <div className='relative lg:-left-5 md:left-0 left-24 flex gap-2'>
      {/* notiications drop-down */}
      <div className='relative -left-12 z-30'>
        
      <input type='checkbox' className='absolute cursor-pointer peer transition-transform top-1 right-1 w-8 opacity-0 h-8'/>
         <button className='p-2 rounded-xl dark:hover:bg-gray bg-Darkblue text-gray hover:text-whitesmoke'>
         <FaBell size={22}/>
         <div className='absolute top-2 ml-3 border animate-pulse border-whitesmoke w-3 h-3 bg-orange rounded-full'></div>
        </button>
         
        {/* Drops-down */}
         <div className='absolute duration-500 shadow-md overflow-x-auto dark:bg-Darksky mt-5 lg:dark:bg-opacity-50 md:dark:bg-opacity-45 dark:bg-opacity-100 rounded-lg transition-all w-64 p-4 lg:right-[2px] md:right-[2px] right-0 bg-white peer-checked:block hidden'>
           <input type='checkbox' className='absolute peer transition-transform cursor-pointer opacity-0 right-6 h-8 w-8'/>
           <div className='w-full bg-Darkblue peer-checked:hidden duration-300 p-2 rounded-2xl mb-2 bg-opacity-65'>
            <div className='flex justify-between items-center font-semibold text-white'><p className='text-sm'>Turn on notifications</p> <MdCancel size={22}/></div>
             <p className='text-xs text-whitesmoke opacity-75 mb-2'>
              Get updates on your posts and comments, communities you follow, and what's trending.
             </p>
             <div className='flex justify-end'>
               <div className='mb-2'>
                <button className='p-2 text-xs text-gray font-semibold outline-none rounded-2xl'>Not now</button>
                <button className='p-2 text-xs font-semibold  animate-pulse outline-none rounded-2xl dark:bg-gray dark:text-black bg-Darksky text-gray'>Turn on</button>
               </div>
             </div>
           </div>
            
            <div><Not/></div>
         </div>
         {/* Drops-down */}
      </div>
       {/* notiications drop-down */}
       
       {/* Prifile drop-down */}
       <div className='absolute z-30 '>
        <input type='checkbox' className='absolute cursor-pointer peer transition-transform top-0 right-2 w-8 opacity-0 h-8'/>
        <button className='p-2 rounded-xl dark:bg-gray bg-Darkblue hover:bg-Darkblue hover:text-whitesmoke'>
          <img src={user} className='w-12'/>
        </button>
        {/* Drops-down */}
         <div className='absolute overflow-hidden z-20 duration-500 shadow-md dark:bg-Darksky mt-5 lg:dark:bg-opacity-50 md:dark:bg-opacity-45 dark:bg-opacity-100 rounded-lg transition-all w-32 p-3 right-1 bg-white peer-checked:block hidden'>
          <Link to={"/Edit profile"} className='flex items-center justify-between mb-3'><p className='font-semibold dark:text-whitesmoke text-[14px] '>Edit profile</p><FaEdit size={20} className='text-gray'/></Link>
          <Link className='flex items-center justify-between mb-2'><p className='font-semibold dark:text-whitesmoke text-[14px] '>Theme</p><Theme/></Link>
          <Link to={"/Settings"} className='flex items-center justify-between mb-2'><p className='font-semibold dark:text-whitesmoke text-[14px] '>Settings</p><IoSettings size={25} className='text-gray'/></Link>
          <Link to={"/"} className='flex items-center justify-between mb-2'><p className='font-semibold dark:text-whitesmoke text-[14px] '>Log out</p><BiLogOut size={25} className='text-gray'/></Link>
         </div>
         {/* Drops-down */}
       </div>
        {/* Prifile drop-down */}
     </div>
    </div>
   {/* Profile & Notification */}
  </div>
  )
}

export default Header