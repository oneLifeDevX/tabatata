import { ethers } from "ethers";
import { useState, useEffect } from "react";
import CustomCursor from "../components/CustomCursor.js";
import DappNavbar from "../dappcomponents/DappNavbar.jsx";
import DappFooter from "../dappcomponents/DappFooter.jsx";
import DappFirstSection from "../dappcomponents/DappFirstSection.jsx";






export default function App() {


  return (
    <div className="flex flex-col w-full min-h-screen font-sans bg-bg2 bg-cover ">
      <CustomCursor />
      <header>
        <DappNavbar />
      </header>
      <main className="flex-1 p-8">


        <DappFirstSection/>

      </main>
      <footer>
        <DappFooter />
      </footer>
      
      <style>
        {`
        /* Styles de la barre de défilement */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background-color: #ffffff;
        }

        ::-webkit-scrollbar-thumb {
          background-color: #524dff;
        }

        /* Styles du sélecteur de défilement */
        ::-webkit-scrollbar-thumb:hover {
          background-color: #0000ff;
        }
        `}
      </style>
    </div>
  );
}