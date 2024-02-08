import React from 'react'
import bg from '../img/11879298_202011_04-removebg-preview.png'
import './Home.css'

function Home() {
  return (
    <div className='home'>
       <div> 
        <span>Welcome to my portfolio</span>
        <h1>I am a Android <br /> developer and a <br /> front end developer</h1>
       </div>
        <img className='homebg' src={bg} alt="bg" />
    </div>
    
  )
}

export default Home;