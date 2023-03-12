import React from 'react'
import '../App.css'
import logo from ".././assets/icons/logo.svg"
import {  Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className='flex items-center mx-10 mt-6 text-white justify-between'>
          <div className='flex flex-center'>
            <span className='lo-go'><img src={logo} alt="logo" /></span><span className='text-lg font-normal ' style={{cursor:'pointer'}}>
              <li className='list-none'><Link to="/">CosyCradle</Link></li>
            </span>
          </div>
          <div className='float-right'>
            <span style={{cursor:'pointer'}} className="text-base">
            <li className='list-none'>
                <Link to="/about">About</Link>
            </li>
            </span>
          </div>
      </div>
    </nav>
  )
}
