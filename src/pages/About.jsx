import React from 'react'
import { Header } from '../components/Header'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <div>
      <Header />
      <div className='min-md:flex p-5'>
        <div className='min-md:basis-2/4 grid content-center'>
          <p>You can call me Faiz.</p>
          <p>Completed my degree studies on December 2023.</p>
          <p>Started to involved myself in programming in year of 2019. </p>
          <p>Pursued my studies at SEGI college Kuala Lumpur.</p>
        </div>
        <div className='min-md:basis-2/4 grid content-center'>
          <div className='min-md:flex min-md:justify-end max-md:pt-5 max-md:flex max-md:justify-center'>
            <div>
              <p>image here</p>
              <p>image here</p>
              <p>image here</p>
              <p>image here</p>
              <p>image here</p>
              <p>image here</p>
              <p>image here</p>

            </div>
          </div>
        </div>
      </div>
      <div className='px-5 mt-4'>
        <p>My programming skills and learning experience have expose me to be able create a few <Link to={'/project'}>project</Link>.</p>
        <p>A lot of tools and technologies I have used in the past few years from beginning until now.</p>
      </div>
      <div className='min-md:grid min-md:grid-cols-2 px-5 mt-5'>
        <div className='mb-3'><h4>Front-End</h4></div>
        <div className='mb-3'><h4>Back-End</h4></div>
        <div className='mb-3'><h4>Tools</h4></div>
        <div className='mb-3'><h4>Version control</h4></div>
      </div>
    </div>

  )
}
