import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Howl, Howler } from 'howler';
import SwitchButton from '../components/SwitchButton';
import CustomCursor from "../components/CustomCursor.js";



const DappNavbar = () => {
      

  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const sound = new Howl({
      src: ['music.mp3'],
      autoplay: true,
      loop: true,
      volume: 0.05,
    });

    // Gestion de la pause/reprise du son d'ambiance
    const handlePause = () => sound.pause();
    const handlePlay = () => sound.play();

    if (isPlaying) {
      handlePlay(); // Lecture automatique
    } else {
      handlePause(); // Pause lorsque le composant est monté mais n'est pas en lecture
    }

    return () => {
      handlePause(); // Pause lorsque le composant est démonté
    };
  }, [isPlaying]);

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


  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const [pageName, setPageName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const _pageName = router.pathname;
    setPageName(_pageName);
  }, [router.pathname]);

  useEffect(() => {
    const handleWindowLoad = () => {
      setIsPlaying(true); // Activer la lecture automatique lorsque la page est complètement chargée
    };

    window.addEventListener("load", handleWindowLoad);

    return () => {
      window.removeEventListener("load", handleWindowLoad);
    };
  }, []);

  return (
    <div>
      <nav className="p-2 flex flex-row justify-between items-center bg-black">
        <Link href="/">
          <a className="ml-12 p-4 font-bold text-2xl text-white">
            Crios<span className="text-blue-600">Finance</span>
          </a>
        </Link>
        <div className="flex items-center space-x-4"> 
        <Link href="/">
          <a className="ml-12 p-4 font-bold text-2xl text-white">
            DOCS
          </a>
        </Link>
        <Link href="/">
          <a className="ml-12 p-4 font-bold text-2xl text-white">
            CHARTS
          </a>
          </Link>
        </div>  
        <a
                      href="https://app.prometheusprotocol.finance/invest"
                      className="left-40 px-4 py-2 font-bold tracking-[.2em] border-2 3xl:text-2xl text-white border-white bg-button-inverse hover:bg-button hover:before:absolute hover:before:w-full hover:before:h-full hover:before:top-0 hover:before:left-0 hover:bg-gray-500 bg-black bg-opacity-50"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
                      BUY CRIOS
                    </a>
        <ConnectButton/>
        
        
        <div className="absolute right-72 mt-2">
        <SwitchButton isOn={isPlaying} onToggle={handleTogglePlay} />
        </div>
      </nav>
      <hr className="border-white" />
      <CustomCursor/>
    </div>
  );
};

export default DappNavbar;
