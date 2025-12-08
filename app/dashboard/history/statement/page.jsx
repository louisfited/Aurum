import BuySellWizard from '@/components/BuySellWizard'
import DashboardContainer from '@/components/dashboard-comp/DashboardContainer'
import HeaderComp from '@/components/dashboard-comp/HeaderComp'
import { Button, Input, MenuItem, Select } from '@mui/material'
import React from 'react'

const Page = () => {
  return (
    <div className='lg:px-0 px-2'>

<HeaderComp title="Statement" description={"View your account statement"}/>



<DashboardContainer>

<section className='lg:w-[70%] mt-6 dark:bg-darkOne bg-white rounded-lg  overflow-hidden px-2 py-4'>
<div className='border-b-2 border-gray-500  py-4'>
{/* monthly statement */}
<aside className='flex justify-between lg:flex-row flex-col lg:gap-y-0 gap-y-4'>
<p className='text-end lg:text-start lg:w-[30%] w-full'>Monthly statement (pdf)</p>
<div className='lg:w-[30%] w-full'>
<Select
      className="!w-full h-[30px] !text-black dark:!text-white border-[1px] border-gray dark:border-grayOne"
      MenuProps={{
        classes: {
          paper: "dark:bg-darkOne dark:text-white  rounded-lg shadow-lg",
        },
      }}
    //   value={value}
    //   onChange={(e) => {
    //       setValue(e.target.value);
    //       console.log("selected:", e.target.value);
    //   }}
      >
      <MenuItem value={"last 30 days"}>27th of November</MenuItem>
   
    </Select>
</div>


<div className='lg:w-[30%] w-full'>
<Button className=' rounded-lg w-full !bg-primary !text-white'>Download</Button>
</div>
</aside>


{/* from to */}
<aside className='flex justify-between lg:flex-row flex-col mt-4'>
    {/*  */}
<div className='lg:w-[30%] flex flex-col gap-y-2'>
    <p className='font-semibold'>From</p>
  <article>
    <Input  type='date' className='rounded-lg  w-full border-[1px] border-gray dark:border-grayOne' />
  </article>
</div>
    {/*  */}
<div className='lg:w-[30%] flex flex-col gap-y-2'>
    <p className='font-semibold'>To</p>
  <article>
    <Input  type='date' className='rounded-lg  w-full border-[1px] border-gray dark:border-grayOne' />
  </article>
</div>
    {/*  */}
<div className='lg:w-[30%] flex flex-col gap-y-2'>
    <p className='font-semibold'>Show</p>
  <article>
  <Select
      className="!w-full h-[30px] !text-black dark:!text-white border-[1px] border-gray dark:border-grayOne"
      MenuProps={{
        classes: {
          paper: "dark:bg-darkOne dark:text-white  rounded-lg shadow-lg",
        },
      }}
    //   value={value}
    //   onChange={(e) => {
    //       setValue(e.target.value);
    //       console.log("selected:", e.target.value);
    //   }}
      >
      <MenuItem value={"last 30 days"}>27th of November</MenuItem>
   
    </Select>
  </article>
</div>

</aside>

</div>


<aside className='flex justify-end py-2'>
    <Button className='!bg-gray-500 !text-white'>Export</Button>
</aside>




</section>

    {/* buy sell wizard */}
<>
<div className='lg:w-[30%] h-[200px] mt-6 lg:sticky top-6'>
 <BuySellWizard/>
</div>
</>
</DashboardContainer>
    </div>
  )
}

export default Page