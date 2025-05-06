import { Routes, Route, useNavigate } from 'react-router-dom'
import './index.css'
import Home from './home'
import Grupos from './grupos'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="hola" element={<Grupos />} />
    </Routes>
  )
}

export default App
