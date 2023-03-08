import React from 'react'
import '../App.css'
import logo from ".././assets/icons/logo.svg"


export default function Navbar() {
  return (
    <nav>
      <div className='flex items-center mx-10 mt-6 text-white justify-between'>
          <div className='flex flex-center'>
            <span className='lo-go'><img src={logo} alt="logo" /></span><span className='text-2xl font-semibold '>Ponder</span>
          </div>
          <div className='float-right'>
            <span>
              About
            </span>
          </div>
      </div>
    </nav>
  )
}
