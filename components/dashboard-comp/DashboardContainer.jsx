import React from 'react'

const DashboardContainer = ({children}) => {
  return (
    <div className='flex lg:flex-row flex-col lg:gap-x-4 lg:gap-y-0 gap-y-6'>{children}</div>
  )
}

export default DashboardContainer