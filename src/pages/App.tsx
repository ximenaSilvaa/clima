import { Routes, Route, useNavigate } from 'react-router-dom'
import './index.css'
import Home from './home'
import Grupos from './grupos'
import Grupo from './grupo'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="hola" element={<Grupos />} />
      <Route path="que_hace" element={<Grupo />} />
    </Routes>
  )
}

export default App
