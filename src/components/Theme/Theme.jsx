import React, { useEffect, useState } from 'react'
import { BsFillSunFill, BsMoonStars } from "react-icons/bs"

const Theme = () => {

const [theme, setTheme] = useState('light');

// useeffect down here 
 useEffect(() =>{
   if (localStorage.getItem('theme') === null) {
     localStorage.setItem('theme', 'light');
   }
}, [])

useEffect (() => {
  const html = document.querySelector('html');
   if (localStorage.getItem('theme') === 'dark') {
     html.classList.add('dark');
     setTheme('dark'); 
   } else {
     html.classList.remove('dark');
     setTheme('light');
   }
}, [theme]);

// handle theme
const handleThemeSwitch = ()=> {
    if (localStorage.getItem('theme') === 'light') {
     setTheme('dark');
     localStorage.setItem('theme', 'dark');

    } else {
       setTheme('light');
       localStorage.setItem('theme', 'light');
    }
};

  return (
    <div>
        <button onClick={handleThemeSwitch}  className='p-1 rounded-full bg-Darkblue dark:bg-whitesmoke bg-opacity-75 outline-none'>
            {
                theme === 'light' ? <BsMoonStars className='text-whitesmoke'/> : <BsFillSunFill />
            }
        </button>
    </div>
  )
}

export default Theme