import React, { useState } from 'react'
import data from "./data";
import {FaSearch} from "react-icons/fa"
import { Link } from 'react-router-dom';

const Users = () => {
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
    <div className=''>
      {/* Search bar */}
         <div>
           <div className='w-[90%] rounded-lg shadow-sm dark:border dark:bg-black dark:border-orange mb-3 mt-2 bg-whitesmoke flex justify-around items-center'>
             <FaSearch size={20} className='text-gray dark:text-orange'/>
             <input type='text' placeholder='Search'
              value={filter}
              onChange={searchText.bind(this)} className='bg-whitesmoke outline-none dark:bg-black dark:text-orange p-2'/>
           </div>
         </div>
         {/* Search bar */}


         <div className='h-[85vh] overflow-y-auto'>
         
           {dataSearch.map((item, index) =>{
              return(
                <div>
                   <Link to={"/Designchat"}>
                  <div className='flex gap-5 items-center hover:bg-gray hover:bg-opacity-30 mb-2 p-2 rounded-lg'>
                      <img src={item.img} className='w-12'/>
                      <div className='w-[100%]'>
                       <h1 className='text-sm font-bold dark:text-gray'>{item.title}</h1>
                       <p className='text-sm dark:text-gray dark:opacity-40'>{item.desc}</p>
                       </div>
                       <div className='flex justify-start w-24'>
                         <div className='relative'><button className='bg-orange text-whitesmoke w-6 font-bold -ml-8 lg:mt-1 md:mt-5 rounded-full absolute'>{item.numb}</button></div>
                        <div className='dark:text-gray'>
                        <p className='dark:text-olivedrab font-semibold text-xs'>{item.time}</p>
                        <button>{item.icon && <item.icon size={20}/>}</button>
                        </div>
                       </div>
                  </div>  
                  </Link>
                  </div>
                )
            })}
          </div>
      </div>
  )
}

export default Users