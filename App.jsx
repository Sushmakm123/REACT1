import React,{useState} from 'react'
import './functioncounter.css'
const App=()=>{
  let [count,setCount]=useState(0)
  let handleIncrement=()=>{
    setCount(count +1)
  }
  let handleDecrement=()=>{
setCount(count -1)
  }
let handleReset=()=>{
  setCount(0)
}
return(
<>
<div className='mainblock'>
  <h1>{count}</h1>
<div className='subblock'>
  <button className='a'   onClick={handleIncrement}>increment +</button>
  <button className='b' onClick={handleDecrement}>decrement -</button>
  <button className='c' onClick={handleReset}>reset</button>
</div>
</div>
</>
)
} 
export default App;