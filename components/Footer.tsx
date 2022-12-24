import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className="bg-white w-full md:px-16 md:my-6">
            <div className="flex flex-col md:flex-row w-full md:justify-between md:px-16 items-center">
                <div className="flex-col w-40">
                    <img src="/images/mintplex-logo-dark.svg" className="w-auto h-20" alt="Mintplex.xyz" />
                    <p className="text-gray-600 text-xs -mt-2">Build better NFT communities without code.</p>
                    <div className="mt-3">
                        <img src="/images/alchemy.svg" className="w-auto h-20 -mb-6" alt="Alchemy Certified Infrastructure Alliance" />
                        <p className="text-gray-500" style={{
                            fontSize: "10px"
                        }}>
                            Certified Infrastructure Alliance
                        </p>
                    </div>
                </div>
                <div className="w-fit flex flex-col space-y-2 py-6 md:py-4 items-center md:items-end">
                    <button className="py-1 px-2 flex text-ramppblue hover:text-white border-2 border-ramppblue rounded-md hover:bg-ramppdeepblue">Launch a Project</button>
                    <Link href="/" className="text-lg text-dark-gray">About Mintplex</Link>
                    <a href="https://twitter.com/@mintplexnft" className="text-lg text-dark-gray">Follow us on Twitter</a>
                    <a href="https://tally.so/r/3q4G4O" target="_blank" rel="noreferrer" className="text-lg text-dark-gray">Join our community</a>
                </div>
            </div>
            <div className="w-full justify-center flex">
                <p className="text-rampporange">© 2022 Mintplex Labs Inc. All rights reserved.</p></div>
        </footer>
    )
}

export default Footer