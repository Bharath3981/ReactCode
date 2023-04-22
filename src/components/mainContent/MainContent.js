import React from 'react'
import SideBar from './SideBar'
import MiddleContent from './MiddleContent/MiddleContent'

const MainContent = () => {
  return (
    <div className='flex'>
      <SideBar />
      <MiddleContent />
    </div>
  )
}

export default MainContent
