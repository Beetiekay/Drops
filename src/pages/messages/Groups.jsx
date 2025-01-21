import React, { useState } from 'react'
import { FaChevronDown, FaFile, FaLink, FaMusic } from 'react-icons/fa';
import { IoAlbums, IoClose, IoMic, IoRecording, IoVideocamOff } from 'react-icons/io5'
import image1 from "../../assets/laye.jpg"
import image2 from "../../assets/laye2.jpg"
import image3 from "../../assets/laye3.png"
import user from "../../assets/user.png"
import user2 from "../../assets/user2.png"
import user3 from "../../assets/user3.png"
import user4 from "../../assets/user4.png"
import user5 from "../../assets/user5.png"

const Groups = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className='p-2'>
       {
       open &&(
      <div className='h-[45vh] w-full p-2 dark:border dark:border-gray transition-transform overflow-hidden duration-300 dark:bg-Darksky dark:bg-opacity-40 bg-whitesmoke shadow-md mb-4 rounded-2xl'>
          <div className='flex items-center justify-between p-1'>
          <h1 className='text-xl font-semibold dark:text-orange'>Group Info</h1>
          <div onClick={() => setOpen(false)} className='dark:text-gray cursor-pointer'><IoClose size={20}/></div>
         </div>
         <p className='text-sm px-2 font-bold dark:text-gray'>Files</p>
         {/* content */}
         <div>
          <div className='p-1 mb-4'>
            <input type='checkbox' className='peer absolute z-20 right-3 cursor-pointer opacity-0 w-10 h-5 transition-transform'/>
            <div className='rotate-0 w-5 absolute right-6 transition-all duration-300 dark:text-gray flex  peer-checked:rotate-180 justify-between '>
              <FaChevronDown size={15} className=''/>
            </div>
            <div className='dark:text-gray flex mb-2'><IoAlbums size={15}/><p className='text-sm px-2 font-bold dark:text-gray dark:opacity-40'>265 Photos</p></div>
            <div className='h-fit peer-checked:max-h-0 duration-500 transition-all overflow-hidden'>
            <div className='flex gap-4 overflow-x-scroll'>
              <img src={image1} className='w-24 mb-2 rounded-2xl object-cover'/> 
              <img src={image2} className='w-24 mb-2 rounded-2xl object-cover'/> 
              <img src={image3} className='w-24 mb-2 rounded-2xl object-cover'/> 
              <img src={image3} className='w-24 mb-2 rounded-2xl object-cover'/> 
              <img src={image3} className='w-24 mb-2 rounded-2xl object-cover'/> 
              <img src={image3} className='w-24 mb-2 rounded-2xl object-cover'/> 
            </div>
            </div>
          </div>
           
           <div className='overflow-y-scroll lg:h-20 md:h-36 h-28 lg:mt-0 md:mt-8'>
           <div className='flex justify-between items-center p-1 mb-1'>
           <div className='dark:text-gray flex'><IoVideocamOff size={15}/><p className='text-sm px-2 font-bold dark:text-gray dark:opacity-40'>0 Videos</p></div>
           <FaChevronDown size={15} className='dark:text-gray flex dark:opacity-40 cursor-pointer hover:rotate-180'/>
           </div>

           <div className='flex justify-between items-center p-1 mb-1'>
           <div className='dark:text-gray flex'><FaFile size={15}/><p className='text-sm px-2 font-bold dark:text-gray dark:opacity-40'>378 Files</p></div>
           <FaChevronDown size={15} className='dark:text-gray flex dark:opacity-40 cursor-pointer hover:rotate-180'/>
           </div>

           <div className='flex items-center justify-between p-1 mb-1'>
           <div className='dark:text-gray flex'><FaMusic size={15}/><p className='text-sm px-2 font-bold dark:text-gray dark:opacity-40'>21 audio Files</p></div>
           <FaChevronDown size={15} className='dark:text-gray flex dark:opacity-40 cursor-pointer hover:rotate-180'/>
           </div>

           <div className='flex items-center justify-between p-1 mb-1'>
           <div className='dark:text-gray flex'><FaLink size={15}/><p className='text-sm px-2 font-bold dark:text-gray dark:opacity-40'>45 shared links</p></div>
           <FaChevronDown size={15} className='dark:text-gray flex dark:opacity-40 cursor-pointer hover:rotate-180'/>
           </div>

           <div className='flex items-center justify-between p-1 mb-1'>
           <div className='dark:text-gray flex'><IoMic size={15}/><p className='text-sm px-2 font-bold dark:text-gray dark:opacity-40'>258 voice messages</p></div>
           <FaChevronDown size={15} className='dark:text-gray flex dark:opacity-40 cursor-pointer hover:rotate-180'/>
           </div>
           </div>
         </div>
      </div>
       )}

      {/* in betweeen */}
       <div className='h-[45vh] w-full p-2 dark:border dark:bg-Darksky dark:bg-opacity-40 dark:border-gray bg-whitesmoke shadow-md rounded-2xl'>
       <div className='flex items-center justify-between p-1 mb-2'>
          <h1 className='text-xl font-semibold dark:text-orange'>23 members</h1>
          <div onClick={() => setOpen(false)} className='dark:text-gray cursor-pointer'><IoClose size={20}/></div>
      </div>
         {/* Participant */}
         <div className='lg:h-56 md:h-72 h-56 lg:mt-0 md:mt-8 overflow-y-auto'>
         <div className='flex items-center justify-between p-2'>
           <img src={user2} className='w-10'/>
           <h1 className='dark:text-gray font-semibold'>Tonisha Combs</h1>
           <p className='dark:text-gray text-sm'>Admin</p>
         </div>
          
         <div className='flex items-center gap-5 p-2'>
           <img src={user4} className='w-10'/>
           <h1 className='dark:text-gray font-semibold'>Alex Hunt</h1>
         </div>

         <div className='flex items-center gap-5 p-2'>
           <img src={user3} className='w-10'/>
           <h1 className='dark:text-gray font-semibold'>Jasmine Lowery</h1>
         </div>

         <div className='flex items-center gap-5 p-2'>
           <img src={user} className='w-10'/>
           <h1 className='dark:text-gray font-semibold'>Max Padila</h1>
         </div>

         <div className='flex items-center gap-5 p-2'>
           <img src={user4} className='w-10'/>
           <h1 className='dark:text-gray font-semibold'>Jessie Rollins</h1>
         </div>

         <div className='flex items-center gap-5 p-2 mb-2'>
           <img src={user2} className='w-10'/>
           <h1 className='dark:text-gray font-semibold'>Lucas Magawan</h1>
         </div>
         </div>
      </div>      
    </div>
  )
}

export default Groups