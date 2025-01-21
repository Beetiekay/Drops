import React, { useEffect }  from 'react'
import { Link } from 'react-router-dom'
import logo1 from "../../Favicon/favicon1.png"
import logo2 from "../../Favicon/favicon2.png"


//aos
import AOS from "aos";
import "aos/dist/aos.css";

const Register = () => {
  useEffect(() => {
    AOS.init({duration:1200})
 }) 

  return (
    <div className='w-[100%] h-screen flex justify-center items-center dark:bg-black'>
      <form data-aos="slide-up"  className='lg:w-[21%] md:w-[40%] w-[82%] relative z-20  bg-whitesmoke border border-gray dark:border-orange dark:bg-Darksky dark:bg-opacity-75 rounded-2xl p-2'>
        {/* form header */}

        {/*Logo */}
        <div className='flex justify-center items-center'>
         <img src={logo1} className='w-20 hidden dark:flex'/>
         <img src={logo2} className='w-20 flex dark:hidden'/>
        </div>
        {/*Logo */}

         <div>
          <h1 className='text-3xl text-center dark:text-orange font-semibold mb-5'>Sign Up</h1>
         </div>
         {/* form header */}

         {/* form group */}
         <div className='grid grid-cols-1 mb-4'>
          <label className='font-semibold dark:text-orange text-sm'>User Name <span>*</span></label>
          <input
           type='name' name='name' required  className='p-1 border rounded-lg dark:border-orange outline-none bg-whitesmoke dark:bg-opacity-0 dark:text-whitesmoke'/>
         </div>

          {/* form group */}
          <div className='grid grid-cols-1 mb-2'>
          <label className='font-semibold dark:text-orange text-sm'>Password <span>*</span></label>
          <input
           type='password' name='password' required className='p-1 border  rounded-lg dark:border-orange outline-none bg-whitesmoke dark:bg-opacity-0 dark:text-whitesmoke'/>
         </div>

          <Link to={"/Forgot Password"} className='flex justify-end mb-3 text-xs dark:text-orange font-semibold'><p>Forgot Password</p></Link>

          <div className='space-y-2 mb-2'>
             <p className='text-sm font-semibold dark:text-gray mb-3'>Save The Password ?</p>

             <div className='flex items-center gap-2'>
              <p className='text-xs font-bold dark:text-orange'>Yes</p>
              <input type='radio' required/>    
             </div>

             <div className='flex items-center gap-2'>
              <p className='text-xs font-bold dark:text-orange'>No</p>
              <input type='radio' required/>    
            </div>
          </div>
         {/* card footer */}
         <div className='mb-4 flex justify-center'>
           <Link to={"/dashboard"}>
           <button type='submit' className='w-36 font-semibold p-2 focus:opacity-25 text-whitesmoke dark:bg-whitesmoke dark:text-Darksky dark:bg-opacity-45 bg-Darksky rounded-2xl'>Login</button>
           </Link>
         </div>
      </form>
      <img src={logo2} className='w-full h-screen dark:hidden object-cover opacity-50 absolute'/>
      <img src={logo1} className='w-full h-screen object-cover hidden dark:flex opacity-20 animate-pulse absolute'/>
    </div>
  )
}

export default Register