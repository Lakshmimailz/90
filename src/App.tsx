import React from 'react';
import {Tableinfo} from './Tableinfo';
import {Ticketsinfo} from './Ticketsinfo';
import {Imageinfo} from './Imageinfo';
;


  const headingStyle: React.CSSProperties ={
    color:"red",
    textAlign: "center"
}

function App() {  
  
  return (
  <div
    style={{ 
  backgroundImage: "url('https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg')",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height:"100vh",
  backgroundRepeat: 'no-repeat'
}}>
    <h3 style={headingStyle}>Higher Further faster</h3>
    <h1 style={headingStyle} >CAPTAIN MARVEL</h1>
    <h3 style={headingStyle}>In Theatres Now</h3>
    <Tableinfo name='INFORMATION' info='CAPTAIN MARVEL' playthegame='POWERS UNITED' multimedia='MARVEL MEDIA' guestbook='MARVEL BOOK'></Tableinfo>
    <Ticketsinfo name='ADMIT ONE' person={0} ></Ticketsinfo>
    <Imageinfo  src="https://i.pinimg.com/736x/3c/3a/a3/3c3aa3129258a1876e64fb24cf3248da.jpg" alt="Captain Marvel" ></Imageinfo>
  </div>
  );
  

}

export default App;
