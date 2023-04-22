import React from 'react'
import { Outlet } from 'react-router-dom';

const MiddleContent = () => {
  return (
    <div className='w-10/12 py-2 px-4'>
      <div className='bg-white  p-2 border border-gray-300 rounded-lg'>
        <Outlet />
      </div>
    </div>
  )
}

export default MiddleContent
