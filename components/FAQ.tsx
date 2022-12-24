import React from "react";

type Props = {};

const FAQ = (props: Props) => {
  return (
    <div>
      <section
        id="faq"
        className="py-4 px-2 border-t border-b border-color-gray-100"
      >
        <div className="flex-col space-y-2 py-4">
          <h2 className="ff text-3xl md:text-5xl text-center font-bold text-gray-800">
            Questions?
            <br />
            We have answers for you!
          </h2>
          <p className="text-gray-500 text-base text-center">
            Mintplex is changing the NFT space so we prepared some questions and
            answers you might have.
          </p>
        </div>
        <dl className="w-full md:w-1/2 mx-auto px-2 md:px-0">
          <div className="bg-white shadow-md p-4 my-2 rounded-md border border-gray-100 cursor-pointer hover:bg-gray-50">
            <dt>
              <h3 className="text-xl font-semibold text-rampporange font-semibold">
                Why use Mintplex over OpenSea, Rarible, or Foundation?
              </h3>
            </dt>
          </div>
          <div className="bg-white shadow-md p-4 my-2 rounded-md border border-gray-100 cursor-pointer hover:bg-gray-50">
            <dt>
              <h3 className="text-xl font-semibold text-rampporange font-semibold">
                Why use Mintplex over OpenSea, Rarible, or Foundation? Cont.
              </h3>
            </dt>
          </div>
          <div className="bg-white shadow-md p-4 my-2 rounded-md border border-gray-100 cursor-pointer hover:bg-gray-50">
            <dt>
              <h3 className="text-xl font-semibold text-rampporange font-semibold">
                Who is hosting my images?
              </h3>
            </dt>
          </div>
          <div className="bg-white shadow-md p-4 my-2 rounded-md border border-gray-100 cursor-pointer hover:bg-gray-50">
            <dt>
              <h3 className="text-xl font-semibold text-rampporange font-semibold">
                I don&apos;t know how to code - does that matter?
              </h3>
            </dt>
          </div>
          <div className="bg-white shadow-md p-4 my-2 rounded-md border border-gray-100 cursor-pointer hover:bg-gray-50">
            <dt>
              <h3 className="text-xl font-semibold text-rampporange font-semibold">
                What features can my smart contract have?
              </h3>
            </dt>
          </div>
          <div className="bg-white shadow-md p-4 my-2 rounded-md border border-gray-100 cursor-pointer hover:bg-gray-50">
            <dt>
              <h3 className="text-xl font-semibold text-rampporange font-semibold">
                What does it cost to use Mintplex?
              </h3>
            </dt>
          </div>
          <div className="bg-white shadow-md p-4 my-2 rounded-md border border-gray-100 cursor-pointer hover:bg-gray-50">
            <dt>
              <h3 className="text-xl font-semibold text-rampporange font-semibold">
                Can I use Mintplex for Music NFTs?
              </h3>
            </dt>
          </div>
          <div className="bg-white shadow-md p-4 my-2 rounded-md border border-gray-100 cursor-pointer hover:bg-gray-50">
            <dt>
              <h3 className="text-xl font-semibold text-rampporange font-semibold">
                What chains and tokens are supported?
              </h3>
            </dt>
          </div>
        </dl>
      </section>
    </div>
  );
};

export default FAQ;
