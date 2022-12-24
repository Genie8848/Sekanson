import { Yeseva_One } from "@next/font/google";
import clsx from "clsx";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const yesevaOne = Yeseva_One({
    subsets: ["latin", "cyrillic"],
    weight: ["400"],
});
const Hero = (props: Props) => {
    const router = useRouter()
    return (
        <section
            style={{
                height: "70vh",
                backgroundRepeat: "repeat-x",
                backgroundPosition: "50% center",
                backgroundImage: "url('/images/patterntop.svg')",
            }}
        >
            <div className="flex relative items-center">
                <div className="container mx-auto  px-6 flex flex-col justify-between items-center relative my-20">
                    <div className="flex flex-col">
                        <h1
                            className={clsx(
                                yesevaOne.className,
                                " text-4xl md:text-5xl mb-6 w-full md:w-2/3 mx-auto text-center !font-bold text-gray-800"
                            )}
                        >
                            Build better NFT communities without code.
                        </h1>
                        <p className="text-lg md:text-md text-center text-gray-600 w-full md:w-2/3 mx-auto">
                            Mintplex has all the tools to help you launch and grow your NFT
                            project from the very first mint &amp; beyond.
                        </p>
                        <div className="flex flex-col items-center justify-center mt-2">
                            <div className="text-center w-full space-x-8 items-center justify-center">
                                <button onClick={() => { router.push("/my/projects") }} className="py-4 my-2 text-lg px-4 mt-6 bg-white text-ramppblue hover:text-white font-regular rounded-lg shadow-md  hover:bg-ramppdeepblue border-2 border-ramppblue">
                                    Launch a Project
                                </button>
                                <button className="text-lg text-gray-700">Learn More →</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
