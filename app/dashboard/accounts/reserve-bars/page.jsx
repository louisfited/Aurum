"use client"
import React, { useState } from 'react'
import { QuestionMark } from '@mui/icons-material'
import { FaExclamation } from "react-icons/fa6";

const page = () => {
  const [currentBtn,setCurrentBtn] = useState("available-bars")
  return (
<div>
    <section className=' pt-2 bg-white dark:bg-darkOne rounded-lg'>
        <div className='flex justify-between text-xl font-semibold py-3 px-4'>
            <h1 className=''>Reserve bars in the vault</h1>
            <span className='text-2xl'><QuestionMark/></span>
        </div>
        <div className='dark:bg-gray-500 bg-gray-300 py-2 px-2 rounded-t-lg px-4 text-sm'>Manage vaulted bars held exclusively in your name.</div>
    </section>


    <section className=' pt-2 bg-white dark:bg-darkOne rounded-lg my-4 p-2'>
{/* btn container */}
<div className='flex justify-between gap-x-2'>
<button onClick={()=> setCurrentBtn("available-bars")} className={`w-[48%] rounded-t-lg md:text-xl text-lg text-center md:py-4 py-2 broder-grayOne dark:border-darkGrayOne border-[2px] ${currentBtn == "available-bars" ? "bg-gray-500" : ""}`} >Available bars</button>
<button  onClick={()=> setCurrentBtn("reserved-bars")} className={`w-[48%] rounded-t-lg md:text-xl text-lg text-center md:py-4 py-2 broder-grayOne dark:border-darkGrayOne border-[2px] ${currentBtn == "reserved-bars" ? "bg-gray-500" : ""}`}>Reserved Bars</button>
</div>

<div className='py-4 '>

    {currentBtn == "reserved-bars" ? (
      <div className='text-center'>
        you currently have no bars reserved to your name
      </div>
    ):(
     
          <div className='text-center flex items-center justify-center'>
         <span className='bg-blue-500 rounded-full'><FaExclamation/></span> <span>You do not have enough bullion in any one vault to reserve a bar</span>
      </div>
     
    )}

    </div>
    </section>
    
    
    </div>
  )
}

export default page