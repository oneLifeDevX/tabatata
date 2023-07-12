// import React from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Howl, Howler } from 'howler';



const DappFirstSection = () => {
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
    <div className="justify-center items-center relative">
      <div className="w-full pt-8 lg:pt-32 pb-2 px-4 lg:px-10 text-white flex justify-center items-center flex-col "></div>
      <div
        className={`flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10`}
      >
        <div className="w-full px-10 text-white flex justify-center items-center pt-10 lg:pt-28">
          <div className="w-full lg:w-4/5 xl:w-3/5 flex flex-col gap-y-16 mb-16">
          <h1 className="flex-1 font-semibold text-[42px] text-white text-shadow-white leading-[75px] text-center items-center">
            Overview
          </h1>
          <div data-aos="fade-right" className="border-greek 3xl:mb-8 text-center xl:text-left">
  <div className="p-4 lg:p-10 bg-black/[0.8]">
  <div className="grid gap-6 grid-cols-2">
  <div className="h-full bg-lueur-wide bg-black bg-opacity-85 border-[1.5px] p-5 lueur-hover">
  <h1 className="font-bold text-[20px] text-white leading-[15px] w-full text-shadow-white text-center items-center">
          Current Circulating Supply
        </h1>
        <h1 className="font-bold text-[20px] text-white leading-[45px] w-full text-shadow-white text-center items-center">
         569 000 CRIOS
        </h1>
  </div>
  <div className="h-full bg-lueur-wide bg-black bg-opacity-85 border-[1.5px] p-5 lueur-hover">
  <h1 className="font-bold text-[20px] text-white leading-[15px] w-full text-shadow-white text-center items-center">
          Price for 42 000 CRIOS
        </h1>
        <h1 className="font-bold text-[20px] text-white leading-[45px] w-full text-shadow-white text-center items-center">
         0.10 $
        </h1>
  </div>
  <div className="h-full bg-lueur-wide bg-black bg-opacity-85 border-[1.5px] p-5 lueur-hover">
  <h1 className="font-bold text-[20px] text-white leading-[15px] w-full text-shadow-white text-center items-center">
          Total NFT Mint
        </h1>
        <h1 className="font-bold text-[20px] text-white leading-[45px] w-full text-shadow-white text-center items-center">
         4600
        </h1>
  </div>
  <div className="h-full bg-lueur-wide bg-black bg-opacity-85 border-[1.5px] p-5 lueur-hover">
  <h1 className="font-bold text-[20px] text-white leading-[15px] w-full text-shadow-white text-center items-center">
          Total Token Locked
        </h1>
        <h1 className="font-bold text-[20px] text-white leading-[45px] w-full text-shadow-white text-center items-center">
         410 000 CRIOS
        </h1>
  </div>
  <div className="h-full bg-lueur-wide bg-black bg-opacity-85 border-[1.5px] p-5 lueur-hover">
  <h1 className="font-bold text-[20px] text-white leading-[15px] w-full text-shadow-white text-center items-center">
          Total emission per day
        </h1>
        <h1 className="font-bold text-[20px] text-white leading-[45px] w-full text-shadow-white text-center items-center">
         590 000 CRIOS
        </h1>

  </div>
  <div className="h-full bg-lueur-wide bg-black bg-opacity-85 border-[1.5px] p-5 lueur-hover">
  <h1 className="font-bold text-[20px] text-white leading-[15px] w-full text-shadow-white text-center items-center">
          Burned from services fees
        </h1>
        <h1 className="font-bold text-[20px] text-white leading-[45px] w-full text-shadow-white text-center items-center">
         120 000 CRIOS
        </h1>
  </div>
</div>
  </div>
</div>

            <h1 className="flex-1 font-semibold text-[42px] text-white text-shadow-white leading-[75px] text-center items-center">
            My Stats
          </h1>
          <div className="flex flex-col min-h-screen">
            <div data-aos="fade-left" className="border-greekv2 w-11/12 absolute left-28 my-8 ">
              <div className="p-4 lg:p-10 bg-black/[0.8] flex flex-col xl:flex-row w-full">
                
              
              <div className="p-4 lg:p-10 bg-black border w-8/12">
  <div className="overflow-x-auto scrollbar-hide" style={{ height: "400px" }}>
    <div className="flex flex-wrap">
      <div className="w-1/3 p-4">
        <div className="relative">
          <img src="testnft.png" className="w-full h-auto border" />
          <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center">
            <h3 className="text-white text-xl font-bold mb-2">NFT NAME</h3>
            <p className="text-white mb-4">Pending rewards: 5959 CRIOS</p>
            <p className="text-white mb-4">Compound left: 2</p>
            <p className="text-white mb-4">Token Locked: 85000 CRIOS</p>
            <p className="text-white mb-4">Time before compound:</p>
            <p className="text-white mb-4">07:59:59</p>
            <a href="" className="mb-2 ml-4 px-4 py-2 font-bold border-2 3xl:text-2xl text-white border-white bg-button-inverse hover:bg-button flex flex-row flex-between gap-4 items-center relative hover:before:absolute hover:before:w-full hover:before:h-full hover:before:top-0 hover:before:left-0 hover:bg-gray-500 bg-black bg-opacity-50"  onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
              Claim
            </a>
            <a href="" className="ml-4 px-4 py-2 font-bold border-2 3xl:text-2xl text-white border-white bg-button-inverse hover:bg-button flex flex-row flex-between gap-4 items-center relative hover:before:absolute hover:before:w-full hover:before:h-full hover:before:top-0 hover:before:left-0 hover:bg-gray-500 bg-black bg-opacity-50"  onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
              Compound
            </a>
          </div>
        </div>
      </div>

      <div className="w-1/3 p-4">
        <div className="relative">
          <img src="testnft.png" className="w-full h-auto border" />
          <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center">
            <h3 className="text-white text-xl font-bold mb-2">NFT NAME</h3>
            <p className="text-white mb-4">Pending rewards: 5959 CRIOS</p>
            <p className="text-white mb-4">Compound left: 2</p>
            <p className="text-white mb-4">Token Locked: 85000 CRIOS</p>
            <p className="text-white mb-4">Time before compound:</p>
            <p className="text-white mb-4">07:59:59</p>
            <a href="" className="mb-2 ml-4 px-4 py-2 font-bold border-2 3xl:text-2xl text-white border-white bg-button-inverse hover:bg-button flex flex-row flex-between gap-4 items-center relative hover:before:absolute hover:before:w-full hover:before:h-full hover:before:top-0 hover:before:left-0 hover:bg-gray-500 bg-black bg-opacity-50"  onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
              Claim
            </a>
            <a href="" className="ml-4 px-4 py-2 font-bold border-2 3xl:text-2xl text-white border-white bg-button-inverse hover:bg-button flex flex-row flex-between gap-4 items-center relative hover:before:absolute hover:before:w-full hover:before:h-full hover:before:top-0 hover:before:left-0 hover:bg-gray-500 bg-black bg-opacity-50"  onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
              Compound
            </a>
          </div>
        </div>
      </div>

      <div className="w-1/3 p-4">
        <div className="relative">
          <img src="testnft.png" className="w-full h-auto border" />
          <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center">
            <h3 className="text-white text-xl font-bold mb-2">NFT NAME</h3>
            <p className="text-white mb-4">Pending rewards: 5959 CRIOS</p>
            <p className="text-white mb-4">Compound left: 2</p>
            <p className="text-white mb-4">Token Locked: 85000 CRIOS</p>
            <p className="text-white mb-4">Time before compound:</p>
            <p className="text-white mb-4">07:59:59</p>
            <a href="" className="mb-2 ml-4 px-4 py-2 font-bold border-2 3xl:text-2xl text-white border-white bg-button-inverse hover:bg-button flex flex-row flex-between gap-4 items-center relative hover:before:absolute hover:before:w-full hover:before:h-full hover:before:top-0 hover:before:left-0 hover:bg-gray-500 bg-black bg-opacity-50"  onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
              Claim
            </a>
            <a href="" className="ml-4 px-4 py-2 font-bold border-2 3xl:text-2xl text-white border-white bg-button-inverse hover:bg-button flex flex-row flex-between gap-4 items-center relative hover:before:absolute hover:before:w-full hover:before:h-full hover:before:top-0 hover:before:left-0 hover:bg-gray-500 bg-black bg-opacity-50"  onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
              Compound
            </a>
          </div>
        </div>
      </div>

      <div className="w-1/3 p-4">
        <div className="relative">
          <img src="testnft.png" className="w-full h-auto border" />
          <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center">
            <h3 className="text-white text-xl font-bold mb-2">NFT NAME</h3>
            <p className="text-white mb-4">Pending rewards: 5959 CRIOS</p>
            <p className="text-white mb-4">Compound left: 2</p>
            <p className="text-white mb-4">Token Locked: 85000 CRIOS</p>
            <p className="text-white mb-4">Time before compound:</p>
            <p className="text-white mb-4">07:59:59</p>
            <a href="" className="mb-2 ml-4 px-4 py-2 font-bold border-2 3xl:text-2xl text-white border-white bg-button-inverse hover:bg-button flex flex-row flex-between gap-4 items-center relative hover:before:absolute hover:before:w-full hover:before:h-full hover:before:top-0 hover:before:left-0 hover:bg-gray-500 bg-black bg-opacity-50"  onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
              Claim
            </a>
            <a href="" className="ml-4 px-4 py-2 font-bold border-2 3xl:text-2xl text-white border-white bg-button-inverse hover:bg-button flex flex-row flex-between gap-4 items-center relative hover:before:absolute hover:before:w-full hover:before:h-full hover:before:top-0 hover:before:left-0 hover:bg-gray-500 bg-black bg-opacity-50"  onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
              Compound
            </a>
          </div>
        </div>
      </div>

      
    </div>
  </div>
  <div className="flex justify-between p-4">
  <a href="" className="ml-4 px-4 py-2 font-bold border-2 3xl:text-2xl text-white border-white bg-button-inverse hover:bg-button flex flex-row flex-between gap-4 items-center relative hover:before:absolute hover:before:w-full hover:before:h-full hover:before:top-0 hover:before:left-0 hover:bg-gray-500 bg-black bg-opacity-50"  onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
              Mint (+)
            </a>
            <a href="" className="ml-4 px-4 py-2 font-bold border-2 3xl:text-2xl text-white border-white bg-button-inverse hover:bg-button flex flex-row flex-between gap-4 items-center relative hover:before:absolute hover:before:w-full hover:before:h-full hover:before:top-0 hover:before:left-0 hover:bg-gray-500 bg-black bg-opacity-50"  onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
              Compound All
            </a>
            <a href="" className="ml-4 px-4 py-2 font-bold border-2 3xl:text-2xl text-white border-white bg-button-inverse hover:bg-button flex flex-row flex-between gap-4 items-center relative hover:before:absolute hover:before:w-full hover:before:h-full hover:before:top-0 hover:before:left-0 hover:bg-gray-500 bg-black bg-opacity-50"  onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
              Claim All
            </a>
  </div>
</div>






              <div className="ml-4 grid gap-4 grid-cols-2">
              <div className="flex-1 h-28 bg-lueur-wide bg-black bg-opacity-85 border-[1.5px] p-5 lueur-hover">
  <h1 className="font-bold text-[20px] text-white leading-[15px] w-full text-shadow-white text-center items-center">
          Estimated per day
        </h1>
        <h1 className="font-bold text-[20px] text-white leading-[45px] w-full text-shadow-white text-center items-center">
         590 000 CRIOS
        </h1>

  </div>
  <div className="flex-1 h-28 bg-lueur-wide bg-black bg-opacity-85 border-[1.5px] p-5 lueur-hover">
  <h1 className="font-bold text-[20px] text-white leading-[15px] w-full text-shadow-white text-center items-center">
          Total Pending Rewards
        </h1>
        <h1 className="font-bold text-[20px] text-white leading-[45px] w-full text-shadow-white text-center items-center">
         590 000 CRIOS
        </h1>

  </div>
  <div className="flex-1 h-28 bg-lueur-wide bg-black bg-opacity-85 border-[1.5px] p-5 lueur-hover mb-56">
  <h1 className="font-bold text-[20px] text-white leading-[15px] w-full text-shadow-white text-center items-center">
          Time left before compound all
        </h1>
        <h1 className="font-bold text-[20px] text-white leading-[45px] w-full text-shadow-white text-center items-center">
         7:59:59
        </h1>

  </div>
  <div className="flex-1 h-28 bg-lueur-wide bg-black bg-opacity-85 border-[1.5px] p-5 lueur-hover">
  <h1 className="font-bold text-[20px] text-white leading-[15px] w-full text-shadow-white text-center items-center">
          My Balance
        </h1>
        <h1 className="font-bold text-[20px] text-white leading-[45px] w-full text-shadow-white text-center items-center">
         590 000 CRIOS
        </h1>

  </div>
                </div>


              </div>
            </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default DappFirstSection;
