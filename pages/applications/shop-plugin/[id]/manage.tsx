import clsx from "clsx";
import Link from "next/link";
import React, { useRef, useState } from "react";
import BaseLayout from "../../../../components/BaseLayout";
import ColorPickerInput from "../../../../components/ColorPickerInput";
import ColorPickerButton from "../../../../components/ColorPickerInput";

type Props = {};

const networkChains = [
    {
        id: "1",
        name: "Ethereum",
        src: "/images/eth-logo.svg",
        className:
            "border-gray-300  border hover:border-gray-700 text-gray-300 hover:text-gray-700",
        activeClass: "bg-gray-100 text-gray-700 border-gray-700",
    },
    {
        id: "2",
        name: "Polygon",
        src: "/images/polygon-logo.svg",
        className:
            "border-indigo-300 hover:border-indigo-700 text-gray-300 hover:text-indigo-700",
        activeClass: "border-indigo-700 bg-indigo-100 text-indigo-700 ",
    },
    {
        id: "3",
        name: "Optimism",
        src: "/images/optimism-logo.svg",
        className:
            "border-red-300 hover:border-red-700 text-gray-300 hover:text-red-700",
        activeClass: "border-red-700 text-red-700 bg-red-100",
    },
    {
        id: "4",
        name: "Arbitrum",
        src: "/images/arbitrum-logo.svg",
        className:
            "border-blue-300 hover:border-blue-700 text-gray-300 hover:text-blue-700",
        activeClass: "border-blue-700 text-blue-700 bg-blue-100",
    },
    {
        id: "5",
        name: "Avalanche",
        src: "/images/avalanche-logo.svg",
        className:
            "border-red-300 hover:border-red-700 text-gray-300 hover:text-red-700",
        activeClass: "border-red-700 text-red-700 bg-red-100",
    },
    {
        id: "6",
        name: "BNB Chain",
        src: "/images/bnb-logo.svg",
        className:
            "border-yellow-300 hover:border-yellow-700 text-gray-300 hover:text-yellow-700",
        activeClass: "border-yellow-700 text-yellow-700 bg-yellow-100",
    },
];

