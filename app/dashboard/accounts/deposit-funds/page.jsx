import React from 'react'
import { QuestionMark } from '@mui/icons-material'





const Page = () => {
  return (
    <div className=' text-sm'>
{/* Account Info */}
<section className=' pt-2 bg-white dark:bg-darkOne rounded-lg'>
    <div className='flex justify-between text-xl font-semibold py-3 px-4'>
        <h1 className=''>Deposit Funds</h1>
        <span className='text-2xl'><QuestionMark/></span>
    </div>
    <div className='dark:bg-gray-500 bg-gray-300 py-2 px-2 rounded-t-lg px-4 '>How to send money from your bank account</div>
</section>


{/* second section */}
<section className='py-4 flex lg:flex-row flex-col gap-x-4 lg:gap-y-0 gap-y-4 '>

    {/* select your info */}
    <div className='lg:w-[40%] w-full dark:bg-darkOne rounded-lg  py-4 px-4 lg:max-h-[200px] lg:sticky top-[12%] left-[0%]'>
    <aside className=''>
    <h1 className=''>My bank account is in:</h1>
    <select name="" id="" className='dark:bg-darkOne w-full dark:border-gray-500 border-gray-300 border-2 p-2 rounded-lg mt-2'>
    <option value="">Nigeria</option>
    <option value="">Ghana</option>
    <option value="">Portugal</option>

    </select>
    </aside>

    <aside className='my-4'>

    <h1 className=''>I want to send :</h1>
    <select name="" id="" className='dark:bg-darkOne w-full dark:border-gray-500 border-gray-300 border-2 p-2 rounded-lg mt-2'>
    <option value="">USD</option>
    <option value="">Euro</option>
    <option value="">Naira</option>

    </select>
    </aside>
    </div>


{/* full details */}

<div className='lg:w-[60%] w-full px-4 bg-white dark:bg-darkOne rounded-lg pb-6'>
<header className=' pt-2  rounded-lg'>
        <h1 className='font-semibold text-xl'>Manual Bank Transfer</h1>
    <div className='flex justify-between items-center border-b-1'>
    <div className=''>Nigeria: to send US dollars</div>
        <span className='text-lg'><QuestionMark/></span>
    </div>
</header>

<aside className='bg-grayOne dark:bg-darkGrayOne my-4 px-4 rounded-md'>
    {/*  */}
<div className='flex lg:flex-row flex-col justify-between py-2 '>
    <span className='font-semibold'>Payee/Beneficiary:</span>
    <span>Aurum Client AC</span>
    
</div>
<div className='flex lg:flex-row flex-col justify-between py-2 '>
    <span className='font-semibold'>Payee/Beneficiary:</span>
    <span>Aurum Client AC</span>
    
</div>
<div className='flex lg:flex-row flex-col justify-between py-2 '>
    <span className='font-semibold'>Payee/Beneficiary:</span>
    <span>Aurum Client AC</span>
    
</div>
<div className='flex lg:flex-row flex-col justify-between py-2 '>
    <span className='font-semibold'>Payee/Beneficiary:</span>
    <span>Aurum Client AC</span>
    
</div>
<div className='flex lg:flex-row flex-col justify-between py-2 '>
    <span className='font-semibold'>Payee/Beneficiary:</span>
    <span>Aurum Client AC</span>
    
</div>
<div className='flex lg:flex-row flex-col justify-between py-2 '>
    <span className='font-semibold'>Payee/Beneficiary:</span>
    <span>Aurum Client AC</span>
    
</div>
<div className='flex lg:flex-row flex-col justify-between py-2 '>
    <span className='font-semibold'>Payee/Beneficiary:</span>
    <span>Aurum Client AC</span>
    
</div>
<div className='flex lg:flex-row flex-col justify-between py-2 '>
    <span className='font-semibold'>Payee/Beneficiary:</span>
    <span>Aurum Client AC</span>
    
</div>
<div className='flex lg:flex-row flex-col justify-between py-2 '>
    <span className='font-semibold'>Payee/Beneficiary:</span>
    <span>Aurum Client AC</span>
    
</div>



</aside>
{/* notice */}

<footer>
<p className='rounded-lg p2-2 bg-blue-500 p-4  '>You must make all deposits from the same bank account.</p>
<p className='my-4'>Deposits are processed within UK business hours. We will email you when the deposit arrives in your BullionVault account.</p>

<p className='mt-8'>We do not accept cash deposited over the counter, banker's cheques or other methods where we cannot identify the sending party.</p>
</footer>
</div>


</section>



{/* third section */}






    </div>
  )
}

export default Page