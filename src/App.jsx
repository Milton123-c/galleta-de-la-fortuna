import { useState } from 'react'

import './App.css'
import { Background } from './components/Background'
import { Button } from './components/Button'
import { View } from './components/View'

import arrayRandom from './utils/arrayRandom';
import phrases from './utils/phrases.json' 

import img from './utils/img.json';
import Titulo from './components/Titulo'

function App() {

  const gall = phrases[arrayRandom(phrases)];

  const backgroundImage = img[arrayRandom(img)];

  const [ galleta, setGalleta ] = useState(gall);
  const [image, setImage] = useState(backgroundImage);
  

  return (
    <div className="App">
      <Titulo />
      <Background img={image} />
      <View galleta={galleta} />
       <Button setGalleta={setGalleta} setImage={setImage}/> 
       
    </div>
  )
}

export default App
