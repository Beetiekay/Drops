import React, { useState } from 'react'
import data from './data'
import {FaSearch} from "react-icons/fa"

const Block = () => {
  const [filter, setFilter] = useState('');

   const searchText = (event) =>{
     setFilter(event.target.value);
   }
  let dataSearch = data.cardData.filter(item =>{
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    )
  });
  return (
    <div>
      {/* Search bar */}
      <div className='flex justify-center mb-4'>
       <div className='flex items-center gap-2 border border-gray dark:border-orange p-1 lg:w-[45%] md:w-[70%] w-[94%] rounded-lg'>
       <FaSearch size={25} className='text-gray dark:text-orange cursor-pointer'/>
        <input type='text' placeholder='Search'
        value={filter}
        onChange={searchText.bind(this)} className='w-full bg-white lg:p-3 md:p-3 p-1 outline-none dark:bg-black dark:text-orange'/>
       </div>
      </div>
      {/* Search bar */}

       {/* tabs */}
       <div className='flex justify-center lg:mb-4 md:mb-2 mb-1 lg:p-0 md:p-0 p-2'>
         <div className='lg:w-[40%] md:w-[60%] w-full flex  items-center justify-between'>
           <button className='p-2 bg-whitesmoke dark:text-black rounded-2xl focus:bg-gray focus:text-black lg:text-sm md:text-sm text-xs font-semibold'>Popular topics</button>
           <button className='p-2 bg-whitesmoke dark:text-black rounded-2xl focus:bg-gray focus:text-black g:text-sm md:text-sm text-xs font-semibold'>Getting started</button>
           <button className='p-2 bg-whitesmoke dark:text-black rounded-2xl focus:bg-gray focus:text-black g:text-sm md:text-sm text-xs font-semibold'>Chat</button>
           <button className='p-2 bg-whitesmoke dark:text-black rounded-2xl focus:bg-gray focus:text-black g:text-sm md:text-sm text-xs font-semibold'>Documentation</button>
         </div>
       </div>
       {/* tabs */}

      {/* mapping */}
      <div className='lg:h-[50vh] grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-2 overflow-x-auto p-4'>
      {dataSearch.map((item, index) =>{
              return(
                <div className='flex justify-center items-center lg:mt-16 md:mt-16 mt-5'>
                   <div className='flex justify-around mb-5'>
                     {/* Box */}
                      <div className='w-full lg:p-2 md:p-2 p-3 rounded-lg hover:bg-Darksky hover:bg-opacity-30 dark:hover:opacity-30'>
                        <div className='lg:mb-6 md:mb-6 mb-4 flex justify-center items-center'><button className='p-2 dark:bg-orange bg-whitesmoke rounded-full'>{item.icon && <item.icon size={25}/>}</button></div>
                        <h1 className='text-center lg:text-xl md:text-xl text-sm font-semibold dark:text-orange lg:mb-4 md:mb-4 mb-2'>{item.title}</h1>
                        <div className='flex justify-center items-center lg:mb-6 md:mb-6 mb-2'><p className='text-center lg:text-sm md:text-sm text-xs lg:w-[50%] w-full'>{item.desc}</p></div>
                        <div className='mb-2 flex justify-center items-center'><button className='outline-none p-1 hover:scale-90 font-semibold'>{item.brief}</button></div>
                      </div>
                     {/* Box */}
                   </div>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default Block