import dynamic from 'next/dynamic';
import { ethers } from "ethers";
import { utils } from 'web3';
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Howl, Howler } from 'howler';
import contractABI from "../constants/manager.json";
import tokenABI from "../constants/token.json";
import { UseContractReadConfig, UseContractWriteConfig, UsePrepareContractWriteConfig, useContractRead,  useAccount,
  useConnect,
  useContract, useSigner, usePrepareContractWrite, useContractWrite} from "wagmi";

function formatSeconds(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}
  

const DappFirstSection = () => {

  const [remainingTime, setRemainingTime] = useState(""); // Step 2

  const {address, isConnecting, isDisconected} = useAccount();
  const { data: totalSupply } = useContractRead({
    address: "0xc4458D2ab486C630e645cB19e117c7b84EF5a6b7",
    abi: tokenABI.abi,
    functionName: 'totalSupply',
  })

  const { data: totalSupplyNFT } = useContractRead({
    address: "0x7C0152dbE44D6589E7f94E8D85cF8bAe14F62bE5",
    abi: contractABI.abi,
    functionName: 'totalSupply',
  })

  const { data: totalValueLocked } = useContractRead({
    address: "0x7C0152dbE44D6589E7f94E8D85cF8bAe14F62bE5",
    abi: contractABI.abi,
    functionName: 'totalValueLocked',
  })

  const { data: getBurnedFromServiceFees } = useContractRead({
    address: "0x7C0152dbE44D6589E7f94E8D85cF8bAe14F62bE5",
    abi: contractABI.abi,
    functionName: 'getBurnedFromServiceFees',
  })

  const { data: calculateTotalDailyEmission } = useContractRead({
    address: "0x7C0152dbE44D6589E7f94E8D85cF8bAe14F62bE5",
    abi: contractABI.abi,
    functionName: 'calculateTotalDailyEmission',
  })



  const { data: balanceOf, isLoading, isSuccess: useBalanceOf } = useContractRead({
    address: "0xc4458D2ab486C630e645cB19e117c7b84EF5a6b7",
    abi: tokenABI.abi,
    functionName: 'balanceOf',
    args: [address],
  })

  const { data: getArtifactIdsOf } = useContractRead({
    address: "0x7C0152dbE44D6589E7f94E8D85cF8bAe14F62bE5",
    abi: contractABI.abi,
    functionName: 'getArtifactIdsOf',
    args: [address],
  })

  const artifactIds = getArtifactIdsOf || []; 

  
  const { data: getartifactsByIds } = useContractRead({
      address: "0x7C0152dbE44D6589E7f94E8D85cF8bAe14F62bE5",
      abi: contractABI.abi,
      functionName: 'getartifactsByIds',
      args: [artifactIds],
    });
  

   
    const artifacts = getartifactsByIds || [];


  const { data: compoundDelay, isSuccess: compoundOk } = useContractRead({
    address: "0x7C0152dbE44D6589E7f94E8D85cF8bAe14F62bE5",
    abi: contractABI.abi,
    functionName: 'compoundDelay',
  })

  const { data: symbol } = useContractRead({
    address: "0x7C0152dbE44D6589E7f94E8D85cF8bAe14F62bE5",
    abi: contractABI.abi,
    functionName: 'symbol',
  })


 

  const {data ,write } = useContractWrite({
    address: "0x7C0152dbE44D6589E7f94E8D85cF8bAe14F62bE5",
    abi: contractABI.abi,
    functionName: 'createArtifactWithTokens',
    args: [],
  });

  const {data: compoundRewardAll ,write: compoundAllNoFees } = useContractWrite({
    address: "0x7C0152dbE44D6589E7f94E8D85cF8bAe14F62bE5",
    abi: contractABI.abi,
    functionName: 'compoundAll',
    args: [],
  });

  const {data: compoundRewards ,write: compoundReward } = useContractWrite({
    address: "0x7C0152dbE44D6589E7f94E8D85cF8bAe14F62bE5",
    abi: contractABI.abi,
    functionName: 'compoundReward',
    args: [],
  });

  const {data: cashoutAllNoFees ,write: cashoutAll } = useContractWrite({
    address: "0x7C0152dbE44D6589E7f94E8D85cF8bAe14F62bE5",
    abi: contractABI.abi,
    functionName: 'cashoutAll',
  });

  const {data: cashoutRewardNoFees ,write: cashout } = useContractWrite({
    address: "0x7C0152dbE44D6589E7f94E8D85cF8bAe14F62bE5",
    abi: contractABI.abi,
    functionName: 'cashoutReward',
    args: [],
  });

  

  const totalSupplyNFTValue = totalSupplyNFT ? ethers.BigNumber.from(totalSupplyNFT) : ethers.BigNumber.from(0);
  const formattedtotalSupplyNFT = ethers.utils.formatUnits(totalSupplyNFTValue, 0);

  const calculateTotalDailyEmissionValue = calculateTotalDailyEmission ? ethers.BigNumber.from(calculateTotalDailyEmission) : ethers.BigNumber.from(0);
  const formattedcalculateTotalDailyEmission = ethers.utils.formatUnits(calculateTotalDailyEmissionValue, 18);
  const roundedcalculateTotalDailyEmission = Number(formattedcalculateTotalDailyEmission).toFixed(2);


  const getBurnedFromServiceFeesValue = getBurnedFromServiceFees ? ethers.BigNumber.from(getBurnedFromServiceFees) : ethers.BigNumber.from(0);
  const formattedgetBurnedFromServiceFees = ethers.utils.formatUnits(getBurnedFromServiceFeesValue, 18);
  const roundedgetBurnedFromServiceFees = Number(formattedgetBurnedFromServiceFees).toFixed(2);

  const totalValueLockedValue = totalValueLocked ? ethers.BigNumber.from(totalValueLocked) : ethers.BigNumber.from(0);
  const formattedtotalValueLocked = ethers.utils.formatUnits(totalValueLockedValue, 18);
  const roundedtotalValueLocked = Number(formattedtotalValueLocked).toFixed(2);


  const totalSupplyValue = totalSupply ? ethers.BigNumber.from(totalSupply) : ethers.BigNumber.from(0);
  const formattedtotalSupply = ethers.utils.formatUnits(totalSupplyValue, 18);
  const roundedtotalSupply = Number(formattedtotalSupply).toFixed(2);


  const balanceValue = balanceOf ? ethers.BigNumber.from(balanceOf) : ethers.BigNumber.from(0);
  const formattedBalance = ethers.utils.formatUnits(balanceValue, 18);
  const roundedBalance = Number(formattedBalance).toFixed(2);


  const compoundDelayValue = compoundDelay ? ethers.BigNumber.from(compoundDelay) : ethers.BigNumber.from(0);
  const compoundDelayInSeconds = compoundDelayValue.toNumber();
  const formattedCompoundDelay = compoundDelayInSeconds
    ? new Date(compoundDelayInSeconds * 1000).toISOString().substr(11, 8)
    : "";

    const [remainingTimes, setRemainingTimes] = useState([]);

    function timeBeforeCompounds() {
      const currentTime = Math.floor(Date.now() / 1000); // Convertir en secondes
    
      const updatedRemainingTimes = artifacts.map((artifacts) => {
        const timestamp = Number(artifacts.artifact.lastProcessingTimestamp) + compoundDelayInSeconds;
        // Calculate remaining time
        const remainingSeconds = timestamp - currentTime;
        return formatSeconds(Math.max(remainingSeconds, 0)); // Assurer une valeur minimale de 0
      });
    
      return updatedRemainingTimes;
    }
  
    
    function calculateMaxTimeBeforeCompound() {
      let maxTimeBeforeCompound = 0; // Initialisez la valeur à une valeur négative pour trouver le maximum
    
      for (let i = 0; i < artifacts.length; i++) {
        const timestamp = Number(artifacts[i].artifact.lastProcessingTimestamp) + compoundDelayInSeconds;
        const currentTime = Date.now();
    
        // Calculate remaining tim
        const remainingTimeInMillis = timestamp * 1000 - currentTime;
        const remainingSeconds = Math.ceil(remainingTimeInMillis / 1000);
    
        if (remainingSeconds > maxTimeBeforeCompound) {
          maxTimeBeforeCompound = remainingSeconds;
        }
      }
    
      return maxTimeBeforeCompound;
    }
    
    
    const maxTimeBeforeCompound = calculateMaxTimeBeforeCompound();


    function calculateTotalPendingRewards() {
      let totalPendingRewards = 0;
    
      for (let i = 0; i < artifacts.length; i++) {
        if (artifacts[i].pendingRewards) {
          totalPendingRewards += parseFloat(utils.fromWei(artifacts[i].pendingRewards.toString(), 'ether'));
        }
      }
    
      return totalPendingRewards;
    }
    
    const totalPendingRewards = calculateTotalPendingRewards(); // Appel de la nouvelle fonction pour obtenir le total des "Pending Rewards"
    const roundedtotalPendingRewards = Number(totalPendingRewards).toFixed(2);

    
    function calculateEstimatedDailyRewards() {
      let totalEstimatedDailyRewards = 0;
    
      for (let i = 0; i < artifacts.length; i++) {
        if (artifacts[i].rewardPerDay) {
          totalEstimatedDailyRewards += parseFloat(utils.fromWei(artifacts[i].rewardPerDay.toString(), 'ether'));
        }
      }
    
      return totalEstimatedDailyRewards;
    }
    
    const totalEstimatedDailyRewards = calculateEstimatedDailyRewards(); // Appel de la nouvelle fonction pour obtenir le total des "Pending Rewards"
    const roundedtotalEstimatedDailyRewards = Number(totalEstimatedDailyRewards).toFixed(2);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nftName, setNftName] = useState('');
  const [tokenAmount, setTokenAmount] = useState('');
  const [nameError, setNameError] = useState("");


  const { data: isNameAvailable } = useContractRead({
    address: "0x7C0152dbE44D6589E7f94E8D85cF8bAe14F62bE5",
    abi: contractABI.abi,
    functionName: 'isNameAvailable',
    args: [address, nftName],
  })

  const handleMint = async () => {
    if (!nftName) {
      alert("Please enter Name.");
      return;
    }
  
    // Vérifier si le nom est disponible
    if (isNameAvailable) {
      // Validate the Token Amount input
      if (!tokenAmount || isNaN(tokenAmount) || tokenAmount <= 42000) {
        alert("Invalid Token Amount. Please enter a valid amount greater than 42000.");
        return;
      }
  
      try {
        // Appel de la constante `write` pour créer l'NFT avec le nom donné
        await write({ args: [nftName, tokenAmount * 10**18] });
        // Fermer le Modal ou effectuer d'autres actions souhaitées suite à la création réussie de l'NFT
        console.log(isNameAvailable);
        console.log(isNameAvailable.nftName)
      } catch (error) {
        // Gérer toute erreur survenue pendant le processus de création de l'NFT
        console.error("Error :", error);
        // Afficher un message d'erreur à l'utilisateur s'il y a eu un problème avec la création de l'NFT
        alert("An error occurred while creating the NFT. Please try again later.");
      }
    } else {
      // Afficher un message d'erreur si le nom n'est pas disponible
      alert("The name is already in use. Please choose a different name.");
    }
  };
  


  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const handleButtonClick = (value) => {
    if (value === 'MAX_VALUE') {
      setTokenAmount(formattedBalance-1);
      console.log(value);
    } else {
      console.log(value);
      setTokenAmount(value);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init();
    }

    if (useConnect) {
      const interval = setInterval(() => {
        const remainingTimes = timeBeforeCompounds();
        setRemainingTimes(remainingTimes);
      }, 1000);
  
      return () => clearInterval(interval);
    }
    
  
  }, [getArtifactIdsOf]);


  

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
      <div className="flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10">
      <div className="w-full px-10 text-white flex justify-center items-center pt-10 lg:pt-28">
        <div className="w-full lg:w-4/5 xl:w-3/5 flex flex-col gap-y-16 mb-16">
        <h1 className="flex-1 font-semibold text-[42px] text-white text-shadow-white leading-[75px] text-center items-center">
            Overview
          </h1>
          <div data-aos="fade-right" className="border-greek 3xl:mb-8 text-center xl:text-left">
              <div className="p-4 lg:p-10 bg-black/[0.6]">
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                  <div className="h-full bg-lueur-wide bg-black bg-opacity-85 border-[1.5px] p-5 lueur-hover">
  <h1 className="font-bold text-[20px] text-white leading-[15px] w-full text-shadow-white text-center items-center">
          Current Circulating Supply
        </h1>
        <h1 className="font-bold text-[20px] text-white leading-[45px] w-full text-shadow-white text-center items-center">
         {roundedtotalSupply} CRIOS</h1>
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
       {formattedtotalSupplyNFT}
        </h1>
  </div>
  <div className="h-full bg-lueur-wide bg-black bg-opacity-85 border-[1.5px] p-5 lueur-hover">
  <h1 className="font-bold text-[20px] text-white leading-[15px] w-full text-shadow-white text-center items-center">
          Total Token Locked
        </h1>
        <h1 className="font-bold text-[20px] text-white leading-[45px] w-full text-shadow-white text-center items-center">
         {roundedtotalValueLocked}
        </h1>
  </div>
  <div className="h-full bg-lueur-wide bg-black bg-opacity-85 border-[1.5px] p-5 lueur-hover">
  <h1 className="font-bold text-[20px] text-white leading-[15px] w-full text-shadow-white text-center items-center">
          Total emission per day
        </h1>
        <h1 className="font-bold text-[20px] text-white leading-[45px] w-full text-shadow-white text-center items-center">
         {roundedcalculateTotalDailyEmission} CRIOS
        </h1>

  </div>
  <div className="h-full bg-lueur-wide bg-black bg-opacity-85 border-[1.5px] p-5 lueur-hover">
  <h1 className="font-bold text-[20px] text-white leading-[15px] w-full text-shadow-white text-center items-center">
          Burned from services fees
        </h1>
        <h1 className="font-bold text-[20px] text-white leading-[45px] w-full text-shadow-white text-center items-center">
         {roundedgetBurnedFromServiceFees} CRIOS
        </h1>
  </div>
