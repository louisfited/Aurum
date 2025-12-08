import React from 'react'
import { QuestionMark } from '@mui/icons-material'
import { Button, Container, Input } from '@mui/material'
const page = () => {
  return (
    <Container className=''>
{/* Account Info */}
<section className=' pt-2 bg-white dark:bg-darkOne rounded-lg '>
    <div className='flex justify-between text-xl font-semibold py-3 px-4'>
        <h1 className=''>Secure document transfer</h1>
        <span className='text-2xl'><QuestionMark/></span>
    </div>
    <div className='dark:bg-gray-500 bg-gray-300 py-2 px-2 rounded-t-lg px-4 '>Send documents securely to BullionVault.</div>
</section>




<section className='mt-10 py-4  px-2  bg-white dark:bg-darkOne rounded-lg'>
<div className='my-8'>
We are able to accept common image formats (e.g. .gif, .png, .jpg), simple text files (.txt, .rtf) and .pdf documents.
</div>



<form action="">
  <h1 className='my-4'>Choose a document to upload:</h1>
  <div className='border-2 rounded-lg  border-grayOne dark:darkGrayOne  p-2 my-2 '>
<Input type="file" className='w-full ' />
  </div>

<div className='flex justify-end my-3'>
<Button
  disableRipple
  className="!bg-primary !text-white  !rounded-lg "
>
  Upload
</Button>
</div>
</form>
<p>Documents successfully received: 0</p>


</section>


<section className='h-[100px] bg-white/50 dark:bg-darkOne/50  my-2 rounded-lg p-2'>

  <p>Please allow up to 5 working days for new documents to be processed. You will be emailed when your account is validated, or if there is a problem. If you have any queries please contact us.</p>
</section>
    </Container>
  )
}

export default page