import React from 'react'

import fireImg from '../assets/icons/bonfire.svg'
import cityImg from '../assets/icons/Cityscape.svg'
import forestImg from '../assets/icons/Forest.svg'
import nightImg from '../assets/icons/night.svg'
import rainImg from '../assets/icons/rain.svg'
import seasideImg from '../assets/icons/seaside.svg'
import thunderImg from '../assets/icons/thunder.svg'
import trainImg from '../assets/icons/Train.svg'
import underImg from '../assets/icons/underwater.svg'
import streamImg from '../assets/icons/water-stream.svg'
import wavesImg from '../assets/icons/waves.svg'
import windImg from '../assets/icons/wind.svg'
import fireplaceImg from '../assets/icons/fireplace.svg'
import tentImg from '../assets/icons/tent.svg'
import waterfallImg from '../assets/icons/waterfall.svg'
import dropsImg from '../assets/icons/drops.svg'
import leavesImg from '../assets/icons/leaves.svg'
import fanImg from '../assets/icons/fan.svg'
import keyboardImg from '../assets/icons/keyboard.svg'
import chimeImg from '../assets/icons/chime.svg'

import fireAudio from '../assets/audio/fire.mp3'
import cityAudio from '../assets/audio/city.wav'
import forestAudio from '../assets/audio/forest.ogg'
import nightAudio from '../assets/audio/night.mp3'
import rainAudio from '../assets/audio/rain.mp3'
import seasideAudio from '../assets/audio/seaside.mp3'
import thunderAudio from '../assets/audio/thunder.wav'
import trainAudio from '../assets/audio/train.mp3'
import underwaterAudio from '../assets/audio/underwater.mp3'
import streamAudio from '../assets/audio/water-stream.mp3'
import wavesAudio from '../assets/audio/waves.mp3'
import windAudio from '../assets/audio/wind.mp3'
import fireplaceAudio from '../assets/audio/fireplace.mp3'
import tentAudio from '../assets/audio/tent.mp3'
import waterfallAudio from '../assets/audio/waterfall.mp3'
import dropsAudio from "../assets/audio/drops.ogg"
import leavesAudio from "../assets/audio/leaves.ogg";
import fanAudio from '../assets/audio/fan.ogg'
import keyboardAudio from '../assets/audio/keyboard.mp3'
import chimeAudio from '../assets/audio/chime.mp3'

import Soundcard from "./Soundcard"
import "./Soundcard.css"
 


export default function Audiolist() {
    
    const svgAndAudio = [
        [fireImg,fireAudio,1,"Bonfire"],
        [cityImg,cityAudio,2,"City"],
        [forestImg,forestAudio,3,"Forest"],
        [nightImg,nightAudio,4,"Summer Night"],
        [rainImg,rainAudio,5,"Rain"],
        [seasideImg,seasideAudio,6,"Seaside"],
        [thunderImg,thunderAudio,7,"Thunderstorm"],
        [trainImg,trainAudio,8,"Train"],
        [streamImg,streamAudio,9,"Water stream"],
        [wavesImg,wavesAudio,10,"Ocean waves"],
        [windImg,windAudio,11,"Wind"],
        [underImg,underwaterAudio,12,"Underwater"],
        [fireplaceImg,fireplaceAudio,13,"Fireplace"],
        [waterfallImg,waterfallAudio,14,"Waterfall"], 
        [tentImg,tentAudio,15,"Rain on Tent"],
        [dropsImg,dropsAudio,16,"Drops"],
        [leavesImg,leavesAudio,17,"Leaves"],
        [fanImg,fanAudio,18,"Fan"]
        [chimeImg,chimeAudio,19,"Chime"],
        [keyboardImg,keyboardAudio,20,"Keyboard"]

    ]

  return (
    <div className='audio-list'>
      {svgAndAudio.map((item) =>  { return (<Soundcard image={item[0]} audio={item[1]} key={item[2]} title={item[3]} />)})}
    </div>
  )   

}