const Manage = (props: Props) => {
    const [selectedNetwork, setSelectedNetwork] = useState(networkChains[0]);

    const NetworkOption = () => {
        return (
            <>
                {networkChains.map((networkChain) => {
                    return (
                        <div
                            key={networkChain.id}
                            onClick={() => setSelectedNetwork(networkChain)}
                            className={clsx(
                                "w-auto flex justify-center items-center space-x-4 p-4 bg-transparent rounded-lg cursor-pointer border ",
                                JSON.stringify(selectedNetwork) === JSON.stringify(networkChain)
                                    ? networkChain.activeClass
                                    : ""
                            )}
                        >
                            <img alt="ethereum" src={networkChain.src} className="h-8" />
                            <p>{networkChain.name}</p>
                        </div>
                    );
                })}
            </>
        );
    };

    const SetupTabs = () => {
        const [activeTab, setActiveTab] = useState(0);
        return (
            <div className=" flex flex-col transition duration-500 ease-in-out">
                <div className="w-full flex space-x-8">
                    <button
                        type="button"
                        onClick={() => setActiveTab(0)}
                        className={clsx(
                            "cursor-pointer text-lg ",
                            activeTab === 0
                                ? "text-ramppblue underline"
                                : "text-gray-400  hover:text-ramppblue"
                        )}
                    >
                        Advanced Setup
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveTab(1)}
                        className={clsx(
                            "cursor-pointer text-lg ",
                            activeTab === 1
                                ? "text-ramppblue underline"
                                : "text-gray-400  hover:text-ramppblue"
                        )}
                    >
                        Basic Setup
                    </button>
                </div>
                {activeTab === 0 ? (
                    <>
                        <p className="text-sm my-2 text-gray-600">
                            Advanced setup will create a <u>unique</u> discount per validation
                            for wallet that expires 15 minutes from creation.
                        </p>
                        <div className="relative w-3/4 my-4">
                            <label className="text-gray-500">Minimum Token/NFT balance</label>
                            <p className="text-xs text-gray-500">
                                This is the minimum amount of NFTs/Tokens you want holders to
                                hold in order to be able to receive the discount code.
                            </p>
                            <input
                                onChange={() => { }}
                                type="number"
                                className="mt-1 flex-1 appearance-none w-fit py-2 px-4 bg-white rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                                name="desiredBalance"
                                autoComplete="off"
                                min="1"
                                value="12"
                            />
                        </div>
                    </>
                ) : (
                    <div>
                        <div className="relative w-3/4 my-4">
                            <label className="text-gray-500">Minimum Token/NFT balance</label>
                            <p className="text-xs text-gray-500">
                                This is the minimum amount of NFTs/Tokens you want holders to
                                hold in order to be able to receive the discount code.
                            </p>
                            <input
                                type="number"
                                className="mt-1 flex-1 appearance-none w-fit py-2 px-4 bg-white rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                                name="desiredBalance"
                                autoComplete="off"
                                min="1"
                                value="12"
                            />
                        </div>
                        <div className="relative w-3/4 my-4">
                            <label htmlFor="discountCode" className="text-gray-500">
                                Shopify Discount Code
                            </label>
                            <p className="text-xs text-gray-500">
                                This is the discount code from your Shopify store you wish to
                                apply to holders who pass verification.
                            </p>
                            <input
                                type="text"
                                className="mt-1 flex-1 appearance-none w-full py-2 px-4 bg-white rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                                name="discountCode"
                                autoComplete="off"
                                placeholder="Discount code from Shopify"
                                value=""
                            />
                            <a
                                href="https://docs.rampp.xyz/rampp-apps-faq/shopify-token-discount-plugin/advanced-setup-vs-basic-setup/basic-setup-faq/how-to-generate-a-discount-code"
                                target="_blank"
                                rel="noreferrer"
                                className="underline text-blue-500 text-xs"
                            >
                                How do I set a discount code on Shopify?
                            </a>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    const ProjectContractSettingsAccordion = () => {
        const [active, setActive] = useState(true);

        return (
            <>
                <div
                    onClick={() => setActive((prev) => !prev)}
                    className="flex items-center justify-between hover:bg-gray-100 rounded-lg py-2 mt-8 cursor-pointer"
                >
                    <div className="flex space-x-2 items-center">
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
                            className="h-6 w-6 text-green-600"
                        >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <h2 className="font-semibold text-xl text-gray-800">
                            Plugin Contract Settings
                        </h2>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={clsx(
                            "transition duration-500 ease-in-out",
                            active ? "0" : "rotate-180"
                        )}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                </div>
                <div
                    className={clsx(
                        " transition ease-in-out duration-[2000ms] delay-300",
                        active ? "block" : "hidden"
                    )}
                >
                    <div className="relative w-3/4 my-4">
                        <label className="text-gray-500">Blockchain</label>
                        <p className="text-xs text-gray-500">
                            Select the blockchain of where your contract is deployed. This
                            contract must exist.
                        </p>
                        <div className="mt-4 mb-6 w-full grid grid-cols-3 gap-4 items-center ">
                            <NetworkOption />
                        </div>
                    </div>
                    <div className="relative w-3/4 my-4">
                        <label htmlFor="url" className="text-gray-500">
                            Store URL
                        </label>
                        <p className="text-xs text-gray-500">
                            This is the URL of your shopify store people shop on.
                        </p>
                        <input
                            onChange={() => { }}
                            type="text"
                            className="mt-1 flex-1 appearance-none w-full py-2 px-4 bg-white rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent "
                            name="url"
                            autoComplete="off"
                            placeholder="https://mystore.com"
                            value="asfasfasfas"
                        />
                    </div>
                    <div className="relative w-3/4 my-4 flex flex-col">
                        <label className="text-gray-500">Contract Type</label>
                        <p className="text-xs text-gray-500">
                            Mintplex supports ERC-721, ERC-1155, and ERC-20 contracts.
                        </p>
                        <select
                            name="contractType"
                            className="mt-1 appearance-none w-fit py-2 px-4 bg-white rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base  focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent "
                        >
                            <option value="ERC-721A">ERC-721 / ERC-721A</option>
                            <option value="ERC-1155">ERC-1155</option>
                            <option value="ERC-20">ERC-20</option>
                        </select>
                    </div>
                    <div className="relative w-3/4 my-4">
                        <label htmlFor="testnetContractAddress" className="text-gray-500">
                            Testnet Contract address
                        </label>
                        <p className="text-xs text-gray-500">
                            This is the contract address of your contract on a testnet
                            (Goerli, Mumbai, etc). This is so you can test out the Mintplex
                            Shopify Plugin without having to deploy a mainnet contract.
                        </p>
                        <input
                            type="text"
                            onChange={() => { }}
                            className="mt-1 flex-1 appearance-none w-full py-2 px-4 bg-white rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent "
                            name="testnetContractAddress"
                            autoComplete="off"
                            placeholder="0x9a68563da....abe2372665"
                            value="asfasfasfa"
                        />
                    </div>
                    <div className="relative w-3/4 my-4">
                        <label
                            htmlFor="productionContractAddress"
                            className="text-gray-500"
                        >
                            Production Contract address
                        </label>
                        <p className="text-xs text-gray-500">
                            This is the contract address of your live contract.
                        </p>
                        <input
                            onChange={() => { }}
                            type="text"
                            className="mt-1 flex-1 appearance-none w-full py-2 px-4 bg-white rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent "
                            name="productionContractAddress"
                            autoComplete="off"
                            placeholder="0x9a68563da....abe2372665"
                            value="asfasfasf"
                        />
                    </div>
                </div>
            </>
        );
    };

    const ShopifyStoreSettingsAccordion = () => {
        const [active, setActive] = useState(true);
        return (
            <>
                <div
                    onClick={() => setActive((prev) => !prev)}
                    className="flex items-center justify-between hover:bg-gray-100 rounded-lg py-2 mt-8 cursor-pointer"
                >
                    <div className="flex space-x-2 items-center">
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
                            className="h-6 w-6 text-yellow-600"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        <h2 className="font-semibold text-xl text-gray-800">
                            Shopify Store Settings
                        </h2>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={clsx(
                            "transition duration-500 ease-in-out",
                            active ? "0" : "rotate-180"
                        )}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                </div>
                <div
                    className={clsx(
                        " transition ease-in-out duration-[2000ms] delay-300",
                        active ? "block" : "hidden"
                    )}
                >
                    <SetupTabs />
                    <div className="relative w-3/4 my-4">
                        <label htmlFor="shopURL" className="text-gray-500">
                            Store Admin URL
                        </label>
                        <p className="text-xs text-gray-500">
                            This is the base url in which you administrate your store from.
                        </p>
                        <input
                            onChange={() => { }}
                            type="url"
                            className=" mt-1 flex-1 appearance-none w-full py-2 px-4 bg-white rounded-lg  border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent "
                            name="shopURL"
                            autoComplete="off"
                            placeholder="https://mystore.myshopify.com"
                            value=""
                        />
                    </div>
                    <div className="relative w-3/4 my-4">
                        <label htmlFor="shopifyAPIKey" className="text-gray-500">
                            Shopify App API Key
                        </label>
                        <p className="text-xs text-gray-500">
                            This is the api key for a custom app on your store that we will
                            use to create new discount codes dynamically. This key is
                            encrypted before storing.
                        </p>
                        <input
                            onChange={() => { }}
                            type="password"
                            className="mt-1 flex-1 appearance-none w-full py-2 px-4 bg-white rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base  focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent "
                            name="shopifyAPIKey"
                            autoComplete="off"
                            placeholder="Shopify App API Key"
                            value="asfasfasfas"
                        />
                        <a
                            href="https://docs.rampp.xyz/rampp-apps-faq/shopify-token-discount-plugin/advanced-setup-vs-basic-setup/advanced-setup-faq/how-to-create-a-shopify-app-key"
                            target="_blank"
                            rel="noreferrer"
                            className="underline text-blue-500 text-xs"
                        >
                            Learn how to get this API key easily.
                        </a>
                    </div>
                    <div className="relative w-3/4 my-4">
                        <label htmlFor="priceRuleId" className="text-gray-500">
                            Discount Price Rule ID
                        </label>
                        <p className="text-xs text-gray-500">
                            This is the template discount Mintplex will use when creating
                            discount codes for holders.
                        </p>
                        <input
                            onChange={() => { }}
                            type="text"
                            className=" mt-1 flex-1 appearance-none w-full py-2 px-4 bg-white rounded-lg  border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base  focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent "
                            name="priceRuleId"
                            autoComplete="off"
                            placeholder="Discount code from Shopify"
                            value=""
                        />
                        <a
                            href="https://docs.rampp.xyz/rampp-apps-faq/shopify-token-discount-plugin/advanced-setup-vs-basic-setup/advanced-setup-faq/how-to-generate-a-price-rule-id"
                            target="_blank"
                            rel="noreferrer"
                            className="underline text-blue-500 text-xs"
                        >
                            How to setup a price rule on Shopify
                        </a>
                    </div>
                </div>
            </>
        );
    };

    const BannerStyleSettingsAccordion = () => {
        const [active, setActive] = useState(true);
        return (
            <>
                <div
                    onClick={() => setActive((prev) => !prev)}
                    className="flex items-center justify-between hover:bg-gray-100 rounded-lg py-2 mt-8 cursor-pointer"
                >
                    <div className="flex space-x-2 items-center">
                        <h2 className="font-semibold text-xl text-gray-800">
                            Banner Style Settings
                        </h2>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={clsx(
                            "transition duration-500 ease-in-out",
                            active ? "0" : "rotate-180"
                        )}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                </div>
                <div
                    className={clsx(
                        " transition ease-in-out duration-[2000ms] delay-300",
                        active ? "block" : "hidden"
                    )}
                >
                    <p className="text-xs text-gray-500">
                        This is the default text of your banner when it loads
                    </p>
                    <input
                        onChange={() => { }}
                        type="text"
                        className="mt-1 flex-1 appearance-none w-full py-2 px-4 bg-white rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent "
                        name="ctaText"
                        autoComplete="off"
                        placeholder="Get 50% off your purchase!"
                        value="asfas"
                    />
                    <div className="relative w-3/4 my-4">
                        <label className="text-gray-500">&apos;Call to Action&apos; Text Color</label>
                        <ColorPickerInput handleChange={() => { }} />
                    </div>
                    <div className="relative w-3/4 my-4">
                        <label className="text-gray-500">Banner Background Color</label>
                        <ColorPickerInput handleChange={() => { }} />
                    </div>
                </div>
            </>
        );
    };

    const GetYourEmbedScriptAccordion = () => {
        const [active, setActive] = useState(true);
        return (
            <>
                <div
                    onClick={() => setActive((prev) => !prev)}
                    className="flex items-center justify-between hover:bg-gray-100 rounded-lg py-2 mt-8 cursor-pointer"
                >
                    <div className="flex space-x-2 items-center">
                        <h2 className="font-semibold text-xl text-gray-800">
                            Get your embed script!
                        </h2>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={clsx(
                            "transition duration-500 ease-in-out",
                            active ? "0" : "rotate-180"
                        )}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                </div>
                <div
                    className={clsx(
                        " transition ease-in-out duration-[2000ms] delay-300",
                        active ? "block" : "hidden"
                    )}
                >
                    <a
                        href="https://youtu.be/FSCCY_w2PRU"
                        target="_blank"
                        rel="noreferrer"
                        className="p-4 my-2 rounded-lg border border-blue-600 text-blue-600 bg-blue-100 w-full flex justify-center items-center cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            stroke-Linejoin="round"
                            className="h-6 w-6 mr-2"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="16" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                        <p>
                            If you have never set up this plugin before - view our tutorial!
                        </p>
                    </a>
                    <div className="w-full flex-col space-y-4 my-4">
                        <div className="flex-col space-y-1">
                            <p className="text-gray-600 text-lg">Goerli Optimism</p>
                            <p className="text-gray-600 text-xs">
                                Copy this embed HTML code into your shop to allow people to
                                verify their holdings on the Goerli Optimism network.
                            </p>
                        </div>
                        <div
                            data-tip="Click to copy to clipboard"
                            className="border border-gray-600 bg-gray-100 p-2 rounded-md cursor-pointer overflow-x-hidden"
                        >
                            <pre className="text-gray-500 text-xs break-all flex  flex-wrap p-3">
                                <br />
                                &lt;!-- Plugin provided by Mintplex.xyz --&gt;
                                <br />
                                &lt;script <br />
                                &nbsp;data-plugin-id=&ldquo;tCsiAaTfHQTxMjW6W3eh&ldquo; <br />
                                &nbsp;data-network=&ldquo;goerliOptimism&ldquo; <br />
                                &nbsp;data-styles=&ldquo;eyJiYW5uZXIiOnsic3R5bGUiOiJiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGIiwidGV4dCI6bnVsbH0sImN0YSI6eyJzdHlsZSI6ImNvbG9yOiAjYTQyZDJkIiwidGV4dCI6ImFzZmFzIn19&ldquo; <br />
                                &nbsp;data-token-id=&ldquo;&ldquo; type=&ldquo;text/javascript&ldquo; <br />
                                &nbsp;src=&ldquo;https://mintplex.xyz/embeds/shopify/setup.js&ldquo; <br />
                                &gt;&lt;/script&gt;
                                <br />
                                &lt;!-- End Mintplex.xyz Plugin --&gt;
                                <br />
                            </pre>
                        </div>
                    </div>
                    <div className="w-full flex-col space-y-4 my-4">
                        <div className="flex-col space-y-1 ">
                            <p className="text-gray-600 text-lg">Optimism</p>
                            <p className="text-gray-600 text-xs">
                                Copy this embed HTML code into your shop to allow people to
                                verify their holdings on the Optimism network.
                            </p>
                        </div>
                        <div className="relative border border-gray-600 bg-gray-100 p-5 h-fit min-h-[150px] rounded-md overflow-x-hidden">
                            <div className="w-full h-full flex justify-center items-center absolute z-10">
                                <button
                                    type="button"
                                    className="bg-ramppblue text-white rounded-md px-4 py-1"
                                >
                                    Pay to unlock this plugin!
                                </button>
                            </div>
                            <pre
                                className="relative text-gray-500 text-xs break-all"
                                style={{ filter: "blur(7px)", zIndex: 1 }}
                            >
                                &lt;!-- Plugin provided by Mintplex.xyz --&gt; Oh you think
                                you&ldquo;re clever or something dont you? &lt;!-- End Mintplex.xyz
                                Plugin --&gt;
                            </pre>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return (
        <BaseLayout>
            <section className="container mx-auto px-6 my-8 w-full flex">
                <div className="w-1/2 flex-col h-screen overflow-y-scroll pr-4">
                    <div className="mt-2 mb-6">
                        <Link
                            href="/my/projects"
                            className="text-blue-500 underline text-base"
                        >
                            ← Dashboard
                        </Link>
                    </div>
                    <p className="my-2 text-gray-400 text-sm">Watching for changes...</p>
                    <div
                        className="__react_component_tooltip t28f06b82-fc74-4fd8-8ad3-b6d0303fab79 place-top type-dark"
                        id="t28f06b82-fc74-4fd8-8ad3-b6d0303fab79"
                        data-id="tooltip"
                    ></div>
                    <h1 className="text-2xl text-gray-800">
                        Configure the plugin for your store
                    </h1>
                    <p className="text-base text-gray-600 my-2">
                        Modify the settings below to change the presentation of the banner
                        that will go on your store.
                    </p>

                    <ProjectContractSettingsAccordion />
                    <ShopifyStoreSettingsAccordion />
                    <BannerStyleSettingsAccordion />
                    <GetYourEmbedScriptAccordion />
                </div>
                <div className="w-1/2 flex-col h-screen overflow-y-scroll pr-4 rounded-md border-1">
                    <div className="browser-frame">
                        <div className="browser-frame__top flex gap-x-1.5 bg-greylight h-11 px-2 py-3">
                            <div className="browser-frame__button browser-frame__button--red w-3 h-3 bg-red-600 rounded-full"></div>
                            <div className="browser-frame__button browser-frame__button--yellow  w-3 h-3 bg-yellow-600 rounded-full"></div>
                            <div className="browser-frame__button browser-frame__button--green  w-3 h-3 bg-green-600 rounded-full"></div>
                            <div className="browser-frame__burger w-4 flex flex-col justify-evenly items-stretch h-4 flex-shrink-0 ml-auto">
                                <span className="browser-frame__burger-line h-1 bg-gray-400"></span>
                                <span className="browser-frame__burger-line h-1 bg-gray-400"></span>
                                <span className="browser-frame__burger-line h-1 bg-gray-400"></span>
                            </div>
                        </div>
                        <div className="browser-frame__body">
                            <div
                                className="p-0 w-full flex justify-center items-center"
                                style={{
                                    height: "80px",
                                    backgroundColor: "rgb(255, 255, 255)",
                                }}
                            >
                                <p style={{ color: "rgb(214, 10, 10)" }}>asfas</p>
                            </div>
                            <div className="w-full -mt-1">
                                <span aria-live="polite" aria-busy="true">
                                    <span
                                        className="react-loading-skeleton"
                                        style={{ height: "200px" }}
                                    >
                                        ‌
                                    </span>
                                    <br />
                                </span>
                                <br />
                                <div className="w-full">
                                    <div
                                        className="w-full p-2 grid grid-cols-3 gap-x-2 gap-y-4"
                                        aria-live="polite"
                                        aria-busy="true"
                                    >
                                        {[1, 2, 3, 4, 5, 6].map((val) => {
                                            return (
                                                <span
                                                    key={val.toString()}
                                                    className="react-loading-skeleton"
                                                    style={{ height: "200px" }}
                                                >
                                                    ‌
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </BaseLayout>
    );
};

export default Manage;
