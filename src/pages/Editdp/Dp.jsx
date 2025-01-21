import React from 'react'
import profile from "../../assets/user.png"
import { InputText } from 'primereact/inputtext';
        


const Dp = () => {
  return (
    <div className='flex justify-center p-8 cursor-pointer relative lg:top-0 md:top-0 -top-8'>
        <img src={profile} className='w-40 border-2 dark:border-orange rounded-full'/>
        <InputText type='file' className='absolute w-28 mt-16 z-10 opacity-0'/>
    </div>
  )
}

export default Dp;