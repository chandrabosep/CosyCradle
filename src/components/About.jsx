import React from 'react'
import "../App.css"
import insta from ".././assets/icons/Instagram.svg"
import twitter from ".././assets/icons/Twitter.svg"
import github from ".././assets/icons/Github.svg"
import linkedin from ".././assets/icons/Linkedin.svg"

export default function About() {
  return (
    <div class="flex justify-center items-center text-slate-300 text-lg">
        <div class="w-8/12 ">
            <p className='text-4xl mb-7'>What is Ponder ?</p>
            <br />
            <p className='leading-6'>Looking to boost your concentration and focus? Ponder is the ultimate digital platform for you.</p>
           <br />
           <p className='leading-6'>With Ponder, Create your own personalized sound environment on Ponder. Choose from 20 high-quality background sounds to mix and match, adjusting the volume of each to customize your soundscape. Enjoy a unique experience tailored to your preferences.</p>
           <br />
           <p className='leading-6'>If you're not sure where to begin, Ponder offers a variety of sound options to help you find your perfect match. Whether you're studying, working, or just need to relax, Ponder's expertly curated sounds will aid you in staying focused and productive</p>
           <br />
           <br />
           <br />
           <hr />
           <br />
           <br />
           <span className='text-4xl mt-5'>Connect with the developer</span>
           <div className='flex flex-row my-10 mb-20'>
            <img src={twitter} alt="twt" className='mr-5' />
            <img src={github} alt="git" className='mx-5'/>
            <img src={linkedin} alt="lkd" className='mx-5' />
            <img src={insta} alt="ins" className='mx-5' />

           </div>

        </div>
    </div>
        
    
  )
}
