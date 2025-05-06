import { useState } from 'react'
import { useNavigate, } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    return (
        <div className='h-screen bg-primary'>
            <div className="flex items-center justify-center py-10">
                <div className="text-center">
                    <h1 className="font-bold text-2xl mb-4 text-white">Hola putos</h1>
                    <button 
                        className="bg-black text-cyan-300 px-4 py-2 rounded cursor-pointer hover:bg-gray-800 transition"
                        onClick={() => navigate('/hola')}
                    >
                        Push me
                    </button>
                </div>
            </div>
        </div>
    )
}
  

export default Home
