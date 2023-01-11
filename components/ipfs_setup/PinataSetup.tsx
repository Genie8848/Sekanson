import clsx from "clsx";
import React, { useState } from "react";

type Props = {
    goToInitialStep: () => void;
};

const PinataSetup = (props: Props) => {
    const [currentStep, setcurrentStep] = useState(1);

    const Step1 = () => {
        return (
            <>
                <h1 className="text-5xl font-black text-gray-700">
                    Register with Pinata.cloud
                </h1>
                <p className="text-base text-gray-800 my-2">
                    We recommend using
                    <a href="https://pinata.cloud" className="text-pink-600 underline">
                        Pinata.cloud
                    </a>
                    for your IPFS file storage, but you can use any IPFS service you like.
                    <br />
                    <br />
                    Pinata is free for any project that is less than 1GB or 100 files in
                    size.
                </p>
                <div className="mt-4 flex-col space-y-4">
                    <a
                        href="https://app.pinata.cloud"
                        target="_blank"
                        rel="noreferrer"
                        className="text-pink-600 underline text-lg font-semibold flex space-x-3"
                    >
                        Register for a free Pinata account.
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-Linejoin="round"
                            className="h-4"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                    <img
                        src="/images/register-pinata.png"
                        alt="Pinata registration process"
                        className="w-full rounded-lg"
                    />
                </div>
            </>
        );
    };

    const Step2 = () => {
        return (
            <>
                <h1 className="text-5xl font-black text-gray-700">Upload Images</h1>
                <p className="text-base text-gray-800 my-2">
                    Once setup with Pinata or your IPFS service account, you will want to
                    upload <b>all</b> of your token images into a folder named
                    <code className="bg-gray-300 text-pink-600 rounded-sm p-1">
                        images
                    </code>
                    . Refer to the gif below to see how to do this easily.
                    <br />
                    <br />
                    Need help generating your artwork? Take a look at
                    <a
                        href="https://nft-inator.com/?ref=mintplex.xyz"
                        rel="noreferrer"
                        target="_blank"
                        className="text-pink-600 underline"
                    >
                        Diamond Hands Hotel Generator
                    </a>
                    our friends no-code NFT generation tool!
                </p>
                <div className="mt-4 flex-col space-y-4">
                    <a
                        href="https://app.pinata.cloud/pinmanager"
                        target="_blank"
                        rel="noreferrer"
                        className="text-pink-600 underline text-lg font-semibold flex space-x-3"
                    >
                        Upload images to Pinata
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-Linejoin="round"
                            className="h-4"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                    <video
                        controls={true}
                        className="w-full rounded-lg"
                    // name="Uploading to Pinata"
                    >
                        <source src="/static/media/upload.3f805953.mov" />
                    </video>
                </div>
                <div className="mt-10 flex-col space-y-4">
                    <p className="text-gray-800 text-lg font-semibold flex space-x-3">
                        Provide Mintplex the CID
                    </p>
                    <p className="text-gray-600">
                        After uploading the images you will be provided a
                        <code className="bg-gray-300 text-pink-600 rounded-sm p-1">
                            CID
                        </code>
                        which is just a bunch of letter and numbers that tell the world how
                        to find your images. Mintplex needs this to create your smart
                        contract!
                    </p>
                    <figure>
                        <img
                            className="w-full rounded-lg"
                            src="/images/imagesCid.png"
                            alt="How to find the CID of the images you uploaded."
                        />
                        <figcaption className="text-xs text-gray-300 text-center">
                            Where to find the CID for our uploaded folder of images
                        </figcaption>
                    </figure>
                    <div className="pb-4">
                        <label className="text-gray-800 py-2">Image folder CID</label>
                        <p className="text-gray-400 text-xs">
                            This folder should contain your images labeled
                            <code className="bg-gray-100 p-1 text-pink-500 rounded-md">
                                1.png
                            </code>
                            ,
                            <code className="bg-gray-100 p-1 text-pink-500 rounded-md">
                                2.png
                            </code>
                            ... where each image matches its token id.
                        </p>
                        <div className="flex space-x-4 items-start px-2">
                            <div className="w-10/12 relative flex-col space-y-1">
                                <input
                                    type="text"
                                    className=" mt-1 flex-1 appearance-none w-full py-2 px-4 bg-white rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                                    name="imagesCID"
                                    autoComplete="off"
                                    placeholder="QmeBwUKvLXgAHkcwMpe8TsBesd3Zg7xhNyFvU9HmbRZ6TH"
                                    value=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="pb-4 flex-col space-y-2">
                        <label className="text-gray-800 py-2">Image File Extension</label>
                        <div className="flex space-x-4 items-start px-2">
                            <div className="w-10/12 relative flex-col space-y-1">
                                <select
                                    name="imageExtension"
                                    className="mt-1 flex-1 appearance-none w-full py-2 px-4 bg-white rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent
              "
                                >
                                    <option value=".jpeg">.jpeg</option>
                                    <option value=".jpg">.jpg</option>
                                    <option value=".png" selected>
                                        .png
                                    </option>
                                    <option value=".svg">.svg</option>
                                    <option value=".gif">.gif</option>
                                    <option value=".mp4">.mp4</option>
                                    <option value=".mov">.mov</option>
                                    <option value=".mp3">.mp3</option>
                                    <option value=".wav">.wav</option>
                                    <option value=".html">.html</option>
                                    <option value=".webp">.webp</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="pb-4 flex-col space-y-2">
                        <button className="mx-2 mt-1 border rounded-lg p-2 bg-transparent border-blue-300 text-blue-500">
                            Save Image IPFS Data
                        </button>
                    </div>
                </div>
            </>
        );
    };

    const Step3 = () => {
        return (
            <>
                <h1 className="text-5xl font-black text-gray-700">
                    Setup Pre-Reveal Image
                </h1>
                <p className="text-xs text-gray-400">this step is optional</p>
                <p className="text-base text-gray-800 my-2">
                    Some projects like to have their NFT at first be a placeholder image
                    that is later unveiled to the true image. This is a great method to
                    build hype around your project pre-reveal. The only person who can
                    unveil the images is the project creator and once revealed, cannot be
                    undone.
                </p>
                <div className="mt-10 flex-col space-y-4">
                    <p className="text-gray-800 text-lg font-semibold flex space-x-3">
                        Setup your pre-reveal
                    </p>
                    <div className="pb-4">
                        <label className="text-gray-800 py-2">Pre-Reveal Image CID</label>
                        <p className="text-xs text-gray-500">
                            Upload the image you want to have be the pre-reveal placeholder to
                            Pinata/IPFS and copy that to the field below.
                            <br />
                            This should be a standalone file you upload to Pinata.
                            <br />
                            Note this image
                            <b>cannot be</b> a video file. Only JPEG, JPG, PNG, SVG, GIF,
                            etc..
                        </p>
                        <div className="flex space-x-4 items-start">
                            <div className="w-10/12 relative flex-col space-y-1">
                                <input
                                    type="text"
                                    className="mt-1 flex-1 appearance-none w-full py-2 px-4 bg-white rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base  focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                                    name="imagesCID"
                                    autoComplete="off"
                                    placeholder="QmeBwUKvLXgAHkcwMpe8TsBesd3Zg7xhNyFvU9HmbRZ6TH"
                                    value=""
                                />
                            </div>
                        </div>
                        <button className="mt-1 border rounded-lg p-2 bg-transparent  border-blue-300 text-blue-500">
                            Save Pre-Reveal CID
                        </button>
                    </div>
                </div>
            </>
        );
    };

    const steps = [
        null,
        <Step1 key={1} />,
        <Step2 key={2}/>,
        <Step3 key={3} />,
        <Step3 key={4} />,
        <Step3 key={5}/>,
        <Step3 key={6}/>,
    ];
    const handleBack = () => {
        if (currentStep === 1) {
            props.goToInitialStep();
        } else {
            setcurrentStep((prev) => prev - 1);
        }
    };
    const handleNext = () => {
        if (currentStep === steps.length - 1) {
            // props.goToInitialStep()
        } else {
            setcurrentStep((prev) => prev + 1);
        }
    };
    const GetCurrentComponent = ({ index }: { index: number }) => {
        switch (index) {
            case 1:
                return <Step1 />
            case 2:
                return <Step2 />
            case 3:
                return <Step3 />
            case 4:
                return <Step3 />
            case 5:
                return <Step3 />
            default:
                return null
        }
    }
    return (
        <div className="flex-col h-screen overflow-y-auto pr-4">
            <GetCurrentComponent index={currentStep} />
            <div className="w-full flex justify-between my-2 items-center">
                <button
                    onClick={handleBack}
                    className={clsx(
                        "visible border border-gray-300 rounded-md p-2 text-gray-600"
                    )}
                >
                    Back
                </button>
                <div className="flex space-x-2">
                    {steps.map((_, index) => {
                        return (
                            <svg
                                key={index}
                                onClick={() => setcurrentStep(index)}
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
                                    "h-4 cursor-pointer progress-dot stroke-slate-400 ",
                                    currentStep === index ? "fill-gray-400 stroke-none" : ""
                                )}
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                            </svg>
                        );
                    })}
                </div>
                <button
                    onClick={handleNext}
                    className="visible border border-gray-300 rounded-md p-2 text-gray-600"
                >
                    Proceed
                </button>
            </div>
        </div>
    );
};

export default PinataSetup;
