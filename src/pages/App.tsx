import { Routes, Route, useNavigate } from 'react-router-dom'
import './index.css'
import Home from './home'
import Alumno from './alumno'
import Login from './login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="/alumno" element={<Alumno />} />
    </Routes>
  )
}

export default App
