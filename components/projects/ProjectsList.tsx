import Link from 'next/link'
import React from 'react'
import { useAppContext } from '../../context/AppContext'
import { deleteProject } from '../../libs/api/projects'
import { nFormatter } from '../../utils/common'

type Props = {
}

const getLogoPath = (network: string) => {
    switch (network) {
        case "ethereum": return "/images/eth-logo.svg"
        case "polygon": return "/images/polygon-logo.svg"
        case "polygon": return "/images/eth-logo.svg"
        case "polygon": return "/images/eth-logo.svg"
        case "polygon": return "/images/eth-logo.svg"
        default: return "/images/eth-logo.svg"
    }
}

const ProjectsList = (props: Props) => {
    const { projects, setProjects } = useAppContext()
    const handleDeleteProject = async (id: string) => {
        try {
            const res = await deleteProject(id)
            const filteredProjects = projects.filter((proj: any) => proj.uid !== id)
            setProjects(filteredProjects)
            console.log(res, " is res")
        } catch (error) {

        }
    }

    const ProjectItem = ({ project }: any) => {
        return (
            <div className="w-full flex flex-wrap gap-x-4 gap-y-4">
                <div id="t295a45fd-810a-4187-8e82-6ca4caa406ea" data-id="tooltip">
                </div>
                <Link
                    href={`/${project.uid}/settings`}
                    style={{ width: "30rem" }}
                    className="relative bg-gradient-to-tr hover:from-gray-100 flex flex-col h-40 border-2 border-gray-200 bg-white rounded-lg hover:shadow-md cursor-pointer"
                >
                    <div className="w-full border-b border-gray-100 flex justify-between px-4 py-2 items-center  transition-[background-color 0.5s ease 0s]" >
                        <div className="flex space-x-2 items-center">
                            <img alt="Blockchain Logo" data-tip="This project is on the ethereum Network"
                                src={getLogoPath(project.network)} className="h-6 pr-3 cursor-pointer" />
                            <div className="flex flex-col space-y-1">
                                <div className="flex gap-2 items-center">
                                    <p className="text-lg font-black text-gray-700">{project.name}</p>
                                </div>
                                <p className="text-xs text-gray-500">${project.tokenSymbol}</p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1 items-end">
                            <svg onClick={(e: any) => {
                                e.stopPropagation()
                                e.preventDefault()
                                handleDeleteProject(project.uid)
                            }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 text-red-400 cursor-pointer">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                            <p className="text-xs text-gray-500">{project.contractType}</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-between py-4 px-5 mx-auto">
                        <div className="flex flex-col items-center">
                            <p className="text-2xl font-black text-gray-700">{nFormatter(project.supply, 1)}</p>
                            <p className="text-sm font-semibold text-gray-500 uppercase">supply</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-2xl font-black text-gray-700">{project.mintPrice}</p>
                            <p className="text-sm font-semibold text-gray-500 uppercase">mint fee</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-2xl font-black text-gray-700">0%</p>
                            <p className="text-sm font-semibold text-gray-500 uppercase">royalties</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
            {
                projects.map((project: any, index: any) => {
                    return <ProjectItem key={project.uid} project={project} />
                })
            }
        </div>
    )
}

export default ProjectsList