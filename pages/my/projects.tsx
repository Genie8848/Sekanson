import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import NewProjectModal from "../../components/NewProjectModal";
import ApplicationList from "../../components/projects/ApplicationList";
import ProjectsList from "../../components/projects/ProjectsList";
import { useAppContext } from "../../context/AppContext";
import { getApplications, getProjects } from "../../libs/api/projects";

type Props = {};

const Projects = (props: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false)
    const { setApplications, setProjects } = useAppContext()
    const handleClose = () => {
        setIsModalOpen(false);
    }

    const fetchApplications = useCallback(
        async () => {
            const formData = {
                address: "0x767d04c7c1d82b922d9d0b8f4b36d057bc1065d3",
            }
            const applications = await getApplications(formData)
            setApplications(applications)
        },
        [],
    )

    useEffect(() => {
        fetchApplications()
    }, [fetchApplications])

    const fetchProjects = useCallback(
        async () => {
            const formData = {
                address: "0x767d04c7c1d82b922d9d0b8f4b36d057bc1065d3",
            }
            const projects = await getProjects(formData)
            console.log("data iss  ", projects)
            setProjects(projects)
        },
        [],
    )

    useEffect(() => {
        fetchProjects()
    }, [fetchProjects])


    return (
        <BaseLayout>
            {isModalOpen && <NewProjectModal setLoading={setLoading} onClose={handleClose} />}
            <div className="fixed opacity-0 z-30 w-full transition duration-200 ease-in-out justify-center bg-white rounded-lg hidden">
                <div className="flex-col items-baseline"></div>
            </div>
            <div
                id="mainbg"
                className="fixed w-screen h-screen top-0"
                style={{
                    zIndex: -1,
                    opacity: 0.45,
                    backgroundImage: "url(/images/bg.svg)",
                }}
            >
                {/* <Image src="/images/bg.svg" alt={"bg-project"} /> */}
            </div>


            <div className="container mx-auto px-6 flex-col my-8 w-full">
                <div className="flex space-x-8 items-center">
                    <h1 className="text-4xl text-gray-800 font-black pb-2 ff">
                        Your projects
                    </h1>
                    <div className="flex space-x-2 my-4">
                        <div
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center space-x-2 py-2 px-4 rounded-lg cursor-pointer bg-gray-800"
                        >
                            {
                                loading && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin h-6 text-white">
                                        <line x1="12" y1="2" x2="12" y2="6"></line>
                                        <line x1="12" y1="18" x2="12" y2="22"></line>
                                        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                                        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                                        <line x1="2" y1="12" x2="6" y2="12"></line>
                                        <line x1="18" y1="12" x2="22" y2="12"></line>
                                        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24">
                                        </line>
                                        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                                    </svg>
                                )
                            }
                            <p className="text-base text-white font-black">New project +</p>
                        </div>
                        <Link href="/import-contract">
                            <div className="flex items-center space-x-1 py-2 px-4 rounded-lg cursor-pointer border border-gray-800 text-gray-800 hover:text-white hover:bg-gray-800">
                                <p className="text-base font-black">Import smart contract</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4"
                                >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="w-full flex flex-wrap gap-x-4 gap-y-4">
                    <ProjectsList />
                </div>

                <div className="w-full flex flex-wrap gap-x-4 gap-y-4">
                    <ApplicationList />
                </div>
            </div>
        </BaseLayout>
    );
};

export default Projects;
