import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { FaChevronLeft, FaChevronRight, FaCloud, FaCloudflare, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Theme from '../../components/Theme/Theme'
import Pageloader from '../../components/Pagesloader/Pageloader'

const Settings = () => {
  return (
    <div className='w-[100%] h-full dark:bg-black lg:flex md:flex block'>
      <Sidebar/>
      <div className='w-full lg:h-[100vh] md:h-screen h-[100vh] overflow-hidden lg:p-4 md:p-2 p-2'>
       {/*  setting Header */}
       <div className='lg:flex md:flex block justify-between lg:mb-5 md:mb-8 mb-2'>
        <div className='flex gap-2'>
        <Link to={"/dashboard"} className='mt-2 dark:text-orange'><FaChevronLeft size={25}/></Link>
         <div className='lg:mb-0 md:mb-0 mb-2'>
          <h1 className='lg:text-3xl md:text-3xl text-2xl font-bold dark:text-orange mb-2'>Settings</h1>
          <p className='font-semibold text-gray text-sm'>Settings and options for your application.</p>
         </div>
        </div>
         {/*search input */}
         <div>
          <form action='' role="search" className='flex items-center border dark:bg-black border-gray dark:border dark:border-orange gap-2 bg-white rounded-xl p-2'>
            <button type='submit' ><FaSearch size={25} className='text-gray dark:text-orange cursor-pointer'/></button>
            <input type='text' defaultValue="Search..." placeholder='search' className='w-[100%] bg-white dark:bg-black dark:text-orange outline-none'/>
          </form>  
         </div>
       </div>
       <div className='flex items-center gap-5'>
        {/* Darkmode*/}
         <button className='flex items-center mb-2 gap-2 p-2 rounded-lg bg-gray dark:bg-Darksky '>
         <p className='dark:text-gray font-semibold text-sm'>Theme</p>
         <Theme/>
        </button>
         {/* Darkmode*/}


         <div className='lg:hidden md:hidden flex gap-2'>
          <Link to={"/Feedback"} className='text-sm font-semibold dark:text-gray'>Feedback</Link>
          <Link to={"/contact"} className='text-sm font-semibold dark:text-gray'>Contact</Link>
          <Link to={"/help"} className='text-sm font-semibold dark:text-gray'>Helps</Link>
         </div>
         
         </div>
        {/*  setting Header */}
   
       {/*scrool horizontal */}
         <div className='w-full lg:h-fit md:h-full h-[76.8vh] overflow-y-auto'>
        {/* Advert */}
         <div className='lg:h-fit md:h-fit h-[30vh] lg:flex md:flex block justify-between p-4 dark:bg-Darksky dark:bg-opacity-40 bg-whitesmoke border border-gray dark:border dark:border-Darkblue rounded-xl'>
          <div className='lg:mb-0 md:mb-0 mb-4'>
          <h1 className='text-lg font-semibold dark:text-orange mb-2'>Your Application is on the free plan.</h1>
          <p className='font-semibold text-gray text-sm'>Paid plans offer higher usage limits, additional branches and much more. Learn more here</p>
         </div>

         {/*Buttons for cloud */}
         <div className='lg:flex md:flex block justify-around h-12 lg:w-[20%] md:w-[40%] w-[100%]'>
          <button className='flex items-center gap-2 p-2 border lg:mb-0 md:mb-0 mb-5 dark:border-orange dark:hover:bg-orange hover:bg-Darksky hover:text-whitesmoke outline-none rounded-xl'>
            <FaCloud size={20} className='dark:text-whitesmoke'/>
            <p className='font-semibold dark:text-whitesmoke text-sm'>Chat Us </p>
          </button> 

          <button className='flex items-center gap-2 p-2 border dark:border-orange dark:hover:bg-orange hover:bg-Darksky hover:text-whitesmoke outline-none rounded-xl'>
            <FaCloudflare size={20} className='dark:text-whitesmoke'/>
            <p className='font-semibold dark:text-whitesmoke text-sm'>Upgrade</p>
          </button>  
         </div>
         </div>

          {/*Name */}
         <div className='lg:flex items-center lg:h-[15vh] md:h-fit h-fit md:flex block lg:space-x-24 md:space-y-24 space-x-2 p-3'>
          <div className='w-[40%] lg:mb-0 md:mb-0 mb-2'>
          <h1 className='text-lg font-semibold dark:text-orange mb-2'>Name</h1>
          <p className='font-semibold text-gray text-sm'>Change will update all URLs.</p>
         </div>
      
          <div className='w-full'>
         <div className='lg:w-[40%] w-full p-2 cursor-pointer flex items-center border border-gray rounded-xl dark:border-orange mb-2'>
           <p className='text-sm font-semibold dark:text-orange mb-2 px-2'>UntitleUI</p>
         </div>
         <div className='lg:w-[40%] w-full cursor-pointer p-2 flex items-center border border-gray rounded-xl dark:border-orange'>
           <p className='text-sm font-semibold dark:text-orange mb-2 px-2'>Untitledui-staging.com/</p>
         </div>
         </div>
         
         </div>

          {/*Default branch */}
         <div className='lg:flex md:flex items-center block lg:h-[15vh] md:h-fit h-fit lg:space-x-24 md:space-y-24 space-x-2 p-3'>
          <div className='w-[40%] lg:mb-0 md:mb-0 mb-2'>
          <h1 className='text-lg font-semibold dark:text-orange mb-2'>Default Branch</h1>
          <p className='font-semibold text-gray text-sm'>Change will update all URLs.</p>
         </div>
      
        <div className='w-full h-[12vh] flex items-end'>
         <div className='lg:w-[40%] w-full p-2 cursor-pointer flex items-center border border-gray rounded-xl dark:border-orange mb-2'>
           <p className='text-sm font-semibold dark:text-orange mb-2 px-2'>Main branch btk@untittleui.com</p>
         </div>
         </div>
         
         </div>

          {/*Tag-line */}
          <div className='lg:flex md:flex lg:mb-10 md:mb-0 mb-0 items-center block lg:h-[15vh] md:h-fit h-fit lg:space-x-24 md:space-y-24 space-x-2 p-3'>
            <div className='w-[40%] lg:mb-0 md:mb-0 mb-2'>
              <h1 className='text-lg font-semibold dark:text-orange mb-2'>Tagline</h1>
              <p className='font-semibold text-gray text-sm'>A quick snapshot of your application.</p>
            </div>
      
           <div className='w-full h-[12vh] flex items-end'>
            <div className='lg:w-[40%] w-full p-2 cursor-pointer flex items-center border border-gray rounded-xl dark:border-orange mb-2'>
              <p className='text-sm font-semibold dark:text-orange mb-2 px-2'>Untittle UI is thr ultimate Chart UI kit and design system to kickstart any project,
               startup or freelance designer.
             </p>
          </div>
         </div>
         
         </div>

          {/*Advance settings */}
          <div className='lg:flex md:flex block items-center lg:h-[15vh] md:h-fit h-fit lg:space-x-24 md:space-y-24 space-x-2 p-3 border-t border-gray'>
             <div className='lg:w-[40%] w-full lg:mb-0 md:mb-0 mb-2'>
              <h1 className='text-lg font-semibold dark:text-orange mb-2'>Advance Settings</h1>
               <p className='font-semibold cursor-pointer text-Darksky dark:text-orange text-sm'>Reset To Default.</p>
            </div>
          
          {/* content */}
          <div className='w-full lg:h-[15vh] md:h-[30vh] overflow-x-auto'>

            <div className='flex gap-2 mb-4'>
              <input type='checkbox' checked className='w-5 h-5 mt-2 text-Darksky'/>
              <div className='w-[100%]'>
                <h1 className='text-lg font-semibold dark:text-orange mb-2'>Allow administrators to Invite new members.</h1>
               <p className='font-semibold cursor-pointer text-gray text-sm'>Any administrator can manage application member and send invite.</p>
             </div>
            </div>
           
            <div className='flex gap-2 mb-4'>
              <input type='checkbox'  className='w-5 h-5 mt-2 text-Darksky'/>
              <div className='w-[100%]'>
                <h1 className='text-lg font-semibold dark:text-orange mb-2'>Allow administrators to change name.</h1>
               <p className='font-semibold cursor-pointer text-gray text-sm'>Any administrator can edit project deatils.</p>
             </div>
            </div>

            <div className='flex gap-2 mb-4'>
              <input type='checkbox' checked className='w-5 h-5 mt-2 text-Darksky'/>
              <div className='w-[100%]'>
                <h1 className='text-lg font-semibold dark:text-orange mb-2'>Require administrators for deploy request.</h1>
               <p className='font-semibold cursor-pointer text-gray text-sm'>Administrator must approve deploy request before they can be deploy.</p>
             </div>
            </div>
          </div>  
         </div>

         </div>
        {/*scrool horizontal */}
      </div>

      {/* pageloader */}
      <div className='z-0'><Pageloader/></div>
      {/* pageloader */}
    </div>
  )
}

export default Settings