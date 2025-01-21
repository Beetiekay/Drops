import React from 'react'
import { FaStar, FaUser } from 'react-icons/fa'


const Scroll = () => {
  return (
    <div className='flex justify-between lg:w-[120vw] md:w-[250vw] w-[340vw] gap-2  p-2'>
       {/* box 1 */}
       <div className='w-[45%] lg:h-[45vh] md:h-[30vh] h-[30vh] border border-gray rounded-3xl'>
         <div className='flex gap-2 p-2 mb-2 mt-3'>
            <FaStar className='text-2xl text-gray cursor-pointer hover:text-orange'/>
            <FaStar className='text-2xl text-gray cursor-pointer hover:text-orange'/>
            <FaStar className='text-2xl text-gray cursor-pointer hover:text-orange'/>
            <FaStar className='text-2xl text-gray cursor-pointer hover:text-orange'/>
            <FaStar className='text-2xl text-gray cursor-pointer hover:text-orange'/>
         </div>
      
         <div className='flex justify-between p-2 mb-4'>
        <div className='flex items-center gap-2'>
            <button className='bg-gray rounded-full p-2'><FaUser size={20}/></button>
             <p className='font-semibold dark:text-orange'>Robert Karmazov</p>
        </div>

        <p className='text-gray font-semibold'>Nov 01, 2023</p>
        </div>

        <div className='p-2'>
         <p className='lg:text-[15px] md:text-[15px] text-[10px] dark:text-gray text-start'>
            Pagedone doesn't  disappont when it come to the variety and riches of its design
            components. From build templates to customizable elements, The System caters ti both beginners 
            and seasoned deisgners. The extensive library ensures a diverse range of options to bring creative
            visions to life.  
         </p>
       </div>
       </div>
       {/* box 2 */}
       <div className='w-[45%] lg:h-[45vh] h-[30vh] md:h-[30vh] border border-gray rounded-3xl'>
         <div className='flex gap-2 p-2 mb-2 mt-3'>
            <FaStar className='text-2xl text-gray cursor-pointer hover:text-orange'/>
            <FaStar className='text-2xl text-gray cursor-pointer hover:text-orange'/>
            <FaStar className='text-2xl text-gray cursor-pointer hover:text-orange'/>
            <FaStar className='text-2xl text-gray cursor-pointer hover:text-orange'/>
            <FaStar className='text-2xl text-gray cursor-pointer hover:text-orange'/>
         </div>
      
         <div className='flex justify-between p-2 mb-4'>
        <div className='flex items-center gap-2'>
            <button className='bg-gray rounded-full p-2'><FaUser size={20}/></button>
             <p className='font-semibold dark:text-orange'>Mary Karmazov</p>
        </div>

        <p className='text-gray font-semibold'>Nov 01, 2024</p>
        </div>

        <div className='p-2'>
         <p className='lg:text-[15px] md:text-[15px] text-[10px]  dark:text-gray text-start'>
            Pagedone doesn't  disappont when it come to the variety and riches of its design
            components. From build templates to customizable elements, The System caters ti both beginners 
            and seasoned deisgners. The extensive library ensures a diverse range of options to bring creative
            visions to life.  
         </p>
       </div>
       </div>
       {/* box 3 */}
       <div className='w-[45%] lg:h-[45vh] md:h-[30vh] h-[30vh] border border-gray rounded-3xl'>
         <div className='flex gap-2 p-2 mb-2 mt-3'>
            <FaStar className='text-2xl text-gray cursor-pointer hover:text-orange'/>
            <FaStar className='text-2xl text-gray cursor-pointer hover:text-orange'/>
            <FaStar className='text-2xl text-gray cursor-pointer hover:text-orange'/>
            <FaStar className='text-2xl text-gray cursor-pointer hover:text-orange'/>
            <FaStar className='text-2xl text-gray cursor-pointer hover:text-orange'/>
         </div>
      
         <div className='flex justify-between p-2 mb-4'>
        <div className='flex items-center gap-2'>
            <button className='bg-gray rounded-full p-2'><FaUser size={20}/></button>
             <p className='font-semibold dark:text-orange'>Roburo Karmazov</p>
        </div>

        <p className='text-gray font-semibold'>Nov 08, 2024</p>
        </div>

        <div className='p-2'>
         <p className='lg:text-[15px] md:text-[15px] text-[10px]  dark:text-gray text-start'>
            Pagedone doesn't  disappont when it come to the variety and riches of its design
            components. From build templates to customizable elements, The System caters ti both beginners 
            and seasoned deisgners. The extensive library ensures a diverse range of options to bring creative
            visions to life.  
         </p>
       </div>
       </div>
       {/* box 4 */}
       <div className='w-[45%] lg:h-[45vh] md:h-[30vh] h-[30vh] border border-gray rounded-3xl mb-3'>
         <div className='flex gap-2 p-2 mb-2 mt-3'>
            <FaStar className='text-2xl text-gray cursor-pointer hover:text-orange'/>
            <FaStar className='text-2xl text-gray cursor-pointer hover:text-orange'/>
            <FaStar className='text-2xl text-gray cursor-pointer hover:text-orange'/>
            <FaStar className='text-2xl text-gray cursor-pointer hover:text-orange'/>
            <FaStar className='text-2xl text-gray cursor-pointer hover:text-orange'/>
         </div>
      
         <div className='flex justify-between p-2 mb-4'>
        <div className='flex items-center gap-2'>
            <button className='bg-gray rounded-full p-2'><FaUser size={20}/></button>
             <p className='font-semibold dark:text-orange'>Bishor Tukor</p>
        </div>

        <p className='text-gray font-semibold'>Nov 10, 2024</p>
        </div>

        <div className='p-2'>
         <p className='lg:text-[15px] md:text-[15px] text-[10px]  dark:text-gray text-start'>
            Pagedone doesn't  disappont when it come to the variety and riches of its design
            components. From build templates to customizable elements, The System caters ti both beginners 
            and seasoned deisgners. The extensive library ensures a diverse range of options to bring creative
            visions to life.  
         </p>
       </div>
       </div>
    </div>
  )
}

export default Scroll