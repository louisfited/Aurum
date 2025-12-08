import { QuestionMark } from '@mui/icons-material'
import React from 'react'

const HeaderComp = ({title,description}) => {
  return (
    <section className=' pt-2 bg-white dark:bg-darkOne rounded-lg'>
        <div className='flex justify-between text-xl font-semibold py-3 px-4'>
            <h1 className=''>{title}</h1>
            <span className='text-2xl'><QuestionMark/></span>
        </div>
       {description && <div className='dark:bg-gray-500 bg-gray-300 py-2 px-2 rounded-t-lg px-4 text-sm'>{description}</div>} 
    </section>
  )
}

export default HeaderComp