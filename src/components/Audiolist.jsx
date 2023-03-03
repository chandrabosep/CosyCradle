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

import Soundcard from "./Soundcard"
import "./Soundcard.css"
 


export default function Audiolist() {
    
    const svgAndAudio = [
        [fireImg,fireAudio,1],
        [cityImg,cityAudio,2],
        [forestImg,forestAudio,3],
        [nightImg,nightAudio,4],
        [rainImg,rainAudio,5],
        [seasideImg,seasideAudio,6],
        [thunderImg,thunderAudio,7],
        [trainImg,trainAudio,8],
        [streamImg,streamAudio,9],
        [wavesImg,wavesAudio,10],
        [windImg,windAudio,11],
        [underImg,underwaterAudio,12]
    ]

  return (
    <div className='audio-list'>
      {svgAndAudio.map((item) =>  { return (<Soundcard image={item[0]} audio={item[1]} key={item[2]} />)})}
    </div>
  )   

}