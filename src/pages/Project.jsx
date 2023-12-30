import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { svg_project, svg_social } from '../assets/icons/Icon'
import close_modal from '../assets/icons/close.svg'
import ProjectData from '../data/project.json'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


export const Project = () => {
  const [id, setId] = useState(0);
  const ProjectInfo = (project_id) => {
    setId(project_id)
    console.log("this is" + project_id)
    document.getElementById('my_modal_1').showModal()
  }
  const [projectType, setProjectType] = useState("");
  const active = "bg-web-back1 border-2 border-web-back2"
  const notActive = " bg-web-back2 border-2 border-web-back1"
  const chooseType = (type) => {
    setProjectType(type)
  }
  

  return (
    <div>
      <Header />
      <div className='p-5'>
        <div className='flex justify-center'>
          <div className='flex min-md:gap-40 max-md:gap-5 font-khand'>
            <button onClick={() => { chooseType("") }} className={`text-web-text2 ${projectType == "" ? active : notActive} px-8 py-2 rounded-full hover:border-web-back3`}>All</button>
            <button onClick={() => { chooseType("web") }} className={`text-web-text2 ${projectType == "web" ? active : notActive} px-8 py-2 rounded-full hover:border-web-back3`}>Web</button>
            <button onClick={() => { chooseType("app") }} className={`text-web-text2 ${projectType == "app" ? active : notActive} px-8 py-2 rounded-full hover:border-web-back3`}>App</button>
          </div>
        </div>

        <div className='mt-5 grid min-lg:grid-cols-2 min-xl:grid-cols-3 gap-6 p-4 justify-items-center'>

          {ProjectData && ProjectData.map((projects, id) => {
            if (projectType == "web" || projectType == "app") {
              if (projects.type == projectType)
                return (
                  <div className="card w-auto shadow-xl shadow-indigo-500/50 font-khand -z-0 mb-10 border-2 border-indigo-400 py-6 px-3" key={projects.id}>
                    <Carousel autoPlay={true} infiniteLoop={true} interval={6000} showThumbs={false} swipeable={true}>
                      {
                        projects && projects.image.map((image, id) => {
                          return (
                            <div>
                              <img src={`assets/imgs/${image}`} className='h-80 object-scale-down' />
                            </div>
                          )
                        })
                      }
                    </Carousel>
                    <div className="card-body">
                      <div className="card-actions justify-between">
                        <div>
                          <h2 className="card-title text-web-text1">
                            {projects.title}
                          </h2>
                        </div>
                        <div>
                          <div className="badge badge-outline ml-1 text-web-text2">{projects.type}</div>
                          <div className="badge badge-outline ml-1 text-web-text2">{projects.category}</div>
                        </div>

                      </div>
                      <div className='card-actions h-full items-end justify-center'>
                        <div className='w-fit px-4 mb-4 rounded-full bg-web-back2 border-4 border-transparent hover:border-web-back1 hover:bg-web-back3 mx-4 shadow-2xl'>
                          <button className="flex" onClick={() => ProjectInfo(id)}>
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
            }
            else {
              return (
                <div className="card w-auto shadow-xl shadow-indigo-500/50 font-khand -z-0 mb-10 border-2 border-indigo-400 py-6 px-3" key={projects.id}>
                  <Carousel autoPlay={true} infiniteLoop={true} interval={6000} showThumbs={false} swipeable={true}>
                    {
                      projects && projects.image.map((image, id) => {
                        return (
                          <div>
                            <img src={`assets/imgs/${image}`} className='h-80 object-scale-down' />
                          </div>
                        )
                      })
                    }
                  </Carousel>
                  <div className="card-body">
                    <div className="card-actions justify-between">
                      <div>
                        <h2 className="card-title text-web-text1">
                          {projects.title}
                        </h2>
                      </div>
                      <div>
                        <div className="badge badge-outline ml-1 text-web-text2">{projects.type}</div>
                        <div className="badge badge-outline ml-1 text-web-text2">{projects.category}</div>
                      </div>

                    </div>
                    <div className='card-actions h-full items-end justify-center'>
                      <div className='w-fit px-4 mb-4 rounded-full bg-web-back2 border-4 border-transparent hover:border-web-back1 hover:bg-web-back3 mx-4 shadow-2xl'>
                        <button className="flex" onClick={() => ProjectInfo(id)}>
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
            }
          })
          }


        </div>

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box bg-web-back1 text-web-text2">

            <div>
              <p className='mt-5 overflow-y-scroll max-h-60'>{ProjectData[id].desc}</p>
              <div className='flex flex-wrap gap-2 mt-5'>
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

