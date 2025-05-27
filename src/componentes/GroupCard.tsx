import React from 'react'
import { useNavigate } from 'react-router-dom'

function GroupCard() {
    const navigate = useNavigate()

    return (
        <div className='flex flex-col bg-white rounded-xl text-gray-950 shadow-md overflow-hidden min-w-[360px] min-h-[480px]'>
            {/* Header */}
            <div className="flex flex-row items-center gap-3 p-4">
                <img 
                    src="https://www.primeraedicion.com.ar/wp-content/uploads/2025/04/tralalero.jpg" 
                    alt="Avatar" 
                    className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                    <div className='text-lg font-semibold'>Tralalero Tralala</div>
                    <div className='text-sm text-gray-600'>Il meo futurio</div>
                </div>
            </div>

            {/* Imagen */}
            <img 
                src="https://www.primeraedicion.com.ar/wp-content/uploads/2025/04/tralalero.jpg" 
                alt="Main" 
                className="w-full h-50 object-cover"
            />

            {/* Cuerpo */}
            <div className='flex flex-col flex-grow justify-between p-4'>
                <div>
                    <div className='text-lg font-semibold'>Tralalero Tralala</div>
                    <div className='text-sm text-gray-600'>Il meo futuru</div>
                    <p className='mt-2 text-sm'>trulimero trulichin</p>
                </div>

                {/* Botones */}
                <div className='flex justify-end gap-2 mt-4'>
                    <button 
                        className="bg-white text-cyan-600 border border-cyan-400 px-4 py-2 rounded hover:bg-gray-100 transition"
                        onClick={() => navigate('/grupo')}
                    >
                        Visualizar
                    </button>
                    <button 
                        className="bg-white text-cyan-600 border border-cyan-400 px-4 py-2 rounded hover:bg-gray-100 transition"
                        onClick={() => navigate('/grupo')}
                    >
                        Editar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GroupCard
