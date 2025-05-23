import { Routes, Route, useNavigate } from 'react-router-dom'
import './index.css'
import Home from './home'
import Grupos from './grupos'
import Bienvenida from './bienvenida'
import BuscarAlumno from './BuscarAlumno'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Bienvenida />} />
      <Route path="/login" element={<Bienvenida />} />
      <Route path="/buscar" element={<BuscarAlumno />} />
      <Route path="hola" element={<Grupos />} />
    </Routes>
  )
}

export default App
