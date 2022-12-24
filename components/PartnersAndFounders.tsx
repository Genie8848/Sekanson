import clsx from 'clsx'
import React from 'react'
import styles from "../styles/partner.module.css"

type Props = {}

const PartnersAndFounders = (props: Props) => {
    return (
        <section className="w-full border-t border-color-gray-100 ">
            <input type="hidden" className="w-40 w-48 w-28 w-12" />
            <div className="w-full flex flex-col items-center my-10">
                <p className="font-semibold text-lg text-gray-700 uppercase pb-6">
                    Partners and Friends
                </p>
                <section className={
                    clsx(
                        "flex flex-col m-auto max-w-screen-2xl md:w-1/2 h-80 flex",
                        styles.wrapper
                    )
                }>
                    <div className={
                        clsx(
                            "flex ",
                            styles.marquee,
                        )
                    }>
                        <div aria-hidden="false" className={
                            clsx(
                                styles.marquee__group
                            )
                        }>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://bit.ly/3wKprej"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/pinata.svg"
                                    alt="Mintplex Partner"
                                    className="w-40 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://typedream.com/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/typedream.svg"
                                    alt="Mintplex Partner"
                                    className="w-60 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.alchemy.com/"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/alchemy.svg"
                                    alt="Mintplex Partner"
                                    className="w-60 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://qx.app/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/quixotic.svg"
                                    alt="Mintplex Partner"
                                    className="w-20 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://stratosnft.io/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/stratos.svg"
                                    alt="Mintplex Partner"
                                    className="w-40 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://simplehash.com/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/simplehash.webp"
                                    alt="Mintplex Partner"
                                    className="w-48 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://trybonfire.xyz/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/bonfire.svg"
                                    alt="Mintplex Partner"
                                    className="w-48 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://mintparty.xyz/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/mintparty.svg"
                                    alt="Mintplex Partner"
                                    className="w-48 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.usewinter.com/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/winter.svg"
                                    alt="Mintplex Partner"
                                    className="w-48 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://nft-inator.com/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/dhhlogo.svg"
                                    alt="Mintplex Partner"
                                    className="w-48 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://syncnetwork.io/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/SYNC.svg"
                                    alt="Mintplex Partner"
                                    className="w-48 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://carma.community/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/carma.svg"
                                    alt="Mintplex Partner"
                                    className="w-48 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                        </div>
                        <div aria-hidden="true" className="marquee__group ">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://bit.ly/3wKprej"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/pinata.svg"
                                    alt="Mintplex Partner"
                                    className="w-40 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://typedream.com/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/typedream.svg"
                                    alt="Mintplex Partner"
                                    className="w-60 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.alchemy.com/"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/alchemy.svg"
                                    alt="Mintplex Partner"
                                    className="w-60 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://qx.app/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/quixotic.svg"
                                    alt="Mintplex Partner"
                                    className="w-20 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://stratosnft.io/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/stratos.svg"
                                    alt="Mintplex Partner"
                                    className="w-40 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://simplehash.com/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/simplehash.webp"
                                    alt="Mintplex Partner"
                                    className="w-48 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://trybonfire.xyz/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/bonfire.svg"
                                    alt="Mintplex Partner"
                                    className="w-48 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://mintparty.xyz/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/mintparty.svg"
                                    alt="Mintplex Partner"
                                    className="w-48 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.usewinter.com/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/winter.svg"
                                    alt="Mintplex Partner"
                                    className="w-48 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://nft-inator.com/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/dhhlogo.svg"
                                    alt="Mintplex Partner"
                                    className="w-48 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://syncnetwork.io/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/SYNC.svg"
                                    alt="Mintplex Partner"
                                    className="w-48 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://carma.community/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/carma.svg"
                                    alt="Mintplex Partner"
                                    className="w-48 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                        </div>
                    </div>
                    <div className={
                        clsx(
                            "flex",
                            styles.marquee
                        )
                    }>
                        <div
                            aria-hidden="false"
                            className={
                                clsx(
                                    styles.marquee__group,
                                    styles.marquee__group__marquee__reverse
                                )
                            }
                        >
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://bit.ly/3wKprej"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/pinata.svg"
                                    alt="Mintplex Partner"
                                    className="w-40 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://typedream.com/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/typedream.svg"
                                    alt="Mintplex Partner"
                                    className="w-60 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.alchemy.com/"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/alchemy.svg"
                                    alt="Mintplex Partner"
                                    className="w-60 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://qx.app/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/quixotic.svg"
                                    alt="Mintplex Partner"
                                    className="w-20 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://stratosnft.io/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/stratos.svg"
                                    alt="Mintplex Partner"
                                    className="w-40 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://simplehash.com/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/simplehash.webp"
                                    alt="Mintplex Partner"
                                    className="w-48 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://trybonfire.xyz/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/bonfire.svg"
                                    alt="Mintplex Partner"
                                    className="w-48 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://mintparty.xyz/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/mintparty.svg"
                                    alt="Mintplex Partner"
                                    className="w-48 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.usewinter.com/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/winter.svg"
                                    alt="Mintplex Partner"
                                    className="w-48 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://nft-inator.com/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/dhhlogo.svg"
                                    alt="Mintplex Partner"
                                    className="w-48 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://syncnetwork.io/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/SYNC.svg"
                                    alt="Mintplex Partner"
                                    className="w-48 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://carma.community/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/carma.svg"
                                    alt="Mintplex Partner"
                                    className="w-48 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                        </div>
                        <div
                            aria-hidden="true"
                            className="marquee__group marquee--reverse"
                        >
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://bit.ly/3wKprej"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/pinata.svg"
                                    alt="Mintplex Partner"
                                    className="w-40 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://typedream.com/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/typedream.svg"
                                    alt="Mintplex Partner"
                                    className="w-60 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.alchemy.com/"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/alchemy.svg"
                                    alt="Mintplex Partner"
                                    className="w-60 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://qx.app/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/quixotic.svg"
                                    alt="Mintplex Partner"
                                    className="w-20 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://stratosnft.io/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/stratos.svg"
                                    alt="Mintplex Partner"
                                    className="w-40 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://simplehash.com/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/simplehash.webp"
                                    alt="Mintplex Partner"
                                    className="w-48 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://trybonfire.xyz/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/bonfire.svg"
                                    alt="Mintplex Partner"
                                    className="w-48 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://mintparty.xyz/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/mintparty.svg"
                                    alt="Mintplex Partner"
                                    className="w-48 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.usewinter.com/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/winter.svg"
                                    alt="Mintplex Partner"
                                    className="w-48 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://nft-inator.com/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/dhhlogo.svg"
                                    alt="Mintplex Partner"
                                    className="w-48 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://syncnetwork.io/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/SYNC.svg"
                                    alt="Mintplex Partner"
                                    className="w-48 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://carma.community/?ref=mintplex.xyz"
                                className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
                                style={{
                                    width: "200px",
                                    height: "100px",
                                }}
                            >
                                <img
                                    src="/images/carma.svg"
                                    alt="Mintplex Partner"
                                    className="w-48 h-auto"
                                    style={{ filter: "grayceral(0)" }}
                                />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
            <div className="w-full flex flex-col items-center my-10 mt-20" />
            <div className='w-full flex justify-center items-center flex-col my-5'>
                <p className="font-semibold text-lg text-gray-700 uppercase pb-6">Investors and Supporters</p>
                <div className=" w-full md:w-1/2 flex flex-wrap md:flex-row justify-center space-x-8 md:space-x-14 gap-y-8 items-center">
                    <a target="_blank" rel="noreferrer" href="https://www.ycombinator.com/companies/rampp-xyz" className="w-fit cursor-pointer">
                        <img src="/images/ycombinator.svg" alt="Mintplex Partner" className="w-60 h-auto" style={{ opacity: 1 }} />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.alchemy.com/" className="w-fit cursor-pointer">
                        <img src="/images/alchemy.svg" alt="Mintplex Partner" className="w-60 h-auto" style={{ opacity: 1 }} />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://xcelerator.berkeley.edu/?ref=mintplex.xyz" className="w-fit cursor-pointer">
                        <img src="/images/bbx.webp" alt="Mintplex Partner" className="w-12 h-auto" style={{ opacity: 1 }} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default PartnersAndFounders