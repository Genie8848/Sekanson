import clsx from "clsx";
import React from "react";
import styles from "../styles/partner.module.css";

type Props = {};

const PartnersAndFounders = (props: Props) => {
  const partners = [
    {
      id: "1",
      src: "/images/pinata.svg",
      alt: "Mintplex Partner",
      href: "https://bit.ly/3wKprej",
    },
    {
      id: "2",
      src: "/images/typedream.svg",
      alt: "Mintplex Partner",
      href: "https://typedream.com/?ref=mintplex.xyz",
    },
    {
      id: "3",
      src: "/images/alchemy.svg",
      alt: "Mintplex Partner",
      href: "https://www.alchemy.com/",
    },
    {
      id: "4",
      src: "/images/quixotic.svg",
      alt: "Mintplex Partner",
      href: "https://qx.app/?ref=mintplex.xyz",
    },
    {
      id: "5",
      src: "/images/stratos.svg",
      alt: "Mintplex Partner",
      href: "https://stratosnft.io/?ref=mintplex.xyz",
    },
    {
      id: "6",
      src: "/public/images/simplehash.webp",
      alt: "Mintplex Partner",
      href: "https://simplehash.com/?ref=mintplex.xyz",
    },
    {
      id: "7",
      src: "/images/bonfire.svg",
      alt: "Mintplex Partner",
      href: "https://trybonfire.xyz/?ref=mintplex.xyz",
    },
    {
      id: "8",
      src: "/images/mintparty.svg",
      alt: "Mintplex Partner",
      href: "https://mintparty.xyz/?ref=mintplex.xyz",
    },
    {
      id: "9",
      src: "/images/winter.svg",
      alt: "Mintplex Partner",
      href: "https://www.usewinter.com/?ref=mintplex.xyz",
    },
    {
      id: "10",
      src: "/images/dhhlogo.svg",
      alt: "Mintplex Partner",
      href: "https://nft-inator.com/?ref=mintplex.xyz",
    },
    {
      id: "11",
      src: "/images/SYNC.svg",
      alt: "Mintplex Partner",
      href: "https://syncnetwork.io/?ref=mintplex.xyz",
    },
    {
      id: "12",
      src: "/images/carma.svg",
      alt: "Mintplex Partner",
      href: "https://carma.community/?ref=mintplex.xyz",
    },
  ];

  const PartnersComponent = () => {
    return (
      <>
        {partners.map((partner: any, index: number) => {
          return (
            <a
              key={partner.id + index}
              target="_blank"
              rel="noreferrer"
              href={partner.href}
              className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
              style={{
                width: "200px",
                height: "100px",
              }}
            >
              <img
                src={partner.src}
                alt="Mintplex Partner"
                className="w-40 h-auto"
                style={{ filter: "grayceral(0)" }}
              />
            </a>
          );
        })}
      </>
    );
  };

  return (
    <section className="w-full border-t border-color-gray-100 ">
      <input type="hidden" className="w-40 w-48 w-28 w-12" />
      <div className="w-full flex flex-col items-center my-10">
        <p className="font-semibold text-lg text-gray-700 uppercase pb-6">
          Partners and Friends
        </p>
        <section
          className={clsx(
            "flex flex-col m-auto max-w-screen-2xl md:w-1/2 h-80 md:flex",
            styles.wrapper
          )}
        >
          <div className={clsx(styles.marquee)}>
            <div aria-hidden="false" className={clsx(styles.marquee__group)}>
              <PartnersComponent />
            </div>
            <div aria-hidden="false" className={clsx(styles.marquee__group)}>
              <PartnersComponent />
            </div>
          </div>
          <div className={clsx("flex gap-x-10", styles.marquee)}>
            <div
              aria-hidden="false"
              className={clsx(
                styles.marquee__group,
                styles.marquee__group__marquee__reverse
              )}
            >
              <PartnersComponent />
            </div>
            <div
              aria-hidden="false"
              className={clsx(
                styles.marquee__group,
                styles.marquee__group__marquee__reverse
              )}
            >
              <PartnersComponent />
            </div>
          </div>
        </section>
      </div>
      <div className="w-full flex flex-col items-center my-10 mt-20" />
      <div className="w-full flex justify-center items-center flex-col my-5">
        <p className="font-semibold text-lg text-gray-700 uppercase pb-6">
          Investors and Supporters
        </p>
        <div className=" w-full md:w-1/2 flex flex-wrap md:flex-row justify-center space-x-8 md:space-x-14 gap-y-8 items-center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.ycombinator.com/companies/rampp-xyz"
            className="w-fit cursor-pointer"
          >
            <img
              src="/images/ycombinator.svg"
              alt="Mintplex Partner"
              className="w-60 h-auto"
              style={{ opacity: 1 }}
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.alchemy.com/"
            className="w-fit cursor-pointer"
          >
            <img
              src="/images/alchemy.svg"
              alt="Mintplex Partner"
              className="w-60 h-auto"
              style={{ opacity: 1 }}
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://xcelerator.berkeley.edu/?ref=mintplex.xyz"
            className="w-fit cursor-pointer"
          >
            <img
              src="/images/bbx.webp"
              alt="Mintplex Partner"
              className="w-12 h-auto"
              style={{ opacity: 1 }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnersAndFounders;
