import React, { useState, useEffect } from "react";


const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false); // État pour détecter si l'appareil est mobile
  const imageWidth = 48; // Largeur de l'image en pixels
  const imageHeight = 48; // Hauteur de l'image en pixels
  const offsetX = imageWidth / 3; // Décalage horizontal
  const offsetY = imageHeight / 6; // Ajustez cette valeur pour obtenir le bon décalage vertical
 // Décalage vertical

 const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    const handleMouseLeave = () => {
      setPosition({ x: -100, y: -100 }); // Déplacez le curseur personnalisé en dehors de l'écran
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const checkIsMobile = () => {
      const mobileMaxWidth = 768; // Largeur maximale pour un appareil mobile (peut être ajustée selon vos besoins)
      setIsMobile(window.innerWidth <= mobileMaxWidth);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  if (isMobile) {
    // Renvoie null pour cacher le CustomCursor sur mobile
    return null;
  }

  return (
    <div
      className="custom-cursor"
      style={{
        top: position.y - offsetY,
        left: position.x - offsetX,
      }}
    >
    </div>
    
  );
};

export default CustomCursor;
