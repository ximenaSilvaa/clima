import { Routes, Route, useNavigate } from 'react-router-dom'
import './index.css'
import Home from './home'
import Grupos from './grupos'
import Bienvenida from './bienvenida'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Bienvenida />} />
      <Route path="/login" element={<Bienvenida />} />
      <Route path="hola" element={<Grupos />} />
    </Routes>
  )
}

export default App
