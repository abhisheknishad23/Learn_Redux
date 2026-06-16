import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementby10 } from './redux/features/counterSlice'

function App() {
  
  const dispatch = useDispatch()

  const count = useSelector((state)=>state.counter.value)

  const   [num, setNum] = useState()

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={()=>{dispatch(increment())}}>Increment</button>
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>

      <input value={num} type='number' onChange={(e)=>{setNum(e.target.value)}} />


      <button onClick={()=>{dispatch(incrementby10(Number(num)))}}>increment by Number</button>
    </div>
  )
}

export default App
