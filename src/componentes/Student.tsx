import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

function StudentCard() {
    const navigate = useNavigate()

    return (
        <Link to="/Alumno" className="no-underline">
            <div className='flex flex-col bg-white rounded-xl text-gray-950 shadow-md overflow-hidden min-w-[360px] h-auto'>
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
            </div>
        </Link>
    )
}

export default StudentCard
