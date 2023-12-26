import React from 'react'
import { Link } from 'react-router-dom'
import { svg_navbar } from '../assets/icons/Icon'

export const Header = () => {
    return (
        <div>

            <div className='flex flex-row p-5'>
                <div className='grid content-center basis-2/4'>
                    <div className='max-md:flex items-center'>

                        <div className="min-md:hidden dropdown z-10">
                            <div tabindex="0" role="button" className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#FFD369"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </div>
                            <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow rounded-box w-52 bg-web-back2">
                                <li>
                                    <Link to={'/about'} className='grid justify-items-center'>
                                        <img src={svg_navbar.folder_user} />
                                        <p className='font-khand text-xl my-2 text-web-text2'>About</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/project'} className='grid justify-items-center'>
                                        <img src={svg_navbar.code_box} />
                                        <p className='font-khand text-xl my-2 text-web-text2'>Project</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/contact'} className='grid justify-items-center'>
                                        <img src={svg_navbar.at} />
                                        <p className='font-khand text-xl my-2 text-web-text2'>Contact</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <h3 className='text-web-text1 font-khand min-sm:text-3xl max-sm:text-xl font-bold'><Link to={'/'}>Faiz Rahman</Link></h3>

                    </div>
                </div>
                <div className='basis-2/4'>

                    <div className='flex justify-end max-md:hidden'>
                        <ul className='flex min-md:gap-20 max-md:gap-10 bg-web-back2 px-10 rounded-full font-khand font-semibold'>
                            <li className='hover:bg-web-back3 rounded-full p-5'>
                                <Link to={'/about'} className='grid justify-items-center'>
                                    <img src={svg_navbar.folder_user} />
                                    <p className='text-xl my-2 max-md:hidden text-web-text2'>About</p>
                                </Link>
                            </li>
                            <li className='hover:bg-web-back3 rounded-full p-5'>
                                <Link to={'/project'} className='grid justify-items-center'>
                                    <img src={svg_navbar.code_box} />
                                    <p className='text-xl my-2 max-md:hidden text-web-text2'>Project</p>
                                </Link>
                            </li>
                            <li className='hover:bg-web-back3 rounded-full p-5'>
                                <Link to={'/contact'} className='grid justify-items-center'>
                                    <img src={svg_navbar.at} />
                                    <p className='text-xl my-2 max-md:hidden text-web-text2'>Contact</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
