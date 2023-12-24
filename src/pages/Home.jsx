import React from 'react'
import { Header } from '../components/Header'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='h-screen'>
      <Header />
      <div className='grid content-center h-4/5 px-10'>
        <div className='font-khand'>
          <div className='min-md:text-5xl max-md:text-3xl'>
            <h1>Hola! I’m a recent IT graduate. </h1>
            <h1>I love stuff related to programming. </h1>
            <h1>Feel free to explore more about <Link to={'/about'}>Faiz</Link> here.</h1>
          </div>
          <div className='pt-5'>
            <Link to={'/project'}>
              <p>Things I did</p>
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}
