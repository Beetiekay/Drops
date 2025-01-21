import React from 'react'
import { FaRocket } from 'react-icons/fa'
import { MdCancel } from 'react-icons/md'

const Not = () => {
  return (
    <div className='relative'>
        <input type='checkbox' className='absolute right-0 transition-transform -mt-2 w-5 h-6 z-20 peer opacity-0 top-3 text-whitesmoke cursor-pointer'/>

        <div className='hidden peer-checked:flex justify-center items-center'><p className='text-gray font-semibold '>(0) Notification</p></div>
        <div className='p-3 flex gap-3 peer-checked:hidden transition-all relative bg-Darksky bg-opacity-55 rounded-xl'>
        
         <div className='absolute right-2 -mt-2 text-whitesmoke cursor-pointer'><MdCancel size={25}/></div>

        <button className='p-2 text-whitesmoke outline-none bg-orange bg-opacity-35 rounded-lg'><FaRocket size={25}/></button>

        <div>
            <h1 className='font-semibold text-white mb-2 text-sm dark:text-orange'>Tools For Change Management</h1>
            <p className='text-xs text-whitesmoke opacity-75 mb-2'>We know change is hard. we have some tips aroun..</p>
        </div>
        </div>
    </div>
  )
}

export default Not