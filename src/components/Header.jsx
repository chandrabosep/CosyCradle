import React from 'react'
import head from '.././assets/icons/headphones.svg'
import "../App.css"

export default function Header() {
  return (
    <div className='flex flex-col text-lg text-slate-200 header' style={{color:"#e2e8f0"}}>
        <span className=' flex align-self justify-center text-xl mb-9 header-text'>Enjoy the relaxing sounds of your choice.</span>
        <div className='flex align-self justify-center mt-12'>
            <img src={head} alt="headphone" style={{width:"1.7rem"}} />
        </div>
        <div className='flex align-self justify-center'>
            <span>Best with headphones</span>
        </div>
    </div>
  )
}
