import React from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { svg_project } from '../assets/icons/Icon'

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

        <div className='mt-5 grid min-lg:grid-cols-2 min-xl:grid-cols-3 gap-6 p-4 justify-items-center'>

          <div class="card w-auto bg-web-both2 text-web-both3 shadow-xl font-khand image-full">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div class="card-body">
              <div class="card-actions justify-between">
                <div>
                  <h2 class="card-title">
                    Project Title
                  </h2>
                </div>
                <div>
                  <div class="badge badge-outline ml-1">Web</div>
                  <div class="badge badge-outline ml-1">School Project</div>
                </div>
              </div>
              <div className='card-actions h-full items-end justify-center'>
                <div className='w-fit px-4 mb-4 rounded-full bg-web-both2 hover:bg-web-both1 border-4 border-transparent hover:border-web-back1 mx-4 shadow-2xl'>
                  <a href="">
                    <img src={svg_project.info} alt="" className='py-4' />
                  </a>
                </div>
                <div className='w-fit px-4 mb-4 rounded-full bg-web-both2 hover:bg-web-both1 border-4 border-transparent hover:border-web-back1 mx-4 shadow-2xl'>
                  <a href="">
                    <img src={svg_project.link_project} alt="" className='py-4' />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="card w-auto bg-web-both2 text-web-both3 shadow-xl font-khand image-full">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div class="card-body">
              <div class="card-actions justify-between">
                <div>
                  <h2 class="card-title">
                    Project Title
                  </h2>
                </div>
                <div>
                  <div class="badge badge-outline ml-1">Web</div>
                  <div class="badge badge-outline ml-1">School Project</div>
                </div>
              </div>
              <div className='card-actions h-full items-end justify-center'>
                <div className='w-fit px-4 mb-4 rounded-full bg-web-both2 hover:bg-web-both1 border-4 border-transparent hover:border-web-back1 mx-4 shadow-2xl'>
                  <a href="">
                    <img src={svg_project.info} alt="" className='py-4' />
                  </a>
                </div>
                <div className='w-fit px-4 mb-4 rounded-full bg-web-both2 hover:bg-web-both1 border-4 border-transparent hover:border-web-back1 mx-4 shadow-2xl'>
                  <a href="">
                    <img src={svg_project.link_project} alt="" className='py-4' />
                  </a>
                </div>
              </div>
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

