// import React from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Howl, Howler } from 'howler';


const CTA = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init();
    }
  }, []);

  const hoversound = new Howl({
    src: ['button.mp3'],
    volume: 0.2,
  });

  const handleMouseEnter = () => {
    hoversound.play();
  };
  
  const handleMouseLeave = () => {
    hoversound.stop();
  };
  

  
  return (
    <div className="bg-bg-bottom justify-center items-center bg-cover relative">
      <div className="w-full pt-8 lg:pt-32 pb-2 px-4 lg:px-10 text-white flex justify-center items-center flex-col "></div>
      <div
        className={`flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10`}
      >
        <div className="w-full px-10 text-white flex justify-center items-center pt-10 lg:pt-28">
          <div className="w-full lg:w-4/5 xl:w-3/5 flex flex-col gap-y-16 mb-16">
            <div data-aos="fade-right" className="border-greek 3xl:mb-8 text-center xl:text-left">
              <div className="p-4 lg:p-10 bg-black/[0.8] bg-chart bg-card flex flex-col xl:flex-row">
                <div className="w-full xl:w-2/3 xl:pr-16">
                  <h4 className="text-xl md:text-2xl mb-6 font-semibold tracking-widest">
                    EARN UP TO 10% DAILY 
                  </h4>
                  <p className="text-3xl font-bold mb-4 3xl:mb-12 3xl:text-5xl">
                    We Reward You Daily In $CRIOS 
                  </p>
                  <p className="text-sm mb-10 3xl:mb-20 3xl:text-5xl">
                    Click on the button below to read the Docs and learn more
                    about our unique tokenomics.
                  </p>
                  <div className="flex flex-row gap-x-3 justify-center xl:justify-start">
                    <a
                      href="https://docs.prometheusprotocol.finance/prometheus-documentation-v2/"
                      className="px-4 py-2 font-bold tracking-[.2em] border-2 3xl:text-2xl text-white border-white bg-button-inverse hover:bg-button flex flex-row flex-between gap-4 items-center relative hover:before:absolute hover:before:w-full hover:before:h-full hover:before:top-0 hover:before:left-0 hover:bg-gray-500 bg-black bg-opacity-50"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
                      READ DOCS
                    </a>
                    <a
                      href="https://app.prometheusprotocol.finance/invest"
                      className="px-4 py-2 font-bold tracking-[.2em] border-2 3xl:text-2xl text-white border-white bg-button-inverse hover:bg-button flex flex-row flex-between gap-4 items-center relative hover:before:absolute hover:before:w-full hover:before:h-full hover:before:top-0 hover:before:left-0 hover:bg-gray-500 bg-black bg-opacity-50"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
                      BUY $CRIOS
                    </a>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full xl:w-1/3">
                  <img
                    src="/busd.png"
                    alt="chart"
                    className="mb-10 3xl:mb-20 max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
            <div data-aos="fade-left" className="border-greek 3xl:mb-8 text-center xl:text-left">
              <div className="p-4 lg:p-10 bg-black/[0.8] bg-temple bg-card flex flex-col xl:flex-row">
                <div className="w-full xl:w-2/3 xl:pr-16">
                  <h4 className="text-xl md:text-2xl mb-6 font-semibold tracking-widest">
                    MINT YOUR FIRST ARTIFACT
                  </h4>
                  <p className="text-3xl font-bold mb-4 3xl:mb-12 3xl:text-5xl">
                    Start Receiving Your $CRIOS Dividends By Creating A Profitable
                    Artifact NOW!
                  </p>
                  <p className="text-sm mb-10 3xl:mb-20 3xl:text-5xl">
                    Click on the button below to learn more about how to buy
                    mint your artifact
                  </p>
                  <div className="flex flex-row gap-x-3 justify-center xl:justify-start">
                    <a
                      href="https://docs.prometheusprotocol.finance/prometheus-documentation-v2/"
                      className="px-4 py-2 font-bold tracking-[.2em] border-2 3xl:text-2xl text-white border-white bg-button-inverse hover:bg-button flex flex-row flex-between gap-4 items-center relative hover:before:absolute hover:before:w-full hover:before:h-full hover:before:top-0 hover:before:left-0 hover:bg-gray-500 bg-black bg-opacity-50"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
                      READ DOCS
                    </a>
                    <a
                      href="https://app.prometheusprotocol.finance"
                      className="px-4 py-2 font-bold tracking-[.2em] border-2 3xl:text-2xl text-white border-white bg-button-inverse hover:bg-button flex flex-row flex-between gap-4 items-center relative hover:before:absolute hover:before:w-full hover:before:h-full hover:before:top-0 hover:before:left-0 hover:bg-gray-500 bg-black bg-opacity-50"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
                      MINT YOUR ARTIFACT
                    </a>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full xl:w-1/3">
                  <img
                    src="/temple-island.png"
                    alt="temple"
                    className="mb-10 3xl:mb-20 max-w-[300px] h-auto"
                  />
                </div>
              </div>
            </div>

            <div data-aos="fade-right" className="border-greek 3xl:mb-8 text-center xl:text-left">
              <div className="p-4 lg:p-10 bg-black/[0.8] bg-tokens bg-card flex flex-col xl:flex-row items-center xl:items-start">
                <div className="w-full xl:w-1/2 xl:pr-16">
                  <h4 className="text-xl md:text-2xl mb-6 font-semibold tracking-widest">
                    MARKETPLACE 
                  </h4>
                  <p className="text-3xl font-bold mb-4 3xl:mb-12 3xl:text-5xl">
                   Sell Your Artifact On Secondary Marketplace
                  </p>
                  <p className="text-sm mb-10 3xl:mb-20 3xl:text-5xl">
                    Click on the button below to learn more about the marketplace.
                    </p>
                  <div className="flex flex-row gap-x-3 justify-center xl:justify-start">
                    <a
                      href="https://docs.prometheusprotocol.finance/prometheus-documentation-v2/"
                      className="px-4 py-2 font-bold tracking-[.2em] border-2 3xl:text-2xl text-white border-white bg-button-inverse hover:bg-button flex flex-row flex-between gap-4 items-center relative hover:before:absolute hover:before:w-full hover:before:h-full hover:before:top-0 hover:before:left-0 hover:bg-gray-500 bg-black bg-opacity-50"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
                      LEARN MORE
                    </a>
                    <a
                      href="https://snapshot.org/#/prometheus-dao.eth"
                      className="px-4 py-2 font-bold tracking-[.2em] border-2 3xl:text-2xl text-white border-white bg-button-inverse hover:bg-button flex flex-row flex-between gap-4 items-center relative hover:before:absolute hover:before:w-full hover:before:h-full hover:before:top-0 hover:before:left-0 hover:bg-gray-500 bg-black bg-opacity-50"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
                      SEE CURRENT VOTES
                    </a>
                  </div>
                </div>
                <div className="w-full xl:w-1/2 flex justify-center">
                  <img
                    src="/tokens.png"
                    alt="tokens"
                    className="max-w-[400px] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
