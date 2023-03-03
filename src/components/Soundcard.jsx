import React, { useRef, useState } from 'react';
import "./Soundcard.css";

export default function Soundcard(props) {
  var audio = useRef(new Audio(props.audio))
  var [InputDisplay,setInputDisplay] = useState(false)
  
  function handelPlay(event){
    if (InputDisplay===false) {
      audio.current.play()
      audio.current.loop=true
      setInputDisplay(true)
    }
    else{
      setInputDisplay(false)
      audio.current.pause()
    }
    event.target.classList.toggle('audio_img_active')  
  }
  
  function changeVolume(event){
    audio.current.volume=parseFloat(event.target.value);
  }
  
  return (
      <div className='audio_card'>
          <img src={props.image} onClick={handelPlay} alt="alt" className='audio_img' title={props.title}/>
          <input type="range" className='audio_volume' onInput={changeVolume} min="0" max="1" step="0.01" defaultValue="0.5" 
          style={{visibility:  InputDisplay ? ' visible' : 'hidden'}}/>
        
      </div>
  )
  
}
