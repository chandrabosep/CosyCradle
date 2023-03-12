import React from 'react'
import "../App.css"
import insta from ".././assets/icons/Instagram.svg"
import twitter from ".././assets/icons/Twitter.svg"
import github from ".././assets/icons/Github.svg"
import linkedin from ".././assets/icons/Linkedin.svg"

export default function About() {
  return (
    <div class="flex justify-center items-center text-slate-200 text-s">
        <div class="w-8/12 ">
        <div className='about'>
            <p className='text-3xl mb-7'>What is CosyCradle ?</p><br />
            <p className='leading-6'>Looking to boost your concentration and focus? CosyCradle is the ultimate digital platform for you.</p><br />
           <p className='leading-6'>With CosyCradle, Create your own personalized sound environment. Choose from 20 high-quality background sounds to mix and match, adjusting the volume of each to customize your soundscape. Enjoy a unique experience tailored to your preferences.</p><br />
           <p className='about-3 leading-6'>If you're not sure where to begin, CosyCradle offers a variety of sound options to help you find your perfect match. Whether you're studying, working, or just need to relax, CosyCradle's expertly curated sounds will aid you in staying focused and productive</p>
           <br /><br /><br />
        </div>
        <div className='about-dev'>
           <span className='text-3xl mt-5'>Connect with the developer</span>
           <div className='icns flex flex-row my-10 mb-20'>
            <a href="https://twitter.com/Chandra_Bose31" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twt" className='mr-5' /></a>
            <a href="https://github.com/chandrabosep" target="_blank" rel="noopener noreferrer"><img src={github} alt="git" className='mx-5'/></a>
            <a href="https://www.linkedin.com/in/chandra-bose-p/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="lkd" className='mx-5' /></a>
            <a href="https://www.instagram.com/chandrabose.eth/" target="_blank" rel="noopener noreferrer"><img src={insta} alt="ins" className='mx-5' /></a>

            
            
            
        </div>
           </div>

        </div>
    </div>
        
    
  )
}
