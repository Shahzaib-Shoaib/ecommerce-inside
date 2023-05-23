import React, { FC } from 'react'
import TopBar from './TopBar'
import NavBar from './NavBar'

const Header:FC = () => {
  return (
    <header className='fixed top-0 left-0 z-10 w-full'>
        <TopBar />
        <NavBar />
    </header>
  )
}

export default Header