</div>
  </div>
</div>
            <h1 className="flex-1 font-semibold text-[42px] text-white text-shadow-white leading-[75px] text-center items-center">
            My Stats
          </h1>
          <div className="flex flex-col min-h-screen">
          <div data-aos="fade-left" className="border-greek sm:w-11/12 lg:w-11/12 lg:absolute left-28 mx-auto my-8">
  <div className="p-4 lg:p-10 bg-black/[0.6] flex flex-col xl:flex-row w-full">
    <div className="md:mb-4 sm:mb-4 p-4 lg:p-10 bg-black border w-full">
  <div className="overflow-x-auto scrollbar-hide" style={{ height: "400px" }}>
    
        <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2">
        {getartifactsByIds &&
  getartifactsByIds.map((artifacts, index) => {
    // Déterminer quelle image afficher en fonction de la valeur de rewardMult
    let imageSource;
    if (artifacts.artifact.rewardMult < 5000) {
      imageSource = 'https://gateway.pinata.cloud/ipfs/QmaUZoxcNHpaXDxkNi5SkvTBKnvJ27vGeQ96F7qThVEHco/Tier1.png';
    } else if (artifacts.artifact.rewardMult < 11000) {
      imageSource = 'https://gateway.pinata.cloud/ipfs/QmaUZoxcNHpaXDxkNi5SkvTBKnvJ27vGeQ96F7qThVEHco/Tier2.png';
    } else if (artifacts.artifact.rewardMult < 19000) {
      imageSource = 'https://gateway.pinata.cloud/ipfs/QmaUZoxcNHpaXDxkNi5SkvTBKnvJ27vGeQ96F7qThVEHco/Tier3.png';
    } else if (artifacts.artifact.rewardMult < 32000) {
      imageSource = 'https://gateway.pinata.cloud/ipfs/QmaUZoxcNHpaXDxkNi5SkvTBKnvJ27vGeQ96F7qThVEHco/Tier4.png';
    } else if (artifacts.artifact.rewardMult < 50000) {
      imageSource = 'https://gateway.pinata.cloud/ipfs/QmaUZoxcNHpaXDxkNi5SkvTBKnvJ27vGeQ96F7qThVEHco/Tier5.png';
    } else {
      imageSource = 'https://gateway.pinata.cloud/ipfs/QmaUZoxcNHpaXDxkNi5SkvTBKnvJ27vGeQ96F7qThVEHco/Tier6.png';
    }

    return (
      <div key={index} className="col-span-1">
        <div className="relative">
          {/* Utilisation de l'imageSource en tant que source de l'image */}
          <img src={imageSource} className="w-full h-auto" alt={`NFT ${artifacts.id}`} />

          <div className="overlay absolute top-0 left-0 right-0 bottom-0 h-auto bg-cover bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center">
            <h3 className="text-white text-xl font-bold mb-2">
              {artifacts.artifact.name}
            </h3>
            <p className="text-white mb-2">
              Pending Rewards :{' '}
              {artifacts.pendingRewards
                ? parseFloat(utils.fromWei(artifacts.pendingRewards.toString(), 'ether')).toFixed(2)
                : ''}
            </p>
            <p className="text-white mb-2">
              Token Locked:{' '}
              {artifacts.artifact.artifactValue
                ? parseFloat(utils.fromWei(artifacts.artifact.artifactValue.toString(), 'ether')).toFixed(2)
                : ''}
            </p>
            <p>{remainingTimes[index]}</p>

            <a
              className="mb-2 ml-4 md:px-2 md:py-1 lg:px-4 lg:py-2 font-bold border-2 3xl:text-2xl text-white border-white bg-button-inverse hover:bg-button flex flex-row flex-between gap-4 items-center relative hover:before:absolute hover:before:w-full hover:before:h-full hover:before:top-0 hover:before:left-0 hover:bg-gray-500 bg-black bg-opacity-50"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => cashout({ args: [artifacts.id] })}
            >
              Claim
            </a>
            <a
              className="ml-4 md:px-2 md:py-1 lg:px-4 lg:py-2 font-bold border-2 3xl:text-2xl text-white border-white bg-button-inverse hover:bg-button flex flex-row flex-between gap-4 items-center relative hover:before:absolute hover:before:w-full hover:before:h-full hover:before:top-0 hover:before:left-0 hover:bg-gray-500 bg-black bg-opacity-50"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => compoundReward({ args: [artifacts.id] })}
            >
              Compound
            </a>
          </div>
        </div>
      </div>
    );
  })}

  </div>
          
    
  </div>
  <div className="flex justify-center lg:justify-between p-4">

            <Modal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  contentLabel="NFT Modal"
  className="bg-black border bg-opacity-50 p-4 rounded-lg"
  overlayClassName="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
