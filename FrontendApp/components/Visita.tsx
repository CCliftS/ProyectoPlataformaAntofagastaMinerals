'use client'
import * as React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation';

const Visita: React.FC = () => {

    const router = useRouter();

    const [correo, setCorreo] = React.useState('');

    const handleVisita = async () => {
        const response = await axios.post('http://localhost:3000/visita/crearVisita', {
            correo,
        });
        console.log(response.data)
        router.push('/')

    }

    return (
        <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-[url('https://web.mineracentinela.cl/media/4083/centinela-6.jpg')]">
            <div className="rounded-xl bg-gray-800 bg-opacity-50 px-20 py-10 shadow-lg backdrop-blur-md">
                <div className="text-white">
                    <div className="mb-8 flex flex-col items-center">
                        <img className='brightness-200 grayscale' src="https://static.wixstatic.com/media/8db992_3c6f3144b95c4690a72c5ea5c6bd9176~mv2.png/v1/crop/x_24,y_0,w_251,h_172/fill/w_351,h_240,al_c,lg_1,q_85,enc_auto/8db992_3c6f3144b95c4690a72c5ea5c6bd9176~mv2.png" width="150" alt="" srcSet="" />
                        <h1 className="mb-2 text-2xl flex">Sistema Reportes Mina</h1>
                        <span className="text-gray-300">Ingrese sus datos</span>
                    </div>
                    <form action="#">
                        <div className="relative">
                            <input autoComplete="off"
                                type="text"
                                id="correo"
                                value={correo}
                                onChange={event => setCorreo(event.target.value)}
                                className="peer placeholder-transparent bg-transparent h-10 w-full border-b-2 border-gray-300 text-white focus:outline-none focus:border-white"
                                placeholder="correo" />
                            <label htmlFor="email" className="absolute left-0 -top-3.5 text-white text-bold peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">Email</label>
                        </div>


                        <div className="mt-20 flex justify-flex text-lg text-black">
                            <button type="button" className="flex-shrink-0 rounded-3xl bg-sky-700 bg-opacity-20 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-sky-800 w-64" onClick={handleVisita}>Enviar Solicitud</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};
export default Visita;