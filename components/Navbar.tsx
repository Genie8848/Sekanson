import { Menu, Listbox } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import React, { Fragment, ReactNode, useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
    const [isConnected, setIsConnected] = useState(false)
    const [isMenuOpened, setIsMenuOpened] = useState(false)

    const chains: Array<any> = [
        {
            id: "1",
            title: "Ethereum",
            img: "/images/eth-logo.svg",
            alt: "Ethereum chain",
        },
        {
            id: "2",
            title: "Polygon",
            img: "/images/polygon-logo.svg",
            alt: "Polygon chain",
        },
        {
            id: "3",
            title: "Mumbai",
            style: {
                filter: "sepia(100%)",
            },
            img: "/images/polygon-logo.svg",
            alt: "Mumbai chain",
        },
        {
            id: "4",
            title: "Optimism",
            img: "/images/optimism-logo.svg",
            alt: "Optimism chain",
        },
        {
            id: "5",
            title: "Goerli Optimism",
            style: {
                filter: "sepia(100%)",
            },
            img: "/images/optimism-logo.svg",
            alt: "Goerli Optimism chain",
        },
        {
            id: "6",
            title: "Arbitrum",
            img: "/images/arbitrum-logo.svg",
            alt: "Arbitrum chain",
        },
        {
            id: "7",
            title: "Arbitrum Testnet",
            style: {
                filter: "sepia(100%)",
            },
            img: "/images/arbitrum-logo.svg",
            alt: "Arbitrum chain",
        },
        {
            id: "8",
            title: "Avalanche",
            img: "/images/avalanche-logo.svg",
            alt: "Avalanche chain",
        },
        {
            id: "7",
            title: "Avalanche Testnet",
            style: {
                filter: "sepia(100%)",
            },
            img: "/images/avalanche-logo.svg",
            alt: "Avalanche chain",
        },

    ];
    const [selectedChain, setSelectedChain] = useState<any>(chains[0])

    // const ChainMenu = () => {
    //     <Menu>
    //         <Menu.Button>More</Menu.Button>
    //         <Menu.Items>
    //             {chains.map((chain, index) => {
    //                 return (
    //                     <Menu.Item key={index + chain.id}>
    //                         {({ active }) => (
    //                             <button
    //                                 type="button"
    //                                 className={clsx(
    //                                     "w-full px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b border-transparent",
    //                                     active && "bg-blue-500"
    //                                 )}
    //                                 role="menuitem"
    //                             >
    //                                 <div className="flex space-x-2 items-center w-fit">
    //                                     <img alt={chain.alt} src={chain.img} className="h-4 w-4" />
    //                                     <p className="font-semibold text-gray-700">{chain.title}</p>
    //                                 </div>
    //                             </button>
    //                         )}
    //                     </Menu.Item>
    //                 );
    //             })}
    //         </Menu.Items>
    //     </Menu>;

    //     return (
    //         <>
    //             <ChainMenu />
    //             <button
    //                 type="button"
    //                 className="w-full px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b border-transparent"
    //                 role="menuitem"
    //             >
    //                 <div className="flex space-x-2 items-center w-fit">
    //                     <img
    //                         alt="Ethereum chain"
    //                         src="/images/eth-logo.svg"
    //                         className="h-4 w-4"
    //                     />
    //                     <p className="font-semibold text-gray-700">Ethereum</p>
    //                 </div>
    //             </button>
    //             <button
    //                 type="button"
    //                 className="w-full px-4 py-2 text-md text-gray-700hover:bg-gray-100 hover:text-gray-900 border-b border-transparent"
    //                 role="menuitem"
    //             >
    //                 <div className="flex space-x-2 items-center w-fit">
    //                     <img
    //                         alt="Polygon chain"
    //                         src="/images/polygon-logo.svg"
    //                         className="h-4 w-4"
    //                     />
    //                     <p className="font-semibold text-gray-700">Polygon</p>
    //                 </div>
    //             </button>
    //             <button
    //                 type="button"
    //                 className="w-full px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b border-gray-200"
    //                 role="menuitem"
    //             >
    //                 <div className="flex space-x-2 items-center w-fit">
    //                     <img
    //                         alt="Mumbai chain"
    //                         src="/images/polygon-logo.svg"
    //                         className="h-4 w-4"
    //                     />
    //                     <p className="font-semibold text-gray-700">Mumbai</p>
    //                 </div>
    //             </button>
    //             <button
    //                 type="button"
    //                 className="w-full px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b border-transparent"
    //                 role="menuitem"
    //             >
    //                 <div className="flex space-x-2 items-center w-fit">
    //                     <img
    //                         alt="Optimism chain"
    //                         src="/images/optimism-logo.svg"
    //                         className="h-4 w-4"
    //                     />
    //                     <p className="font-semibold text-gray-700">Optimism</p>
    //                 </div>
    //             </button>
    //             <button
    //                 type="button"
    //                 className="w-full px-4 py-2 text-md text-gray-700hover:bg-gray-100 hover:text-gray-900 border-b border-gray-200"
    //                 role="menuitem"
    //             >
    //                 <div className="flex space-x-2 items-center w-fit">
    //                     <img
    //                         alt="Goerli Optimism chain"
    //                         src="/images/optimism-logo.svg"
    //                         className="h-4 w-4"
    //                     />
    //                     <p className="font-semibold text-gray-700">Goerli Optimism</p>
    //                 </div>
    //             </button>
    //             <button
    //                 type="button"
    //                 className="w-full px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 
    //   border-b border-transparent"
    //                 role="menuitem"
    //             >
    //                 <div className="flex space-x-2 items-center w-fit">
    //                     <img
    //                         alt="Arbitrum chain"
    //                         src="/images/arbitrum-logo.svg"
    //                         className="h-4 w-4"
    //                     />
    //                     <p className="font-semibold text-gray-700">Arbitrum</p>
    //                 </div>
    //             </button>
    //             <button
    //                 type="button"
    //                 className="w-full px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b border-gray-200"
    //                 role="menuitem"
    //             >
    //                 <div className="flex space-x-2 items-center w-fit">
    //                     <img
    //                         alt="Arbitrum Testnet chain"
    //                         src="/images/arbitrum-logo.svg"
    //                         className="h-4 w-4"
    //                     />
    //                     <p className="font-semibold text-gray-700">Arbitrum Testnet</p>
    //                 </div>
    //             </button>
    //             <button
    //                 type="button"
    //                 className="w-full px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b border-transparent"
    //                 role="menuitem"
    //             >
    //                 <div className="flex space-x-2 items-center w-fit">
    //                     <img
    //                         alt="Avalanche chain"
    //                         src="/images/avalanche-logo.svg"
    //                         className="h-4 w-4"
    //                     />
    //                     <p className="font-semibold text-gray-700">Avalanche</p>
    //                 </div>
    //             </button>
    //             <button
    //                 type="button"
    //                 className="w-full px-4 py-2 text-md text-gray-700hover:bg-gray-100 hover:text-gray-900 border-b border-gray-200"
    //                 role="menuitem"
    //             >
    //                 <div className="flex space-x-2 items-center w-fit">
    //                     <img
    //                         alt="Avalanche Testnet chain"
    //                         src="/images/avalanche-logo.svg"
    //                         className="h-4 w-4"
    //                     />
    //                     <p className="font-semibold text-gray-700">Avalanche Testnet</p>
    //                 </div>
    //             </button>
    //             <button
    //                 type="button"
    //                 className="w-full px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b border-transparent"
    //                 role="menuitem"
    //             >
    //                 <div className="flex space-x-2 items-center w-fit">
    //                     <img
    //                         alt="BNB Mainnet chain"
    //                         src="/images/bnb-logo.svg"
    //                         className="h-4 w-4"
    //                     />
    //                     <p className="font-semibold text-gray-700">BNB Mainnet</p>
    //                 </div>
    //             </button>
    //             <button
    //                 type="button"
    //                 className="w-full px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b border-transparent"
    //                 role="menuitem"
    //             >
    //                 <div className="flex space-x-2 items-center w-fit">
    //                     <img
    //                         alt="BNB Testnet chain"
    //                         src="/images/bnb-logo.svg"
    //                         className="h-4 w-4"
    //                     />
    //                     <p className="font-semibold text-gray-700">BNB Testnet</p>
    //                 </div>
    //             </button>
    //         </>
    //     );
    // };

    const ToolsPopupMenu = () => {
        const [isActive, setIsActive] = useState(false)
        return (
            <div className="relative inline-block text-left">
                <button
                    type="button"
                    onClick={() => setIsActive(prev => !prev)}
                    className="py-1 flex text-gray-800 border-b border-white hover:border-gray-200 flex items-center"
                    id="options-menu"
                >
                    Tools &amp; Extras
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
                        className={clsx(
                            "h-4 w-4 ml-2 transition duration-200 ease-in-out",
                            isActive ? "rotate-180" : "rotate-0"
                        )}
                    >
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>

                </button>
                {isActive &&
                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
                        <div
                            className="py-1 "
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                        >
                            <Link
                                href="https://nft-inator.com/?ref=mintplex.xyz"
                                rel="noreferrer"
                                target="_blank"
                                className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                            >
                                <span className="flex flex-col">
                                    <span>No-Code NFT Generator</span>
                                </span>
                            </Link>
                            <Link
                                href="/tools/metadata-maker"
                                className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                                role="menuitem"
                            >
                                <span className="flex flex-col">
                                    <span>Metadata Editor</span>
                                </span>
                            </Link>
                            <Link
                                href="/tools/opensea-bulk-refresh"
                                className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                                role="menuitem"
                            >
                                <span className="flex flex-col">
                                    <span>OS Bulk Image Refresh</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                }
            </div>
        )
    }

    const ProfilePopupMenu = () => {
        const [isActive, setIsActive] = useState(false)
        return (
            <div className="relative inline-block text-left">
                <div onClick={() => setIsActive(prev => !prev)} className="flex items-center space-x-1 hover:bg-gray-200 p-2 cursor-pointer rounded-lg">
                    <div className="flex">
                        <div
                            style={{
                                borderRadius: " 50px",
                                overflow: "hidden",
                                padding: "0px",
                                margin: "0px",
                                width: "30px",
                                height: "30px",
                                display: "inline-block",
                                background: "rgb(200, 20, 59)",
                            }}
                        >
                            <svg x="0" y="0" width="30" height="30">
                                <rect
                                    x="0"
                                    y="0"
                                    width="30"
                                    height="30"
                                    transform="translate(-0.40947637363194944 -7.383047979261877) rotate(278.9 15 15)"
                                    fill="#F5DC00"
                                ></rect>
                                <rect
                                    x="0"
                                    y="0"
                                    width="30"
                                    height="30"
                                    transform="translate(-4.438295972664206 16.598233685650683) rotate(266.1 15 15)"
                                    fill="#1885F2"
                                ></rect>
                                <rect
                                    x="0"
                                    y="0"
                                    width="30"
                                    height="30"
                                    transform="translate(-26.953976728839613 -2.3223006953495564) rotate(242.8 15 15)"
                                    fill="#FB1849"
                                ></rect>
                            </svg>
                        </div>
                    </div>
                    <p className="text-gray-900 text-base font-semibold">
                        0x4dc...fb6a2
                    </p>
                </div>
                {isActive &&
                    <div className="origin-top-right absolute right-0 mt-2 w-fit rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
                        <div
                            className="py-1 "
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                        >
                            <button className="w-full text-left px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600">
                                Refresh Cache
                            </button>
                            <button onClick={() => {
                                setIsActive(false)
                                setIsConnected(false)
                            }} className="w-full text-left px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600">
                                Disconnect
                            </button>
                        </div>
                    </div>
                }
            </div>
        )
    }

    const ChainSelectMenu = () => {
        return (
            <div className="relative">
                <Listbox
                    value={selectedChain} onChange={setSelectedChain}>
                    <Listbox.Button
                        type="button"
                        className="w-full flex items-center px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b border-transparent border border-gray-300 bg-white flex items-center justify-between w-full rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 w-max"
                    >
                        <div className="flex space-x-2 items-center w-fit">
                            <img
                                alt={selectedChain.alt}
                                src={selectedChain.img}
                                className="h-4 w-4"
                            />
                            <p className="font-semibold text-gray-700">
                                {selectedChain.title}
                            </p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
                            <polyline points="6 9 12 15 18 9">
                            </polyline>
                        </svg>
                    </Listbox.Button>
                    <Listbox.Options className="bg-white z-20 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5
                    ">
                        {chains.map((chain) => (
                            <Listbox.Option
                                key={chain.id}
                                value={chain}
                                as={Fragment}
                            >
                                <button
                                    type="button"
                                    className="w-full px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b border-transparent"
                                    role="menuitem"
                                >
                                    <div className="flex space-x-2 items-center w-fit">
                                        <img
                                            alt={chain.alt}
                                            src={chain.img}
                                            style={chain.style}
                                            className="h-4 w-4"
                                        />
                                        <p className="font-semibold text-gray-700">{chain.title}</p>
                                    </div>
                                </button>
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Listbox>
            </div>

        )

    };

    const MenuButton = () => {
        return (
            <button
                onClick={() => {
                    setIsMenuOpened(prev => !prev)
                }}
                type="button"
                className={
                    clsx(
                        "transition duration-200 ease-in-out lg:hidden flex flex-col ml-4",
                        isMenuOpened ? "rotate-90" : "rotate-0"
                    )
                }
            >
                <span className="w-6 h-1 bg-gray-800 mb-1"></span>
                <span className="w-6 h-1 bg-gray-800 mb-1"></span>
                <span className="w-6 h-1 bg-gray-800 mb-1"></span>
            </button>
        )
    }

    return (
        <div>
            <header className="h-16 md:h-20 flex justify-center items-center z-30 w-full overflow-visible border-b-2 border-gray-100">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <div className="dark:text-white flex gap-x-6 items-center">
                        <Link href="/">

                            <img
                                src="/images/mintplex-logo-dark.svg"
                                className="h-10"
                                alt="mintplex.xyz"
                            />
                        </Link>
                        <a
                            href="https://twitter.com/mintplexnft/status/1603589091043332096"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="flex gap-x-2 items-center hover:bg-gray-50 rounded-lg p-2">
                                <p className="text-2xl">🎉</p>
                                <div className=" flex flex-col">
                                    <p className="text-gray-500 text-sm">
                                        Mintplex Pro now only <b>$12.00 per month</b>!
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    {
                        isConnected ?
                            (
                                <div className="flex items-center">
                                    <nav className="text-gray-800 dark:text-white text-md lg:flex space-x-8 items-center hidden">
                                        {/* <div className="flex items-center space-x-2">
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
                                        className="h-4 w-4 text-gray-600"
                                    >
                                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                    </svg>
                                    <p className="text-base text-gray-600">-</p>
                                </div>
                                <div className="relative inline-block text-left">
                                    <div>
                                        <button
                                            type="button"
                                            className="border border-gray-300 bg-white flex items-center justify-between w-full rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0"
                                        >
                                            <div className="flex space-x-2 items-center">
                                                <img
                                                    alt="current chain"
                                                    src="/images/eth-logo.svg"
                                                    className="h-4 w-4"
                                                    style={{
                                                        filter: "sepia(100%)",
                                                    }}
                                                />
                                                <p className="font-semibold text-gray-700">Goerli</p>
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
                                                className="ml-2 h-4 w-4"
                                            >
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="z-20 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                                        <div
                                            className="py-1 "
                                            role="menu"
                                            aria-orientation="vertical"
                                            aria-labelledby="options-menu"
                                        ></div>
                                    </div>
                                </div> */}
                                        <ChainSelectMenu />

                                        <a
                                            href="https://trusting-lungfish-ebb.notion.site/Mintplex-FAQ-s-91f5d2700d764031a44c064ed49f8aec"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center pb-1 border-b border-white hover:border-gray-200"
                                        >
                                            Support
                                        </a>
                                        <ToolsPopupMenu />

                                        <ProfilePopupMenu />
                                    </nav>
                                    <button className="transition duration-200 ease-in-out lg:hidden flex flex-col ml-4">
                                        <span className="w-6 h-1 bg-gray-800 mb-1"></span>
                                        <span className="w-6 h-1 bg-gray-800 mb-1"></span>
                                        <span className="w-6 h-1 bg-gray-800 mb-1"></span>
                                    </button>
                                </div>
                            ) : (
                                <div className="flex items-center">
                                    <nav className="text-gray-800 dark:text-white text-md  space-x-8 items-center hidden lg:flex">
                                        <a
                                            href="https://trusting-lungfish-ebb.notion.site/Mintplex-FAQ-s-91f5d2700d764031a44c064ed49f8aec"
                                            target="_blank"
                                            rel="noreferrer"
                                            className=""
                                        >
                                            FAQ
                                        </a>
                                        <div className="relative inline-block text-left">
                                            <div>
                                                <button
                                                    type="button"
                                                    className="py-1 flex  border-b border-white hover:border-gray-200"
                                                    id="options-menu"
                                                >
                                                    Tools
                                                </button>
                                            </div>
                                        </div>
                                        <a
                                            href="https://twitter.com/@mintplexnft"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Twitter
                                        </a>
                                        <button onClick={() => {
                                            setIsConnected(true)
                                        }} className="py-1 px-2 flex text-ramppblue hover:text-white border-2 border-ramppblue rounded-md hover:bg-ramppdeepblue">
                                            Launch a Project
                                        </button>
                                    </nav>

                                    <MenuButton />

                                </div>
                            )
                    }

                </div>
            </header>

            <div className={
                clsx(
                    "fixed opacity-0 flex justify-center z-30 w-full transition duration-200 ease-in-out justify-center bg-white rounded-lg",
                    isMenuOpened ? "opacity-100" : "opacity-0"
                )
            }>
                <div className="flex flex-col text-xl space-y-4 items-baseline">
                    <a
                        href="https://twitter.com/@mintplexnft"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Twitter
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
