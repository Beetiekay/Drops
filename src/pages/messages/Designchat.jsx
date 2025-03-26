import React from 'react'
import { FaChevronLeft, FaEllipsisV, FaEye, FaFire, FaPhone, FaPlayCircle, FaSearch, FaThumbsUp, FaUser } from 'react-icons/fa'
import { IoAttachOutline, IoMic, IoSend } from 'react-icons/io5'
import image from "../../assets/laye.jpg"
import Groups from './Groups'
import { Link } from 'react-router-dom'

const Designchat = () => {
  return (
    <div className='p-2 h-[100vh]  dark:bg-black'>
        {/* Header */}
        <div className='flex justify-between items-center sticky'>
         <div className='dark:text-orange text-gray lg:hidden md:hidden flex'><Link to={"/Chats"}><FaChevronLeft size={22}/></Link></div> 
            <div >
                <h1 className='lg:text-3xl md:text-3xl text-2xl opacity-85 font-semibold dark:text-orange'>Design Chat</h1>
                <p className='text-sm font-semibold text-gray dark:opacity-40'>23 members, 10 online</p>
            </div>

            <div className='flex'>
              <button className='outline-none text-gray dark:opacity-40 p-2 rounded-xl hover:bg-Darksky hover:text-whitesmoke'><FaSearch size={20}/></button>
              <button className='outline-none text-gray dark:opacity-40 p-2 rounded-xl hover:bg-Darksky hover:text-whitesmoke'><FaPhone size={20}/></button>
              {/* tab & mobil fuction */}
              <div className=''>
                <input type="checkbox" className=' peer z-20 opacity-0 transition-all cursor-pointer w-5 h-6 absolute lg:top-8 md:top-8 top-5 lg:ml-0 md:ml-0 ml-2'/>
              <button className='outline-none  lg:mt-0 md:mt-1 text-gray dark:opacity-40 p-2 rounded-xl hover:bg-Darksky hover:text-whitesmoke'><FaEllipsisV size={20}/></button>
              <div className='relative w-full lg:hidden md:hidden top-2 transition-transform hidden  peer-checked:block' >
                <div className='absolute lg:h-fit lg:opacity-0 opacity-100 bg-white bg-opacity-65 dark:bg-black md:h-fit h-[70vh] overflow-y-auto lg:w-96 md:w-96 w-64 right-4'><Groups/></div>
              </div>
              </div>
              {/* tab & mobil fuction */}
            </div>
        </div>
        {/* Header */}
         
         {/* content */}
        <div className='lg:h-[78vh] md:h-[78vh] h-[82vh] overflow-y-auto'>

          <div className='flex gap-4 mt-4 mb-4'>
            <div className='flex items-end'><button className='text-black mb-2 bg-black dark:text-whitesmoke dark:bg-opacity-25 dark:bg-Darksky bg-opacity-25 p-2 shadow-md rounded-full'><FaUser size={20}/></button></div>
            <div className='lg:w-[50%] md:w-[50%] w-[70%] bg-black bg-opacity-10 p-3 rounded-2xl dark:bg-opacity-25 dark:bg-Darksky'>
              <h1 className='font-semibold dark:text-whitesmoke text-Darkblue mb-1'>Jasmine Lowery</h1>
              <p className='mb-2 text-sm dark:text-whitesmoke'>I Added New order to our design system Now you can use it for killing hunger.</p>

              <div className='flex justify-between'>
                <div ><button className='flex items-center dark:text-black dark:bg-whitesmoke p-1 focus:text-orange rounded-full bg-black text-whitesmoke shadow-md gap-1'><FaThumbsUp size={15}/><p className='font-semibold'>4</p></button></div>
                <div className='flex text-sm items-center gap-4 dark:text-whitesmoke font-semibold'>
                  <div className='flex items-center'><FaEye size={18}/><p>23</p></div>
                  <div><p>09:20</p></div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex px-12 gap-4'>
            <div className='lg:w-[50%] md:w-[50%] w-[70%] bg-black bg-opacity-10 p-3 rounded-2xl dark:bg-opacity-25 dark:bg-Darksky'>
              <h1 className='font-semibold dark:text-whitesmoke text-Darkblue mb-1'>Alex Hunt</h1>
              <p className='mb-2 text-sm dark:text-whitesmoke'>Hey guyz! important news.</p>

              <div className='flex justify-end'>
                <div className='flex text-sm items-center gap-4 dark:text-whitesmoke font-semibold'>
                  <div className='flex items-center'><FaEye size={18}/><p>23</p></div>
                  <div><p>09:20</p></div>
                </div>
              </div>
            </div>
          </div>

         <div className='flex gap-4 mt-4 mb-4'>
            <div className='flex items-end'><button className='text-black mb-2 bg-black dark:text-whitesmoke dark:bg-opacity-25 dark:bg-Darksky bg-opacity-25 p-2 shadow-md rounded-full'><FaUser size={20}/></button></div>
            <div className='lg:w-[50%] md:w-[50%] w-[70%] bg-black bg-opacity-10 p-3 rounded-2xl dark:bg-opacity-25 dark:bg-Darksky'>
              <h1 className='font-semibold dark:text-whitesmoke text-Darkblue mb-1'>Alex Hunt</h1>
              <p className='mb-2 text-sm dark:text-whitesmoke'>Our intern <span className='text-Darkblue'>@jchurch</span> has successfully completed his probationary period and is now part of our team!</p>

              <div className='flex justify-between'>
                <div className='flex gap-2'>
                <button className='flex items-center dark:text-black dark:bg-whitesmoke p-1 focus:text-orange rounded-full bg-black text-whitesmoke shadow-md gap-1'><FaFire size={15}/><p className='font-semibold'>4</p></button>
                  <button className='flex items-center dark:text-black dark:bg-whitesmoke p-1 focus:text-orange rounded-full bg-black text-whitesmoke shadow-md gap-1'><FaThumbsUp size={15}/><p className='font-semibold'>4</p></button>
                </div>
                <div className='flex text-sm items-center gap-4 dark:text-whitesmoke font-semibold'>
                  <div className='flex items-center'><FaEye size={18}/><p>23</p></div>
                  <div><p>09:20</p></div>
                </div>
              </div>
            </div>
         </div>

          <div className='flex justify-end gap-4 mt-4 mb-4'>
            <div className='lg:w-[50%] md:w-[50%] w-[70%] bg-black bg-opacity-10 p-3 rounded-2xl dark:bg-opacity-25 dark:bg-Darksky'>
              <p className='mb-2 text-sm dark:text-whitesmoke'>Jaden, my congratulations! i would like to work with you on a new project.</p>

              <div className='flex justify-end'>
                <div className='flex text-sm items-center gap-4 dark:text-whitesmoke font-semibold'>
                  <div className='flex items-center'><FaEye size={18}/><p>23</p></div>
                  <div><p>09:20</p></div>
                </div>
              </div>
            </div>
            <div className='flex items-end'><button className='text-black mb-2 bg-black dark:text-whitesmoke dark:bg-opacity-25 dark:bg-Darksky bg-opacity-25 p-2 shadow-md rounded-full'><FaUser size={20}/></button></div>
          </div>
          
           <div className='mb-2'>
            <img src={image} className='lg:w-[50%] md:w-[50%] w-[70%] h-48 rounded-2xl object-cover'/>
           </div>

           <div className='flex gap-4 mb-5'>
            <div className='flex items-end'><button className='text-black mb-2 bg-black dark:text-whitesmoke dark:bg-opacity-25 dark:bg-Darksky bg-opacity-25 p-2 shadow-md rounded-full'><FaUser size={20}/></button></div>
            <div className='lg:w-[50%] md:w-[50%] w-[70%] bg-black bg-opacity-10 p-3 rounded-2xl dark:bg-opacity-25 dark:bg-Darksky'>
            <h1 className='font-semibold dark:text-whitesmoke text-Darkblue mb-1'>AlexJessica Rollings</h1>
            <div className='flex gap-3 items-center'>
            <button className='text-black mb-2 focus:opacity-25 bg-black dark:text-whitesmoke dark:bg-opacity-25 dark:bg-Darksky bg-opacity-25 p-2 shadow-md rounded-full'><FaPlayCircle size={20}/></button>
             <div className='w-40 h-2 bg-gray rounded-2xl shadow-md'></div>
            </div>
             <div className='flex justify-end text-sm items-center gap-4 dark:text-whitesmoke font-semibold'>
               <div className='flex items-center'><FaEye size={18}/><p>23</p></div>
               <div><p>09:20</p></div>
              </div>
           </div>
           </div>
        
        </div>
         {/* content */}

        {/* Typing */}
        <div className='fixed bottom-0 w-full left-0 '>
            <form action='' className='flex items-center  bg-whitesmoke p-2 dark:bg-black dark:border dark:border-orange rounded-2xl shadow-md'>
              <IoAttachOutline size={35} className='text-gray dark:text-orange'/>
              <input type='text' placeholder='Your Message' className='w-full outline-none bg-whitesmoke dark:bg-black p-2'/>
              <div className='flex gap-4'>
                <button><IoMic size={25} className='text-gray dark:text-orange'/></button>
                <button type='submit'><IoSend size={25} className='text-gray dark:text-orange'/></button>
              </div>
            </form>
        </div>
        {/* Typing */}
    </div>
  )
}

export default Designchat