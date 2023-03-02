import React from 'react'
import '../App.css'

export default function Navbar() {
  return (
    <nav>
      <div className='flex items-center m-5 px-6 text-white justify-between'>
          <div className='flex flex-center'>
              <h1 className='text-2xl font-semibold '>Ponder</h1>
          </div>
         <div className=''>
          <>About</>
         </div>
      </div>
    </nav>
  )
}
