import React from 'react'
import { Header } from '../components/Header'

export const Contact = () => {
  return (
    <div>
      <Header />
      <div className='p-5'>
        <h3>Interested to have me as a part of your project or team? Send me your message 😁</h3>
        <div className='min-md:flex'>
          <form action="" method="" className='mt-20 min-md:w-3/4'>
            <input type="email" name="" id="" placeholder='email' className='w-full' />
            <br />
            <input type="text" name="" id="" placeholder='title' className='w-full' />
            <br />
            <textarea name="" id="" cols="30" rows="10" placeholder='message' className='w-full'></textarea>
            <br />
            <input type="submit" value="submit" className='w-full' />
          </form>
          <div className='grid min-md:w-1/4 max-md:grid-cols-2'>
            <div className='grid min-md:content-end max-md:justify-self-end'>icon 1</div>
            <div className='grid min-md:content-start max-md:justify-self-start'>icon 2</div>
          </div>
        </div>

      </div>
    </div>
  )
}