>
  <h2 className='text-white'>NFT Information</h2>
  {nameError && <p className="text-red-500">{nameError}</p>}
  <form>
    <label className="mb-6 text-white">
      NFT Name:
      <input
        className="flex opacity-75 text-black"
        type="text"
        value={nftName}
        onChange={(e) => setNftName(e.target.value)}
      />
    </label>
    <br />
    <label className='text-white'>
      Token Amount:
      <div className="flex items-end">
  <input
    className="mb-2 opacity-75 py-2 px-4 border-2 text-black"
    type="text"
    value={tokenAmount}
    onChange={(e) => setTokenAmount(e.target.value)}
  />
  <div className="inline-flex flex-col">
    <a
      
      className="ml-1 mt-2 px-2 py-1 font-bold border-2 text-black text-xs bg-gray-100 hover:bg-gray-200"
      onClick={() => handleButtonClick('42001')}
    >
      Min
    </a>
    <a
 
      className="ml-1 mt-2 px-2 py-1 font-bold border-2 text-black text-xs bg-gray-100 hover:bg-gray-200"
      onClick={() => handleButtonClick('MAX_VALUE')}
    >
      Max
    </a>
  </div>
</div>
    </label>
    <br />
    <div className="grid grid-cols-2 gap-4">
    <a className="ml-4 px-4 py-2 font-bold border-2 3xl:text-2xl text-white border-white bg-button-inverse hover:bg-button flex flex-row flex-between gap-4 items-center relative hover:before:absolute hover:before:w-full hover:before:h-full hover:before:top-0 hover:before:left-0 hover:bg-gray-500 bg-black bg-opacity-50"  onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave} onClick={handleMint}>Mint (+)</a>
    <a className="ml-4 px-4 py-2 font-bold border-2 3xl:text-2xl text-white border-white bg-button-inverse hover:bg-button flex flex-row flex-between gap-4 items-center relative hover:before:absolute hover:before:w-full hover:before:h-full hover:before:top-0 hover:before:left-0 hover:bg-gray-500 bg-black bg-opacity-50"  onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave} onClick={closeModal}>Close</a>
