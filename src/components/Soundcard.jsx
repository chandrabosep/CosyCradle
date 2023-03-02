import React from 'react';
import "./Soundcard.css";


function changeVolume(){
    
}

export default function Soundcard(props) {
  return (
      <div className='audio_card'>
          <img src={props.image}  alt="alt" className='audio_img'/>
          <input type="range" className='audio_volume' onInput={changeVolume} min="0" max="1" step="0.01" defaultValue="0.5" 
          style={{visibility:  changeVolume ? ' visible' : 'hidden'}}/>
        
      </div>
  )
  
}
