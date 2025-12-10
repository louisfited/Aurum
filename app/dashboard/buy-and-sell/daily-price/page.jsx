import BuySellWizard from '@/components/BuySellWizard'
import HeaderComp from '@/components/dashboard-comp/HeaderComp'
import { Button, Input, MenuItem, Select } from '@mui/material'
import React from 'react'

const Page = () => {
  return (
    <div>
 <HeaderComp title="Daily Price" description= {"Buy/sell at the London Price"} />


<section className='mt-10 py-4     flex lg:flex-row flex-col lg:gap-x-4 lg:gap-y-0 gap-y-6'>

<div  className='bg-white dark:bg-darkOne rounded-lg lg:w-[70%] px-4 py-3 '>


    {/*   I want to  */}
<aside className=' '>
  

    <h1 className='font-semibold text-lg'>I want to</h1>
    {/* border-grayOne dark:border-darkGrayOne border-2 rounded-md */}


<article className='flex flex-col gap-y-6 my-4'>

    {/* buy or sell */}


    <div className=''>
    <Select
      className="w-full h-[30px] !text-black dark:!text-white "
      MenuProps={{
        classes: {
          paper: "dark:bg-darkOne dark:text-white  rounded-lg ",
        },
    }}
      value={"buy"}
      //   onChange={(e) => {
    //       setValue(e.target.value);
    //       console.log("selected:", e.target.value);
    //   }}
    >
      <MenuItem value={"buy"}>buy</MenuItem>
      <MenuItem value={"sell"}>sell</MenuItem>
  
    </Select>
    </div>
    <div className=''>
    <Select
      className="w-full h-[30px] !text-black dark:!text-white "
      MenuProps={{
          classes: {
              paper: "dark:bg-darkOne dark:text-white  rounded-lg ",
            },
      }}
      value={"gold"}
      //   onChange={(e) => {
        //       setValue(e.target.value);
        //       console.log("selected:", e.target.value);
        //   }}
        >
      <MenuItem value={"gold"}>gold</MenuItem>
      <MenuItem value={"silver"}>silver</MenuItem>
  
    </Select>
    </div>
          </article>

        

</aside>



    {/*   I want to spend up to */}
<aside className=' '>
  

    <h1 className='font-semibold text-lg'>I want to spend up to
    </h1>
    {/* border-grayOne dark:border-darkGrayOne border-2 rounded-md */}


<article className='flex flex-col gap-y-6 my-4'>

    {/* buy or sell */}


    <div className=''>
    <Input
  disableUnderline
  className="w-full h-[30px] !text-black dark:!text-white rounded-md px-3 !outline-none border-2 !border-darkOne dark:!border-darkGrayOne rounded-md px-3"
/>
    </div>
    <div className=''>
    <Select
      className="w-full h-[30px] !text-black dark:!text-white "
      MenuProps={{
          classes: {
              paper: "dark:bg-darkOne dark:text-white  rounded-lg ",
            },
      }}
      value={"dollar"}
      //   onChange={(e) => {
        //       setValue(e.target.value);
        //       console.log("selected:", e.target.value);
        //   }}
        >
      <MenuItem value={"dollar"}>dollar</MenuItem>
      <MenuItem value={"pounds"}>pounds</MenuItem>
  
    </Select>
    </div>
          </article>

        

</aside>

<div className='w-full '>
    <Button
    
    className={"w-full !bg-primary !text-white !font-semibold"} >Buy</Button>
</div>



<footer className='dark:bg-gray-800  bg-gray-200 text-sm mt-2 py-4'> 

<p className='my-2'>We charge 0.5% for buying or selling gold, silver, platinum or palladium at the Daily Price. There is an additional 0.3% currency-switching fee for Daily Price orders set in British Pounds or in Euros.</p>
<p>

<a href="">How do orders at the Daily Price work?</a>
</p>
</footer>
</div>


<div className='lg:w-[30%] h-[200px]  lg:sticky top-6'>
 <BuySellWizard/>
</div>
</section>

    </div>
  )
}

export default Page