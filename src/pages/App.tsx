import { Routes, Route } from 'react-router-dom'
import './index.css'
import Grupos from './grupos'
import Grupo from './grupo'
import Bienvenida from './bienvenida'
import BuscarAlumno from './BuscarAlumno'
import Alumno from './alumno'
import Login from './login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Bienvenida />} />
      <Route path="/buscar" element={<BuscarAlumno />} />
      <Route path="hola" element={<Grupos />} />
      <Route path="que_hace" element={<Grupo />} />
      <Route path="login" element={<Login />} />
      <Route path="/alumno" element={<Alumno />} />
    </Routes>
  )
}

export default App
