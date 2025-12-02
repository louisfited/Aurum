"use client"
import { QuestionMark } from '@mui/icons-material'
import React from 'react'



const silverData = [
{
    name:"Zurich",
    total:"0.004kg",
    valuation:"7.3",
    sellAtBestPrice:["Dollars","Pounds","Euros"]
}

]
const Page = () => {
  return (
    <div>


{/* Account Info */}
<section className=' pt-2 bg-white dark:bg-darkOne rounded-lg'>
    <div className='flex justify-between text-xl font-semibold py-3 px-4'>
        <h1 className=''>Account Balance</h1>
        <span className='text-2xl'><QuestionMark/></span>
    </div>
    <div className='dark:bg-gray-500 bg-gray-300 py-2 px-2 rounded-t-lg px-4'>see your holdings</div>
</section>


{/* summary and valuation */}
<div className='mt-6 dark:bg-darkOne bg-white rounded-lg  overflow-hidden'>
    {/* header */}
    <section className='flex justify-between py-3 dark:bg-gray-500 bg-gray-300 px-2'>
        <span className='font-bold text-lg'>Summary</span>
        <div className='w-[25%]  flex justify-between'>
        <span className='font-bold text-lg'>Valuation</span>
        </div>
    </section>
    <section  className='flex flex-col gap-y-4 '> 
    <aside className='flex justify-between border-t-4 border-gray-500 p-2'>
        <span>Bullion</span>
        <div className='w-[25%]  flex justify-between'>
        <span>$7.36</span>
     
        </div>
    </aside>
    <aside className='flex justify-between border-t-2 border-gray-500 p-2'>
        <span>Currency</span>
        <div className='w-[25%]  flex justify-between'>
        <span>$7.36</span>
        {/* <span>$7.36</span> */}
        </div>
    </aside>
    <aside className='flex justify-between border-t-2 border-gray-500 p-2 font-semibold'>
        <span className=''>Total </span>
       <div className='w-[25%]  flex justify-between'>
       <span>$10.84</span>
       <span className='bg-gray-500 rounded-lg px-2 font-light'>Set Currency</span>
       </div>
    </aside>
    <aside className='flex justify-between border-t-2 border-gray-500 px-2 py-6 text-sm dark:bg-gray-500 bg-gray-300 opacity-80'>
        <span className=''> 02 Dec 2025 08:47:28 WAT </span>
       <div className='w-[25%]  flex justify-between'>
       <span>Valuations are shown as a guide only.</span>
       {/* <span className='bg-gray-500 rounded-lg px-2 font-light'>Set Currency</span> */}
       </div>
    </aside>

    </section>
</div>



{/* silver */}

<div className='my-4 '>
    <section className='flex justify-between font-bold'>
        <span>Silver</span>
        <div className='flex justify-between w-[25%]'>
            <span>Total</span>
            <span>Valuation</span>
            <span>Sell at best price</span>
        </div>
    </section>
    {/* data */}
    <section className='my-4'>
{silverData.map((item,index)=>{

    return <aside className='flex justify-between'>
         <span>{item.name}</span>
        <div className='w-[25%] flex justify-between'>
            <span>{item.total}</span>
            <span>{item.valuation}</span>
           
            <select name="" id="" className='dark:bg-darkOne'>
                {item.sellAtBestPrice.map((option,index)=>{

                    return <option value="">
                        {option}
                    </option>
                })}
            </select>
        </div>
    </aside>
})}

    </section>
</div>
    </div>
  )
}

export default Page