import React from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'

export const Project = () => {
  return (
    <div>
      <Header />
      <div className='p-5'>
        <div className='flex justify-center'>
          <ul className='flex min-md:gap-40 max-md:gap-12'>
            <li><a href="">All</a></li>
            <li><a href="">Web</a></li>
            <li><a href="">App</a></li>
          </ul>
        </div>

        <div className='bg-yellow-100 mt-5 grid min-md:grid-cols-2 min-lg:grid-cols-3 min-md:gap-10 p-4 justify-items-center'>

          <div className='relative w-fit h-fit max-md:mb-6'>
            <img src="https://ictacademy.com.ng/wp-content/uploads/2017/10/14570828119302_illu-cours_html5-css3.png" alt="" className='w-96 h-96'/>
            <div className='absolute top-0 right-0 p-4 bg-green-500 m-2'>
              <div>icon 1</div>
              <div>icon 2</div>
            </div>
            <div className='absolute bottom-0 inset-x-0'>
              <div className='flex justify-center bg-green-500 p-4'>project name</div>
            </div>
          </div>

          <div className='relative w-fit h-fit max-md:mb-6'>
            <img src="https://www.olcbd.net/wp-content/uploads/2018/05/html-800x445.jpg" alt="" className='w-96 h-96'/>
            <div className='absolute top-0 right-0 p-4 bg-green-500 m-2'>
              <div>icon 1</div>
              <div>icon 2</div>
            </div>
            <div className='absolute bottom-0 inset-x-0'>
              <div className='flex justify-center bg-green-500 p-4'>project name</div>
            </div>
          </div>
          
          <div className='relative w-fit h-fit max-md:mb-6'>
            <img src="https://ictacademy.com.ng/wp-content/uploads/2017/10/14570828119302_illu-cours_html5-css3.png" alt="" className='w-96 h-96'/>
            <div className='absolute top-0 right-0 p-4 bg-green-500 m-2'>
              <div>icon 1</div>
              <div>icon 2</div>
            </div>
            <div className='absolute bottom-0 inset-x-0'>
              <div className='flex justify-center bg-green-500 p-4'>project name</div>
            </div>
          </div>

          <div className='relative w-fit h-fit max-md:mb-6'>
            <img src="https://ictacademy.com.ng/wp-content/uploads/2017/10/14570828119302_illu-cours_html5-css3.png" alt="" className='w-96 h-96'/>
            <div className='absolute top-0 right-0 p-4 bg-green-500 m-2'>
              <div>icon 1</div>
              <div>icon 2</div>
            </div>
            <div className='absolute bottom-0 inset-x-0'>
              <div className='flex justify-center bg-green-500 p-4'>project name</div>
            </div>
          </div>

          <div className='relative w-fit h-fit max-md:mb-6'>
            <img src="https://ictacademy.com.ng/wp-content/uploads/2017/10/14570828119302_illu-cours_html5-css3.png" alt="" className='w-96 h-96'/>
            <div className='absolute top-0 right-0 p-4 bg-green-500 m-2'>
              <div>icon 1</div>
              <div>icon 2</div>
            </div>
            <div className='absolute bottom-0 inset-x-0'>
              <div className='flex justify-center bg-green-500 p-4'>project name</div>
            </div>
          </div>
          
          <div className='relative w-fit h-fit max-md:mb-6'>
            <img src="https://ictacademy.com.ng/wp-content/uploads/2017/10/14570828119302_illu-cours_html5-css3.png" alt="" className='w-96 h-96'/>
            <div className='absolute top-0 right-0 p-4 bg-green-500 m-2'>
              <div>icon 1</div>
              <div>icon 2</div>
            </div>
            <div className='absolute bottom-0 inset-x-0'>
              <div className='flex justify-center bg-green-500 p-4'>project name</div>
            </div>
          </div>

        </div>

        <div className='flex justify-center mt-5'>
          <div>icon here</div>
        </div>
      </div>
    </div>
  )
}

