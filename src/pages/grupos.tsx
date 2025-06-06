import { useState } from 'react'
import { useNavigate, } from 'react-router-dom'
import GroupCard from '../componentes/GroupCard';
import Navbar from '../componentes/Navbar';

function Grupos() {
    const navigate = useNavigate()

    return (
        <div className="h-auto w-auto bg-primary flex flex-col">
            {/* header */}
            <Navbar/>
            

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
  

export default Grupos