</div>
  </form>
</Modal>
            <a className="lg:ml-4 px-4 py-2 font-bold border-2 3xl:text-2xl text-white border-white hover:bg-button lg:flex lg:flex-row lg:flex-between lg:gap-4 items-center relative hover:before:absolute hover:before:w-full hover:before:h-full hover:before:top-0 hover:before:left-0 hover:bg-gray-500 bg-black bg-opacity-50"  onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave} onClick={() => compoundAllNoFees()}>
              Compound All
            </a>
            <a className="ml-4 px-4 py-2 font-bold border-2 3xl:text-2xl text-white border-white bg-button-inverse hover:bg-button lg:flex lg:flex-row lg:flex-between lg:gap-4 items-center relative hover:before:absolute hover:before:w-full hover:before:h-full hover:before:top-0 hover:before:left-0 hover:bg-gray-500 bg-black bg-opacity-50"  onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave} onClick={() => cashoutAll()}>
              Claim All
            </a>
  </div>
  </div>
  <div className="mt-4 lg:ml-4 grid gap-4 lg:grid-cols-2">
    <div className="flex-1 h-28 bg-lueur-wide bg-black bg-opacity-85 border-[1.5px] p-5 lueur-hover">
  <h1 className="font-bold lg:text-[20px] text-white lg:leading-[15px] w-full text-shadow-white text-center items-center">
          Estimated per day
        </h1>
        <h1 className="font-bold lg:text-[20px] text-white lg:leading-[30px] w-full text-shadow-white text-center items-center">
         {roundedtotalEstimatedDailyRewards} CRIOS
        </h1>

  </div>
  <div className="flex-1 h-28 bg-lueur-wide bg-black bg-opacity-85 border-[1.5px] p-5 lueur-hover">
    <h1 className="font-bold lg:text-[20px] text-white lg:leading-[15px] w-full text-shadow-white text-center items-center">
          Total Pending Rewards
        </h1>
        <h1 className="font-bold lg:text-[20px] text-white lg:leading-[30px] w-full text-shadow-white text-center items-center">
        {roundedtotalPendingRewards} CRIOS
    </h1>
  </div>
  <div className="flex-1 h-28 bg-lueur-wide bg-black bg-opacity-85 border-[1.5px] p-5 lueur-hover lg:mb-56">
  <h1 className="font-bold lg:text-[20px] text-white lg:leading-[15px] w-full text-shadow-white text-center items-center">
          Time left before compound all
        </h1>
        <h1 className="font-bold lg:text-[20px] text-white lg:leading-[30px] w-full text-shadow-white text-center items-center">
        {formatSeconds(maxTimeBeforeCompound)}
        </h1>

  </div>
  <div className="flex-1 h-28 bg-lueur-wide bg-black bg-opacity-85 border-[1.5px] p-5 lueur-hover">
  <h1 className="font-bold lg:text-[20px] text-white lg:leading-[15px] w-full text-shadow-white text-center items-center">
          My Balance
        </h1>
        <h1 className="font-bold lg:text-[20px] text-white lg:leading-[30px] w-full text-shadow-white text-center items-center">
         {roundedBalance} CRIOS
        </h1>

  </div>
  <div className="lg:absolute lg:mt-80 lg:ml-24 lg:flex lg:flex-col items-center">
                <a className="animate-pulse lg:px-28 py-8 font-bold border-2 3xl:text-2xl justify-center text-white border-white bg-button-inverse hover:bg-button absolute flex items-center hover:before:absolute hover:before:w-full hover:before:h-full hover:before:top-0 hover:before:left-0 hover:bg-gray-500 bg-black bg-opacity-50"  onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave} onClick={openModal}>
              Mint (+)
            </a>
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
export default dynamic (() => Promise.resolve(DappFirstSection),{ssr: false})
// export default DappFirstSection;
