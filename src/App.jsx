import React from 'react';
import { useState } from 'react'

function App() {
  const [color, setColor] = useState("yellow")
  return (
    <div className="h-screen w-screen duration-200"
    style={{backgroundColor :  color}}
    >
      <div className=' fixed flex flexed-wrap justify-center bottom-12 inset-x-0 px-2 '>
        <div className=' flex flex-wrap  justify-center gap-3  shadow-lg bg-white px-3 py-2
        rounded-2xl'>
          <button
          onClick={()=>setColor("red")} className='text- outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"red"}}>
          Red
        </button>
          <button onClick={()=>setColor("Green")} className='text- outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"Green"}}>
          Green
        </button>
          <button onClick={()=>setColor("Blue")} className='text- outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"Blue"}}>
          Blue
        </button>
          <button onClick={()=>setColor("Olive")}className='text- outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"Olive"}}>
          Olive
        </button>
          <button onClick={()=>setColor("Grey")} className='text- outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"Grey"}}>
         Grey
        </button>
          <button onClick={()=>setColor("Yellow")} className='text- outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"Yellow"}}>
          Yellow
        </button>
          <button onClick={()=>setColor("Pink")} className='text- outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"Pink"}}>
         Pink
        </button>
          <button onClick={()=>setColor("Purple")} className='text- outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:"Purple"}}>
         Purple
        </button>
          <button onClick={()=>setColor("Lavender")} className='text- outline-none px-4 py-1 rounded-full text-black shadow-lg'
        style={{backgroundColor:"Lavender"}}>
        Lavender
        </button>
          <button onClick={()=>setColor("White")} className='text- outline-none px-4 py-1 rounded-full text-black shadow-lg'
        style={{backgroundColor:"White"}}>
         White
        </button>
          <button onClick={()=>setColor("Black")} className='text- outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:" Black"}}>
         Black
        </button>
      </div>
      </div>
    </div>
  );
  
  
}
export default App;
