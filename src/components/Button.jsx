import React from "react";
import arrayRandom from '../utils/arrayRandom';
import phrases from '../utils/phrases.json' 
import img from '../utils/img.json';


export const Button = ({setGalleta, setImage}) => {
  
  const handleGalleta = () => {
    const gall = phrases[arrayRandom(phrases)];
    const backgroundImage = img[arrayRandom(img)];

    setGalleta(gall);
    setImage(backgroundImage)
  }
  
  return <>
    
    <button className="button__otro" onClick={handleGalleta}>
        Ver Otro
    </button>
  
  </>;
};
