import React from 'react'
import SideWrapper from './SideWrapper'
import MainContentWrapper from './MainContentWrapper'

const AppWrapper = () => {
  return (
    <div className='app-wrapper'>
        <SideWrapper></SideWrapper>
        <MainContentWrapper></MainContentWrapper>
    </div>
  )
}

export default AppWrapper