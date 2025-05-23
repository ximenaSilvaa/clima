import { useNavigate, } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    return (
        <div className='h-screen bg-primary'>
            <div className="flex items-center justify-center py-10">
                <div className="text-center">
                    <h1 className="font-bold text-2xl mb-4 text-white">Cara de Bola</h1>
                    <button 
                        className="bg-white text-cyan-600 border border-cyan-400 px-4 py-2 rounded hover:bg-gray-100 transition"
                        onClick={() => navigate('/hola')}
                    >
                        Editar
                    </button>
                </div>
            </div>
        </div>
    )
}
  

export default Home
