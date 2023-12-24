import React from 'react'
import { Header } from '../components/Header'
import { svg_social } from '../assets/icons/Icon'

export const Contact = () => {
  return (
    <div>
      <Header />
      <div className='p-5 font-khand'>
        <h3 className='font-bold min-md:text-xl max-md:text-base'>Interested to have me as a part of your project or team? Send me your message 😁</h3>
        <div className='min-md:flex'>
          <form action="" method="" className='mt-20 min-md:w-3/4'>
            <input type="email" name="" id="" placeholder='email' className='w-full input input-bordered mb-4' />
            <br />
            <input type="text" name="" id="" placeholder='title' className='w-full input input-bordered mb-4' />
            <br />
            <textarea name="" id="" cols="30" rows="10" placeholder='message' className='w-full textarea textarea-bordered mb-4'></textarea>
            <br />
            <input type="submit" value="submit" className='w-full bg-web-both1 text-web-both3 border-2 border-web-back1 rounded-xl py-2 cursor-pointer' />
          </form>
          <div className='grid min-md:w-1/4 max-md:grid-cols-2'>
            <div className='grid min-md:content-end max-md:justify-end'>
              <a href="" className='max-md:px-4 py-2 mx-2 my-5 bg-web-both2 rounded-xl min-md:ml-10'>
                <div className='flex items-center min-md:px-2'>
                  <img src={svg_social.google} className='pr-4'/>
                  <p className='font-bold text-web-both3'>Gmail</p>
                </div>
              </a>
            </div>
            <div className='grid min-md:content-start max-md:justify-start'>
              <a href="" className='max-md:px-4 py-2 mx-2 my-5 bg-web-both2 rounded-xl min-md:ml-10'>
                <div className='flex items-center min-md:px-2'>
                  <img src={svg_social.linkedin} className='pr-4'/>
                  <p className='font-bold text-web-both3'>Linkedin</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
