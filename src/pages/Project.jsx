import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { svg_project, svg_social } from '../assets/icons/Icon'
import close_modal from '../assets/icons/close.svg'
import ProjectData from '../data/project.json'


export const Project = () => {
  const [id, setId] = useState(0);
  const ProjectInfo = (project_id) => {
    setId(project_id)
    console.log("this is" + project_id)
    document.getElementById('my_modal_1').showModal()
  }

  return (
    <div>
      <Header />
      <div className='p-5'>
        <div className='flex justify-center'>
          <ul className='flex min-md:gap-40 max-md:gap-5 font-khand'>
            <li className='text-web-text2 bg-web-back1 border-2 border-web-back2 px-8 py-2 rounded-full hover:border-web-back3'><a href="">All</a></li>
            <li className='text-web-text2 bg-web-back2 border-2 border-web-back1 px-8 py-2 rounded-full hover:border-web-back3'><a href="">Web</a></li>
            <li className='text-web-text2 bg-web-back2 border-2 border-web-back1 px-8 py-2 rounded-full hover:border-web-back3'><a href="">App</a></li>
          </ul>
        </div>

        <div className='mt-5 grid min-lg:grid-cols-2 min-xl:grid-cols-3 gap-6 p-4 justify-items-center'>

          {ProjectData && ProjectData.map((projects, index) => {
            return (
              <div className="card w-auto shadow-xl font-khand image-full -z-0" key={projects.id}>
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                  <div className="card-actions justify-between">
                    <div>
                      <h2 className="card-title text-web-text1">
                        {projects.title}
                      </h2>
                    </div>
                    <div>
                      <div className="badge badge-outline ml-1">{projects.type}</div>
                      <div className="badge badge-outline ml-1">{projects.category}</div>
                    </div>

                  </div>
                  <div className='card-actions h-full items-end justify-center'>
                    <div className='w-fit px-4 mb-4 rounded-full bg-web-back2 border-4 border-transparent hover:border-web-back1 hover:bg-web-back3 mx-4 shadow-2xl'>
                      <button className="flex" onClick={() => ProjectInfo(index)}>
                        <img src={svg_project.info} alt="" className='py-4' />
                      </button>
                    </div>
                    <div className='w-fit px-4 mb-4 rounded-full bg-web-back2 border-4 border-transparent hover:border-web-back1 hover:bg-web-back3 mx-4 shadow-2xl'>
                      <a href={projects.link} target="_blank">
                        <img src={svg_project.link_project} alt="" className='py-4' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
          }


        </div>

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box bg-web-back1 text-web-text2">
            <div className='bg-web-text2 h-40'></div>
            <div>
              <p className='mt-5 overflow-y-scroll max-h-60'>{ProjectData[id].desc}</p>
              <div className='flex gap-2 mt-5'>
                {
                  ProjectData && ProjectData[id].tech.map((projects, id) => {
                    return (
                      <p className="bg-web-back3 text-web-text1 rounded-badge py-1 px-2" key={id}>{projects}</p>
                    )
                  })
                }
              </div>
            </div>
            <div className="modal-action flex justify-center">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className=""><img src={close_modal} alt="" /></button>
              </form>
            </div>
          </div>
        </dialog>

        <div className='flex justify-center mt-5'>
          <div>
            <a href="https://github.com/FaizRahman01" target="_blank">
              <img src={svg_social.github_2} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

