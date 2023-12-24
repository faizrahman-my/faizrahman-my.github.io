import React from 'react'
import { Link } from 'react-router-dom'
import { svg_navbar } from '../assets/icons/Icon'

export const Header = () => {
    return (
        <div className='flex flex-row p-5'>
            <div className='grid content-center basis-2/4'>
                <h3 className='text-web-text1 font-advent text-3xl font-bold'><Link to={'/'}>Faiz Rahman</Link></h3>
            </div>
            <div className='basis-2/4'>
                <div className='flex justify-end'>
                    <ul className='flex min-md:gap-20 bg-web-back2 text-web-both3 px-4 py-6 rounded-xl font-advent font-bold'>
                        <li>
                            <Link to={'/about'} className='grid justify-items-center'>
                                <img src={svg_navbar.folder_user} className='max-md:hidden' />
                                <p>About</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/project'} className='grid justify-items-center'>
                                <img src={svg_navbar.code_box} className='max-md:hidden' />
                                <p>Project</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/contact'} className='grid justify-items-center'>
                                <img src={svg_navbar.at} className='max-md:hidden' />
                                <p>Contact</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
