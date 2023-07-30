import React from "react";
import Link from "next/link";
import { Howl, Howler } from 'howler';
import { useState, useEffect } from "react";


const HeroSection = () => {


    const hoversound = new Howl({
      src: ['button.mp3'],
      volume: 0.2,
    });

    const soundclick = new Howl({
      src: ['dapp.mp3'],
      volume: 0.2,
    });

const handleMouseEnter = () => {
  hoversound.play();
};

const handleMouseLeave = () => {
  hoversound.stop();
};

const handleClick = () => {
  soundclick.play();
}

  return (
    <section id="home" className="flex flex-col lg:pt-72 px-10 items-center">
      <div className="flex-1 flex justify-center items-start flex-col xl:px-0 px-6 items-center">
        <div className="flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2"></div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-semibold text-[42px] text-white text-shadow-white leading-[75px] text-center items-center">
            Crios Finance
          </h1>
        </div>
        <h1 className="font-bold text-[42px] text-white leading-[75px] w-full text-shadow-white text-center items-center">
          DaaS on Arbitrum with 2,450% APR
        </h1>
        <p className="font-bold text-white text-shadow-white text-[18px] max-w-[470px] mt-5 text-center items-center">
          Crios Finance is a fast and innovative DaaS on the Arbitrum Network, passive income up to 2,450% APR, NFTs, sustainability in your pocket. 
        </p>
      </div>
      <Link href="/app">
        <a className="relative hover:bg-gray-500 bg-black bg-opacity-50 h-[60px] w-[200px] mt-6 inline-flex items-center justify-center overflow-hidden font-medium text-primary transition duration-300 ease-out border-2 border-bordure shadow-md" onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave} onClick={handleClick}>
          <div className="absolute inset-0 bg-gray-400 bg-opacity-30 h-1/2"></div>
          
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-bordure">
            Launch App
          </span>
        </a>
      </Link>
      <div className="w-full pt-8 lg:pt-32 pb-2 px-4 lg:px-10 text-white flex justify-center items-center flex-col ">
        <div className="border-greek w-full lg:w-4/5 xl:w-3/5">
          <div className="bg-black/[0.65] p-4 md:p-10 3xl:p-32">
            <h3 className="text-2xl 3xl:text-7xl tracking-[.25em] text-center font-bold uppercase mb-12">
              We Bring The Inaccessible Within Your Reach
            </h3>
            <p className="py-2 3xl:text-6xl 3xl:py-8">
            Create your Artifacts starting with as little as 42,000 $CRIOS to earn lifetime high-yield $CRIOS token rewards.
            </p>
            <p className="py-2 3xl:text-6xl 3xl:py-8">
            The generated yield typically fluctuates between 1.5% to 10% per day.
             Currently, Crios Finance provides a minimum yield of 1.5% per day per Artifact.
             The objective is to bring passive income to its holders through various methods, primarily focused on grouped staking and farming, but not limited to these. 
            </p>
  
          </div>
        </div>
        <div className="pt-20 lg:pb-28 w-3/5">
          <div className="flex flex-col lg:flex-row gap-6 3xl:gap-32">
            <div className="border-2 step-box border-white p-4 3xl:p-10 text-center flex-1 bg-blue-800/[0.65]">
              <h4 className="mb-2 3xl:mb-8 text-xl 3xl:text-4xl">Step 1</h4>
              <p className="3xl:text-2xl">
                You buy $CRIOS token <a href="/"> here </a>
              </p>
              
            </div>
            <div className="border-2 step-box border-white p-4 3xl:p-10 text-center flex-1 bg-blue-700/[0.65]">
              <h4 className="mb-2 3xl:mb-8 text-xl 3xl:text-4xl">Step 2</h4>
              <p className="3xl:text-2xl">
                You can mint your first Artifact, and lock an amount of $CRIOS inside.
              </p>
            </div>
            <div className="border-2 step-box border-white p-4 3xl:p-10 text-center flex-1 bg-blue-600/[0.65]">
              <h4 className="mb-2 3xl:mb-8 text-xl 3xl:text-4xl">Step 3</h4>
              <p className="3xl:text-2xl">
                You can now obtain daily rewards on your artifacts ! Don't forget to compound to upgrade your rewards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
