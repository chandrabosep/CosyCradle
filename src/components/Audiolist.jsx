import React from 'react'

import fireImg from '../assets/icons/bonfire.svg'
import cityImg from '../assets/icons/Cityscape.svg'
import forestImg from '../assets/icons/Forest.svg'
import nightImg from '../assets/icons/night.svg'
import rainImg from '../assets/icons/rain.svg'
import seasideImg from '../assets/icons/seaside.svg'
import thunderImg from '../assets/icons/thunder.svg'
import trainImg from '../assets/icons/Train.svg'
// import underImg from '../assets/icons/underwater.svg'
import streamImg from '../assets/icons/water-stream.svg'
import wavesImg from '../assets/icons/waves.svg'
import windImg from '../assets/icons/wind.svg'


import fireAudio from '../assets/audio/fire.mp3'
import cityAudio from '../assets/audio/city.wav'

import Soundcard from "./Soundcard"
import "./Soundcard.css"
 


export default function Audiolist() {
    
    const svgAndAudio = [
        [fireImg,'./fire.mp3',1],
        [cityImg,'./city.wav',2],
        [forestImg,'./city.wav',3],
        [nightImg,'./city.wav',4],
        [rainImg,'./city.wav',5],
        [seasideImg,'./city.wav',6],
        [thunderImg,'./city.wav',7],
        [trainImg,'./city.wav',8],
        [streamImg,'./city.wav',9],
        [wavesImg,'./city.wav',10],
        [windImg,'./city.wav',11],
    ]

  return (
    <div className='audio-list'>
      {svgAndAudio.map((item) => {return (<Soundcard image={item[0]} audio={item[1]}/>)})}
    </div>
  )   

}