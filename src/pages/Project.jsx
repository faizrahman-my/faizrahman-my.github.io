import React, { useState } from 'react'
import { Header } from '../components/Header'
import { svg_project, svg_social } from '../assets/icons/Icon'
import close_modal from '../assets/icons/close.svg'
import ProjectData from '../data/project.json'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card } from '../components/Card'
import { Modal } from '../components/Modal'


export const Project = () => {
  const [id, setId] = useState(0);
  const ProjectInfo = (project_id) => {
    setId(project_id)
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
                  <Card
                    carouselImage={
                      projects && projects.image.map((image, id) => {
                        return (
                          <div>
                            <img src={`assets/imgs/${image}`} className='h-80 object-scale-down' />
                          </div>
                        )
                      })
                    }
                    title={projects.title}
                    type={projects.type}
                    category={projects.category}
                    toggleModal={() => ProjectInfo(id)}
                    modalIcon={svg_project.info}
                    linkRedirect={projects.link}
                    linkIcon={svg_project.link_project}
                    key={id}
                  />
                )
            }
            else {
              return (
                <Card
                  carouselImage={
                    projects && projects.image.map((image, id) => {
                      return (
                        <div>
                          <img src={`assets/imgs/${image}`} className='h-80 object-scale-down' />
                        </div>
                      )
                    })
                  }
                  title={projects.title}
                  type={projects.type}
                  category={projects.category}
                  toggleModal={() => ProjectInfo(id)}
                  modalIcon={svg_project.info}
                  linkRedirect={projects.link}
                  linkIcon={svg_project.link_project}
                  key={id}
                />
              )
            }
          })
          }


        </div>

        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <Modal
          id="my_modal_1"
          description={ProjectData[id].desc}
          techList=
          {
            ProjectData && ProjectData[id].tech.map((projects, id) => {
              return (
                <p className="bg-web-back3 text-web-text1 rounded-badge py-1 px-2" key={id}>{projects}</p>
              )
            })
          }
        />

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

