import React from 'react'
import CountUp from 'react-countup'


const Piechart = () => {
  return (
    <div>
        <div className='w-full h-[35vh] p-2 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 lg:px-5 md:px-1 lg:gap-0 md:gap-2 gap-2 md:mt-5'>
          {/* Face 1 */}
          <div>
            <div className='lg:w-[80%] md:w-[100%] lg:h-[23vh] md:h-[23vh] h-[20vh] mb-2 flex justify-end dark:bg-gray dark:bg-opacity-25 bg-whitesmoke shadow-md rounded-full overflow-hidden'>
                <div className='w-[60%] h-[24vh] flex items-center rounded-l-2xl bg-Darksky'>
                    <button className='flex justify-center md:w-[100%] lg:p-5 md:p-5 p-7 items-center lg:h-[14.1vh] md:h-[13.1vh] h-[14.2vh] lg:-mt-1 md:-mt-1 -mt-6 relative lg:-left-[1.9rem] md:-left-[3rem] -left-[2.2rem] text-2xl font-bold rounded-full bg-whitesmoke shadow-md'><CountUp start={0} end={81} delay={2}/><p>%</p></button>
                </div>
            </div>
            <p className='font-semibold lg:ml-3 md:ml-12 ml-2 text-xl dark:opacity-40 dark:text-gray'>Invoice Mode</p>
          </div>
          {/* Face 1 */}

           {/* Face 2 */}
           <div>
           <div className='lg:w-[80%] md:w-[100%] lg:h-[23vh] md:h-[23vh] h-[20vh] mb-2 flex justify-end dark:bg-gray dark:bg-opacity-25 bg-whitesmoke shadow-md rounded-full overflow-hidden'>
                <div className='w-[65%] h-[18.5vh] flex items-center rounded-l-2xl bg-olivedrab'>
                    <button className='flex items-center justify-center md:w-[100%] lg:h-[14.1vh] md:h-[13.4vh] lg:p-5 md:p-5 p-7 h-[14.2vh] lg:mt-7 md:mt-12 mt-4 relative lg:-left-[1.9rem] md:-left-[3rem] -left-[1.7rem] text-2xl font-bold rounded-full bg-whitesmoke shadow-md'><CountUp start={0} end={22} delay={2}/><p>%</p></button>
                </div>
            </div>
             <p className='font-semibold lg:ml-3 md:ml-12 ml-2 text-xl dark:opacity-40 dark:text-gray'>Clients Growth</p>
          </div>
          {/* Face 2 */}

           {/* Face 3 */}
           <div>
           <div className='lg:w-[80%] md:w-[100%] lg:h-[23vh] md:h-[23vh] h-[20vh] mb-2 flex justify-end bg-whitesmoke dark:bg-gray dark:bg-opacity-25 shadow-md rounded-full overflow-hidden'>
                <div className='w-[70%] h-[24vh] flex items-center rounded-l-2xl bg-orange'>
                    <button className='flex justify-center md:w-[85%] items-center lg:h-[14.1vh] md:h-[13.1vh] lg:p-5 md:p-5 p-7 h-[14.2vh] lg:-mt-1 md:mt-1 -mt-6 relative lg:-left-[1rem] md:-left-[1.3rem] -left-5 text-2xl font-bold rounded-full bg-whitesmoke shadow-md'><CountUp start={0} end={62} delay={2}/><p>%</p></button>
                </div>
            </div>
             <p className='font-semibold lg:ml-3 md:ml-12 ml-5 text-xl dark:opacity-40 dark:text-gray'>Project Done</p>
          </div>
          {/* Face 3 */}
        </div>
    </div>
  )
}

export default Piechart