import React from 'react'

const Order = () => {
  return (
  <div className='w-full'>
    <div className='p-4 -mt-4 flex'>
    <div className='space-y-7'>
      <p className='font-semibold dark:opacity-40 text-gray text-sm'>800k</p>
      <p className='font-semibold dark:opacity-40 text-gray text-sm'>600k</p>
      <p className='font-semibold dark:opacity-40 text-gray text-sm'>400k</p>
      <p className='font-semibold dark:opacity-40 text-gray text-sm'>200k</p>
    </div>

    <div className='w-screen gap-2 flex justify-around p-2'>
     {/* 1 */}
     <div className='w-20 h-44 flex items-end gap-2'>
       <div className='w-[40%] h-[20vh] bg-Darksky rounded-t-2xl'>
        <button className='p-1 rounded-lg relative z-20 bg-whitesmoke shadow-md right-5 top-8 opacity-0 hover:opacity-100 '>
            <p className='font-semibold text-sm'>April</p>
            <p className='font-semibold text-sm'>02/05/2024</p>
        </button>
       </div>
       <div className='w-[40%] h-[27vh] bg-olivedrab rounded-t-2xl'>
        <button className='p-1 rounded-lg relative z-20 bg-whitesmoke shadow-md right-5 top-0 opacity-0 hover:opacity-100 '>
            <p className='font-semibold text-sm'>April</p>
            <p className='font-semibold text-sm'>20/05/2024</p>
        </button>

        <button className='p-1 rounded-lg relative z-20 bg-whitesmoke shadow-md right-5 top-20 opacity-0 hover:opacity-100 '>
            <p className='font-semibold text-sm'>April</p>
            <p className='font-semibold text-sm'>07/05/2024</p>
        </button>
       </div>
     </div>
      {/* 2 */}
     <div className='w-20 h-44 flex items-end gap-2'>
       <div className='w-[40%] h-[12vh] bg-Darksky rounded-t-2xl'>
       <button className='p-1 rounded-lg relative z-20 bg-whitesmoke shadow-md right-5 top-8 opacity-0 hover:opacity-100 '>
            <p className='font-semibold text-sm'>March</p>
            <p className='font-semibold text-sm'>01/06/2024</p>
        </button>
       </div>
       <div className='w-[40%] h-[19vh] bg-olivedrab rounded-t-2xl'>
       <button className='p-1 rounded-lg relative z-20 bg-whitesmoke shadow-md right-5 top-0 opacity-0 hover:opacity-100 '>
            <p className='font-semibold text-sm'>April</p>
            <p className='font-semibold text-sm'>24/06/2024</p>
        </button>
       </div>
     </div>
      {/* 3 */}
     <div className='w-20 h-44 flex items-end gap-2'>
       <div className='w-[40%] h-[15vh] bg-Darksky rounded-t-2xl'>
       <button className='p-1 rounded-lg relative z-20 bg-whitesmoke shadow-md right-5 top-8 opacity-0 hover:opacity-100 '>
            <p className='font-semibold text-sm'>June</p>
            <p className='font-semibold text-sm'>08/07/2024</p>
        </button>
       </div>
       <div className='w-[40%] h-[10vh] bg-olivedrab rounded-t-2xl'></div>
     </div>
     {/* 4 */}
     <div className='w-20 h-44 flex items-end gap-1'>
       <div className='w-[40%] h-[25vh] bg-Darksky rounded-t-2xl'>
       <button className='p-1 rounded-lg relative z-20 bg-whitesmoke shadow-md right-5 top-8 opacity-0 hover:opacity-100 '>
            <p className='font-semibold text-sm'>July</p>
            <p className='font-semibold text-sm'>10/08/2024</p>
        </button>
       </div>
       <div className='w-[40%] h-[16vh] bg-olivedrab rounded-t-2xl'>
       <button className='p-1 rounded-lg relative z-20 bg-whitesmoke shadow-md right-5 top-8 opacity-0 hover:opacity-100 '>
            <p className='font-semibold text-sm'>July</p>
            <p className='font-semibold text-sm'>02/08/2024</p>
        </button>
       </div>
     </div>
      {/* 5 */}
     <div className='w-20 h-44 flex items-end gap-2'>
       <div className='w-[40%] h-[27vh] bg-Darksky rounded-t-2xl'>
       <button className='p-1 rounded-lg relative z-20 bg-whitesmoke shadow-md right-5 top-8 opacity-0 hover:opacity-100 '>
            <p className='font-semibold text-sm'>August</p>
            <p className='font-semibold text-sm'>02/09/2024</p>
        </button>
       </div>
       <div className='w-[40%] h-[10vh] bg-olivedrab rounded-t-2xl'></div>
     </div>
     {/* 6 */}
     <div className='w-20 h-44 flex items-end gap-2'>
       <div className='w-[40%] h-[20vh] bg-Darksky rounded-t-2xl'>
       <button className='p-1 rounded-lg relative z-20 bg-whitesmoke shadow-md right-5 top-8 opacity-0 hover:opacity-100 '>
            <p className='font-semibold text-sm'>September</p>
            <p className='font-semibold text-sm'>09/10/2024</p>
        </button>
       </div>
       <div className='w-[40%] h-[27vh] bg-olivedrab rounded-t-2xl'>
       <button className='p-1 rounded-lg relative z-20 bg-whitesmoke shadow-md right-5 top-0 opacity-0 hover:opacity-100 '>
            <p className='font-semibold text-sm'>September</p>
            <p className='font-semibold text-sm'>30/10/2024</p>
        </button>
       </div>
     </div>
     {/* 7 */}
     <div className='w-20 h-44 flex items-end gap-2'>
       <div className='w-[40%] h-[10vh] bg-Darksky rounded-t-2xl'>
       <button className='p-1 rounded-lg relative z-20 bg-whitesmoke shadow-md right-5 top-3 opacity-0 hover:opacity-100 '>
            <p className='font-semibold text-sm'>October</p>
            <p className='font-semibold text-sm'>12/11/2024</p>
        </button>
       </div>
       <div className='w-[40%] h-[27vh] bg-olivedrab rounded-t-2xl'>
       <button className='p-1 rounded-lg relative z-20 bg-whitesmoke shadow-md right-5 top-8 opacity-0 hover:opacity-100 '>
            <p className='font-semibold text-sm'>April</p>
            <p className='font-semibold text-sm'>11/07/2024</p>
        </button>
       </div>
     </div>
     {/* 8 */}
     <div className='w-20 h-44 flex items-end gap-2'>
       <div className='w-[40%] h-[10vh] bg-Darksky rounded-t-2xl'>
       <button className='p-1 rounded-lg relative z-20 bg-whitesmoke shadow-md right-5 top-8 opacity-0 hover:opacity-100 '>
            <p className='font-semibold text-sm'>November</p>
            <p className='font-semibold text-sm'>02/12/2024</p>
        </button>
       </div>
       <div className='w-[40%] h-[13vh] bg-olivedrab rounded-t-2xl'></div>
     </div>
      {/* 9 */}
     <div className='w-20 h-44 flex items-end gap-2'>
       <div className='w-[40%] h-[20vh] bg-Darksky rounded-t-2xl'>
       <button className='p-1 rounded-lg relative z-20 bg-whitesmoke shadow-md right-5 top-2 opacity-0 hover:opacity-100 '>
            <p className='font-semibold text-sm'>December</p>
            <p className='font-semibold text-sm'>21/12/2024</p>
        </button>
       </div>
       <div className='w-[40%] h-[12vh] bg-olivedrab rounded-t-2xl'></div>
     </div>
     {/* 10 */}
     <div className='w-20 h-44 flex items-end gap-2'>
       <div className='w-[40%] h-[20vh] bg-Darksky rounded-t-2xl'>
       <button className='p-1 rounded-lg relative z-20 bg-whitesmoke shadow-md right-5 top-1 opacity-0 hover:opacity-100 '>
            <p className='font-semibold text-sm'>January</p>
            <p className='font-semibold text-sm'>01/01/2025</p>
        </button>
       </div>
       <div className='w-[40%] h-[27vh] bg-olivedrab rounded-t-2xl'>
       <button className='p-1 rounded-lg relative z-20 bg-whitesmoke shadow-md right-5 top-5 opacity-0 hover:opacity-100 '>
            <p className='font-semibold text-sm'>January</p>
            <p className='font-semibold text-sm'>21/01/2025</p>
        </button>
       </div>
     </div>
     {/* 11 */}
     <div className='w-20 h-44 flex items-end gap-2'>
       <div className='w-[40%] h-[28vh] bg-Darksky rounded-t-2xl'>
       <button className='p-1 rounded-lg relative z-20 bg-whitesmoke shadow-md right-5 top-1 opacity-0 hover:opacity-100 '>
            <p className='font-semibold text-sm'>February</p>
            <p className='font-semibold text-sm'>01/02/2025</p>
        </button>
       </div>
       <div className='w-[40%] h-[7vh] bg-olivedrab rounded-t-2xl'></div>
     </div>
     {/* 12 */}
     <div className='w-20 h-44 flex items-end gap-2'>
       <div className='w-[40%] h-[6vh] bg-Darksky rounded-t-2xl'></div>
       <div className='w-[40%] h-[28vh] bg-olivedrab rounded-t-2xl'>
       <button className='p-1 rounded-lg relative z-20 bg-whitesmoke shadow-md right-5 top-1 opacity-0 hover:opacity-100 '>
            <p className='font-semibold text-sm'>January</p>
            <p className='font-semibold text-sm'>31/03/2025</p>
        </button>
       </div>
     </div>
    </div>
  </div>

   <div className='w-screen flex gap-[2.7rem] p-2 -mt-7 ml-12'>
      <p className='font-semibold dark:opacity-40 text-gray text-sm'>April</p>
      <p className='font-semibold dark:opacity-40 text-gray text-sm'>March</p>
      <p className='font-semibold dark:opacity-40 text-gray text-sm'>June</p>
      <p className='font-semibold dark:opacity-40 text-gray text-sm'>July</p>
      <p className='font-semibold dark:opacity-40 text-gray text-sm'>August</p>
      <p className='font-semibold dark:opacity-40 text-gray text-sm'>September</p>
      <p className='font-semibold dark:opacity-40 text-gray text-sm'>October</p>
      <p className='font-semibold dark:opacity-40 text-gray text-sm'>November</p>
      <p className='font-semibold dark:opacity-40 text-gray text-sm'>December</p>
      <p className='font-semibold dark:opacity-40 text-gray text-sm'>January</p>
      <p className='font-semibold dark:opacity-40 text-gray text-sm'>February</p>
      <p className='font-semibold dark:opacity-40 text-gray text-sm'>March</p>
   </div>
  </div>
  )
}

export default Order