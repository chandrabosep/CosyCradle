import React from 'react'
import Audiolist from './Audiolist'
import Header from './Header'

export default function Home() {
  return (
    <div>
      <Header/>
      <div className='flex justify-center '>
          <Audiolist/>
        </div>
    </div>
  )
}
