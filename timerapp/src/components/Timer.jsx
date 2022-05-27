import React, { useEffect, useState } from 'react'
import './Timer.css'
export const Timer = () => {
    const[Seconds,setSeconds]=useState(0)
    const[Minutes,setMinutes]=useState(0)
    const[Hours,setHours]=useState(0)
var timer
    useEffect(()=>{
timer=setInterval(()=>{
    setSeconds(Seconds+1)
    if(Seconds===59){
        setMinutes(Minutes+1)
        setSeconds(0);
    }
    if(Minutes===59){
        setHours(Hours+1)
        setMinutes(0)
    }
},1000)
return()=>
    clearInterval(timer)
    })
    // .................

    const restart=()=>{
setMinutes(0)
setSeconds(0)
    }
    const stop=()=>{
        clearInterval(timer)
    }
    const pause=()=>{
       
    }


  return (
  <>
  <div className='container'>
      <h1>TIMER</h1>
      <h1>   {Hours<10? "0"+Hours:Hours}:{Minutes<10? "0"+Minutes:Minutes}:{Seconds<10 ? "0"+Seconds:Seconds}
   
       </h1>
  </div>
 <div className='btn'>
      <button className='restart' onClick={restart}>restart</button>
  <button className='stop' onClick={stop}>stop</button>
  <button className='pause' onClick={pause}>pause</button></div>
  
  </>
  )
}
export default Timer
