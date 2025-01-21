import React from 'react'
import logo1 from "../../Favicon/favicon1.png";
import logo2 from "../../Favicon/favicon2.png";

const Loader = () => {
  return (
 <div className='w-full h-screen  flex justify-center items-center'>
    <div className='w-[40%'>
      <img src={logo1} className='lg:w-40 md:w-40 w-24 hidden dark:flex'/>
      <img src={logo2} className='lg:w-40 md:w-40 w-24 dark:hidden flex'/>
      <p className='text-2xl font-bold dark:text-orange animate-pulse text-center'>Loading...</p>
    </div>
</div>
  )
}

export default Loader