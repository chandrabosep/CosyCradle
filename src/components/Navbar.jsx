import React from 'react'
import '../App.css'
import logo from ".././assets/icons/logo.svg"


export default function Navbar() {
  return (
    <nav>
      <div className='flex items-center ml-2 m-7 px-6 text-white justify-between'>
          <div className='flex flex-center'>
          <span className='lo-go'><img src={logo} alt="logo" /></span><h1 className='text-2xl font-semibold '>Ponder</h1>
          </div>
          About
      </div>
    </nav>
  )
}
