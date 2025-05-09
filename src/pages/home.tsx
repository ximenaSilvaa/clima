import { useNavigate, } from 'react-router-dom'
import GroupCard from '../componentes/GroupCard'

function Home() {
    const navigate = useNavigate()

    return (
        <div className="h-auto w-auto bg-primary flex flex-col">
            {/* header */}
            <header className="relative p-4 flex items-center justify-center gap-10">
                <h2 className="text-white text-lg font-semibold">Hola centrado</h2>
                <h2 className="text-white text-lg font-semibold">Hola derecha</h2>
            </header>

            <div className='text-center mt-20 mb-20'>
                <h2 className="text-white text-4xl font-bold">Grupos </h2>
            </div>

            {/* contenido centrado */}
            <div className="flex flex-col items-center justify-start min-h-screen w-full py-10 px-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 px-4 w-full">
                    <GroupCard />
                    <GroupCard />
                    <GroupCard />
                    <GroupCard />
                    <GroupCard />
                </div>
            </div>


        </div>
    )
}
  

export default Home
