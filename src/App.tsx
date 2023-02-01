import React from 'react';
import {Tableinfo} from './Tableinfo';
  
  const headingStyle: React.CSSProperties ={
    color:"red",
    textAlign: "center"
}

function App() {  
  <h1 style={headingStyle}></h1>
  return (
  <div>
    <h3 style={headingStyle}>Higher Further faster</h3>
    <h1 style={headingStyle} >CAPTAIN MARVEL</h1>
    <h3 style={headingStyle}>In Theatres Now</h3>
    <Tableinfo name='INFORMATION' info='CAPTAIN MARVEL' playthegame='POWERS UNITED' multimedia='MARVEL MEDIA' guestbook='MARVEL BOOK'></Tableinfo>
  </div>
  );
  

}

export default App;
