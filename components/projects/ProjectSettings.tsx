import Link from "next/link";
import React from "react";

type Props = {};

const ProjectSettings = (props: Props) => {
    return (
        <div>
            <div className="px-6 py-2 w-full flex space-x-4">
                <div className="w-1/6 h-auto relative">
                    <div className="w-full bg-white rounded-lg sticky top-10">
                        <div className="w-full flex flex-col">
                            <div className="w-full flex flex-col space-y-4 px-4 mt-6 pb-4">
                                <div className="w-full flex items-center gap-2">
                                    <img
                                        src="/images/eth-logo.svg"
                                        className="h-6"
                                        alt="current chain"
                                    />
                                    <div className="w-full flex flex-col bg-blue-50 rounded-lg h-auto p-2 overflow-hidden">
                                        <p className="font-black text-gray-800 whitespace-nowrap flex">
                                            My Mintplex Project
                                        </p>
                                        <p className="font-base text-gray-400 text-sm flex">
                                            ERC-721A
                                        </p>
                                        <div className="flex flex-col w-full">
                                            <div className="flex items-center gap-1">
                                                <p className="font-base text-gray-400 text-sm flex">
                                                    Plan:
                                                </p>
                                                <p className="uppercase underline font-base text-gray-400 text-sm flex text-blue-500 font-semibold">
                                                    Standard
                                                </p>
                                            </div>
                                            <div className="flex flex-col items-start">
                                                <a
                                                    href="?new_sub=1"
                                                    className="text-sm text-blue-500 underline"
                                                >
                                                    Upgrade to Mintplex Pro →
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex justify-between items-center hover:bg-gray-100 py-4 rounded-lg px-1 cursor-pointer">
                                        <div className="flex justify-left items-center space-x-4">
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
                                                className="h-6 w-6 text-ramppblue"
                                            >
                                                <line x1="4" y1="21" x2="4" y2="14"></line>
                                                <line x1="4" y1="10" x2="4" y2="3"></line>
                                                <line x1="12" y1="21" x2="12" y2="12"></line>
                                                <line x1="12" y1="8" x2="12" y2="3"></line>
                                                <line x1="20" y1="21" x2="20" y2="16"></line>
                                                <line x1="20" y1="12" x2="20" y2="3"></line>
                                                <line x1="1" y1="14" x2="7" y2="14"></line>
                                                <line x1="9" y1="8" x2="15" y2="8"></line>
                                                <line x1="17" y1="16" x2="23" y2="16"></line>
                                            </svg>
                                            <p className="text-ramppblue font-semibold">Settings</p>
                                        </div>
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
                                            className="h-4 w-4 text-gray-400"
                                        >
                                            <polyline points="18 15 12 9 6 15"></polyline>
                                        </svg>
                                    </div>
                                    <div className="bg-gray-100 rounded-lg">
                                        <div className="flex flex-col space-y-3 border-l-4 border-ramppblue">
                                            <Link
                                                href="/xWDQUkBZ6qchztTuagNt/settings"
                                                target="_self"
                                                rel="noreferrer"
                                            >
                                                <div className="flex justify-left items-center py-4 px-2 ml-2">
                                                    <p className="text-ramppblue font-semibold ">
                                                        Contract Information
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="flex flex-col space-y-3 ">
                                            <Link
                                                href="/xWDQUkBZ6qchztTuagNt/features"
                                                target="_self"
                                                rel="noreferrer"
                                            >
                                                <div className="flex justify-left items-center py-4 px-2 ml-2">
                                                    <p className="text-black ">Features</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="flex flex-col space-y-3 ">
                                            <Link
                                                href="/xWDQUkBZ6qchztTuagNt/payouts"
                                                target="_self"
                                                rel="noreferrer"
                                            >
                                                <div className="flex justify-left items-center py-4 px-2 ml-2">
                                                    <p className="text-black ">Payouts</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="flex flex-col space-y-3 ">
                                            <Link
                                                href="/xWDQUkBZ6qchztTuagNt/teams"
                                                target="_self"
                                                rel="noreferrer"
                                            >
                                                <div className="flex justify-left items-center py-4 px-2 ml-2">
                                                    <p className="text-black ">Team &amp; Permissions</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="flex flex-col space-y-3 ">
                                            <Link
                                                href="/xWDQUkBZ6qchztTuagNt/header-mark"
                                                target="_self"
                                                rel="noreferrer"
                                            >
                                                <div className="flex justify-left items-center py-4 px-2 ml-2">
                                                    <p className="text-black ">Header Mark</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="flex flex-col space-y-3 ">
                                            <Link
                                                href="/xWDQUkBZ6qchztTuagNt/ipfs"
                                                target="_self"
                                                rel="noreferrer"
                                            >
                                                <div className="flex justify-left items-center py-4 px-2 ml-2">
                                                    <p className="text-black ">IPFS Setup</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="flex flex-col space-y-3 ">
                                            <Link
                                                href="/xWDQUkBZ6qchztTuagNt/generate"
                                                target="_self"
                                                rel="noreferrer"
                                            >
                                                <div className="flex justify-left items-center py-4 px-2 ml-2">
                                                    <p className="text-black ">Generate Contract</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex space-x-4 items-center">
                                    <p className="uppercase text-xs font-semibold text-gray-600">
                                        testnet
                                    </p>
                                    <div
                                        className="bg-gray-100 w-full"
                                        style={{ height: "2px" }}
                                    ></div>
                                </div>
                                <Link
                                    target="_self"
                                    rel="noreferrer"
                                    href="/xWDQUkBZ6qchztTuagNt/deploy/goerli"
                                    className="flex justify-between items-center hover:bg-gray-100 py-4 rounded-lg px-1 cursor-pointer"
                                >
                                    <div className="flex justify-left items-center space-x-4">
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
                                            className="h-6 w-6 text-black"
                                        >
                                            <line x1="22" y1="2" x2="11" y2="13"></line>
                                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                        </svg>
                                        <p className="text-black font-semibold">
                                            Deploy on Testnet
                                        </p>
                                    </div>
                                </Link>
                                <div className="flex space-x-4 items-center">
                                    <p className="uppercase text-xs font-semibold text-gray-600">
                                        mainnet
                                    </p>
                                    <div
                                        className="bg-gray-100 w-full"
                                        style={{ height: "2px" }}
                                    ></div>
                                </div>
                                <Link
                                    target="_self"
                                    rel="noreferrer"
                                    href="/xWDQUkBZ6qchztTuagNt/deploy/mainnet"
                                    className="flex justify-between items-center hover:bg-gray-100 py-4 rounded-lg px-1 cursor-pointer"
                                >
                                    <div className="flex justify-left items-center space-x-4">
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
                                            className="h-6 w-6 text-black"
                                        >
                                            <line x1="22" y1="2" x2="11" y2="13"></line>
                                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                        </svg>
                                        <p className="text-black font-semibold">
                                            Deploy on Mainnet
                                        </p>
                                    </div>
                                </Link>
                                <div className="flex space-x-4 items-center">
                                    <p className="uppercase text-xs font-semibold text-gray-600">
                                        Pro Tools
                                    </p>
                                    <div
                                        className="bg-gray-100 w-full"
                                        style={{ height: "2px" }}
                                    ></div>
                                </div>
                                <Link
                                    target="_self"
                                    rel="noreferrer"
                                    href="/xWDQUkBZ6qchztTuagNt/hosting/marketplace"
                                    className="flex justify-between items-center hover:bg-gray-100 py-4 rounded-lg px-1 cursor-pointer"
                                >
                                    <div className="flex justify-left items-center space-x-4">
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
                                            className="h-6 w-6 text-black"
                                        >
                                            <circle cx="9" cy="21" r="1"></circle>
                                            <circle cx="20" cy="21" r="1"></circle>
                                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                        </svg>
                                        <p className="text-black font-semibold">
                                            Branded Marketplace
                                        </p>
                                    </div>
                                </Link>
                                <Link
                                    target="_self"
                                    rel="noreferrer"
                                    href="/xWDQUkBZ6qchztTuagNt/snapshots"
                                    className="flex justify-between items-center hover:bg-gray-100 py-4 rounded-lg px-1 cursor-pointer"
                                >
                                    <div className="flex justify-left items-center space-x-4">
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
                                            className="h-6 w-6 text-black"
                                        >
                                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                                            <circle cx="12" cy="13" r="4"></circle>
                                        </svg>
                                        <p className="text-black font-semibold">
                                            Mintplex Snapshots
                                        </p>
                                    </div>
                                </Link>
                                <div className="flex space-x-4 items-center">
                                    <p className="uppercase text-xs font-semibold text-gray-600">
                                        Free Tools
                                    </p>
                                    <div
                                        className="bg-gray-100 w-full"
                                        style={{ height: "2px" }}
                                    ></div>
                                </div>
                                <Link
                                    target="_self"
                                    rel="noreferrer"
                                    href="/xWDQUkBZ6qchztTuagNt/hosting"
                                    className="flex justify-between items-center hover:bg-gray-100 py-4 rounded-lg px-1 cursor-pointer"
                                >
                                    <div className="flex justify-left items-center space-x-4">
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
                                            className="h-6 w-6 text-black"
                                        >
                                            <rect
                                                x="3"
                                                y="3"
                                                width="18"
                                                height="18"
                                                rx="2"
                                                ry="2"
                                            ></rect>
                                            <line x1="3" y1="9" x2="21" y2="9"></line>
                                            <line x1="9" y1="21" x2="9" y2="9"></line>
                                        </svg>
                                        <p className="text-black font-semibold">Custom Mint Site</p>
                                    </div>
                                </Link>
                                <Link
                                    target="_self"
                                    rel="noreferrer"
                                    href="/xWDQUkBZ6qchztTuagNt/landing/button-embed"
                                    className="flex justify-between items-center hover:bg-gray-100 py-4 rounded-lg px-1 cursor-pointer"
                                >
                                    <div className="flex justify-left items-center space-x-4">
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
                                            className="h-6 w-6 text-black"
                                        >
                                            <polyline points="16 18 22 12 16 6"></polyline>
                                            <polyline points="8 6 2 12 8 18"></polyline>
                                        </svg>
                                        <p className="text-black font-semibold">
                                            Embed Mint Button
                                        </p>
                                    </div>
                                </Link>
                                <Link
                                    href="https://mintparty.xyz/account?onboarding=mintplex"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="flex justify-between items-center hover:bg-gray-100 py-4 rounded-lg px-1 cursor-pointer"
                                >
                                    <div className="flex justify-left items-center space-x-4">
                                        <img
                                            alt="mintparty.xyz"
                                            src="/images/mintparty.svg"
                                            className="h-6"
                                        />
                                        <p className="text-black font-semibold">
                                            Allowlist Presale Pages
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-5/6 h-auto bg-white rounded-lg">
                    <div className="container w-full h-full p-6 relative">
                        <div className="flex flex-col sticky top-0 bg-frosted z-10 flex-shrink py-2">
                            <div className="flex items-center space-x-10">
                                <h1 className="text-5xl font-black text-gray-700">
                                    Contract Information
                                </h1>
                            </div>
                            <p className="my-2 text-gray-800">
                                All contracts are ERC-721A, audited, and based on the ERC-721
                                Open Zeppelin standard.
                            </p>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <div
                                className="__react_component_tooltip te504dc78-2b63-4f53-9c70-c252d1b80db1 place-top type-dark"
                                id="te504dc78-2b63-4f53-9c70-c252d1b80db1"
                                data-id="tooltip"
                                style={{ left: "111px", top: "195px" }}
                            >
                                This is the token symbol for your projects token. It cannot be
                                changed after deployment.
                            </div>
                            <div className="relative w-3/4 my-4">
                                <div
                                    className="w-fit flex items-center space-x-2 cursor-pointer"
                                    data-tip="This is the network that you contract will be deployed on. This cannot be changed after deployment"
                                >
                                    <label className="text-base font-black uppercase text-gray-500">
                                        Network
                                    </label>
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
                                        className="h-4 w-4 text-gray-500"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="16" x2="12" y2="12"></line>
                                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                    </svg>
                                </div>
                                <div className="my-3 w-full grid grid-cols-3 gap-4 items-center ">
                                    <div className="w-auto flex justify-center items-center space-x-4 p-4 border border-gray-700 hover:border-gray-700 text-gray-700 hover:text-gray-700 bg-gray-100 rounded-lg cursor-pointer ">
                                        <img
                                            alt="ethereum"
                                            src="/images/eth-logo.svg"
                                            className="h-8"
                                        />
                                        <p>Ethereum</p>
                                    </div>
                                    <div className="w-auto flex justify-center items-center space-x-4 p-4 border border-indigo-300 hover:border-indigo-700 text-gray-300 hover:text-indigo-700 bg-transparent rounded-lg cursor-pointer ">
                                        <img
                                            alt="polygon"
                                            src="/images/polygon-logo.svg"
                                            className="h-8"
                                        />
                                        <p>Polygon</p>
                                    </div>
                                    <div className="w-auto flex justify-center items-center space-x-4 p-4 border border-red-300 hover:border-red-700 text-gray-300 hover:text-red-700 bg-transparent rounded-lg cursor-pointer ">
                                        <img
                                            alt="optimism"
                                            src="/images/optimism-logo.svg"
                                            className="h-8"
                                        />
                                        <p>Optimism</p>
                                    </div>
                                    <div className="w-auto flex justify-center items-center space-x-4 p-4 border border-blue-300 hover:border-blue-700 text-gray-300 hover:text-blue-700 bg-transparent rounded-lg cursor-pointer ">
                                        <img
                                            alt="arbitrum"
                                            src="/images/arbitrum-logo.svg"
                                            className="h-8"
                                        />
                                        <p>Arbitrum</p>
                                    </div>
                                    <div className="w-auto flex justify-center items-center space-x-4 p-4 border border-red-300 hover:border-red-700 text-gray-300 hover:text-red-700 bg-transparent rounded-lg cursor-pointer ">
                                        <img
                                            alt="avalanche"
                                            src="/images/avalanche-logo.svg"
                                            className="h-8"
                                        />
                                        <p>Avalanche</p>
                                    </div>
                                    <div className="w-auto flex justify-center items-center space-x-4 p-4  border border-yellow-300 hover:border-yellow-700 text-gray-300 hover:text-yellow-700 bg-transparent rounded-lg cursor-pointer ">
                                        <img
                                            alt="binance"
                                            src="/images/bnb-logo.svg"
                                            className="h-8"
                                        />
                                        <p>BNB Chain</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div
                                    className="w-fit flex items-center space-x-2 cursor-pointer"
                                    data-tip="This is the name of your project. It will appear on NFT marketplaces. It cannot be changed after deployment."
                                >
                                    <label className="text-base font-black uppercase text-gray-500">
                                        Name
                                    </label>
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
                                        className="h-4 w-4 text-gray-500"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="16" x2="12" y2="12"></line>
                                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                    </svg>
                                </div>
                                <input
                                    name="name"
                                    type="text"
                                    className="my-2 w-fit outline-none order-transparent focus:border-transparent focus:ring-0 border-0 border-color-transparent text-gray-700 text-3xl font-black"
                                    autoComplete="off"
                                    placeholder="Your Project Name"
                                    value="My Mintplex Project"
                                />
                            </div>
                            <div className="flex flex-col">
                                <div
                                    className="w-fit flex items-center space-x-2 cursor-pointer"
                                    data-tip="This is the token symbol for your projects token. It cannot be changed after deployment."
                                >
                                    <label className="text-base font-black uppercase text-gray-500">
                                        Token Symbol
                                    </label>
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
                                        className="h-4 w-4 text-gray-500"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="16" x2="12" y2="12"></line>
                                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                    </svg>
                                </div>
                                <input
                                    name="tokenSymbol"
                                    type="text"
                                    className="my-2 w-fit outline-none order-transparent focus:border-transparent focus:ring-0 border-0 border-color-transparent text-gray-700 text-3xl font-black"
                                    autoComplete="off"
                                    placeholder="RAMPP"
                                    value="MINTPLEX"
                                />
                            </div>
                            <div className="flex flex-col">
                                <div
                                    className="w-fit flex items-center space-x-2 cursor-pointer"
                                    data-tip="This is the description of your project. You can change it anytime."
                                >
                                    <label className="text-base font-black uppercase text-gray-500">
                                        Description
                                    </label>
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
                                        className="h-4 w-4 text-gray-500"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="16" x2="12" y2="12"></line>
                                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                    </svg>
                                </div>
                                <textarea
                                    name="description"
                                    className="my-2 w-1/2 p-2 rounded-lg border-2 border-gray-300 text-gray-700 text-base font-base "
                                    autoComplete="off"
                                    placeholder="Some details about your project"
                                ></textarea>
                            </div>
                            <div className="flex flex-col">
                                <div
                                    className="w-fit flex items-center space-x-2 cursor-pointer"
                                    data-tip="This is the % royalties you will collect on secondary sales"
                                >
                                    <label className="text-base font-black uppercase text-gray-500">
                                        Royalties
                                    </label>
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
                                        className="h-4 w-4 text-gray-500"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="16" x2="12" y2="12"></line>
                                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                    </svg>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="flex flex-col">
                                        <input
                                            name="sellerFeeBasisPoints"
                                            type="number"
                                            min="0"
                                            max="10"
                                            className="my-2 w-fit outline-none order-transparent focus:border-transparent focus:ring-0 border-0 border-color-transparent text-gray-700 text-3xl font-black"
                                            autoComplete="off"
                                            placeholder="5.0"
                                            value="0"
                                        />
                                    </div>
                                    <p className="text-3xl text-gray-500 font-black">%</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div
                                    className="w-fit flex items-center space-x-2 cursor-pointer"
                                    data-tip="This is the URL in which minters can learn more about your project."
                                >
                                    <label className="text-base font-black uppercase text-gray-500">
                                        Website
                                    </label>
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
                                        className="h-4 w-4 text-gray-500"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="16" x2="12" y2="12"></line>
                                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                    </svg>
                                </div>
                                <input
                                    name="website"
                                    type="url"
                                    className="my-2 w-fit outline-none order-transparent focus:border-transparent focus:ring-0 border-0 border-color-transparent text-gray-700 text-3xl font-black"
                                    autoComplete="off"
                                    placeholder="https://myproject.com"
                                    value=""
                                />
                            </div>
                            <div className="flex flex-col">
                                <div
                                    className="w-fit flex items-center space-x-2 cursor-pointer"
                                    data-tip="This is the URL in which minters can learn more about your project."
                                >
                                    <label className="text-base font-black uppercase text-gray-500">
                                        Twitter Handle
                                    </label>
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
                                        className="h-4 w-4 text-gray-500"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="16" x2="12" y2="12"></line>
                                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                    </svg>
                                </div>
                                <input
                                    name="twitter"
                                    type="url"
                                    className="my-2 w-fit outline-none order-transparent focus:border-transparent focus:ring-0 border-0 border-color-transparent text-gray-700 text-3xl font-black "
                                    autoComplete="off"
                                    placeholder="@mintplexnft"
                                    value=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSettings;
