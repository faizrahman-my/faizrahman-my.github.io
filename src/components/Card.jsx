import React from 'react'
import { Carousel } from 'react-responsive-carousel'

export const Card = ({carouselImage, title, type, category, toggleModal, modalIcon, linkRedirect, linkIcon}) => {
    return (
        <div className="card w-auto shadow-xl shadow-indigo-500/50 font-khand -z-0 mb-10 border-2 border-indigo-400 py-6 px-3">
            <Carousel autoPlay={true} infiniteLoop={true} interval={6000} showThumbs={false} swipeable={true}>
                {carouselImage}
            </Carousel>
            <div className="card-body">
                <div className="card-actions justify-between">
                    <div>
                        <h2 className="card-title text-web-text1">
                            {title}
                        </h2>
                    </div>
                    <div>
                        <div className="badge badge-outline ml-1 text-web-text2">{type}</div>
                        <div className="badge badge-outline ml-1 text-web-text2">{category}</div>
                    </div>

                </div>
                <div className='card-actions h-full items-end justify-center'>
                    <div className='w-fit px-4 mb-4 rounded-full bg-web-back2 border-4 border-transparent hover:border-web-back1 hover:bg-web-back3 mx-4 shadow-2xl'>
                        <button className="flex" onClick={toggleModal}>
                            <img src={modalIcon} alt="" className='py-4' />
                        </button>
                    </div>
                    <div className='w-fit px-4 mb-4 rounded-full bg-web-back2 border-4 border-transparent hover:border-web-back1 hover:bg-web-back3 mx-4 shadow-2xl'>
                        <a href={linkRedirect} target="_blank">
                            <img src={linkIcon} alt="" className='py-4' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
