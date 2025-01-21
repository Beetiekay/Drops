import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { FaBell, FaCamera, FaChevronLeft, FaEdit, FaHome, FaMailBulk, FaSchool } from 'react-icons/fa'
import { BiLogOut } from "react-icons/bi"
import { IoCloseOutline, IoLocation, IoSettings } from 'react-icons/io5'
import user from "../../assets/user.png"
import { Link } from 'react-router-dom'
import Theme from '../../components/Theme/Theme'
import Dp from './Dp'


const Editdp = () => {
  return (
    <div className='w-[100%] h-full dark:bg-black lg:flex md:flex block'>
      <Sidebar/>
      <div className='w-full'>
     {/* Header */}
       <div className='flex justify-between p-2'>  
     <div className='flex gap-2'>
     <Link to={"/dashboard"} className='mt-2 dark:text-orange'><FaChevronLeft size={25}/></Link>
      <div className='lg:mb-0 md:mb-0 mb-2'>
          <h1 className='text-3xl font-bold dark:text-orange mb-2'>Profile</h1>
      </div>
     </div>


      {/* Profile & Notification */}
      <div className='flex justify-end'>
     <div className='relative lg:-left-5 md:left-0 -left-2 flex gap-2'>
      {/* notiications drop-down */}
      <div className='relative -left-12 z-30'>
      <input type='checkbox' className='absolute cursor-pointer peer transition-transform top-1 right-1 w-8 opacity-0 h-8'/>
         <button className='p-2 rounded-xl dark:hover:bg-gray bg-Darkblue text-gray hover:text-whitesmoke'>
         <FaBell size={22}/>
         <div className='absolute top-2 ml-3 border animate-pulse border-whitesmoke w-3 h-3 bg-orange rounded-full'></div>
        </button>
         
      {/* Drops-down */}
       <div className='absolute duration-500 shadow-md overflow-x-auto dark:bg-Darksky mt-5 lg:dark:bg-opacity-50 md:dark:bg-opacity-45 dark:bg-opacity-100 rounded-lg transition-all w-64 p-5 lg:right-[2px] md:right-[2px] right-0 bg-white peer-checked:block hidden'>
           <input type='checkbox' className='absolute peer transition-transform cursor-pointer opacity-0 right-6 h-8 w-8'/>
           <div className='hidden peer-checked:flex justify-center items-center'><p className='text-gray font-semibold '>(0) Notification</p></div>
           <div className='w-full bg-Darkblue peer-checked:hidden duration-300 p-2 rounded-2xl bg-opacity-65'>
            <div className='flex justify-between items-center font-semibold text-white'><p className='text-sm'>Turn on notifications</p> <IoCloseOutline size={22}/></div>
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
      {/* Header */}
      <div className='w-full lg:h-[90vh] md:h-screen h-[91vh] overflow-y-scroll lg:p-4 md:p-2 p-0'>
         <div className='lg:h-[88.9vh] md:h-[88.9vh] h-[89.6vh]'>
          {/* image cover */}
          <div className='w-full flex justify-end lg:h-[40vh] md:h-32 h-32 bg-opacity-80 animate-pulse lg:rounded-xl rounded-none bg-Darkblue text-sm font-semibold p-4'>
            <div>
              <button className='flex p-2 gap-1  outline-none bg-whitesmoke rounded-lg relative top-2'>
              <FaCamera size={20}/>
              <p>Change cover</p>
             </button>
            </div>  
          </div>
          {/* image cover */}

          {/* Profile details */}
          <div className='w-full h-[60vh] relative lg:-top-36 md:-top-20 -top-16 lg:flex md:block gap-8 lg:p-5 md:p-5 p-2'>

           <div className='lg:w-[30%] md:w-[100%] w-full lg:h-[75vh] mb-2 md:h-[40vh]  lg:border-gray md:border-gray border-none border p-4 lg:dark:bg-black md:dark:bg-black dark:bg-none dark:border-orange rounded-xl lg:bg-whitesmoke md:bg-whitesmoke bg-none lg:shadow-md md:shadow-md shadow-none'>
             <Dp/>
             <div className='p-3 space-y-4 lg:overflow-hidden lg:h-fit md:h-28 md:overflow-y-auto'>
               
               <div className='flex justify-between items-center gap-2 mb-2'>
               <div className='flex items-center gap-2'>
                 <FaHome className='text-[2rem] text-Darksky dark:text-orange'/>
                 <p className='font-semibold text-sm dark:text-gray'><span className='font-normal'>Lives in</span>  Katsina state</p>
                 </div>
                 <FaEdit className='text-[1.5rem] text-gray cursor-pointer'/>
               </div>
              
               <div className='flex justify-between items-center gap-2'>
                <div className='flex items-center gap-2'>
                  <IoLocation className='text-[2rem] text-Darksky dark:text-orange'/>
                  <p className='font-semibold text-sm dark:text-gray'><span className='font-normal'>From</span>  Katsina</p>
                </div>
                 <FaEdit className='text-[1.5rem] cursor-pointer text-gray relative'/>
               </div>
               
               <div className='flex justify-between items-center gap-2 mb-2'>
                 <FaMailBulk className='text-[2rem] text-Darksky dark:text-orange'/>
                 <p className='font-semibold text-sm dark:text-gray'><span className='font-normal'>Email</span> bastukur1997@gamil.com</p>
                 <FaEdit className='text-[1.5rem] cursor-pointer text-gray'/>
               </div>

               <div className='flex justify-between items-center gap-2'>
               <div className='flex items-center gap-2'>
                 <FaSchool className='text-[2.8rem] text-Darksky dark:text-orange'/>
                 <p className='font-semibold text-sm dark:text-gray'><span className='font-normal'>Tertiary</span> katsina institute of technology and management</p>
                 </div>
                 <FaEdit className='text-[2.5rem] cursor-pointer text-gray'/>
               </div>

               <div className='flex justify-center relative -top-2'><p className='text-gray font-semibold cursor-pointer'>View More</p></div>
             </div>
           </div>

           {/* middle */}

           <div className=' lg:w-[80%] md:w-[100%] lg:h-[75vh] md:h-[59vh] h-[67vh] border lg:border-gray md:border-gray border-none rounded-xl dark:bg-black dark:border-orange lg:bg-whitesmoke md:bg-whitesmoke bg-none shadow-md p-4'>
             <p className='text-2xl font-semibold mb-5 dark:text-orange'>Account Settings</p>

             <div className='flex h-[60vh] items-center justify-center'>   
              <div className='w-full grid grid-cols-2 gap-2'> 
             {/* Name */}
              <div>
                <p className='text-sm font-bold mb-1 dark:text-orange'>Change Name:</p>
                <input type='text' value='Bishir' placeholder='Name:' className='w-full bg-whitesmoke dark:text-orange dark:border-orange dark:bg-black rounded-xl border p-2 outline-none'/>
              </div>
              {/* sur name*/}
              <div>
                <p className='text-sm font-bold mb-1 dark:text-orange'>Last Name:</p>
                <input type='text' value='Tukur' placeholder='Name:' className='w-full bg-whitesmoke dark:text-orange dark:border-orange dark:bg-black rounded-xl border p-2 outline-none'/>
              </div>
              {/* phone numb*/}
              <div>
                <p className='text-sm font-bold mb-1 dark:text-orange'>Phone Number:</p>
                <input type='text' value='08143133174' placeholder='Name:' className='w-full bg-whitesmoke dark:text-orange dark:border-orange dark:bg-black rounded-xl border p-2 outline-none'/>
              </div>
               {/* phone numb*/}
               <div>
                <p className='text-sm font-bold mb-1 dark:text-orange'>Street:</p>
                <input type='text' value='F/samji street 24' placeholder='Name:' className='w-full bg-whitesmoke dark:text-orange dark:border-orange dark:bg-black rounded-xl border p-2 outline-none'/>
              </div>
              {/* email address*/}
              <div>
                <p className='text-sm font-bold mb-1 dark:text-orange'>Email Address:</p>
                <input type='text' value='bastukur1997@gmail.com' placeholder='Name:' className='w-full bg-whitesmoke dark:text-orange dark:border-orange dark:bg-black rounded-xl border p-2 outline-none'/>
              </div>
              {/* city*/}
              <div>
                <p className='text-sm font-bold mb-1 dark:text-orange'>City:</p>
                <input type='text' value='Katsina' placeholder='Name:' className='w-full bg-whitesmoke dark:text-orange dark:border-orange dark:bg-black rounded-xl border p-2 outline-none'/>
              </div>
              {/* post code*/}
              <div>
                <p className='text-sm font-bold mb-1 dark:text-orange'>Post Code:</p>
                <input type='text' value='820101' placeholder='Name:' className='w-full bg-whitesmoke dark:text-orange dark:border-orange dark:bg-black rounded-xl border p-2 outline-none'/>
              </div>
              {/* country*/}
               <div>
                <p className='text-sm font-bold mb-1 dark:text-orange'>Country:</p>
                <input type='text' value='Nigeria' placeholder='Name:' className='w-full bg-whitesmoke dark:text-orange dark:border-orange dark:bg-black rounded-xl border p-2 outline-none'/>
              </div>
              <div className=' mt-5'><button className='dark:bg-orange bg-Darksky w-24 focus:opacity-25 text-whitesmoke p-2 rounded-xl outline-none'>Update</button></div>
              </div>
             </div>

           </div>

          </div>
         </div>
      </div>
      </div>
    </div>
  )
}

export default Editdp