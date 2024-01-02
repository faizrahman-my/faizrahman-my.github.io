import React from 'react'
import { Header } from '../components/Header'
import { Link } from 'react-router-dom'
import arrow_right from "../assets/icons/arrow-right.svg";

export const Home = () => {
  return (
    <div className='h-screen'>
      <Header />
      <div className='grid content-center h-4/5 px-10'>
        <div className='font-khand'>
          <div className='min-md:text-5xl max-md:text-3xl text-web-text2'>
            <h1>Hola! I’m an IT fresh graduate. </h1>
            <h1>I love stuff related to programming. </h1>
            <h1>Feel free to explore more about <Link to={'/about'} className='text-web-text1 min-sm:hover:text-web-text2'>Faiz</Link> here.</h1>
          </div>
          <div className='mt-5 w-fit'>
            <Link to={'/project'}>
              <div className='flex items-center rounded-xl bg-web-back1 min-sm:hover:bg-web-back3 text-web-text2 p-3 min-md:text-xl max-md:text-lg border-2 border-web-back2'>
                Things I did
                <img src={arrow_right} className='ml-12' />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}
