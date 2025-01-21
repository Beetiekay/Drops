import React, { useEffect, useState } from 'react'
import Loader from './Loader';


const Pageloader = () => {
 const [open, setOpen] = useState(false);
  useEffect(() => {
  setOpen(true)
  setTimeout(() => {
   setOpen(false)
   }, 2000);
  },[])
  return (
    <div>
         {
          open &&(
          <div className='w-full h-[100vh] flex justify-center backdrop-blur-sm bg-whitesmoke dark:bg-black bg-opacity-35 z-40 items-center absolute top-0 right-0 left-0'>
           <Loader/>
         </div>
       )}
    </div>
  )
}

export default Pageloader