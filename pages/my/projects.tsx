import Link from "next/link";
import React, { useState } from "react";
import BaseLayout from "../../components/BaseLayout";

type Props = {};

const Projects = (props: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <BaseLayout>
            {isModalOpen && (
                <div className="fixed w-full top-0 left-0 z-20">
                    <div className="h-screen w-full z-20 inset-0 overflow-y-auto">
                        <div
                            className="fixed w-full h-full inset-0 bg-gray-500 opacity-75"
                            onClick={() => {
                                setIsModalOpen(false);
                            }}
                        ></div>
                        <div
                            className="flex justify-center items-center"
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                        >
                            <span
                                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                                aria-hidden="true"
                            ></span>
                            <div
                                className="w-1/2 inline-block relative overflow-hidden transform transition-all"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="modal-headline"
                            >
                                <div>
                                    <div className="rounded-lg p-8 bg-white shadow">
                                        <div className="bg-white dark:bg-gray-800">
                                            <div className="flex w-full justify-end cursor-pointer">
                                                <svg
                                                    onClick={() => setIsModalOpen(false)}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    stroke-linecap="round"
                                                    strokeLinejoin="round"
                                                    className="text-gray-300 text-lg"
                                                >
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg>
                                            </div>
                                            <div className="w-full mx-auto px-4 z-20">
                                                <p className="font-bold text-3xl text-gray-800 ff">
                                                    Build something amazing on Sekanson
                                                </p>
                                                <p className="pt-2 text-base text-gray-600">
                                                    With
                                                    <b className="text-ramppblue text-bold">Sekanson</b>
                                                    you can start a few types of projects. Select the type
                                                    of project that best suits your needs.
                                                </p>
                                                <div className="w-full flex items-center space-x-8 my-4">
                                                    <button className="text-xl text-ramppblue underline">
                                                        Launch a community
                                                    </button>
                                                    <button className="text-xl text-gray-500 hover:text-ramppblue">
                                                        Other Applications
                                                    </button>
                                                </div>
                                                <div className="w-full flex flex-col space-y-6 mt-2">
                                                    <button className="items-center w-full px-4 py-2 border border-gray-300 hover:bg-blue-50 hover:border-ramppblue cursor-pointer rounded-md flex">
                                                        <img
                                                            alt="example of ERC721A project"
                                                            src="/images/bayc-rotation.gif"
                                                            className="h-32 w-32 rounded-md"
                                                        />
                                                        <div className="w-full flex flex-col space-y-2 ml-8">
                                                            <p className="text-3xl font-bold text-gray-800 ff text-left">
                                                                ERC-721A
                                                            </p>
                                                            <p className="text-gray-600 text-base leading-tight text-left">
                                                                <span className="msreadout-line-highlight msreadout-inactive-highlight">
                                                                    <span className="msreadout-word-highlight">
                                                                        This
                                                                    </span>{" "}
                                                                    project type
                                                                </span>
                                                                is for you if you
                                                                <b className="text-ramppblue">
                                                                    want a collection where each token is a unique
                                                                    image that can only have one owner.
                                                                </b>{" "}
                                                                This project is great for building large
                                                                communities. This contract type is by far the
                                                                most popular NFT type.
                                                                <br />
                                                                Popular examples of this type of project are
                                                                Bored Ape Yacht Club, Cool Cats, Azuki, and many
                                                                many more.
                                                            </p>
                                                        </div>
                                                    </button>
                                                    <button className="items-center w-full px-4 py-2 border border-gray-300 hover:bg-blue-50 hover:border-ramppblue cursor-pointer rounded-md flex">
                                                        <img
                                                            alt="example of ERC1155 project"
                                                            src="/images/adidas-erc.gif"
                                                            className="h-32 w-32 rounded-md"
                                                        />
                                                        <div className="w-full flex flex-col space-y-2 ml-8">
                                                            <p className="text-3xl font-bold text-gray-800 ff text-left">
                                                                <span>ERC-1155</span>
                                                            </p>
                                                            <p className="text-gray-600 text-base leading-tight text-left">
                                                                This project type is for you if you
                                                                <b className="text-ramppblue">
                                                                    want a collection where each token is a unique
                                                                    image that can have multiple owners at once.
                                                                </b>{" "}
                                                                This project is great for building access passes
                                                                and meta-collectibles for your existing
                                                                communities.
                                                                <br />
                                                                <br />
                                                                Popular examples of this type of project is the
                                                                Adidas Into the Metaverse drop.
                                                            </p>
                                                        </div>
                                                    </button>
                                                    <button className="items-center w-full px-4 py-2 border border-gray-300 hover:bg-blue-50 hover:border-ramppblue cursor-pointer rounded-md flex">
                                                        <img
                                                            alt="example of ERC-20 token"
                                                            src="/images/erc20.gif"
                                                            className="h-32 w-32 rounded-md"
                                                        />
                                                        <div className="w-full flex flex-col space-y-2 ml-8">
                                                            <p className="text-3xl font-bold text-gray-800 ff text-left">
                                                                <span>ERC-20+</span>
                                                            </p>
                                                            <p className="text-gray-600 text-base leading-tight text-left">
                                                                This project type is for you if you
                                                                <b className="text-ramppblue">
                                                                    want to create a mintable &amp; tradable
                                                                    social token that can be used for purchasing
                                                                    during your mint!
                                                                </b>{" "}
                                                                <br />
                                                                <br />
                                                                Popular examples of this type of contract is
                                                                ApeCoin, CoolCats MILK, and DogeCoin.
                                                            </p>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
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
                        <div
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center space-x-2 py-2 px-4 rounded-lg cursor-pointer bg-gray-800"
                        >
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
        </BaseLayout>
    );
};

export default Projects;
