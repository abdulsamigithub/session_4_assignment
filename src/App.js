import React, { useState } from 'react';
import './App.css';
import {Message} from './Message';
export default function App(){

  let [count, setcount] = useState(0)
  let [isMorning, setDay] = useState(false)

  return(
    <div className = {`box ${isMorning ? 'dayLight' : '' } `}>
      
      <h1>Hola {isMorning ? 'Buenos Dias' : 'Buenas Noches'}</h1>
      <Message counter = {count} />
     
      <button onClick={()=>setcount(++count)}>Increment </button>
     
      <button onClick={()=>setcount(0)}>Reset </button>
     
      <button onClick={()=>setDay(!isMorning)}>Change status</button>


    </div>




  );
}
































/*import React, { useCallback, useState } from 'react';
import './App.css';
import  {Message} from './Message'

export default function App() {

  let [count, setCount] = useState(0)
  let [isMorning, setDay] = useState(true)

  return (
    <div className= {`box ${isMorning ? 'dayLight' : '' }`}>
    
        <h2>Good {isMorning ? 'Morning' : 'Night'} </h2>

        <Message counter ={count}/>


        <h1>Traying to do assinment on my own + counter {count}</h1>
        <button
          onClick={()=>alert ("button clicked")
          }>
          Update
      </button>
      <button onClick={()=>setCount(++count)}>Add Number</button>
      <button onClick={() => setDay (!isMorning) } > Change State</button>



    </div>
  );
}

*/