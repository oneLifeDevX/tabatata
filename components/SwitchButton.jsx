import React from 'react';

const SwitchButton = ({ isOn, onToggle }) => {
  return (
    <div className="switch-button" onClick={onToggle}>
      <div className={`toggle ${isOn ? 'on' : 'off'}`} />
      {isOn ? ( <img src="speakerOn.png" alt="Speaker activé" className="speaker-icon" />
     ) : (
       <img src="speakerOff.png" alt="Speaker désactivé" className="speaker-icon" />
     )}
    </div>

  );
};

export default SwitchButton;
