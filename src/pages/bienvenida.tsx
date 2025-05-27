import { useState } from 'react'
import { useNavigate, } from 'react-router-dom'

function Bienvenida() {
    const navigate = useNavigate()

    return (
        <div className="h-screen flex flex-col bg-[var(--azul)]">
            <div className="flex-1 flex flex-col justify-center items-center text-white text-center font-serif space-y-2">
                <h1 className="text-4xl">Bienvenido a la</h1>
                <h1 className="text-4xl">Clinica Mexicana de Autismo y</h1>
            <h1 className="text-4xl">Alteraciones del desarrollo</h1>
            </div>

            <div className="relative flex-1 bg-[var(--gris)] flex justify-center items-center rounded-t-3xl">
                <div className="absolute top-1/32 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button  type="submit" onClick={() => navigate("/login")} className="bg-white text-[var(--azul2)] font-bold text-lg px-6 py-3 rounded-lg border border-[var(--azul5)] hover:scale-110">
                    Inicio de sesión
                    </button>
                </div>
                <div className="flex justify-center items-center h-full">
                <img src="logo.png" alt="Imagen" className="w-[200px] h-auto" />
                </div>
            </div>
        </div>

    )
}
  

export default Bienvenida
