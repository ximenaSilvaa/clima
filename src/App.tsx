
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='font-bold '>Hola putos</h1>
      <button className='bg-black text-cyan-300'>Push me</button>
    </>
  )
}

export default App
