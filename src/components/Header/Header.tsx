import React, { FC } from 'react'
import TopBar from './TopBar'
import Navbar from './Navbar'

const Header:FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
        <TopBar />
        <Navbar />
    </header>
  )
}

export default Header