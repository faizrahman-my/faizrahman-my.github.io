import React from 'react'
import { Link } from 'react-router-dom'
import { svg_navbar } from '../assets/icons/Icon'

export const Header = () => {
    return (
        <div className='flex flex-row p-5'>
            <div className='grid content-center basis-2/4'>
                <h3 className='text-web-text1 font-khand min-sm:text-3xl max-sm:text-xl font-bold'><Link to={'/'}>Faiz Rahman</Link></h3>
            </div>
            <div className='basis-2/4'>
                <div className='flex justify-end'>
                    <ul className='flex min-md:gap-20 max-md:gap-10 bg-web-back2 text-web-both3 px-6 py-4 rounded-xl font-khand font-semibold'>
                        <li>
                            <Link to={'/about'} className='grid justify-items-center'>
                                <img src={svg_navbar.folder_user}/>
                                <p className='text-xl my-2 max-md:hidden'>About</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/project'} className='grid justify-items-center'>
                                <img src={svg_navbar.code_box}/>
                                <p className='text-xl my-2 max-md:hidden'>Project</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/contact'} className='grid justify-items-center'>
                                <img src={svg_navbar.at}/>
                                <p className='text-xl my-2 max-md:hidden'>Contact</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
