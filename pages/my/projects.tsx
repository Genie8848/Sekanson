import Link from "next/link";
import React from "react";
import Navbar from "../../components/Navbar";

type Props = {};

const Projects = (props: Props) => {
    return (
        <main className="font-mono bg-white relative h-screen z-0 overflow-scroll">
            <Navbar />

            <div className="fixed opacity-0 z-30 w-full transition duration-200 ease-in-out justify-center bg-white rounded-lg hidden">
                <div className="flex-col items-baseline"></div>
            </div>
            <div
                id="mainbg"
                className="fixed w-screen h-screen top-0"
                style={{
                    zIndex: -1,
                    opacity: 0.45,
                    backgroundImage: "url(/bg.svg)",
                }}
            ></div>

            <div className="container mx-auto px-6 flex-col my-8 w-full">
                <div className="flex space-x-8 items-center">
                    <h1 className="text-4xl text-gray-800 font-black pb-2 ff">
                        Your projects
                    </h1>
                    <div className="flex space-x-2 my-4">
                        <div className="flex items-center space-x-2 py-2 px-4 rounded-lg cursor-pointer bg-gray-800">
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
                <div className="w-full flex flex-wrap gap-x-4 gap-y-4"></div>
            </div>
        </main>
    );
};

export default Projects;
