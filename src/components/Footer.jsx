import React from 'react'
import "../App.css"
import insta from ".././assets/icons/Instagram.svg"
import twitter from ".././assets/icons/Twitter.svg"
import github from ".././assets/icons/Github.svg"



export default function Footer() {
  return (
    <div className='footer mx-auto max-w-screen-xl px-4 py-8 lg:px-8 border-t border-t-slate-400'>
      <div className='sm:flex sm:items-center sm:justify-between'>
        <div className='footer-text text-center text-m text-white lg:mt-0 lg:text-right'>
          <span>Built with 🖤 by <span><a href='https://chandrabose.live/' target="_blank" rel="noopener noreferrer" style={{textDecoration:"underline" }}>Chandra Bose</a></span></span>
        </div>
        <div className='footer-icons flex justify-center align-middle'>
          <a href="https://twitter.com/Chandra_Bose31" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" style={{width:"25px"}} className='mx-5'/></a>
          <a href="https://github.com/chandrabosep" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" style={{width:"25px"}} className='mx-5'/></a>
          <a href="https://www.instagram.com/chandrabose.eth/" target="_blank" rel="noopener noreferrer"><img src={insta} alt="instagram" style={{width:"25px"}} className='mx-5'/></a>
          
        </div>
      </div>
    </div>
  )
}
