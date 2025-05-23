import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()

    return (
        <header className="relative p-4 flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex gap-8 mx-auto">
                <h2 className="text-white text-lg">Inicio</h2>
                <h2 className="text-white text-lg">Nosotros</h2>
                <h2 className="text-white text-lg">Clinical Trials</h2>
                <h2 className="text-white text-lg">Membership Goal</h2>
                <h2 className="text-white text-lg">Testimonials</h2>
                <h2 className="text-white text-lg">Login</h2>
            </div>

            <button 
                className="bg-white text-cyan-600 border border-cyan-400 px-6 py-2 rounded-full hover:bg-gray-100 transition ml-30"
                onClick={() => navigate('/')}
            >
                Book Now
            </button>
        </header>
    )
}

export default Header
